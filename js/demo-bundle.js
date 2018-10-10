this['demo-bundle'] = this['demo-bundle'] || {};
this['demo-bundle'].js = (function () {
  'use strict';

  /*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */

  function ensureArray(obj) {
    if (Array.isArray(obj) === false) {
      return [obj];
    }

    return obj;
  }

  function isElement(o) {
    return typeof HTMLElement === 'object' ? o instanceof HTMLElement : o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string';
  }

  function emptyElement(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  function emptyElements(els) {
    els = ensureArray(els);
    els.forEach(el => emptyElement(el));
  }

  var formFieldAppender = function formFieldAppender(wrapperEl, options) {
    var errors = {
      prefix: 'formFieldAppender: ',
      noWrapperEl: 'No wrapper element found.',
      noItemElsFoundInMarkup: 'No item elements found in markup.',
      noItemElsFoundInBlueprint: 'No item elements found in item blueprint.'
    },
        defaultPatterns = {
      id: 'ffa-id-[[index]]',
      name: 'ffa-name-[[index]]',
      for: 'ffa-name-[[index]]'
    };
    var settings,
        itemEls,
        itemElClone,
        defaults = {
      blueprint: null,
      itemClass: 'js-ffa-item',
      addTriggerSelector: '.js-ffa-add-trigger',
      removeTriggerSelector: '.js-ffa-remove-trigger',
      idPatternAttr: 'data-ffa-id-pattern',
      namePatternAttr: 'data-ffa-name-pattern',
      forPatternAttr: 'data-ffa-for-pattern',
      disabledClass: 'is-disabled',
      initialReindex: 1,
      firstItemIsRemovable: true,
      onlyLastItemIsRemovable: false,
      onItemAddCallback: null,
      onItemRemoveCallback: null,
      shouldRemoveItemCallback: null,
      resetNewItemFormVals: true
    };

    function init() {
      settings = Object.assign({}, defaults, options);

      if (wrapperEl) {
        if (settings.blueprint !== null) {
          buildItemElsFromBlueprint();
        }

        itemEls = Array.from(wrapperEl.querySelectorAll('.' + settings.itemClass));

        if (itemEls.length > 0) {
          itemElClone = resetNewItemFormVals(itemEls[0].cloneNode(true));
          disableFirstItemRemoveTrigger();
          setTriggerDisabledState(itemElClone.querySelector(settings.addTriggerSelector), false);
          reindexItems();
          bindEvents();
        } else {
          var err = settings.blueprint !== null ? errors.noItemElsFoundInBlueprint : errors.noItemElsFoundInMarkup;
          logError(err);
        }
      } else {
        logError(errors.noWrapperEl);
      }
    }

    function buildItemElsFromBlueprint() {
      emptyElements(wrapperEl);

      if (isElement(settings.blueprint)) {
        wrapperEl.appendChild(settings.blueprint);
      } else {
        wrapperEl.insertAdjacentHTML('afterbegin', settings.blueprint);
      }

      wrapperEl.children[0].classList.add(settings.itemClass);
    }

    function reindexItems() {
      var attrs = Object.keys(defaultPatterns);

      var _loop = function _loop() {
        var itemEl = itemEls[itemIndex];

        if (itemEl) {
          var matchingEls = Array.from(itemEl.querySelectorAll('[' + attrs.join('], [') + ']')).filter(function (el) {
            return el.nodeName !== 'LABEL';
          });
          matchingEls.forEach(function (el, elIndex) {
            var matchingElArr = [el];

            if (el.nodeName === 'INPUT') {
              var correspondingLabelEl = itemEl.querySelector('label[for="' + el.getAttribute('name') + '"]');

              if (correspondingLabelEl) {
                matchingElArr.push(correspondingLabelEl);
              }
            }
            matchingElArr.forEach(function (matchingElItem) {
              setElAttributes(matchingElItem, itemIndex, elIndex, attrs);
            });
          });
        }
      };

      for (var itemIndex = settings.initialReindex; itemIndex <= itemEls.length; itemIndex++) {
        _loop();
      }
    }

    function setElAttributes(el, itemIndex, elIndex, attrs) {
      attrs.forEach(function (attr) {
        if (el.hasAttribute(attr)) {
          var itemAttrVal = el.getAttribute(settings[attr + 'PatternAttr']);

          if (!itemAttrVal) {
            itemAttrVal = defaultPatterns[attr];
          }

          itemAttrVal = itemAttrVal.replace('[[index]]', itemIndex + '-' + elIndex);
          itemAttrVal = itemAttrVal.replace('[[itemIndex]]', itemIndex);
          itemAttrVal = itemAttrVal.replace('[[itemElIndex]]', elIndex);
          el.setAttribute(attr, itemAttrVal);
        }
      });
    }

    function disableFirstItemRemoveTrigger() {
      if (!settings.firstItemIsRemovable) {
        var triggerEl = itemEls[0].querySelector(settings.removeTriggerSelector);

        if (triggerEl) {
          triggerEl.parentNode.removeChild(triggerEl);
        }
      }
    }

    function bindEvents() {
      wrapperEl.addEventListener('click', onElementClick);
    }

    function onElementClick(e) {
      var clickedEl = e.target;

      if (clickedEl.closest(settings.addTriggerSelector) !== null) {
        e.preventDefault();
        addItem(clickedEl);
      } else if (clickedEl.closest(settings.removeTriggerSelector) !== null) {
        e.preventDefault();
        var itemEl = clickedEl.closest('.' + settings.itemClass);

        if (settings.shouldRemoveItemCallback) {
          if (settings.shouldRemoveItemCallback(itemEl)) {
            removeItem(itemEl);
          }
        } else {
          removeItem(itemEl);
        }
      }
    }

    function addItem(addTriggerEl) {
      var triggerEls = [addTriggerEl],
          newItem = itemElClone.cloneNode(true);

      if (settings.onlyLastItemIsRemovable === true) {
        var siblingRemoveTriggerEl = getSiblingTrigger(addTriggerEl, settings.removeTriggerSelector);

        if (siblingRemoveTriggerEl !== null) {
          triggerEls.push(siblingRemoveTriggerEl);
        }
      }

      triggerEls.forEach(function (triggerEl) {
        setTriggerDisabledState(triggerEl);
      });
      wrapperEl.appendChild(newItem);
      itemEls.push(newItem);
      reindexItems();

      if (settings.onItemAddCallback !== null) {
        settings.onItemAddCallback(newItem, itemEls);
      }
    }

    function removeItem(itemEl) {
      var removeItemIndex = itemEls.indexOf(itemEl);
      itemEls.splice(removeItemIndex, 1);
      wrapperEl.removeChild(itemEl);

      if (itemEls.length > 0) {
        var lastItemEl = itemEls[itemEls.length - 1],
            lastItemAddTriggerEl = lastItemEl.querySelector(settings.addTriggerSelector);
        setTriggerDisabledState(lastItemAddTriggerEl, false);
      }

      reindexItems();

      if (settings.onItemRemoveCallback !== null) {
        settings.onItemRemoveCallback(itemEl, itemEls);
      }
    }

    function setTriggerDisabledState(triggerEl) {
      var isDisabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var ariaAttr = 'aria-disabled',
          classListMethodName = isDisabled === true ? 'add' : 'remove';

      if (triggerEl) {
        triggerEl.classList[classListMethodName](settings.disabledClass);
        triggerEl.setAttribute(ariaAttr, isDisabled);
        triggerEl.disabled = isDisabled;
      }
    }

    function resetNewItemFormVals(item) {
      if (settings.resetNewItemFormVals === true) {
        var allInputEls = Array.from(item.querySelectorAll('input', 'textarea', 'select'));
        allInputEls.forEach(function (input) {
          switch (input.nodeName) {
            case 'TEXTAREA':
              input.innerHTML = '';
              break;

            default:
              input.value = '';
              input.checked = false;
              break;
          }
        });
      }

      return item;
    }

    function getSiblingTrigger(triggerEl, siblingSelector) {
      return triggerEl.closest('.' + settings.itemClass).querySelector(siblingSelector);
    }

    function getItems() {
      return itemEls;
    }

    function logError(msg) {
      var logLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'warn';
      console[logLevel](errors.prefix + msg);
    }

    function destroy() {
      wrapperEl.removeEventListener('click', onElementClick);
    }
    init();
    return {
      destroy: destroy,
      getItems: getItems
    };
  };

  var demo = function demo() {
    var examples = [{
      elementSelector: '.js-example-1'
    }, {
      elementSelector: '.js-example-2',
      options: {
        firstItemIsRemovable: false,
        onlyLastItemIsRemovable: true,
        onItemAddCallback: addCallback,
        onItemRemoveCallback: removeCallback
      }
    }, {
      elementSelector: '.js-example-3',
      options: {
        blueprint: buildElementBlueprint()
      }
    }, {
      elementSelector: '.js-example-4',
      options: {
        blueprint: buildStringTemplate()
      }
    }];

    function initExamples() {
      examples.forEach(function (example, index) {
        var element = document.querySelector(example.elementSelector),
            options = example.options ? example.options : {};
        formFieldAppender(element, options);
      });
    }

    function addCallback(addedItem, allItems) {
      alert('Item added!');
      console.log(addedItem);
      console.log(allItems);
    }

    function removeCallback(removedItem, allItems) {
      alert('Item removed!');
      console.log(removedItem);
      console.log(allItems);
    }

    function buildElementBlueprint() {
      var el = document.createElement('div');
      el.classList.add('js-ffa-item');
      el.insertAdjacentHTML('afterbegin', "\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"phone3\">Phone number</label>\n\t\t\t\t<input name=\"phone3\" id=\"phone1\" type=\"text\">\n\t\t\t</div>\n\t\t\t<button class=\"js-ffa-add-trigger\">Add</button>\n\t\t\t<button class=\"js-ffa-remove-trigger\">Remove</button>\n\t\t");
      return el;
    }

    function buildStringTemplate() {
      return "\n\t\t\t<div class=\"js-ffa-item\">\n\t\t\t\t<div class=\"field\">\n\t\t\t\t\t<label for=\"phone3\">Phone number</label>\n\t\t\t\t\t<input name=\"phone3\" id=\"phone1\" type=\"text\">\n\t\t\t\t</div>\n\t\t\t\t<button class=\"js-ffa-add-trigger\">Add</button>\n\t\t\t\t<button class=\"js-ffa-remove-trigger\">Remove</button>\n\t\t\t</div>\n\t\t";
    }

    initExamples();
  };

  var demo$1 = demo();

  return demo$1;

}());
