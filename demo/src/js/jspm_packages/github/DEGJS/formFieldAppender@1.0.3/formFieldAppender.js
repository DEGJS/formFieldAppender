/* */ 
import { emptyElements, isElement } from "DEGJS/domUtils";

let formFieldAppender = function(wrapperEl, options) {

	const errors = {
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

	let settings,
		itemEls,
		itemElClone,
		idPatternDefault = 'data-ffa-id-pattern',
		namePatternDefault = 'data-ffa-name-pattern',
		forPatternDefault = 'data-ffa-for-pattern',
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
				let err = settings.blueprint !== null ? errors.noItemElsFoundInBlueprint : errors.noItemElsFoundInMarkup;
				logError(err);	
			}
		} else {
			logError(errors.noWrapperEl);	
		}
	};

	function buildItemElsFromBlueprint() {
		emptyElements(wrapperEl);
		if (isElement(settings.blueprint)) {
			wrapperEl.appendChild(settings.blueprint);
		} else {
			wrapperEl.insertAdjacentHTML('afterbegin', settings.blueprint);
		}
		settings.blueprint.classList.add(settings.itemClass);
	};

	function reindexItems() {
		let attrs = Object.keys(defaultPatterns);
		for (var itemIndex = settings.initialReindex; itemIndex <= itemEls.length; itemIndex++) {
			let itemEl = itemEls[itemIndex];
			if (itemEl) {
				let matchingEls = Array.from(itemEl.querySelectorAll('[' + attrs.join('], [') + ']')).filter(function(el) {
					return el.nodeName !== 'LABEL';
				});

				matchingEls.forEach(function(el, elIndex) {
					let matchingElArr = [el];
					if (el.nodeName === 'INPUT') {
						let correspondingLabelEl = itemEl.querySelector('label[for="' + el.getAttribute('name') + '"]');
						if (correspondingLabelEl) {
							matchingElArr.push (correspondingLabelEl);
						}
					};
					matchingElArr.forEach(function(matchingElItem) {
						setElAttributes(matchingElItem, itemIndex, elIndex, attrs);
					});
				});
			}
		}
	};

	function setElAttributes(el, itemIndex, elIndex, attrs) {
		attrs.forEach(function(attr) {
			if (el.hasAttribute(attr)) {
				let itemAttrVal = el.getAttribute(settings[attr + 'PatternAttr']);
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
			let triggerEl = itemEls[0].querySelector(settings.removeTriggerSelector);
			if (triggerEl) {
				triggerEl.parentNode.removeChild(triggerEl);
			}
		}
	};

	function bindEvents() {
		wrapperEl.addEventListener('click', onElementClick);
	};

	function onElementClick(e) {
		let clickedEl = e.target;
		if (clickedEl.closest(settings.addTriggerSelector) !== null) {
			e.preventDefault();
			addItem(clickedEl);
		} else if (clickedEl.closest(settings.removeTriggerSelector) !== null) {
			e.preventDefault();
			let itemEl = clickedEl.closest('.' + settings.itemClass);
			removeItem(itemEl);
		}
	};

	function addItem(addTriggerEl) {
		let triggerEls = [
				addTriggerEl
			],
			newItem = itemElClone.cloneNode(true);
		if (settings.onlyLastItemIsRemovable === true) {
			let siblingRemoveTriggerEl = getSiblingTrigger(addTriggerEl, settings.removeTriggerSelector);
			if (siblingRemoveTriggerEl !== null) {
				triggerEls.push(siblingRemoveTriggerEl);
			}
		}
		triggerEls.forEach(function(triggerEl) {
			setTriggerDisabledState(triggerEl);
		});
		wrapperEl.appendChild(newItem);
		itemEls.push(newItem);
		reindexItems();
		if (settings.onItemAddCallback !== null) {
			settings.onItemAddCallback(newItem, itemEls);
		}
	};

	function removeItem(itemEl) {
		let removeItemIndex = itemEls.indexOf(itemEl);
		itemEls.splice(removeItemIndex, 1);
		wrapperEl.removeChild(itemEl);
		if (itemEls.length > 0) {
			let lastItemEl = itemEls[itemEls.length - 1],
			lastItemAddTriggerEl = lastItemEl.querySelector(settings.addTriggerSelector);
			setTriggerDisabledState(lastItemAddTriggerEl, false);
		}
		reindexItems();
		if (settings.onItemRemoveCallback !== null) {
			settings.onItemRemoveCallback(itemEl, itemEls);
		}
	};

	function setTriggerDisabledState(triggerEl, isDisabled = true) {
		let ariaAttr = 'aria-disabled',
			classListMethodName = isDisabled === true ? 'add' : 'remove';
		if (triggerEl) {
			triggerEl.classList[classListMethodName](settings.disabledClass);
			triggerEl.setAttribute(ariaAttr, isDisabled);
			triggerEl.disabled = isDisabled;
		}
	};

	function resetNewItemFormVals(item) {
		if (settings.resetNewItemFormVals === true) {
			let allInputEls = Array.from(item.querySelectorAll('input', 'textarea', 'select'));
			allInputEls.forEach(function(input) {
				switch(input.nodeName) {
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
	};

	function getSiblingTrigger(triggerEl, siblingSelector) {
		return triggerEl.closest('.' + settings.itemClass).querySelector(siblingSelector);
	};

	function getItems() {
		return itemEls;
	};

	function logError(msg, logLevel = 'warn') {
		console[logLevel](errors.prefix + msg);
	};

	function destroy() {
		wrapperEl.removeEventListener('click', onElementClick);
	};

	init();

	return {
		destroy: destroy,
		getItems: getItems
	}

};

export default formFieldAppender;