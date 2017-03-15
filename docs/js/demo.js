!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.registerDynamic('2', ['3'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('3');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
});
$__System.registerDynamic('4', ['5', '6', '2', '7'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('5'),
      toObject = $__require('6'),
      IObject = $__require('2');
  module.exports = $__require('7')(function () {
    var a = Object.assign,
        A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var T = toObject(target),
        $$ = arguments,
        $$len = $$.length,
        index = 1,
        getKeys = $.getKeys,
        getSymbols = $.getSymbols,
        isEnum = $.isEnum;
    while ($$len > index) {
      var S = IObject($$[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
    return T;
  } : Object.assign;
});
$__System.registerDynamic('8', ['9', '4'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('9');
  $export($export.S + $export.F, 'Object', { assign: $__require('4') });
});
$__System.registerDynamic('a', ['8', 'b'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('8');
  module.exports = $__require('b').Object.assign;
});
$__System.registerDynamic("c", ["a"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("a"), __esModule: true };
});
$__System.registerDynamic('d', ['e', 'f'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('e'),
      defined = $__require('f');
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
});
$__System.registerDynamic("10", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
});
$__System.registerDynamic('11', ['12'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('12');
});
$__System.registerDynamic("13", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
});
$__System.registerDynamic('14', ['7'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('7')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
});
$__System.registerDynamic('12', ['5', '13', '14'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('5'),
      createDesc = $__require('13');
  module.exports = $__require('14') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
});
$__System.registerDynamic('15', ['5', '13', '16', '12', '17'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $ = $__require('5'),
      descriptor = $__require('13'),
      setToStringTag = $__require('16'),
      IteratorPrototype = {};
  $__require('12')(IteratorPrototype, $__require('17')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
});
$__System.registerDynamic("18", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
});
$__System.registerDynamic('16', ['5', '18', '17'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('5').setDesc,
      has = $__require('18'),
      TAG = $__require('17')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
});
$__System.registerDynamic("5", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
});
$__System.registerDynamic('19', ['10', '9', '11', '12', '18', '1a', '15', '16', '5', '17'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('10'),
      $export = $__require('9'),
      redefine = $__require('11'),
      hide = $__require('12'),
      has = $__require('18'),
      Iterators = $__require('1a'),
      $iterCreate = $__require('15'),
      setToStringTag = $__require('16'),
      getProto = $__require('5').getProto,
      ITERATOR = $__require('17')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function () {
    return this;
  };
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base()));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
});
$__System.registerDynamic('1b', ['d', '19'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $at = $__require('d')(true);
  $__require('19')(String, 'String', function (iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
});
$__System.registerDynamic('1c', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
});
$__System.registerDynamic('1d', ['1c'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('1c');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
});
$__System.registerDynamic('1e', ['1d'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('1d');
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
});
$__System.registerDynamic('1f', ['1a', '17'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var Iterators = $__require('1a'),
        ITERATOR = $__require('17')('iterator'),
        ArrayProto = Array.prototype;
    module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
});
$__System.registerDynamic("e", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
});
$__System.registerDynamic('20', ['e'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('e'),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
});
$__System.registerDynamic("3", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
});
$__System.registerDynamic('21', ['3', '17'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var cof = $__require('3'),
        TAG = $__require('17')('toStringTag'),
        ARG = cof(function () {
        return arguments;
    }()) == 'Arguments';
    module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
});
$__System.registerDynamic("1a", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
});
$__System.registerDynamic('22', ['21', '17', '1a', 'b'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('21'),
        ITERATOR = $__require('17')('iterator'),
        Iterators = $__require('1a');
    module.exports = $__require('b').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
});
$__System.registerDynamic('23', ['24'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('24'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
});
$__System.registerDynamic('25', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
});
$__System.registerDynamic('17', ['23', '25', '24'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('23')('wks'),
        uid = $__require('25'),
        Symbol = $__require('24').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
});
$__System.registerDynamic('26', ['17'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var ITERATOR = $__require('17')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {}
  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
});
$__System.registerDynamic('27', ['28', '9', '6', '1e', '1f', '20', '22', '26'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ctx = $__require('28'),
      $export = $__require('9'),
      toObject = $__require('6'),
      call = $__require('1e'),
      isArrayIter = $__require('1f'),
      toLength = $__require('20'),
      getIterFn = $__require('22');
  $export($export.S + $export.F * !$__require('26')(function (iter) {
    Array.from(iter);
  }), 'Array', { from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          $$ = arguments,
          $$len = $$.length,
          mapfn = $$len > 1 ? $$[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping) mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    } });
});
$__System.registerDynamic('29', ['1b', '27', 'b'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('1b');
  $__require('27');
  module.exports = $__require('b').Array.from;
});
$__System.registerDynamic("2a", ["29"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("29"), __esModule: true };
});
$__System.registerDynamic("f", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
});
$__System.registerDynamic('6', ['f'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('f');
  module.exports = function (it) {
    return Object(defined(it));
  };
});
$__System.registerDynamic('24', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});
$__System.registerDynamic('2b', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
});
$__System.registerDynamic('28', ['2b'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('2b');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
});
$__System.registerDynamic('9', ['24', 'b', '28'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('24'),
      core = $__require('b'),
      ctx = $__require('28'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
});
$__System.registerDynamic("7", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
});
$__System.registerDynamic('2c', ['9', 'b', '7'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('9'),
        core = $__require('b'),
        fails = $__require('7');
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
            fn(1);
        }), 'Object', exp);
    };
});
$__System.registerDynamic('2d', ['6', '2c'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('6');
  $__require('2c')('keys', function ($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
});
$__System.registerDynamic('b', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
$__System.registerDynamic('2e', ['2d', 'b'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('2d');
  module.exports = $__require('b').Object.keys;
});
$__System.registerDynamic("2f", ["2e"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("2e"), __esModule: true };
});
$__System.register("30", [], function (_export) {
    /* */
    "use strict";

    function ensureArray(obj) {
        if (Array.isArray(obj) === false) {
            return [obj];
        }
        return obj;
    }return {
        setters: [],
        execute: function () {
            ;

            _export("ensureArray", ensureArray);
        }
    };
});

$__System.register("31", ["30"], function (_export) {
  "use strict";

  return {
    setters: [function (_) {
      var _exportObj = {};

      for (var _key in _) {
        if (_key !== "default") _exportObj[_key] = _[_key];
      }

      _exportObj["default"] = _["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});

$__System.register('32', ['31'], function (_export) {
    /* */
    'use strict';

    var ensureArray;

    function isElement(o) {
        return typeof HTMLElement === 'object' ? o instanceof HTMLElement : o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string';
    }

    function createElement(nodeName, classNames) {
        classNames = ensureArray(classNames);
        var el = document.createElement(nodeName);
        classNames.forEach(function (className) {
            el.classList.add(className);
        });
        return el;
    }

    function emptyElements(els) {
        els = ensureArray(els);
        els.forEach(function (el) {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        });
    }

    function removeElements(els) {
        els = ensureArray(els);
        els.forEach(function (el) {
            el.parentNode.removeChild(el);
        });
    }

    function wrapElements(elsToWrap, wrapperEl) {
        elsToWrap = ensureArray(elsToWrap);
        var firstElToWrap = elsToWrap[0];
        firstElToWrap.parentNode.insertBefore(wrapperEl, firstElToWrap);
        elsToWrap.forEach(function (elToWrap) {
            wrapperEl.appendChild(elToWrap);
        });
    }

    function unwrapElements(wrapperEls) {
        wrapperEls = ensureArray(wrapperEls);
        wrapperEls.forEach(function (wrapperEl) {
            var fragment = document.createDocumentFragment();
            while (wrapperEl.firstChild) {
                fragment.appendChild(wrapperEl.firstChild);
            }
            wrapperEl.parentNode.replaceChild(fragment, wrapperEl);
        });
    }return {
        setters: [function (_) {
            ensureArray = _.ensureArray;
        }],
        execute: function () {
            ;;;;;;

            _export('isElement', isElement);

            _export('createElement', createElement);

            _export('emptyElements', emptyElements);

            _export('removeElements', removeElements);

            _export('wrapElements', wrapElements);

            _export('unwrapElements', unwrapElements);
        }
    };
});

$__System.register("33", ["32"], function (_export) {
  "use strict";

  return {
    setters: [function (_) {
      var _exportObj = {};

      for (var _key in _) {
        if (_key !== "default") _exportObj[_key] = _[_key];
      }

      _exportObj["default"] = _["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});

$__System.register('34', ['33', 'c', '2a', '2f'], function (_export) {
	var emptyElements, isElement, _Object$assign, _Array$from, _Object$keys, formFieldAppender;

	return {
		setters: [function (_) {
			emptyElements = _.emptyElements;
			isElement = _.isElement;
		}, function (_c) {
			_Object$assign = _c['default'];
		}, function (_a) {
			_Array$from = _a['default'];
		}, function (_f) {
			_Object$keys = _f['default'];
		}],
		execute: function () {
			/* */
			'use strict';

			formFieldAppender = function formFieldAppender(wrapperEl, options) {

				var errors = {
					prefix: 'formFieldAppender: ',
					noWrapperEl: 'No wrapper element found.',
					noItemElsFoundInMarkup: 'No item elements found in markup.',
					noItemElsFoundInBlueprint: 'No item elements found in item blueprint.'
				},
				    defaultPatterns = {
					id: 'ffa-id-[[index]]',
					name: 'ffa-name-[[index]]',
					'for': 'ffa-name-[[index]]'
				};

				var settings = undefined,
				    itemEls = undefined,
				    itemElClone = undefined,
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
					settings = _Object$assign({}, defaults, options);

					if (wrapperEl) {
						if (settings.blueprint !== null) {
							buildItemElsFromBlueprint();
						}
						itemEls = _Array$from(wrapperEl.querySelectorAll('.' + settings.itemClass));
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
				};

				function buildItemElsFromBlueprint() {
					emptyElements(wrapperEl);
					if (isElement(settings.blueprint)) {
						wrapperEl.appendChild(settings.blueprint);
					} else {
						wrapperEl.insertAdjacentHTML('afterbegin', settings.blueprint);
					}
					wrapperEl.children[0].classList.add(settings.itemClass);
				};

				function reindexItems() {
					var attrs = _Object$keys(defaultPatterns);

					var _loop = function () {
						var itemEl = itemEls[itemIndex];
						if (itemEl) {
							var matchingEls = _Array$from(itemEl.querySelectorAll('[' + attrs.join('], [') + ']')).filter(function (el) {
								return el.nodeName !== 'LABEL';
							});

							matchingEls.forEach(function (el, elIndex) {
								var matchingElArr = [el];
								if (el.nodeName === 'INPUT') {
									var correspondingLabelEl = itemEl.querySelector('label[for="' + el.getAttribute('name') + '"]');
									if (correspondingLabelEl) {
										matchingElArr.push(correspondingLabelEl);
									}
								};
								matchingElArr.forEach(function (matchingElItem) {
									setElAttributes(matchingElItem, itemIndex, elIndex, attrs);
								});
							});
						}
					};

					for (var itemIndex = settings.initialReindex; itemIndex <= itemEls.length; itemIndex++) {
						_loop();
					}
				};

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
				};

				function bindEvents() {
					wrapperEl.addEventListener('click', onElementClick);
				};

				function onElementClick(e) {
					var clickedEl = e.target;
					if (clickedEl.closest(settings.addTriggerSelector) !== null) {
						e.preventDefault();
						addItem(clickedEl);
					} else if (clickedEl.closest(settings.removeTriggerSelector) !== null) {
						e.preventDefault();
						var itemEl = clickedEl.closest('.' + settings.itemClass);
						removeItem(itemEl);
					}
				};

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
				};

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
				};

				function setTriggerDisabledState(triggerEl) {
					var isDisabled = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

					var ariaAttr = 'aria-disabled',
					    classListMethodName = isDisabled === true ? 'add' : 'remove';
					if (triggerEl) {
						triggerEl.classList[classListMethodName](settings.disabledClass);
						triggerEl.setAttribute(ariaAttr, isDisabled);
						triggerEl.disabled = isDisabled;
					}
				};

				function resetNewItemFormVals(item) {
					if (settings.resetNewItemFormVals === true) {
						var allInputEls = _Array$from(item.querySelectorAll('input', 'textarea', 'select'));
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
				};

				function getSiblingTrigger(triggerEl, siblingSelector) {
					return triggerEl.closest('.' + settings.itemClass).querySelector(siblingSelector);
				};

				function getItems() {
					return itemEls;
				};

				function logError(msg) {
					var logLevel = arguments.length <= 1 || arguments[1] === undefined ? 'warn' : arguments[1];

					console[logLevel](errors.prefix + msg);
				};

				function destroy() {
					wrapperEl.removeEventListener('click', onElementClick);
				};

				init();

				return {
					destroy: destroy,
					getItems: getItems
				};
			};

			_export('default', formFieldAppender);
		}
	};
});

$__System.register("35", ["34"], function (_export) {
  "use strict";

  return {
    setters: [function (_) {
      var _exportObj = {};

      for (var _key in _) {
        if (_key !== "default") _exportObj[_key] = _[_key];
      }

      _exportObj["default"] = _["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});

$__System.registerDynamic('36', [], false, function ($__require, $__exports, $__module) {
	var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

	(function ($__global) {
		/* */
		"format global";

		/* **********************************************
       Begin prism-core.js
  ********************************************** */

		var _self = $__global['_self'],
		    Prism = $__global['Prism'];
		var _self = typeof window !== 'undefined' ? window // if in browser
		: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
		: {} // if in node js
		;

		/**
   * Prism: Lightweight, robust, elegant syntax highlighting
   * MIT license http://www.opensource.org/licenses/mit-license.php/
   * @author Lea Verou http://lea.verou.me
   */

		var Prism = function () {

			// Private helper vars
			var lang = /\blang(?:uage)?-(\w+)\b/i;
			var uniqueId = 0;

			var _ = _self.Prism = {
				util: {
					encode: function (tokens) {
						if (tokens instanceof Token) {
							return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
						} else if (_.util.type(tokens) === 'Array') {
							return tokens.map(_.util.encode);
						} else {
							return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
						}
					},

					type: function (o) {
						return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
					},

					objId: function (obj) {
						if (!obj['__id']) {
							Object.defineProperty(obj, '__id', { value: ++uniqueId });
						}
						return obj['__id'];
					},

					// Deep clone a language definition (e.g. to extend it)
					clone: function (o) {
						var type = _.util.type(o);

						switch (type) {
							case 'Object':
								var clone = {};

								for (var key in o) {
									if (o.hasOwnProperty(key)) {
										clone[key] = _.util.clone(o[key]);
									}
								}

								return clone;

							case 'Array':
								// Check for existence for IE8
								return o.map && o.map(function (v) {
									return _.util.clone(v);
								});
						}

						return o;
					}
				},

				languages: {
					extend: function (id, redef) {
						var lang = _.util.clone(_.languages[id]);

						for (var key in redef) {
							lang[key] = redef[key];
						}

						return lang;
					},

					/**
      * Insert a token before another token in a language literal
      * As this needs to recreate the object (we cannot actually insert before keys in object literals),
      * we cannot just provide an object, we need anobject and a key.
      * @param inside The key (or language id) of the parent
      * @param before The key to insert before. If not provided, the function appends instead.
      * @param insert Object with the key/value pairs to insert
      * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
      */
					insertBefore: function (inside, before, insert, root) {
						root = root || _.languages;
						var grammar = root[inside];

						if (arguments.length == 2) {
							insert = arguments[1];

							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									grammar[newToken] = insert[newToken];
								}
							}

							return grammar;
						}

						var ret = {};

						for (var token in grammar) {

							if (grammar.hasOwnProperty(token)) {

								if (token == before) {

									for (var newToken in insert) {

										if (insert.hasOwnProperty(newToken)) {
											ret[newToken] = insert[newToken];
										}
									}
								}

								ret[token] = grammar[token];
							}
						}

						// Update references in other language definitions
						_.languages.DFS(_.languages, function (key, value) {
							if (value === root[inside] && key != inside) {
								this[key] = ret;
							}
						});

						return root[inside] = ret;
					},

					// Traverse a language definition with Depth First Search
					DFS: function (o, callback, type, visited) {
						visited = visited || {};
						for (var i in o) {
							if (o.hasOwnProperty(i)) {
								callback.call(o, i, o[i], type || i);

								if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
									visited[_.util.objId(o[i])] = true;
									_.languages.DFS(o[i], callback, null, visited);
								} else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
									visited[_.util.objId(o[i])] = true;
									_.languages.DFS(o[i], callback, i, visited);
								}
							}
						}
					}
				},
				plugins: {},

				highlightAll: function (async, callback) {
					var env = {
						callback: callback,
						selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
					};

					_.hooks.run("before-highlightall", env);

					var elements = env.elements || document.querySelectorAll(env.selector);

					for (var i = 0, element; element = elements[i++];) {
						_.highlightElement(element, async === true, env.callback);
					}
				},

				highlightElement: function (element, async, callback) {
					// Find language
					var language,
					    grammar,
					    parent = element;

					while (parent && !lang.test(parent.className)) {
						parent = parent.parentNode;
					}

					if (parent) {
						language = (parent.className.match(lang) || [, ''])[1].toLowerCase();
						grammar = _.languages[language];
					}

					// Set language on the element, if not present
					element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

					// Set language on the parent, for styling
					parent = element.parentNode;

					if (/pre/i.test(parent.nodeName)) {
						parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
					}

					var code = element.textContent;

					var env = {
						element: element,
						language: language,
						grammar: grammar,
						code: code
					};

					_.hooks.run('before-sanity-check', env);

					if (!env.code || !env.grammar) {
						if (env.code) {
							env.element.textContent = env.code;
						}
						_.hooks.run('complete', env);
						return;
					}

					_.hooks.run('before-highlight', env);

					if (async && _self.Worker) {
						var worker = new Worker(_.filename);

						worker.onmessage = function (evt) {
							env.highlightedCode = evt.data;

							_.hooks.run('before-insert', env);

							env.element.innerHTML = env.highlightedCode;

							callback && callback.call(env.element);
							_.hooks.run('after-highlight', env);
							_.hooks.run('complete', env);
						};

						worker.postMessage(JSON.stringify({
							language: env.language,
							code: env.code,
							immediateClose: true
						}));
					} else {
						env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

						_.hooks.run('before-insert', env);

						env.element.innerHTML = env.highlightedCode;

						callback && callback.call(element);

						_.hooks.run('after-highlight', env);
						_.hooks.run('complete', env);
					}
				},

				highlight: function (text, grammar, language) {
					var tokens = _.tokenize(text, grammar);
					return Token.stringify(_.util.encode(tokens), language);
				},

				tokenize: function (text, grammar, language) {
					var Token = _.Token;

					var strarr = [text];

					var rest = grammar.rest;

					if (rest) {
						for (var token in rest) {
							grammar[token] = rest[token];
						}

						delete grammar.rest;
					}

					tokenloop: for (var token in grammar) {
						if (!grammar.hasOwnProperty(token) || !grammar[token]) {
							continue;
						}

						var patterns = grammar[token];
						patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

						for (var j = 0; j < patterns.length; ++j) {
							var pattern = patterns[j],
							    inside = pattern.inside,
							    lookbehind = !!pattern.lookbehind,
							    greedy = !!pattern.greedy,
							    lookbehindLength = 0,
							    alias = pattern.alias;

							if (greedy && !pattern.pattern.global) {
								// Without the global flag, lastIndex won't work
								var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
								pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
							}

							pattern = pattern.pattern || pattern;

							// Don’t cache length as it changes during the loop
							for (var i = 0, pos = 0; i < strarr.length; pos += strarr[i].length, ++i) {

								var str = strarr[i];

								if (strarr.length > text.length) {
									// Something went terribly wrong, ABORT, ABORT!
									break tokenloop;
								}

								if (str instanceof Token) {
									continue;
								}

								pattern.lastIndex = 0;

								var match = pattern.exec(str),
								    delNum = 1;

								// Greedy patterns can override/remove up to two previously matched tokens
								if (!match && greedy && i != strarr.length - 1) {
									pattern.lastIndex = pos;
									match = pattern.exec(text);
									if (!match) {
										break;
									}

									var from = match.index + (lookbehind ? match[1].length : 0),
									    to = match.index + match[0].length,
									    k = i,
									    p = pos;

									for (var len = strarr.length; k < len && p < to; ++k) {
										p += strarr[k].length;
										// Move the index i to the element in strarr that is closest to from
										if (from >= p) {
											++i;
											pos = p;
										}
									}

									/*
          * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
          * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
          */
									if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
										continue;
									}

									// Number of tokens to delete and replace with the new match
									delNum = k - i;
									str = text.slice(pos, p);
									match.index -= pos;
								}

								if (!match) {
									continue;
								}

								if (lookbehind) {
									lookbehindLength = match[1].length;
								}

								var from = match.index + lookbehindLength,
								    match = match[0].slice(lookbehindLength),
								    to = from + match.length,
								    before = str.slice(0, from),
								    after = str.slice(to);

								var args = [i, delNum];

								if (before) {
									args.push(before);
								}

								var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);

								args.push(wrapped);

								if (after) {
									args.push(after);
								}

								Array.prototype.splice.apply(strarr, args);
							}
						}
					}

					return strarr;
				},

				hooks: {
					all: {},

					add: function (name, callback) {
						var hooks = _.hooks.all;

						hooks[name] = hooks[name] || [];

						hooks[name].push(callback);
					},

					run: function (name, env) {
						var callbacks = _.hooks.all[name];

						if (!callbacks || !callbacks.length) {
							return;
						}

						for (var i = 0, callback; callback = callbacks[i++];) {
							callback(env);
						}
					}
				}
			};

			var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
				this.type = type;
				this.content = content;
				this.alias = alias;
				// Copy of the full string this token was created from
				this.length = (matchedStr || "").length | 0;
				this.greedy = !!greedy;
			};

			Token.stringify = function (o, language, parent) {
				if (typeof o == 'string') {
					return o;
				}

				if (_.util.type(o) === 'Array') {
					return o.map(function (element) {
						return Token.stringify(element, language, o);
					}).join('');
				}

				var env = {
					type: o.type,
					content: Token.stringify(o.content, language, parent),
					tag: 'span',
					classes: ['token', o.type],
					attributes: {},
					language: language,
					parent: parent
				};

				if (env.type == 'comment') {
					env.attributes['spellcheck'] = 'true';
				}

				if (o.alias) {
					var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
					Array.prototype.push.apply(env.classes, aliases);
				}

				_.hooks.run('wrap', env);

				var attributes = Object.keys(env.attributes).map(function (name) {
					return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
				}).join(' ');

				return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
			};

			if (!_self.document) {
				if (!_self.addEventListener) {
					// in Node.js
					return _self.Prism;
				}
				// In worker
				_self.addEventListener('message', function (evt) {
					var message = JSON.parse(evt.data),
					    lang = message.language,
					    code = message.code,
					    immediateClose = message.immediateClose;

					_self.postMessage(_.highlight(code, _.languages[lang], lang));
					if (immediateClose) {
						_self.close();
					}
				}, false);

				return _self.Prism;
			}

			//Get current script and highlight
			var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

			if (script) {
				_.filename = script.src;

				if (document.addEventListener && !script.hasAttribute('data-manual')) {
					if (document.readyState !== "loading") {
						if (window.requestAnimationFrame) {
							window.requestAnimationFrame(_.highlightAll);
						} else {
							window.setTimeout(_.highlightAll, 16);
						}
					} else {
						document.addEventListener('DOMContentLoaded', _.highlightAll);
					}
				}
			}

			return _self.Prism;
		}();

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = Prism;
		}

		// hack for components to work correctly in node.js
		if (typeof global !== 'undefined') {
			global.Prism = Prism;
		}

		/* **********************************************
       Begin prism-markup.js
  ********************************************** */

		Prism.languages.markup = {
			'comment': /<!--[\w\W]*?-->/,
			'prolog': /<\?[\w\W]+?\?>/,
			'doctype': /<!DOCTYPE[\w\W]+?>/i,
			'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
			'tag': {
				pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
				inside: {
					'tag': {
						pattern: /^<\/?[^\s>\/]+/i,
						inside: {
							'punctuation': /^<\/?/,
							'namespace': /^[^\s>\/:]+:/
						}
					},
					'attr-value': {
						pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
						inside: {
							'punctuation': /[=>"']/
						}
					},
					'punctuation': /\/?>/,
					'attr-name': {
						pattern: /[^\s>\/]+/,
						inside: {
							'namespace': /^[^\s>\/:]+:/
						}
					}

				}
			},
			'entity': /&#?[\da-z]{1,8};/i
		};

		// Plugin to make entity title show the real entity, idea by Roman Komarov
		Prism.hooks.add('wrap', function (env) {

			if (env.type === 'entity') {
				env.attributes['title'] = env.content.replace(/&amp;/, '&');
			}
		});

		Prism.languages.xml = Prism.languages.markup;
		Prism.languages.html = Prism.languages.markup;
		Prism.languages.mathml = Prism.languages.markup;
		Prism.languages.svg = Prism.languages.markup;

		/* **********************************************
       Begin prism-css.js
  ********************************************** */

		Prism.languages.css = {
			'comment': /\/\*[\w\W]*?\*\//,
			'atrule': {
				pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
				inside: {
					'rule': /@[\w-]+/
					// See rest below
				}
			},
			'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
			'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
			'string': {
				pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
				greedy: true
			},
			'property': /(\b|\B)[\w-]+(?=\s*:)/i,
			'important': /\B!important\b/i,
			'function': /[-a-z0-9]+(?=\()/i,
			'punctuation': /[(){};:]/
		};

		Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

		if (Prism.languages.markup) {
			Prism.languages.insertBefore('markup', 'tag', {
				'style': {
					pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
					lookbehind: true,
					inside: Prism.languages.css,
					alias: 'language-css'
				}
			});

			Prism.languages.insertBefore('inside', 'attr-value', {
				'style-attr': {
					pattern: /\s*style=("|').*?\1/i,
					inside: {
						'attr-name': {
							pattern: /^\s*style/i,
							inside: Prism.languages.markup.tag.inside
						},
						'punctuation': /^\s*=\s*['"]|['"]\s*$/,
						'attr-value': {
							pattern: /.+/i,
							inside: Prism.languages.css
						}
					},
					alias: 'language-css'
				}
			}, Prism.languages.markup.tag);
		}

		/* **********************************************
       Begin prism-clike.js
  ********************************************** */

		Prism.languages.clike = {
			'comment': [{
				pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
				lookbehind: true
			}, {
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true
			}],
			'string': {
				pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
				greedy: true
			},
			'class-name': {
				pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
				lookbehind: true,
				inside: {
					punctuation: /(\.|\\)/
				}
			},
			'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
			'boolean': /\b(true|false)\b/,
			'function': /[a-z0-9_]+(?=\()/i,
			'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
			'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
			'punctuation': /[{}[\];(),.:]/
		};

		/* **********************************************
       Begin prism-javascript.js
  ********************************************** */

		Prism.languages.javascript = Prism.languages.extend('clike', {
			'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
			'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
			// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
			'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
			'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
		});

		Prism.languages.insertBefore('javascript', 'keyword', {
			'regex': {
				pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
				lookbehind: true,
				greedy: true
			}
		});

		Prism.languages.insertBefore('javascript', 'string', {
			'template-string': {
				pattern: /`(?:\\\\|\\?[^\\])*?`/,
				greedy: true,
				inside: {
					'interpolation': {
						pattern: /\$\{[^}]+\}/,
						inside: {
							'interpolation-punctuation': {
								pattern: /^\$\{|\}$/,
								alias: 'punctuation'
							},
							rest: Prism.languages.javascript
						}
					},
					'string': /[\s\S]+/
				}
			}
		});

		if (Prism.languages.markup) {
			Prism.languages.insertBefore('markup', 'tag', {
				'script': {
					pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
					lookbehind: true,
					inside: Prism.languages.javascript,
					alias: 'language-javascript'
				}
			});
		}

		Prism.languages.js = Prism.languages.javascript;

		/* **********************************************
       Begin prism-file-highlight.js
  ********************************************** */

		(function () {
			if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
				return;
			}

			self.Prism.fileHighlight = function () {

				var Extensions = {
					'js': 'javascript',
					'py': 'python',
					'rb': 'ruby',
					'ps1': 'powershell',
					'psm1': 'powershell',
					'sh': 'bash',
					'bat': 'batch',
					'h': 'c',
					'tex': 'latex'
				};

				if (Array.prototype.forEach) {
					// Check to prevent error in IE8
					Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
						var src = pre.getAttribute('data-src');

						var language,
						    parent = pre;
						var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
						while (parent && !lang.test(parent.className)) {
							parent = parent.parentNode;
						}

						if (parent) {
							language = (pre.className.match(lang) || [, ''])[1];
						}

						if (!language) {
							var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
							language = Extensions[extension] || extension;
						}

						var code = document.createElement('code');
						code.className = 'language-' + language;

						pre.textContent = '';

						code.textContent = 'Loading…';

						pre.appendChild(code);

						var xhr = new XMLHttpRequest();

						xhr.open('GET', src, true);

						xhr.onreadystatechange = function () {
							if (xhr.readyState == 4) {

								if (xhr.status < 400 && xhr.responseText) {
									code.textContent = xhr.responseText;

									Prism.highlightElement(code);
								} else if (xhr.status >= 400) {
									code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
								} else {
									code.textContent = '✖ Error: File does not exist or is empty';
								}
							}
						};

						xhr.send(null);
					});
				}
			};

			document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
		})();
		$__global['_self'] = _self;
		$__global['Prism'] = Prism;
	})(this);

	return _retrieveGlobal();
});
$__System.registerDynamic("37", ["36"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("36");
});
$__System.register("1", ["35", "37"], function (_export) {
	"use strict";

	var formFieldAppender, prism, demo;
	return {
		setters: [function (_) {
			formFieldAppender = _["default"];
		}, function (_2) {
			prism = _2["default"];
		}],
		execute: function () {
			demo = function demo() {

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

				var instances = [];

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
				};

				function removeCallback(removedItem, allItems) {
					alert('Item removed!');
					console.log(removedItem);
					console.log(allItems);
				};

				function buildElementBlueprint() {
					var el = document.createElement('div');
					el.classList.add('js-ffa-item');
					el.insertAdjacentHTML('afterbegin', "\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"phone3\">Phone number</label>\n\t\t\t\t<input name=\"phone3\" id=\"phone1\" type=\"text\">\n\t\t\t</div>\n\t\t\t<button class=\"js-ffa-add-trigger\">Add</button>\n\t\t\t<button class=\"js-ffa-remove-trigger\">Remove</button>\n\t\t");
					return el;
				};

				function buildStringTemplate() {
					return "\n\t\t\t<div class=\"js-ffa-item\">\n\t\t\t\t<div class=\"field\">\n\t\t\t\t\t<label for=\"phone3\">Phone number</label>\n\t\t\t\t\t<input name=\"phone3\" id=\"phone1\" type=\"text\">\n\t\t\t\t</div>\n\t\t\t\t<button class=\"js-ffa-add-trigger\">Add</button>\n\t\t\t\t<button class=\"js-ffa-remove-trigger\">Remove</button>\n\t\t\t</div>\n\t\t";
				}

				initExamples();
			};

			_export("default", demo());
		}
	};
});

})
(function(factory) {
  factory();
});