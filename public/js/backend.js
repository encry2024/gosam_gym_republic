(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend"],{

/***/ "./node_modules/@coreui/coreui/dist/js/coreui.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/coreui/dist/js/coreui.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * CoreUI v2.1.9 (https://coreui.io)
  * Copyright 2019 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js")) :
  undefined;
}(this, function (exports, $, PerfectScrollbar) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  PerfectScrollbar = PerfectScrollbar && PerfectScrollbar.hasOwnProperty('default') ? PerfectScrollbar['default'] : PerfectScrollbar;

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.5' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode: 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  // 7.2.8 IsRegExp(argument)


  var MATCH = _wks('match');
  var _isRegexp = function (it) {
    var isRegExp;
    return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)


  var SPECIES = _wks('species');
  var _speciesConstructor = function (O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES]) == undefined ? D : _aFunction(S);
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var at = _stringAt(true);

   // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  var _advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG = _wks('toStringTag');
  // ES3 wrong here
  var ARG = _cof(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? _cof(O)
      // ES3 arguments fallback
      : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var builtinExec = RegExp.prototype.exec;

   // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec
  var _regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw new TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }
    if (_classof(R) !== 'RegExp') {
      throw new TypeError('RegExp#exec called on incompatible receiver');
    }
    return builtinExec.call(R, S);
  };

  // 21.2.5.3 get RegExp.prototype.flags

  var _flags = function () {
    var that = _anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var LAST_INDEX = 'lastIndex';

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/,
        re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
  })();

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        // eslint-disable-next-line no-loop-func
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var _regexpExec = patchedExec;

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _functionToString = _shared('native-function-to-string', Function.toString);

  var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');

  var TO_STRING = 'toString';
  var TPL = ('' + _functionToString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return _functionToString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || _functionToString.call(this);
  });
  });

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // extend global
      if (target) _redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  _export({
    target: 'RegExp',
    proto: true,
    forced: _regexpExec !== /./.exec
  }, {
    exec: _regexpExec
  });

  var SPECIES$1 = _wks('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
  })();

  var _fixReWks = function (KEY, length, exec) {
    var SYMBOL = _wks(KEY);

    var DELEGATES_TO_SYMBOL = !_fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      re.exec = function () { execCalled = true; return null; };
      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$1] = function () { return re; };
      }
      re[SYMBOL]('');
      return !execCalled;
    }) : undefined;

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var fns = exec(
        _defined,
        SYMBOL,
        ''[KEY],
        function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
          if (regexp.exec === _regexpExec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
            }
            return { done: true, value: nativeMethod.call(str, regexp, arg2) };
          }
          return { done: false };
        }
      );
      var strfn = fns[0];
      var rxfn = fns[1];

      _redefine(String.prototype, KEY, strfn);
      _hide(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return rxfn.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return rxfn.call(string, this); }
      );
    }
  };

  var $min = Math.min;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX$1 = 'lastIndex';
  var MAX_UINT32 = 0xffffffff;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !_fails(function () { });

  // @@split logic
  _fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
      'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
      'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
      '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
      '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
      ''[$SPLIT](/.?/)[LENGTH]
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return [];
        // If `separator` is not a regex, use native split
        if (!_isRegexp(separator)) return $split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = _regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy[LAST_INDEX$1];
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }
          if (separatorCopy[LAST_INDEX$1] === match.index) separatorCopy[LAST_INDEX$1]++; // Avoid an infinite loop
        }
        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      };
    // Chakra, V8
    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
      };
    } else {
      internalSplit = $split;
    }

    return [
      // `String.prototype.split` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = defined(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
        if (res.done) return res.value;

        var rx = _anObject(regexp);
        var S = String(this);
        var C = _speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = SUPPORTS_Y ? q : 0;
          var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
          var e;
          if (
            z === null ||
            (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
          ) {
            q = _advanceStringIndex(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  });

  /*
  * required polyfills
  */
  // eslint-disable-next-line consistent-return
  (function () {
    if (typeof NodeList.prototype.forEach === 'function') {
      return false;
    }

    NodeList.prototype.forEach = Array.prototype.forEach;
  })();
  /** IE9, IE10 and IE11 requires all of the following polyfills. **/
  // import 'core-js/es6/symbol'
  // import 'core-js/es6/object'
  // import 'core-js/es6/function'
  // import 'core-js/es6/parse-int'
  // import 'core-js/es6/parse-float'
  // import 'core-js/es6/number'
  // import 'core-js/es6/math'
  // import 'core-js/es6/string'
  // import 'core-js/es6/date'
  // import 'core-js/es6/array'
  // import 'core-js/es6/regexp'
  // import 'core-js/es6/map'
  // import 'core-js/es6/weak-map'
  // import 'core-js/es6/set'
  // import 'core-js/es7/object'

  /** IE10 and IE11 requires the following for the Reflect API. */
  // import 'core-js/es6/reflect'

  /** Evergreen browsers require these. **/
  // Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
  // import 'core-js/es7/reflect'
  // CustomEvent() constructor functionality in IE9, IE10, IE11
  // (function () {
  //
  //   if ( typeof window.CustomEvent === "function" ) return false
  //
  //   function CustomEvent ( event, params ) {
  //     params = params || { bubbles: false, cancelable: false, detail: undefined }
  //     var evt = document.createEvent( 'CustomEvent' )
  //     evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail )
  //     return evt
  //   }
  //
  //   CustomEvent.prototype = window.Event.prototype
  //
  //   window.CustomEvent = CustomEvent
  // })()

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$1
  };

  var f$2 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$2
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // 19.1.2.1 Object.assign(target, source, ...)





  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) { B[k] = k; });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;
    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    } return T;
  } : $assign;

  // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

  var _iterators = {};

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$1 = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var def = _objectDp.f;

  var TAG$1 = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if (BUGGY || VALUES_BUG || !proto[ITERATOR]) {
      _hide(proto, ITERATOR, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  // check on default Array iterator

  var ITERATOR$1 = _wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _createProperty = function (object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
    else object[index] = value;
  };

  var ITERATOR$2 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$2]
      || it['@@iterator']
      || _iterators[_classof(it)];
  };

  var ITERATOR$3 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();
    riter['return'] = function () { SAFE_CLOSING = true; };
  } catch (e) { /* empty */ }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();
      iter.next = function () { return { done: safe = true }; };
      arr[ITERATOR$3] = function () { return iter; };
      exec(arr);
    } catch (e) { /* empty */ }
    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);
        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });

  var max$1 = Math.max;
  var min$2 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  _fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
    return [
      // `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = defined(this);
        var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
        return fn !== undefined
          ? fn.call(searchValue, O, replaceValue)
          : $replace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        var res = maybeCallNative($replace, regexp, this, replaceValue);
        if (res.done) return res.value;

        var rx = _anObject(regexp);
        var S = String(this);
        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);
        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = _regexpExecAbstract(rx, S);
          if (result === null) break;
          results.push(result);
          if (!global) break;
          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
        }
        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];
          var matched = String(result[0]);
          var position = max$1(min$2(_toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];

      // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = _toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return $replace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$': return '$';
          case '&': return matched;
          case '`': return str.slice(0, position);
          case "'": return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default: // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = floor$1(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  });

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): ajax-load.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var AjaxLoad = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'ajaxLoad';
    var VERSION = '2.1.9';
    var DATA_KEY = 'coreui.ajaxLoad';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      NAV_PILLS: 'nav-pills',
      NAV_TABS: 'nav-tabs',
      OPEN: 'open',
      VIEW_SCRIPT: 'view-script'
    };
    var Event = {
      CLICK: 'click'
    };
    var Selector = {
      HEAD: 'head',
      NAV_DROPDOWN: '.sidebar-nav .nav-dropdown',
      NAV_LINK: '.sidebar-nav .nav-link',
      NAV_ITEM: '.sidebar-nav .nav-item',
      VIEW_SCRIPT: '.view-script'
    };
    var Default = {
      defaultPage: 'main.html',
      errorPage: '404.html',
      subpagesDirectory: 'views/'
    };

    var AjaxLoad =
    /*#__PURE__*/
    function () {
      function AjaxLoad(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        var url = location.hash.replace(/^#/, '');

        if (url !== '') {
          this.setUpUrl(url);
        } else {
          this.setUpUrl(this._config.defaultPage);
        }

        this._addEventListeners();
      } // Getters


      var _proto = AjaxLoad.prototype;

      // Public
      _proto.loadPage = function loadPage(url) {
        var element = this._element;
        var config = this._config;

        var loadScripts = function loadScripts(src, element) {
          if (element === void 0) {
            element = 0;
          }

          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = src[element];
          script.className = ClassName.VIEW_SCRIPT; // eslint-disable-next-line no-multi-assign

          script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === 'complete') {
              if (src.length > element + 1) {
                loadScripts(src, element + 1);
              }
            }
          };

          var body = document.getElementsByTagName('body')[0];
          body.appendChild(script);
        };

        $.ajax({
          type: 'GET',
          url: config.subpagesDirectory + url,
          dataType: 'html',
          beforeSend: function beforeSend() {
            $(Selector.VIEW_SCRIPT).remove();
          },
          success: function success(result) {
            var wrapper = document.createElement('div');
            wrapper.innerHTML = result;
            var scripts = Array.from(wrapper.querySelectorAll('script')).map(function (script) {
              return script.attributes.getNamedItem('src').nodeValue;
            });
            wrapper.querySelectorAll('script').forEach(function (script) {
              return script.parentNode.removeChild(script);
            });
            $('body').animate({
              scrollTop: 0
            }, 0);
            $(element).html(wrapper);

            if (scripts.length) {
              loadScripts(scripts);
            }

            window.location.hash = url;
          },
          error: function error() {
            window.location.href = config.errorPage;
          }
        });
      };

      _proto.setUpUrl = function setUpUrl(url) {
        $(Selector.NAV_LINK).removeClass(ClassName.ACTIVE);
        $(Selector.NAV_DROPDOWN).removeClass(ClassName.OPEN);
        $(Selector.NAV_DROPDOWN + ":has(a[href=\"" + url.replace(/^\//, '').split('?')[0] + "\"])").addClass(ClassName.OPEN);
        $(Selector.NAV_ITEM + " a[href=\"" + url.replace(/^\//, '').split('?')[0] + "\"]").addClass(ClassName.ACTIVE);
        this.loadPage(url);
      };

      _proto.loadBlank = function loadBlank(url) {
        window.open(url);
      };

      _proto.loadTop = function loadTop(url) {
        window.location = url;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = Object.assign({}, Default, config);
        return config;
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $(document).on(Event.CLICK, Selector.NAV_LINK + "[href!=\"#\"]", function (event) {
          event.preventDefault();
          event.stopPropagation();

          if (event.currentTarget.target === '_top') {
            _this.loadTop(event.currentTarget.href);
          } else if (event.currentTarget.target === '_blank') {
            _this.loadBlank(event.currentTarget.href);
          } else {
            _this.setUpUrl(event.currentTarget.getAttribute('href'));
          }
        });
      } // Static
      ;

      AjaxLoad._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new AjaxLoad(this, _config);
            $(this).data(DATA_KEY, data);
          }
        });
      };

      _createClass(AjaxLoad, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return AjaxLoad;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $.fn[NAME] = AjaxLoad._jQueryInterface;
    $.fn[NAME].Constructor = AjaxLoad;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AjaxLoad._jQueryInterface;
    };

    return AjaxLoad;
  }($);

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): toggle-classes.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var removeClasses = function removeClasses(classNames) {
    return classNames.map(function (className) {
      return document.body.classList.contains(className);
    }).indexOf(true) !== -1;
  };

  var toggleClasses = function toggleClasses(toggleClass, classNames) {
    var breakpoint = classNames.indexOf(toggleClass);
    var newClassNames = classNames.slice(0, breakpoint + 1);

    if (removeClasses(newClassNames)) {
      newClassNames.map(function (className) {
        return document.body.classList.remove(className);
      });
    } else {
      document.body.classList.add(toggleClass);
    }
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): aside-menu.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var AsideMenu = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'aside-menu';
    var VERSION = '2.1.9';
    var DATA_KEY = 'coreui.aside-menu';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      CLICK: 'click',
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      TOGGLE: 'toggle'
    };
    var Selector = {
      BODY: 'body',
      ASIDE_MENU: '.aside-menu',
      ASIDE_MENU_TOGGLER: '.aside-menu-toggler'
    };
    var ShowClassNames = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var AsideMenu =
    /*#__PURE__*/
    function () {
      function AsideMenu(element) {
        this._element = element;

        this._addEventListeners();
      } // Getters


      var _proto = AsideMenu.prototype;

      // Private
      _proto._addEventListeners = function _addEventListeners() {
        $(document).on(Event.CLICK, Selector.ASIDE_MENU_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          toggleClasses(toggle, ShowClassNames);
        });
      } // Static
      ;

      AsideMenu._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new AsideMenu(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(AsideMenu, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return AsideMenu;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var asideMenu = $(Selector.ASIDE_MENU);

      AsideMenu._jQueryInterface.call(asideMenu);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = AsideMenu._jQueryInterface;
    $.fn[NAME].Constructor = AsideMenu;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AsideMenu._jQueryInterface;
    };

    return AsideMenu;
  }($);

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  var SPECIES$2 = _wks('species');

  var _arraySpeciesConstructor = function (original) {
    var C;
    if (_isArray(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
      if (_isObject(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array : C;
  };

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


  var _arraySpeciesCreate = function (original, length) {
    return new (_arraySpeciesConstructor(original))(length);
  };

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex





  var _arrayMethods = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = _toObject($this);
      var self = _iobject(O);
      var f = _ctx(callbackfn, that, 3);
      var length = _toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;   // map
          else if (res) switch (TYPE) {
            case 3: return true;             // some
            case 5: return val;              // find
            case 6: return index;            // findIndex
            case 2: result.push(val);        // filter
          } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto$1 = Array.prototype;
  if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});
  var _addToUnscopables = function (key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  };

  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

  var $find = _arrayMethods(5);
  var KEY = 'find';
  var forced = true;
  // Shouldn't skip holes
  if (KEY in []) Array(1)[KEY](function () { forced = false; });
  _export(_export.P + _export.F * forced, 'Array', {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables(KEY);

  // @@match logic
  _fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = defined(this);
        var fn = regexp == undefined ? undefined : regexp[MATCH];
        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
      function (regexp) {
        var res = maybeCallNative($match, regexp, this);
        if (res.done) return res.value;
        var rx = _anObject(regexp);
        var S = String(this);
        if (!rx.global) return _regexpExecAbstract(rx, S);
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = _regexpExecAbstract(rx, S)) !== null) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.9): get-css-custom-properties.js
   * Licensed under MIT (https://coreui.io/license)
   * @returns {string} css custom property name
   * --------------------------------------------------------------------------
   */
  var getCssCustomProperties = function getCssCustomProperties() {
    var cssCustomProperties = {};
    var sheets = document.styleSheets;
    var cssText = '';

    for (var i = sheets.length - 1; i > -1; i--) {
      var rules = sheets[i].cssRules;

      for (var j = rules.length - 1; j > -1; j--) {
        if (rules[j].selectorText === '.ie-custom-properties') {
          cssText = rules[j].cssText;
          break;
        }
      }

      if (cssText) {
        break;
      }
    }

    cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
    cssText.split(';').forEach(function (property) {
      if (property) {
        var name = property.split(': ')[0];
        var value = property.split(': ')[1];

        if (name && value) {
          cssCustomProperties["--" + name.trim()] = value.trim();
        }
      }
    });
    return cssCustomProperties;
  };

  var minIEVersion = 10;

  var isIE1x = function isIE1x() {
    return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
  };

  var isCustomProperty = function isCustomProperty(property) {
    return property.match(/^--.*/i);
  };

  var getStyle = function getStyle(property, element) {
    if (element === void 0) {
      element = document.body;
    }

    var style;

    if (isCustomProperty(property) && isIE1x()) {
      var cssCustomProperties = getCssCustomProperties();
      style = cssCustomProperties[property];
    } else {
      style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
    }

    return style;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): sidebar.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var Sidebar = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'sidebar';
    var VERSION = '2.1.9';
    var DATA_KEY = 'coreui.sidebar';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Default = {
      transition: 400
    };
    var ClassName = {
      ACTIVE: 'active',
      BRAND_MINIMIZED: 'brand-minimized',
      NAV_DROPDOWN_TOGGLE: 'nav-dropdown-toggle',
      OPEN: 'open',
      SIDEBAR_FIXED: 'sidebar-fixed',
      SIDEBAR_MINIMIZED: 'sidebar-minimized',
      SIDEBAR_OFF_CANVAS: 'sidebar-off-canvas'
    };
    var Event = {
      CLICK: 'click',
      DESTROY: 'destroy',
      INIT: 'init',
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      TOGGLE: 'toggle',
      UPDATE: 'update'
    };
    var Selector = {
      BODY: 'body',
      BRAND_MINIMIZER: '.brand-minimizer',
      NAV_DROPDOWN_TOGGLE: '.nav-dropdown-toggle',
      NAV_DROPDOWN_ITEMS: '.nav-dropdown-items',
      NAV_ITEM: '.nav-item',
      NAV_LINK: '.nav-link',
      NAV_LINK_QUERIED: '.nav-link-queried',
      NAVIGATION_CONTAINER: '.sidebar-nav',
      NAVIGATION: '.sidebar-nav > .nav',
      SIDEBAR: '.sidebar',
      SIDEBAR_MINIMIZER: '.sidebar-minimizer',
      SIDEBAR_TOGGLER: '.sidebar-toggler'
    };
    var ShowClassNames = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Sidebar =
    /*#__PURE__*/
    function () {
      function Sidebar(element) {
        this._element = element;
        this.mobile = false;
        this.ps = null;
        this.perfectScrollbar(Event.INIT);
        this.setActiveLink();
        this._breakpointTest = this._breakpointTest.bind(this);
        this._clickOutListener = this._clickOutListener.bind(this);

        this._addEventListeners();

        this._addMediaQuery();
      } // Getters


      var _proto = Sidebar.prototype;

      // Public
      _proto.perfectScrollbar = function perfectScrollbar(event) {
        var _this = this;

        if (typeof PerfectScrollbar !== 'undefined') {
          var classList = document.body.classList;

          if (event === Event.INIT && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            this.ps = this.makeScrollbar();
          }

          if (event === Event.DESTROY) {
            this.destroyScrollbar();
          }

          if (event === Event.TOGGLE) {
            if (classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
              this.destroyScrollbar();
            } else {
              this.destroyScrollbar();
              this.ps = this.makeScrollbar();
            }
          }

          if (event === Event.UPDATE && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            // ToDo: Add smooth transition
            setTimeout(function () {
              _this.destroyScrollbar();

              _this.ps = _this.makeScrollbar();
            }, Default.transition);
          }
        }
      };

      _proto.makeScrollbar = function makeScrollbar(container) {
        if (container === void 0) {
          container = Selector.NAVIGATION_CONTAINER;
        }

        var ps = new PerfectScrollbar(document.querySelector(container), {
          suppressScrollX: true
        }); // ToDo: find real fix for ps rtl

        ps.isRtl = false;
        return ps;
      };

      _proto.destroyScrollbar = function destroyScrollbar() {
        if (this.ps) {
          this.ps.destroy();
          this.ps = null;
        }
      };

      _proto.setActiveLink = function setActiveLink() {
        $(Selector.NAVIGATION).find(Selector.NAV_LINK).each(function (key, value) {
          var link = value;
          var cUrl;

          if (link.classList.contains(Selector.NAV_LINK_QUERIED)) {
            cUrl = String(window.location);
          } else {
            cUrl = String(window.location).split('?')[0];
          }

          if (cUrl.substr(cUrl.length - 1) === '#') {
            cUrl = cUrl.slice(0, -1);
          }

          if ($($(link))[0].href === cUrl) {
            $(link).addClass(ClassName.ACTIVE).parents(Selector.NAV_DROPDOWN_ITEMS).add(link).each(function (key, value) {
              link = value;
              $(link).parent().addClass(ClassName.OPEN);
            });
          }
        });
      } // Private
      ;

      _proto._addMediaQuery = function _addMediaQuery() {
        var sm = getStyle('--breakpoint-sm');

        if (!sm) {
          return;
        }

        var smVal = parseInt(sm, 10) - 1;
        var mediaQueryList = window.matchMedia("(max-width: " + smVal + "px)");

        this._breakpointTest(mediaQueryList);

        mediaQueryList.addListener(this._breakpointTest);
      };

      _proto._breakpointTest = function _breakpointTest(e) {
        this.mobile = Boolean(e.matches);

        this._toggleClickOut();
      };

      _proto._clickOutListener = function _clickOutListener(event) {
        if (!this._element.contains(event.target)) {
          // or use: event.target.closest(Selector.SIDEBAR) === null
          event.preventDefault();
          event.stopPropagation();

          this._removeClickOut();

          document.body.classList.remove('sidebar-show');
        }
      };

      _proto._addClickOut = function _addClickOut() {
        document.addEventListener(Event.CLICK, this._clickOutListener, true);
      };

      _proto._removeClickOut = function _removeClickOut() {
        document.removeEventListener(Event.CLICK, this._clickOutListener, true);
      };

      _proto._toggleClickOut = function _toggleClickOut() {
        if (this.mobile && document.body.classList.contains('sidebar-show')) {
          document.body.classList.remove('aside-menu-show');

          this._addClickOut();
        } else {
          this._removeClickOut();
        }
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        $(document).on(Event.CLICK, Selector.BRAND_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.BRAND_MINIMIZED);
        });
        $(document).on(Event.CLICK, Selector.NAV_DROPDOWN_TOGGLE, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var dropdown = event.target;
          $(dropdown).parent().toggleClass(ClassName.OPEN);

          _this2.perfectScrollbar(Event.UPDATE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.SIDEBAR_MINIMIZED);

          _this2.perfectScrollbar(Event.TOGGLE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          toggleClasses(toggle, ShowClassNames);

          _this2._toggleClickOut();
        });
        $(Selector.NAVIGATION + " > " + Selector.NAV_ITEM + " " + Selector.NAV_LINK + ":not(" + Selector.NAV_DROPDOWN_TOGGLE + ")").on(Event.CLICK, function () {
          _this2._removeClickOut();

          document.body.classList.remove('sidebar-show');
        });
      } // Static
      ;

      Sidebar._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Sidebar(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Sidebar, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Sidebar;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var sidebar = $(Selector.SIDEBAR);

      Sidebar._jQueryInterface.call(sidebar);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Sidebar._jQueryInterface;
    $.fn[NAME].Constructor = Sidebar;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Sidebar._jQueryInterface;
    };

    return Sidebar;
  }($);

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.9): hex-to-rgb.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgb = function hexToRgb(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.9): hex-to-rgba.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgba = function hexToRgba(color, opacity) {
    if (opacity === void 0) {
      opacity = 100;
    }

    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity / 100 + ")";
  };

  // 21.2.5.3 get RegExp.prototype.flags()
  if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: _flags
  });

  var TO_STRING = 'toString';
  var $toString = /./[TO_STRING];

  var define = function (fn) {
    _redefine(RegExp.prototype, TO_STRING, fn, true);
  };

  // 21.2.5.14 RegExp.prototype.toString()
  if (_fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
    define(function toString() {
      var R = _anObject(this);
      return '/'.concat(R.source, '/',
        'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
    });
  // FF44- RegExp#toString has a wrong name
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }

  // 19.1.3.6 Object.prototype.toString()

  var test = {};
  test[_wks('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    _redefine(Object.prototype, 'toString', function toString() {
      return '[object ' + _classof(this) + ']';
    }, true);
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): rgb-to-hex.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var rgbToHex = function rgbToHex(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    if (color === 'transparent') {
      return '#00000000';
    }

    var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    if (!rgb) {
      throw new Error(color + " is not a valid rgb color");
    }

    var r = "0" + parseInt(rgb[1], 10).toString(16);
    var g = "0" + parseInt(rgb[2], 10).toString(16);
    var b = "0" + parseInt(rgb[3], 10).toString(16);
    return "#" + r.slice(-2) + g.slice(-2) + b.slice(-2);
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): index.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  (function ($) {
    if (typeof $ === 'undefined') {
      throw new TypeError('CoreUI\'s JavaScript requires jQuery. jQuery must be included before CoreUI\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('CoreUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);
  window.getStyle = getStyle;
  window.hexToRgb = hexToRgb;
  window.hexToRgba = hexToRgba;
  window.rgbToHex = rgbToHex;

  exports.AjaxLoad = AjaxLoad;
  exports.AsideMenu = AsideMenu;
  exports.Sidebar = Sidebar;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=coreui.js.map


/***/ }),

/***/ "./node_modules/pace/pace.js":
/*!***********************************!*\
  !*** ./node_modules/pace/pace.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  var AjaxMonitor, Bar, DocumentMonitor, ElementMonitor, ElementTracker, EventLagMonitor, Evented, Events, NoTargetError, Pace, RequestIntercept, SOURCE_KEYS, Scaler, SocketRequestTracker, XHRRequestTracker, animation, avgAmplitude, bar, cancelAnimation, cancelAnimationFrame, defaultOptions, extend, extendNative, getFromDOM, getIntercept, handlePushState, ignoreStack, init, now, options, requestAnimationFrame, result, runAnimation, scalers, shouldIgnoreURL, shouldTrack, source, sources, uniScaler, _WebSocket, _XDomainRequest, _XMLHttpRequest, _i, _intercept, _len, _pushState, _ref, _ref1, _replaceState,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  defaultOptions = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: true,
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  };

  now = function() {
    var _ref;
    return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +(new Date);
  };

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  if (requestAnimationFrame == null) {
    requestAnimationFrame = function(fn) {
      return setTimeout(fn, 50);
    };
    cancelAnimationFrame = function(id) {
      return clearTimeout(id);
    };
  }

  runAnimation = function(fn) {
    var last, tick;
    last = now();
    tick = function() {
      var diff;
      diff = now() - last;
      if (diff >= 33) {
        last = now();
        return fn(diff, function() {
          return requestAnimationFrame(tick);
        });
      } else {
        return setTimeout(tick, 33 - diff);
      }
    };
    return tick();
  };

  result = function() {
    var args, key, obj;
    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    if (typeof obj[key] === 'function') {
      return obj[key].apply(obj, args);
    } else {
      return obj[key];
    }
  };

  extend = function() {
    var key, out, source, sources, val, _i, _len;
    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];
      if (source) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          val = source[key];
          if ((out[key] != null) && typeof out[key] === 'object' && (val != null) && typeof val === 'object') {
            extend(out[key], val);
          } else {
            out[key] = val;
          }
        }
      }
    }
    return out;
  };

  avgAmplitude = function(arr) {
    var count, sum, v, _i, _len;
    sum = count = 0;
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      v = arr[_i];
      sum += Math.abs(v);
      count++;
    }
    return sum / count;
  };

  getFromDOM = function(key, json) {
    var data, e, el;
    if (key == null) {
      key = 'options';
    }
    if (json == null) {
      json = true;
    }
    el = document.querySelector("[data-pace-" + key + "]");
    if (!el) {
      return;
    }
    data = el.getAttribute("data-pace-" + key);
    if (!json) {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch (_error) {
      e = _error;
      return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0;
    }
  };

  Evented = (function() {
    function Evented() {}

    Evented.prototype.on = function(event, handler, ctx, once) {
      var _base;
      if (once == null) {
        once = false;
      }
      if (this.bindings == null) {
        this.bindings = {};
      }
      if ((_base = this.bindings)[event] == null) {
        _base[event] = [];
      }
      return this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
    };

    Evented.prototype.once = function(event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    };

    Evented.prototype.off = function(event, handler) {
      var i, _ref, _results;
      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
        return;
      }
      if (handler == null) {
        return delete this.bindings[event];
      } else {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    Evented.prototype.trigger = function() {
      var args, ctx, event, handler, i, once, _ref, _ref1, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
          handler.apply(ctx != null ? ctx : this, args);
          if (once) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    return Evented;

  })();

  Pace = window.Pace || {};

  window.Pace = Pace;

  extend(Pace, Evented.prototype);

  options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());

  _ref = ['ajax', 'document', 'eventLag', 'elements'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }

  NoTargetError = (function(_super) {
    __extends(NoTargetError, _super);

    function NoTargetError() {
      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    return NoTargetError;

  })(Error);

  Bar = (function() {
    function Bar() {
      this.progress = 0;
    }

    Bar.prototype.getElement = function() {
      var targetElement;
      if (this.el == null) {
        targetElement = document.querySelector(options.target);
        if (!targetElement) {
          throw new NoTargetError;
        }
        this.el = document.createElement('div');
        this.el.className = "pace pace-active";
        document.body.className = document.body.className.replace(/pace-done/g, '');
        document.body.className += ' pace-running';
        this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
        if (targetElement.firstChild != null) {
          targetElement.insertBefore(this.el, targetElement.firstChild);
        } else {
          targetElement.appendChild(this.el);
        }
      }
      return this.el;
    };

    Bar.prototype.finish = function() {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
    };

    Bar.prototype.update = function(prog) {
      this.progress = prog;
      return this.render();
    };

    Bar.prototype.destroy = function() {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }
      return this.el = void 0;
    };

    Bar.prototype.render = function() {
      var el, key, progressStr, transform, _j, _len1, _ref2;
      if (document.querySelector(options.target) == null) {
        return false;
      }
      el = this.getElement();
      transform = "translate3d(" + this.progress + "%, 0, 0)";
      _ref2 = ['webkitTransform', 'msTransform', 'transform'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        key = _ref2[_j];
        el.children[0].style[key] = transform;
      }
      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
        el.children[0].setAttribute('data-progress-text', "" + (this.progress | 0) + "%");
        if (this.progress >= 100) {
          progressStr = '99';
        } else {
          progressStr = this.progress < 10 ? "0" : "";
          progressStr += this.progress | 0;
        }
        el.children[0].setAttribute('data-progress', "" + progressStr);
      }
      return this.lastRenderedProgress = this.progress;
    };

    Bar.prototype.done = function() {
      return this.progress >= 100;
    };

    return Bar;

  })();

  Events = (function() {
    function Events() {
      this.bindings = {};
    }

    Events.prototype.trigger = function(name, val) {
      var binding, _j, _len1, _ref2, _results;
      if (this.bindings[name] != null) {
        _ref2 = this.bindings[name];
        _results = [];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          binding = _ref2[_j];
          _results.push(binding.call(this, val));
        }
        return _results;
      }
    };

    Events.prototype.on = function(name, fn) {
      var _base;
      if ((_base = this.bindings)[name] == null) {
        _base[name] = [];
      }
      return this.bindings[name].push(fn);
    };

    return Events;

  })();

  _XMLHttpRequest = window.XMLHttpRequest;

  _XDomainRequest = window.XDomainRequest;

  _WebSocket = window.WebSocket;

  extendNative = function(to, from) {
    var e, key, _results;
    _results = [];
    for (key in from.prototype) {
      try {
        if ((to[key] == null) && typeof from[key] !== 'function') {
          if (typeof Object.defineProperty === 'function') {
            _results.push(Object.defineProperty(to, key, {
              get: function() {
                return from.prototype[key];
              },
              configurable: true,
              enumerable: true
            }));
          } else {
            _results.push(to[key] = from.prototype[key]);
          }
        } else {
          _results.push(void 0);
        }
      } catch (_error) {
        e = _error;
      }
    }
    return _results;
  };

  ignoreStack = [];

  Pace.ignore = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('ignore');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  Pace.track = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('track');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  shouldTrack = function(method) {
    var _ref2;
    if (method == null) {
      method = 'GET';
    }
    if (ignoreStack[0] === 'track') {
      return 'force';
    }
    if (!ignoreStack.length && options.ajax) {
      if (method === 'socket' && options.ajax.trackWebSockets) {
        return true;
      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {
        return true;
      }
    }
    return false;
  };

  RequestIntercept = (function(_super) {
    __extends(RequestIntercept, _super);

    function RequestIntercept() {
      var monitorXHR,
        _this = this;
      RequestIntercept.__super__.constructor.apply(this, arguments);
      monitorXHR = function(req) {
        var _open;
        _open = req.open;
        return req.open = function(type, url, async) {
          if (shouldTrack(type)) {
            _this.trigger('request', {
              type: type,
              url: url,
              request: req
            });
          }
          return _open.apply(req, arguments);
        };
      };
      window.XMLHttpRequest = function(flags) {
        var req;
        req = new _XMLHttpRequest(flags);
        monitorXHR(req);
        return req;
      };
      try {
        extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      } catch (_error) {}
      if (_XDomainRequest != null) {
        window.XDomainRequest = function() {
          var req;
          req = new _XDomainRequest;
          monitorXHR(req);
          return req;
        };
        try {
          extendNative(window.XDomainRequest, _XDomainRequest);
        } catch (_error) {}
      }
      if ((_WebSocket != null) && options.ajax.trackWebSockets) {
        window.WebSocket = function(url, protocols) {
          var req;
          if (protocols != null) {
            req = new _WebSocket(url, protocols);
          } else {
            req = new _WebSocket(url);
          }
          if (shouldTrack('socket')) {
            _this.trigger('request', {
              type: 'socket',
              url: url,
              protocols: protocols,
              request: req
            });
          }
          return req;
        };
        try {
          extendNative(window.WebSocket, _WebSocket);
        } catch (_error) {}
      }
    }

    return RequestIntercept;

  })(Events);

  _intercept = null;

  getIntercept = function() {
    if (_intercept == null) {
      _intercept = new RequestIntercept;
    }
    return _intercept;
  };

  shouldIgnoreURL = function(url) {
    var pattern, _j, _len1, _ref2;
    _ref2 = options.ajax.ignoreURLs;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      pattern = _ref2[_j];
      if (typeof pattern === 'string') {
        if (url.indexOf(pattern) !== -1) {
          return true;
        }
      } else {
        if (pattern.test(url)) {
          return true;
        }
      }
    }
    return false;
  };

  getIntercept().on('request', function(_arg) {
    var after, args, request, type, url;
    type = _arg.type, request = _arg.request, url = _arg.url;
    if (shouldIgnoreURL(url)) {
      return;
    }
    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {
      args = arguments;
      after = options.restartOnRequestAfter || 0;
      if (typeof after === 'boolean') {
        after = 0;
      }
      return setTimeout(function() {
        var stillActive, _j, _len1, _ref2, _ref3, _results;
        if (type === 'socket') {
          stillActive = request.readyState < 2;
        } else {
          stillActive = (0 < (_ref2 = request.readyState) && _ref2 < 4);
        }
        if (stillActive) {
          Pace.restart();
          _ref3 = Pace.sources;
          _results = [];
          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            source = _ref3[_j];
            if (source instanceof AjaxMonitor) {
              source.watch.apply(source, args);
              break;
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, after);
    }
  });

  AjaxMonitor = (function() {
    function AjaxMonitor() {
      var _this = this;
      this.elements = [];
      getIntercept().on('request', function() {
        return _this.watch.apply(_this, arguments);
      });
    }

    AjaxMonitor.prototype.watch = function(_arg) {
      var request, tracker, type, url;
      type = _arg.type, request = _arg.request, url = _arg.url;
      if (shouldIgnoreURL(url)) {
        return;
      }
      if (type === 'socket') {
        tracker = new SocketRequestTracker(request);
      } else {
        tracker = new XHRRequestTracker(request);
      }
      return this.elements.push(tracker);
    };

    return AjaxMonitor;

  })();

  XHRRequestTracker = (function() {
    function XHRRequestTracker(request) {
      var event, size, _j, _len1, _onreadystatechange, _ref2,
        _this = this;
      this.progress = 0;
      if (window.ProgressEvent != null) {
        size = null;
        request.addEventListener('progress', function(evt) {
          if (evt.lengthComputable) {
            return _this.progress = 100 * evt.loaded / evt.total;
          } else {
            return _this.progress = _this.progress + (100 - _this.progress) / 2;
          }
        }, false);
        _ref2 = ['load', 'abort', 'timeout', 'error'];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          event = _ref2[_j];
          request.addEventListener(event, function() {
            return _this.progress = 100;
          }, false);
        }
      } else {
        _onreadystatechange = request.onreadystatechange;
        request.onreadystatechange = function() {
          var _ref3;
          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {
            _this.progress = 100;
          } else if (request.readyState === 3) {
            _this.progress = 50;
          }
          return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }

    return XHRRequestTracker;

  })();

  SocketRequestTracker = (function() {
    function SocketRequestTracker(request) {
      var event, _j, _len1, _ref2,
        _this = this;
      this.progress = 0;
      _ref2 = ['error', 'open'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        event = _ref2[_j];
        request.addEventListener(event, function() {
          return _this.progress = 100;
        }, false);
      }
    }

    return SocketRequestTracker;

  })();

  ElementMonitor = (function() {
    function ElementMonitor(options) {
      var selector, _j, _len1, _ref2;
      if (options == null) {
        options = {};
      }
      this.elements = [];
      if (options.selectors == null) {
        options.selectors = [];
      }
      _ref2 = options.selectors;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        selector = _ref2[_j];
        this.elements.push(new ElementTracker(selector));
      }
    }

    return ElementMonitor;

  })();

  ElementTracker = (function() {
    function ElementTracker(selector) {
      this.selector = selector;
      this.progress = 0;
      this.check();
    }

    ElementTracker.prototype.check = function() {
      var _this = this;
      if (document.querySelector(this.selector)) {
        return this.done();
      } else {
        return setTimeout((function() {
          return _this.check();
        }), options.elements.checkInterval);
      }
    };

    ElementTracker.prototype.done = function() {
      return this.progress = 100;
    };

    return ElementTracker;

  })();

  DocumentMonitor = (function() {
    DocumentMonitor.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    };

    function DocumentMonitor() {
      var _onreadystatechange, _ref2,
        _this = this;
      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
      _onreadystatechange = document.onreadystatechange;
      document.onreadystatechange = function() {
        if (_this.states[document.readyState] != null) {
          _this.progress = _this.states[document.readyState];
        }
        return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }

    return DocumentMonitor;

  })();

  EventLagMonitor = (function() {
    function EventLagMonitor() {
      var avg, interval, last, points, samples,
        _this = this;
      this.progress = 0;
      avg = 0;
      samples = [];
      points = 0;
      last = now();
      interval = setInterval(function() {
        var diff;
        diff = now() - last - 50;
        last = now();
        samples.push(diff);
        if (samples.length > options.eventLag.sampleCount) {
          samples.shift();
        }
        avg = avgAmplitude(samples);
        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
          _this.progress = 100;
          return clearInterval(interval);
        } else {
          return _this.progress = 100 * (3 / (avg + 3));
        }
      }, 50);
    }

    return EventLagMonitor;

  })();

  Scaler = (function() {
    function Scaler(source) {
      this.source = source;
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      this.catchup = 0;
      this.progress = this.lastProgress = 0;
      if (this.source != null) {
        this.progress = result(this.source, 'progress');
      }
    }

    Scaler.prototype.tick = function(frameTime, val) {
      var scaling;
      if (val == null) {
        val = result(this.source, 'progress');
      }
      if (val >= 100) {
        this.done = true;
      }
      if (val === this.last) {
        this.sinceLastUpdate += frameTime;
      } else {
        if (this.sinceLastUpdate) {
          this.rate = (val - this.last) / this.sinceLastUpdate;
        }
        this.catchup = (val - this.progress) / options.catchupTime;
        this.sinceLastUpdate = 0;
        this.last = val;
      }
      if (val > this.progress) {
        this.progress += this.catchup * frameTime;
      }
      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
      this.progress += scaling * this.rate * frameTime;
      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
      this.progress = Math.max(0, this.progress);
      this.progress = Math.min(100, this.progress);
      this.lastProgress = this.progress;
      return this.progress;
    };

    return Scaler;

  })();

  sources = null;

  scalers = null;

  bar = null;

  uniScaler = null;

  animation = null;

  cancelAnimation = null;

  Pace.running = false;

  handlePushState = function() {
    if (options.restartOnPushState) {
      return Pace.restart();
    }
  };

  if (window.history.pushState != null) {
    _pushState = window.history.pushState;
    window.history.pushState = function() {
      handlePushState();
      return _pushState.apply(window.history, arguments);
    };
  }

  if (window.history.replaceState != null) {
    _replaceState = window.history.replaceState;
    window.history.replaceState = function() {
      handlePushState();
      return _replaceState.apply(window.history, arguments);
    };
  }

  SOURCE_KEYS = {
    ajax: AjaxMonitor,
    elements: ElementMonitor,
    document: DocumentMonitor,
    eventLag: EventLagMonitor
  };

  (init = function() {
    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;
    Pace.sources = sources = [];
    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      type = _ref2[_j];
      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }
    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];
    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
      source = _ref4[_k];
      sources.push(new source(options));
    }
    Pace.bar = bar = new Bar;
    scalers = [];
    return uniScaler = new Scaler;
  })();

  Pace.stop = function() {
    Pace.trigger('stop');
    Pace.running = false;
    bar.destroy();
    cancelAnimation = true;
    if (animation != null) {
      if (typeof cancelAnimationFrame === "function") {
        cancelAnimationFrame(animation);
      }
      animation = null;
    }
    return init();
  };

  Pace.restart = function() {
    Pace.trigger('restart');
    Pace.stop();
    return Pace.start();
  };

  Pace.go = function() {
    var start;
    Pace.running = true;
    bar.render();
    start = now();
    cancelAnimation = false;
    return animation = runAnimation(function(frameTime, enqueueNextFrame) {
      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;
      remaining = 100 - bar.progress;
      count = sum = 0;
      done = true;
      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
        source = sources[i];
        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
        elements = (_ref2 = source.elements) != null ? _ref2 : [source];
        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
          element = elements[j];
          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
          done &= scaler.done;
          if (scaler.done) {
            continue;
          }
          count++;
          sum += scaler.tick(frameTime);
        }
      }
      avg = sum / count;
      bar.update(uniScaler.tick(frameTime, avg));
      if (bar.done() || done || cancelAnimation) {
        bar.update(100);
        Pace.trigger('done');
        return setTimeout(function() {
          bar.finish();
          Pace.running = false;
          return Pace.trigger('hide');
        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)));
      } else {
        return enqueueNextFrame();
      }
    });
  };

  Pace.start = function(_options) {
    extend(options, _options);
    Pace.running = true;
    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }
    if (!document.querySelector('.pace')) {
      return setTimeout(Pace.start, 50);
    } else {
      Pace.trigger('start');
      return Pace.go();
    }
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! pace */ "./node_modules/pace/pace.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Pace;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}).call(this);


/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/backend/after.js":
/*!***************************************!*\
  !*** ./resources/js/backend/after.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Loaded after CoreUI app.js

/***/ }),

/***/ "./resources/js/backend/app.js":
/*!*************************************!*\
  !*** ./resources/js/backend/app.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_coreui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/coreui */ "./node_modules/@coreui/coreui/dist/js/coreui.js");
/* harmony import */ var _coreui_coreui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./resources/js/backend/before.js":
/*!****************************************!*\
  !*** ./resources/js/backend/before.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bootstrap */ "./resources/js/bootstrap.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pace */ "./node_modules/pace/pace.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins__WEBPACK_IMPORTED_MODULE_2__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// Loaded before CoreUI app.js



$(function () {
  $('[rel="tooltip"]').tooltip({
    trigger: "hover"
  });
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/**
 * This bootstrap file is used for both frontend and backend
 */




 // Required for BS4


/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a;
window._ = lodash__WEBPACK_IMPORTED_MODULE_0___default.a; // Lodash

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = axios__WEBPACK_IMPORTED_MODULE_1___default.a;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Allows you to add data-method="METHOD to links to automatically inject a form
 * with the method on click
 *
 * Example: <a href="{{route('customers.destroy', $customer->id)}}"
 * data-method="delete" name="delete_item">Delete</a>
 *
 * Injects a form with that's fired on click of the link with a DELETE request.
 * Good because you don't have to dirty your HTML with delete forms everywhere.
 */
function addDeleteForms() {
  $('[data-method]').append(function () {
    if (!$(this).find('form').length > 0) {
      return "\n<form action='" + $(this).attr('href') + "' method='POST' name='delete_item' style='display:none'>\n" + "<input type='hidden' name='_method' value='" + $(this).attr('data-method') + "'>\n" + "<input type='hidden' name='_token' value='" + $('meta[name="csrf-token"]').attr('content') + "'>\n" + '</form>\n';
    } else {
      return '';
    }
  }).attr('href', '#').attr('style', 'cursor:pointer;').attr('onclick', '$(this).find("form").submit();');
}

$(document).ajaxStart(function () {
  $("#ajaxSpinnerContainer").show();
}).ajaxError(function (event, jqxhr, settings, thrownError) {
  $("#ajaxSpinnerContainer").hide();
}).ajaxStop(function () {
  $("#ajaxSpinnerContainer").hide();
});
/**
 * Place any jQuery/helper plugins in here.
 */

$(function () {
  /**
   * Add the data-method="delete" forms to all delete links
   */
  addDeleteForms();
  /**
   * Disable all submit buttons once clicked
   */

  $('form').submit(function () {
    $(this).find('input[type="submit"]').attr('disabled', true);
    $(this).find('button[type="submit"]').attr('disabled', true);
    return true;
  });
  /**
   * Generic confirm form delete using Sweet Alert
   */

  $('body').on('submit', 'form[name=delete_item]', function (e) {
    e.preventDefault();
    var form = this;
    var link = $('a[data-method="delete"]');
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Yes, delete';
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to delete this item?';
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      type: 'warning'
    }).then(function (result) {
      result.value && form.submit();
    });
  }).on('click', 'a[name=confirm_item]', function (e) {
    /**
     * Generic 'are you sure' confirm box
     */
    e.preventDefault();
    var link = $(this);
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to do this?';
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Continue';
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      type: 'info'
    }).then(function (result) {
      result.value && window.location.assign(link.attr('href'));
    });
  });
});

/***/ }),

/***/ 1:
/*!************************************************************************************************************!*\
  !*** multi ./resources/js/backend/before.js ./resources/js/backend/app.js ./resources/js/backend/after.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Jake\Desktop\freelance\gosam_gym_republic\resources\js\backend\before.js */"./resources/js/backend/before.js");
__webpack_require__(/*! C:\Users\Jake\Desktop\freelance\gosam_gym_republic\resources\js\backend\app.js */"./resources/js/backend/app.js");
module.exports = __webpack_require__(/*! C:\Users\Jake\Desktop\freelance\gosam_gym_republic\resources\js\backend\after.js */"./resources/js/backend/after.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvcmV1aS9jb3JldWkvZGlzdC9qcy9jb3JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhY2UvcGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvZGlzdC9wZXJmZWN0LXNjcm9sbGJhci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2JlZm9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wbHVnaW5zLmpzIl0sIm5hbWVzIjpbIiQiLCJ0b29sdGlwIiwidHJpZ2dlciIsIndpbmRvdyIsImpRdWVyeSIsIlN3YWwiLCJfIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJ0b2tlbiIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY29uc29sZSIsImVycm9yIiwiYWRkRGVsZXRlRm9ybXMiLCJhcHBlbmQiLCJmaW5kIiwibGVuZ3RoIiwiYXR0ciIsImFqYXhTdGFydCIsInNob3ciLCJhamF4RXJyb3IiLCJldmVudCIsImpxeGhyIiwic2V0dGluZ3MiLCJ0aHJvd25FcnJvciIsImhpZGUiLCJhamF4U3RvcCIsInN1Ym1pdCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImxpbmsiLCJjYW5jZWwiLCJjb25maXJtIiwidGl0bGUiLCJmaXJlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInR5cGUiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJsb2NhdGlvbiIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUE0RCxvQkFBb0IsbUJBQU8sQ0FBQyxvREFBUSxHQUFHLG1CQUFPLENBQUMseUZBQW1CO0FBQ2hJLEVBQUUsU0FDOEY7QUFDaEcsQ0FBQyxnREFBZ0Q7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFlBQVksRUFBRTtBQUNsQzs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQix5Q0FBeUM7QUFDekMsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxHQUFHOztBQUVIO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0EsdUVBQXVFO0FBQ3ZFLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLEVBQUUsRUFBRSxJQUFJOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxFQUFFLEVBQUUsSUFBSTs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQix3QkFBd0IsMEJBQTBCLFlBQVksRUFBRTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsY0FBYzs7QUFFOUQsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7QUNyckVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQix5Q0FBeUMsMEJBQTBCLDJEQUEyRCxFQUFFLGtCQUFrQiwwQkFBMEIsRUFBRSxtQ0FBbUMsOEJBQThCLG9DQUFvQyxjQUFjLEVBQUU7QUFDblMsOENBQThDLGlDQUFpQyxPQUFPLE9BQU8sNkNBQTZDLEVBQUUsV0FBVzs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBLG9DQUFvQzs7QUFFcEM7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxZQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RSxtQkFBbUI7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxtQkFBbUI7QUFDNUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esd0RBQXdELDRCQUE0QixFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSCx3REFBd0QsNEJBQTRCLEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQyxtQ0FBbUM7QUFDdkUsc0NBQXNDLDJFQUEyRTs7QUFFakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7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QixxQ0FBcUMsRUFBRTtBQUNwRTtBQUNBOztBQUVlLCtFQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7QUNueUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7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SUYsSUFBSSxDQUFDZixJQUFMLENBQVUsMkJBQVYsQ0FBRCxHQUEyQ2UsSUFBSSxDQUFDZixJQUFMLENBQVUsMkJBQVYsQ0FBM0MsR0FBb0YsVUFBcEc7QUFFQWpCLFFBQUksQ0FBQ29DLElBQUwsQ0FBVTtBQUNORCxXQUFLLEVBQUVBLEtBREQ7QUFFTkUsc0JBQWdCLEVBQUUsSUFGWjtBQUdOQyx1QkFBaUIsRUFBRUosT0FIYjtBQUlOSyxzQkFBZ0IsRUFBRU4sTUFKWjtBQUtOTyxVQUFJLEVBQUU7QUFMQSxLQUFWLEVBTUdDLElBTkgsQ0FNUSxVQUFDQyxNQUFELEVBQVk7QUFDaEJBLFlBQU0sQ0FBQ0MsS0FBUCxJQUFnQjdDLE1BQU0sQ0FBQzhDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCYixJQUFJLENBQUNmLElBQUwsQ0FBVSxNQUFWLENBQXZCLENBQWhCO0FBQ0gsS0FSRDtBQVNILEdBdENEO0FBdUNILENBMURBLENBQUQsQyIsImZpbGUiOiIvanMvYmFja2VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICAqIENvcmVVSSB2Mi4xLjkgKGh0dHBzOi8vY29yZXVpLmlvKVxuICAqIENvcHlyaWdodCAyMDE5IMWBdWthc3ogSG9sZWN6ZWtcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdqcXVlcnknKSwgcmVxdWlyZSgncGVyZmVjdC1zY3JvbGxiYXInKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ2pxdWVyeScsICdwZXJmZWN0LXNjcm9sbGJhciddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuY29yZXVpID0ge30sIGdsb2JhbC5qUXVlcnksIGdsb2JhbC5QZXJmZWN0U2Nyb2xsYmFyKSk7XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCAkLCBQZXJmZWN0U2Nyb2xsYmFyKSB7ICd1c2Ugc3RyaWN0JztcblxuICAkID0gJCAmJiAkLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyAkWydkZWZhdWx0J10gOiAkO1xuICBQZXJmZWN0U2Nyb2xsYmFyID0gUGVyZmVjdFNjcm9sbGJhciAmJiBQZXJmZWN0U2Nyb2xsYmFyLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBQZXJmZWN0U2Nyb2xsYmFyWydkZWZhdWx0J10gOiBQZXJmZWN0U2Nyb2xsYmFyO1xuXG4gIHZhciBfaXNPYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xuICB9O1xuXG4gIHZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG4gIHZhciBfY29mID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG4gIFx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgdmFyIF9jb3JlID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICB2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjUnIH07XG4gIGlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gIH0pO1xuICB2YXIgX2NvcmVfMSA9IF9jb3JlLnZlcnNpb247XG5cbiAgdmFyIF9nbG9iYWwgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG4gIHZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICAgID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICBpZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gIH0pO1xuXG4gIHZhciBfc2hhcmVkID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICB2YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG4gIHZhciBzdG9yZSA9IF9nbG9iYWxbU0hBUkVEXSB8fCAoX2dsb2JhbFtTSEFSRURdID0ge30pO1xuXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG4gIH0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgICB2ZXJzaW9uOiBfY29yZS52ZXJzaW9uLFxuICAgIG1vZGU6ICdnbG9iYWwnLFxuICAgIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG4gIH0pO1xuICB9KTtcblxuICB2YXIgaWQgPSAwO1xuICB2YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xuICB2YXIgX3VpZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xuICB9O1xuXG4gIHZhciBfd2tzID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICB2YXIgc3RvcmUgPSBfc2hhcmVkKCd3a3MnKTtcblxuICB2YXIgU3ltYm9sID0gX2dsb2JhbC5TeW1ib2w7XG4gIHZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG4gIHZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogX3VpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xuICB9O1xuXG4gICRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4gIH0pO1xuXG4gIC8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxuXG5cbiAgdmFyIE1BVENIID0gX3drcygnbWF0Y2gnKTtcbiAgdmFyIF9pc1JlZ2V4cCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBpc1JlZ0V4cDtcbiAgICByZXR1cm4gX2lzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IF9jb2YoaXQpID09ICdSZWdFeHAnKTtcbiAgfTtcblxuICB2YXIgX2FuT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgaWYgKCFfaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gICAgcmV0dXJuIGl0O1xuICB9O1xuXG4gIHZhciBfYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICAgIHJldHVybiBpdDtcbiAgfTtcblxuICAvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcblxuXG4gIHZhciBTUEVDSUVTID0gX3drcygnc3BlY2llcycpO1xuICB2YXIgX3NwZWNpZXNDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gICAgdmFyIEMgPSBfYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gICAgdmFyIFM7XG4gICAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IF9hbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IF9hRnVuY3Rpb24oUyk7XG4gIH07XG5cbiAgLy8gNy4xLjQgVG9JbnRlZ2VyXG4gIHZhciBjZWlsID0gTWF0aC5jZWlsO1xuICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICB2YXIgX3RvSW50ZWdlciA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xuICB9O1xuXG4gIC8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG4gIHZhciBfZGVmaW5lZCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgICByZXR1cm4gaXQ7XG4gIH07XG5cbiAgLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4gIC8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxuICB2YXIgX3N0cmluZ0F0ID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgICB2YXIgcyA9IFN0cmluZyhfZGVmaW5lZCh0aGF0KSk7XG4gICAgICB2YXIgaSA9IF90b0ludGVnZXIocG9zKTtcbiAgICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgICB2YXIgYSwgYjtcbiAgICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBhdCA9IF9zdHJpbmdBdCh0cnVlKTtcblxuICAgLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxuICB2YXIgX2FkdmFuY2VTdHJpbmdJbmRleCA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICAgIHJldHVybiBpbmRleCArICh1bmljb2RlID8gYXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xuICB9O1xuXG4gIC8vIDcuMS4xNSBUb0xlbmd0aFxuXG4gIHZhciBtaW4gPSBNYXRoLm1pbjtcbiAgdmFyIF90b0xlbmd0aCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpdCA+IDAgPyBtaW4oX3RvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuICB9O1xuXG4gIC8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG5cbiAgdmFyIFRBRyA9IF93a3MoJ3RvU3RyaW5nVGFnJyk7XG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gIHZhciBBUkcgPSBfY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuICAvLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxuICB2YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGl0W2tleV07XG4gICAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIH07XG5cbiAgdmFyIF9jbGFzc29mID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8sIFQsIEI7XG4gICAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgICAgOiBBUkcgPyBfY29mKE8pXG4gICAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgICA6IChCID0gX2NvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG4gIH07XG5cbiAgdmFyIGJ1aWx0aW5FeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuXG4gICAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbiAgdmFyIF9yZWdleHBFeGVjQWJzdHJhY3QgPSBmdW5jdGlvbiAoUiwgUykge1xuICAgIHZhciBleGVjID0gUi5leGVjO1xuICAgIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlc3VsdCA9IGV4ZWMuY2FsbChSLCBTKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGlmIChfY2xhc3NvZihSKSAhPT0gJ1JlZ0V4cCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1aWx0aW5FeGVjLmNhbGwoUiwgUyk7XG4gIH07XG5cbiAgLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcblxuICB2YXIgX2ZsYWdzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGF0ID0gX2FuT2JqZWN0KHRoaXMpO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gICAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gICAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbiAgLy8gVGhpcyBhbHdheXMgcmVmZXJzIHRvIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24sIGJlY2F1c2UgdGhlXG4gIC8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuICAvLyB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYmVmb3JlIHBhdGNoaW5nIHRoZSBtZXRob2QuXG4gIHZhciBuYXRpdmVSZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xuXG4gIHZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbiAgdmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcblxuICB2YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmUxID0gL2EvLFxuICAgICAgICByZTIgPSAvYiovZztcbiAgICBuYXRpdmVFeGVjLmNhbGwocmUxLCAnYScpO1xuICAgIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gICAgcmV0dXJuIHJlMVtMQVNUX0lOREVYXSAhPT0gMCB8fCByZTJbTEFTVF9JTkRFWF0gIT09IDA7XG4gIH0pKCk7XG5cbiAgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxuICB2YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG4gIHZhciBQQVRDSCA9IFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyB8fCBOUENHX0lOQ0xVREVEO1xuXG4gIGlmIChQQVRDSCkge1xuICAgIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICAgIHZhciByZSA9IHRoaXM7XG4gICAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeJyArIHJlLnNvdXJjZSArICckKD8hXFxcXHMpJywgX2ZsYWdzLmNhbGwocmUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgICBtYXRjaCA9IG5hdGl2ZUV4ZWMuY2FsbChyZSwgc3RyKTtcblxuICAgICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyAmJiBtYXRjaCkge1xuICAgICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgICAgfVxuICAgICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9yZWdleHBFeGVjID0gcGF0Y2hlZEV4ZWM7XG5cbiAgdmFyIF9mYWlscyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxuICB2YXIgX2Rlc2NyaXB0b3JzID0gIV9mYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG4gIH0pO1xuXG4gIHZhciBkb2N1bWVudCQxID0gX2dsb2JhbC5kb2N1bWVudDtcbiAgLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG4gIHZhciBpcyA9IF9pc09iamVjdChkb2N1bWVudCQxKSAmJiBfaXNPYmplY3QoZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50KTtcbiAgdmFyIF9kb21DcmVhdGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXMgPyBkb2N1bWVudCQxLmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG4gIH07XG5cbiAgdmFyIF9pZThEb21EZWZpbmUgPSAhX2Rlc2NyaXB0b3JzICYmICFfZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2RvbUNyZWF0ZSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xuICB9KTtcblxuICAvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcblxuICAvLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuICAvLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xuICB2YXIgX3RvUHJpbWl0aXZlID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gICAgaWYgKCFfaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gICAgdmFyIGZuLCB2YWw7XG4gICAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFfaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICAgIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhX2lzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFfaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfTtcblxuICB2YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbiAgdmFyIGYgPSBfZGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gICAgX2FuT2JqZWN0KE8pO1xuICAgIFAgPSBfdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gICAgX2FuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICAgIGlmIChfaWU4RG9tRGVmaW5lKSB0cnkge1xuICAgICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gICAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgcmV0dXJuIE87XG4gIH07XG5cbiAgdmFyIF9vYmplY3REcCA9IHtcbiAgXHRmOiBmXG4gIH07XG5cbiAgdmFyIF9wcm9wZXJ0eURlc2MgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIHZhciBfaGlkZSA9IF9kZXNjcmlwdG9ycyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gX29iamVjdERwLmYob2JqZWN0LCBrZXksIF9wcm9wZXJ0eURlc2MoMSwgdmFsdWUpKTtcbiAgfSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG5cbiAgdmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG4gIHZhciBfaGFzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbiAgfTtcblxuICB2YXIgX2Z1bmN0aW9uVG9TdHJpbmcgPSBfc2hhcmVkKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4gIHZhciBfcmVkZWZpbmUgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4gIHZhciBTUkMgPSBfdWlkKCdzcmMnKTtcblxuICB2YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbiAgdmFyIFRQTCA9ICgnJyArIF9mdW5jdGlvblRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG4gIF9jb3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gX2Z1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG4gIH07XG5cbiAgKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gICAgaWYgKGlzRnVuY3Rpb24pIF9oYXModmFsLCAnbmFtZScpIHx8IF9oaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICAgIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICAgIGlmIChpc0Z1bmN0aW9uKSBfaGFzKHZhbCwgU1JDKSB8fCBfaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICAgIGlmIChPID09PSBfZ2xvYmFsKSB7XG4gICAgICBPW2tleV0gPSB2YWw7XG4gICAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIF9oaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgICAgT1trZXldID0gdmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfVxuICAvLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbiAgfSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCBfZnVuY3Rpb25Ub1N0cmluZy5jYWxsKHRoaXMpO1xuICB9KTtcbiAgfSk7XG5cbiAgLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5cbiAgdmFyIF9jdHggPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICAgIF9hRnVuY3Rpb24oZm4pO1xuICAgIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgICB9O1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgICB9O1xuICAgICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4gIHZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICAgIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICAgIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICAgIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICAgIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gICAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICAgIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBfZ2xvYmFsIDogSVNfU1RBVElDID8gX2dsb2JhbFtuYW1lXSB8fCAoX2dsb2JhbFtuYW1lXSA9IHt9KSA6IChfZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICAgIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gX2NvcmUgOiBfY29yZVtuYW1lXSB8fCAoX2NvcmVbbmFtZV0gPSB7fSk7XG4gICAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gICAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICAgIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBfY3R4KG91dCwgX2dsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBfY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgICBpZiAodGFyZ2V0KSBfcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgICAvLyBleHBvcnRcbiAgICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBfaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gICAgfVxuICB9O1xuICBfZ2xvYmFsLmNvcmUgPSBfY29yZTtcbiAgLy8gdHlwZSBiaXRtYXBcbiAgJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiAgJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiAgJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiAgJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuICAkZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiAgJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4gICRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuICAkZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbiAgdmFyIF9leHBvcnQgPSAkZXhwb3J0O1xuXG4gIF9leHBvcnQoe1xuICAgIHRhcmdldDogJ1JlZ0V4cCcsXG4gICAgcHJvdG86IHRydWUsXG4gICAgZm9yY2VkOiBfcmVnZXhwRXhlYyAhPT0gLy4vLmV4ZWNcbiAgfSwge1xuICAgIGV4ZWM6IF9yZWdleHBFeGVjXG4gIH0pO1xuXG4gIHZhciBTUEVDSUVTJDEgPSBfd2tzKCdzcGVjaWVzJyk7XG5cbiAgdmFyIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTID0gIV9mYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gI3JlcGxhY2UgbmVlZHMgYnVpbHQtaW4gc3VwcG9ydCBmb3IgbmFtZWQgZ3JvdXBzLlxuICAgIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgICB2YXIgcmUgPSAvLi87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHJlc3VsdC5ncm91cHMgPSB7IGE6ICc3JyB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHJldHVybiAnJy5yZXBsYWNlKHJlLCAnJDxhPicpICE9PSAnNyc7XG4gIH0pO1xuXG4gIHZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuICAgIHZhciByZSA9IC8oPzopLztcbiAgICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICAgIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAyICYmIHJlc3VsdFswXSA9PT0gJ2EnICYmIHJlc3VsdFsxXSA9PT0gJ2InO1xuICB9KSgpO1xuXG4gIHZhciBfZml4UmVXa3MgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgICB2YXIgU1lNQk9MID0gX3drcyhLRVkpO1xuXG4gICAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhX2ZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICAgIHZhciBPID0ge307XG4gICAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgICB9KTtcblxuICAgIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgPyAhX2ZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgICAgdmFyIHJlID0gL2EvO1xuICAgICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuICAgICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVMkMV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICAgIH1cbiAgICAgIHJlW1NZTUJPTF0oJycpO1xuICAgICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICAgIH0pIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKFxuICAgICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgICApIHtcbiAgICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICAgIHZhciBmbnMgPSBleGVjKFxuICAgICAgICBfZGVmaW5lZCxcbiAgICAgICAgU1lNQk9MLFxuICAgICAgICAnJ1tLRVldLFxuICAgICAgICBmdW5jdGlvbiBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICBpZiAocmVnZXhwLmV4ZWMgPT09IF9yZWdleHBFeGVjKSB7XG4gICAgICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZU1ldGhvZC5jYWxsKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICAgICAgdmFyIHJ4Zm4gPSBmbnNbMV07XG5cbiAgICAgIF9yZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICAgIF9oaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICB2YXIgJG1pbiA9IE1hdGgubWluO1xuICB2YXIgJHB1c2ggPSBbXS5wdXNoO1xuICB2YXIgJFNQTElUID0gJ3NwbGl0JztcbiAgdmFyIExFTkdUSCA9ICdsZW5ndGgnO1xuICB2YXIgTEFTVF9JTkRFWCQxID0gJ2xhc3RJbmRleCc7XG4gIHZhciBNQVhfVUlOVDMyID0gMHhmZmZmZmZmZjtcblxuICAvLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ3gnLCAneScpIC0+IC94L3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxuICB2YXIgU1VQUE9SVFNfWSA9ICFfZmFpbHMoZnVuY3Rpb24gKCkgeyB9KTtcblxuICAvLyBAQHNwbGl0IGxvZ2ljXG4gIF9maXhSZVdrcygnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gICAgdmFyIGludGVybmFsU3BsaXQ7XG4gICAgaWYgKFxuICAgICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICAgICkge1xuICAgICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107XG4gICAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICAgIGlmICghX2lzUmVnZXhwKHNlcGFyYXRvcikpIHJldHVybiAkc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgICB2YXIgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICAgICAgd2hpbGUgKG1hdGNoID0gX3JlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XG4gICAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYJDFdO1xuICAgICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICAgIGlmIChtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSAkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICAgIGlmIChvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KSBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWCQxXSA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWCQxXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKSB7XG4gICAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgICB9O1xuICAgIC8vIENoYWtyYSwgVjhcbiAgICB9IGVsc2UgaWYgKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSkge1xuICAgICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogJHNwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRlcm5hbFNwbGl0ID0gJHNwbGl0O1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdGAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNwbGl0XG4gICAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgICAgdmFyIHNwbGl0dGVyID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBzcGxpdHRlci5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpXG4gICAgICAgICAgOiBpbnRlcm5hbFNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIH0sXG4gICAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XWAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc3BsaXRcbiAgICAgIC8vXG4gICAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgICAvLyB0aGUgJ3knIGZsYWcuXG4gICAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJlZ2V4cCwgdGhpcywgbGltaXQsIGludGVybmFsU3BsaXQgIT09ICRzcGxpdCk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgICB2YXIgcnggPSBfYW5PYmplY3QocmVnZXhwKTtcbiAgICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICAgIHZhciBDID0gX3NwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcblxuICAgICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcbiAgICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHJ4LnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAoU1VQUE9SVFNfWSA/ICd5JyA6ICdnJyk7XG5cbiAgICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cbiAgICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhTVVBQT1JUU19ZID8gcnggOiAnXig/OicgKyByeC5zb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gX3JlZ2V4cEV4ZWNBYnN0cmFjdChzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICB2YXIgcSA9IDA7XG4gICAgICAgIHZhciBBID0gW107XG4gICAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBTVVBQT1JUU19ZID8gcSA6IDA7XG4gICAgICAgICAgdmFyIHogPSBfcmVnZXhwRXhlY0Fic3RyYWN0KHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICAgIHZhciBlO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAgIChlID0gJG1pbihfdG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFNVUFBPUlRTX1kgPyAwIDogcSkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBxID0gX2FkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBBLnB1c2goUy5zbGljZShwLCBxKSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICBBLnB1c2goeltpXSk7XG4gICAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQS5wdXNoKFMuc2xpY2UocCkpO1xuICAgICAgICByZXR1cm4gQTtcbiAgICAgIH1cbiAgICBdO1xuICB9KTtcblxuICAvKlxyXG4gICogcmVxdWlyZWQgcG9seWZpbGxzXHJcbiAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG4gIH0pKCk7XG4gIC8qKiBJRTksIElFMTAgYW5kIElFMTEgcmVxdWlyZXMgYWxsIG9mIHRoZSBmb2xsb3dpbmcgcG9seWZpbGxzLiAqKi9cbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0J1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvbWF0aCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvbWFwJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3dlYWstbWFwJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3NldCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNy9vYmplY3QnXG5cbiAgLyoqIElFMTAgYW5kIElFMTEgcmVxdWlyZXMgdGhlIGZvbGxvd2luZyBmb3IgdGhlIFJlZmxlY3QgQVBJLiAqL1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnXG5cbiAgLyoqIEV2ZXJncmVlbiBicm93c2VycyByZXF1aXJlIHRoZXNlLiAqKi9cbiAgLy8gVXNlZCBmb3IgcmVmbGVjdC1tZXRhZGF0YSBpbiBKSVQuIElmIHlvdSB1c2UgQU9UIChhbmQgb25seSBBbmd1bGFyIGRlY29yYXRvcnMpLCB5b3UgY2FuIHJlbW92ZS5cbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0J1xuICAvLyBDdXN0b21FdmVudCgpIGNvbnN0cnVjdG9yIGZ1bmN0aW9uYWxpdHkgaW4gSUU5LCBJRTEwLCBJRTExXG4gIC8vIChmdW5jdGlvbiAoKSB7XG4gIC8vXG4gIC8vICAgaWYgKCB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gZmFsc2VcbiAgLy9cbiAgLy8gICBmdW5jdGlvbiBDdXN0b21FdmVudCAoIGV2ZW50LCBwYXJhbXMgKSB7XG4gIC8vICAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH1cbiAgLy8gICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApXG4gIC8vICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KCBldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsIClcbiAgLy8gICAgIHJldHVybiBldnRcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZVxuICAvL1xuICAvLyAgIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50XG4gIC8vIH0pKClcblxuICAvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgdmFyIF9pb2JqZWN0ID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gX2NvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xuICB9O1xuXG4gIC8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xuXG5cbiAgdmFyIF90b0lvYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gX2lvYmplY3QoX2RlZmluZWQoaXQpKTtcbiAgfTtcblxuICB2YXIgbWF4ID0gTWF0aC5tYXg7XG4gIHZhciBtaW4kMSA9IE1hdGgubWluO1xuICB2YXIgX3RvQWJzb2x1dGVJbmRleCA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gICAgaW5kZXggPSBfdG9JbnRlZ2VyKGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbiQxKGluZGV4LCBsZW5ndGgpO1xuICB9O1xuXG4gIC8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2ZcbiAgLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcblxuXG5cbiAgdmFyIF9hcnJheUluY2x1ZGVzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgICAgdmFyIE8gPSBfdG9Jb2JqZWN0KCR0aGlzKTtcbiAgICAgIHZhciBsZW5ndGggPSBfdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgdmFyIGluZGV4ID0gX3RvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgc2hhcmVkID0gX3NoYXJlZCgna2V5cycpO1xuXG4gIHZhciBfc2hhcmVkS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSBfdWlkKGtleSkpO1xuICB9O1xuXG4gIHZhciBhcnJheUluZGV4T2YgPSBfYXJyYXlJbmNsdWRlcyhmYWxzZSk7XG4gIHZhciBJRV9QUk9UTyA9IF9zaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbiAgdmFyIF9vYmplY3RLZXlzSW50ZXJuYWwgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICAgIHZhciBPID0gX3RvSW9iamVjdChvYmplY3QpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBfaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gICAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChfaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbiAgdmFyIF9lbnVtQnVnS2V5cyA9IChcbiAgICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuICApLnNwbGl0KCcsJyk7XG5cbiAgLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG5cblxuXG4gIHZhciBfb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICAgIHJldHVybiBfb2JqZWN0S2V5c0ludGVybmFsKE8sIF9lbnVtQnVnS2V5cyk7XG4gIH07XG5cbiAgdmFyIGYkMSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgdmFyIF9vYmplY3RHb3BzID0ge1xuICBcdGY6IGYkMVxuICB9O1xuXG4gIHZhciBmJDIgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuICB2YXIgX29iamVjdFBpZSA9IHtcbiAgXHRmOiBmJDJcbiAgfTtcblxuICAvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG5cbiAgdmFyIF90b09iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBPYmplY3QoX2RlZmluZWQoaXQpKTtcbiAgfTtcblxuICAvLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG5cblxuXG5cblxuICB2YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbiAgLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG4gIHZhciBfb2JqZWN0QXNzaWduID0gISRhc3NpZ24gfHwgX2ZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgQSA9IHt9O1xuICAgIHZhciBCID0ge307XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIFMgPSBTeW1ib2woKTtcbiAgICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gICAgQVtTXSA9IDc7XG4gICAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gICAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG4gIH0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgVCA9IF90b09iamVjdCh0YXJnZXQpO1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgaW5kZXggPSAxO1xuICAgIHZhciBnZXRTeW1ib2xzID0gX29iamVjdEdvcHMuZjtcbiAgICB2YXIgaXNFbnVtID0gX29iamVjdFBpZS5mO1xuICAgIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICAgIHZhciBTID0gX2lvYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IF9vYmplY3RLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IF9vYmplY3RLZXlzKFMpO1xuICAgICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgdmFyIGogPSAwO1xuICAgICAgdmFyIGtleTtcbiAgICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICAgIH0gcmV0dXJuIFQ7XG4gIH0gOiAkYXNzaWduO1xuXG4gIC8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG5cblxuICBfZXhwb3J0KF9leHBvcnQuUyArIF9leHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiBfb2JqZWN0QXNzaWduIH0pO1xuXG4gIHZhciBfaXRlcmF0b3JzID0ge307XG5cbiAgdmFyIF9vYmplY3REcHMgPSBfZGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICAgIF9hbk9iamVjdChPKTtcbiAgICB2YXIga2V5cyA9IF9vYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIFA7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIF9vYmplY3REcC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICAgIHJldHVybiBPO1xuICB9O1xuXG4gIHZhciBkb2N1bWVudCQyID0gX2dsb2JhbC5kb2N1bWVudDtcbiAgdmFyIF9odG1sID0gZG9jdW1lbnQkMiAmJiBkb2N1bWVudCQyLmRvY3VtZW50RWxlbWVudDtcblxuICAvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcblxuXG5cbiAgdmFyIElFX1BST1RPJDEgPSBfc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuICB2YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4gIHZhciBQUk9UT1RZUEUkMSA9ICdwcm90b3R5cGUnO1xuXG4gIC8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbiAgdmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgICB2YXIgaWZyYW1lID0gX2RvbUNyZWF0ZSgnaWZyYW1lJyk7XG4gICAgdmFyIGkgPSBfZW51bUJ1Z0tleXMubGVuZ3RoO1xuICAgIHZhciBsdCA9ICc8JztcbiAgICB2YXIgZ3QgPSAnPic7XG4gICAgdmFyIGlmcmFtZURvY3VtZW50O1xuICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIF9odG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAgIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gICAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICAgIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICAgIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICAgIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRSQxXVtfZW51bUJ1Z0tleXNbaV1dO1xuICAgIHJldHVybiBjcmVhdGVEaWN0KCk7XG4gIH07XG5cbiAgdmFyIF9vYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoTyAhPT0gbnVsbCkge1xuICAgICAgRW1wdHlbUFJPVE9UWVBFJDFdID0gX2FuT2JqZWN0KE8pO1xuICAgICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgICBFbXB0eVtQUk9UT1RZUEUkMV0gPSBudWxsO1xuICAgICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgICAgcmVzdWx0W0lFX1BST1RPJDFdID0gTztcbiAgICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICAgIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBfb2JqZWN0RHBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG4gIH07XG5cbiAgdmFyIGRlZiA9IF9vYmplY3REcC5mO1xuXG4gIHZhciBUQUckMSA9IF93a3MoJ3RvU3RyaW5nVGFnJyk7XG5cbiAgdmFyIF9zZXRUb1N0cmluZ1RhZyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gICAgaWYgKGl0ICYmICFfaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUckMSkpIGRlZihpdCwgVEFHJDEsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xuICB9O1xuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4gIC8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG4gIF9oaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBfd2tzKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxuICB2YXIgX2l0ZXJDcmVhdGUgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBfb2JqZWN0Q3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IF9wcm9wZXJ0eURlc2MoMSwgbmV4dCkgfSk7XG4gICAgX3NldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xuICB9O1xuXG4gIC8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG5cblxuICB2YXIgSUVfUFJPVE8kMiA9IF9zaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG4gIHZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbiAgdmFyIF9vYmplY3RHcG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgICBPID0gX3RvT2JqZWN0KE8pO1xuICAgIGlmIChfaGFzKE8sIElFX1BST1RPJDIpKSByZXR1cm4gT1tJRV9QUk9UTyQyXTtcbiAgICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG4gIH07XG5cbiAgdmFyIElURVJBVE9SID0gX3drcygnaXRlcmF0b3InKTtcbiAgdmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIHZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbiAgdmFyIEtFWVMgPSAna2V5cyc7XG4gIHZhciBWQUxVRVMgPSAndmFsdWVzJztcblxuICB2YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbiAgdmFyIF9pdGVyRGVmaW5lID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAgIF9pdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9O1xuICAgIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gICAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICAgIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICAgIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICAgIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICAgIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gICAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICAgIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAgIC8vIEZpeCBuYXRpdmVcbiAgICBpZiAoJGFueU5hdGl2ZSkge1xuICAgICAgSXRlcmF0b3JQcm90b3R5cGUgPSBfb2JqZWN0R3BvKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICAgIF9zZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICAgIGlmICh0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIF9oaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICAgIH1cbiAgICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgICBpZiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSB7XG4gICAgICBfaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgICB9XG4gICAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICAgIF9pdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgICBfaXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICAgIGlmIChERUZBVUxUKSB7XG4gICAgICBtZXRob2RzID0ge1xuICAgICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICAgIH07XG4gICAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICAgIGlmICghKGtleSBpbiBwcm90bykpIF9yZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgICAgfSBlbHNlIF9leHBvcnQoX2V4cG9ydC5QICsgX2V4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZHM7XG4gIH07XG5cbiAgdmFyICRhdCA9IF9zdHJpbmdBdCh0cnVlKTtcblxuICAvLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG4gIF9pdGVyRGVmaW5lKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICAgIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICAvLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgTyA9IHRoaXMuX3Q7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgICB2YXIgcG9pbnQ7XG4gICAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gICAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICAgIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICAgIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbiAgfSk7XG5cbiAgLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxuXG4gIHZhciBfaXRlckNhbGwgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZW50cmllcyA/IGZuKF9hbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIF9hbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxuXG4gIHZhciBJVEVSQVRPUiQxID0gX3drcygnaXRlcmF0b3InKTtcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbiAgdmFyIF9pc0FycmF5SXRlciA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChfaXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SJDFdID09PSBpdCk7XG4gIH07XG5cbiAgdmFyIF9jcmVhdGVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICAgIGlmIChpbmRleCBpbiBvYmplY3QpIF9vYmplY3REcC5mKG9iamVjdCwgaW5kZXgsIF9wcm9wZXJ0eURlc2MoMCwgdmFsdWUpKTtcbiAgICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbiAgfTtcblxuICB2YXIgSVRFUkFUT1IkMiA9IF93a3MoJ2l0ZXJhdG9yJyk7XG5cbiAgdmFyIGNvcmVfZ2V0SXRlcmF0b3JNZXRob2QgPSBfY29yZS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUiQyXVxuICAgICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgICAgfHwgX2l0ZXJhdG9yc1tfY2xhc3NvZihpdCldO1xuICB9O1xuXG4gIHZhciBJVEVSQVRPUiQzID0gX3drcygnaXRlcmF0b3InKTtcbiAgdmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SJDNdKCk7XG4gICAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxuICB2YXIgX2l0ZXJEZXRlY3QgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgc2FmZSA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICB2YXIgYXJyID0gWzddO1xuICAgICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1IkM10oKTtcbiAgICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICAgIGFycltJVEVSQVRPUiQzXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgICBleGVjKGFycik7XG4gICAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gICAgcmV0dXJuIHNhZmU7XG4gIH07XG5cbiAgX2V4cG9ydChfZXhwb3J0LlMgKyBfZXhwb3J0LkYgKiAhX2l0ZXJEZXRlY3QoZnVuY3Rpb24gKGl0ZXIpIHsgfSksICdBcnJheScsIHtcbiAgICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgdmFyIE8gPSBfdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciBpdGVyRm4gPSBjb3JlX2dldEl0ZXJhdG9yTWV0aG9kKE8pO1xuICAgICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IF9jdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIF9pc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICAgIF9jcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gX2l0ZXJDYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVuZ3RoID0gX3RvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICAgIF9jcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBtYXgkMSA9IE1hdGgubWF4O1xuICB2YXIgbWluJDIgPSBNYXRoLm1pbjtcbiAgdmFyIGZsb29yJDEgPSBNYXRoLmZsb29yO1xuICB2YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJmAnXXxcXGRcXGQ/fDxbXj5dKj4pL2c7XG4gIHZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmYCddfFxcZFxcZD8pL2c7XG5cbiAgdmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/IGl0IDogU3RyaW5nKGl0KTtcbiAgfTtcblxuICAvLyBAQHJlcGxhY2UgbG9naWNcbiAgX2ZpeFJlV2tzKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAgICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICAgIHZhciBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gZm4uY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgICAgfSxcbiAgICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICAgIGZ1bmN0aW9uIChyZWdleHAsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKCRyZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgICB2YXIgcnggPSBfYW5PYmplY3QocmVnZXhwKTtcbiAgICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIGlmICghZnVuY3Rpb25hbFJlcGxhY2UpIHJlcGxhY2VWYWx1ZSA9IFN0cmluZyhyZXBsYWNlVmFsdWUpO1xuICAgICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IF9yZWdleHBFeGVjQWJzdHJhY3QocngsIFMpO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICAgIGlmICghZ2xvYmFsKSBicmVhaztcbiAgICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBfYWR2YW5jZVN0cmluZ0luZGV4KFMsIF90b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgICAgIHZhciBtYXRjaGVkID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4JDEobWluJDIoX3RvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICAgIHZhciBjYXB0dXJlcyA9IFtdO1xuICAgICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgICAgLy8gYnV0IGZvciBzb21lIHJlYXNvbiBgbmF0aXZlU2xpY2UuY2FsbChyZXN1bHQsIDEsIHJlc3VsdC5sZW5ndGgpYCAoY2FsbGVkIGluXG4gICAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCByZXN1bHQubGVuZ3RoOyBqKyspIGNhcHR1cmVzLnB1c2gobWF5YmVUb1N0cmluZyhyZXN1bHRbal0pKTtcbiAgICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgICB2YXIgcmVwbGFjZXJBcmdzID0gW21hdGNoZWRdLmNvbmNhdChjYXB0dXJlcywgcG9zaXRpb24sIFMpO1xuICAgICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBvc2l0aW9uID49IG5leHRTb3VyY2VQb3NpdGlvbikge1xuICAgICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgICAgfVxuICAgIF07XG5cbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxuICAgIGZ1bmN0aW9uIGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgICAgIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgIHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuICAgICAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmFtZWRDYXB0dXJlcyA9IF90b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICAgICAgfVxuICAgICAgcmV0dXJuICRyZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICAgIHN3aXRjaCAoY2guY2hhckF0KDApKSB7XG4gICAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICAgIGNhc2UgJ2AnOiByZXR1cm4gc3RyLnNsaWNlKDAsIHBvc2l0aW9uKTtcbiAgICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgY2FwdHVyZSA9IG5hbWVkQ2FwdHVyZXNbY2guc2xpY2UoMSwgLTEpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICAgIHZhciBuID0gK2NoO1xuICAgICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgICB2YXIgZiA9IGZsb29yJDEobiAvIDEwKTtcbiAgICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2guY2hhckF0KDEpIDogY2FwdHVyZXNbZiAtIDFdICsgY2guY2hhckF0KDEpO1xuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjkpOiBhamF4LWxvYWQuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICB2YXIgQWpheExvYWQgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBDb25zdGFudHNcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnYWpheExvYWQnO1xuICAgIHZhciBWRVJTSU9OID0gJzIuMS45JztcbiAgICB2YXIgREFUQV9LRVkgPSAnY29yZXVpLmFqYXhMb2FkJztcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICAgIE5BVl9QSUxMUzogJ25hdi1waWxscycsXG4gICAgICBOQVZfVEFCUzogJ25hdi10YWJzJyxcbiAgICAgIE9QRU46ICdvcGVuJyxcbiAgICAgIFZJRVdfU0NSSVBUOiAndmlldy1zY3JpcHQnXG4gICAgfTtcbiAgICB2YXIgRXZlbnQgPSB7XG4gICAgICBDTElDSzogJ2NsaWNrJ1xuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgSEVBRDogJ2hlYWQnLFxuICAgICAgTkFWX0RST1BET1dOOiAnLnNpZGViYXItbmF2IC5uYXYtZHJvcGRvd24nLFxuICAgICAgTkFWX0xJTks6ICcuc2lkZWJhci1uYXYgLm5hdi1saW5rJyxcbiAgICAgIE5BVl9JVEVNOiAnLnNpZGViYXItbmF2IC5uYXYtaXRlbScsXG4gICAgICBWSUVXX1NDUklQVDogJy52aWV3LXNjcmlwdCdcbiAgICB9O1xuICAgIHZhciBEZWZhdWx0ID0ge1xuICAgICAgZGVmYXVsdFBhZ2U6ICdtYWluLmh0bWwnLFxuICAgICAgZXJyb3JQYWdlOiAnNDA0Lmh0bWwnLFxuICAgICAgc3VicGFnZXNEaXJlY3Rvcnk6ICd2aWV3cy8nXG4gICAgfTtcblxuICAgIHZhciBBamF4TG9hZCA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIEFqYXhMb2FkKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHZhciB1cmwgPSBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xuXG4gICAgICAgIGlmICh1cmwgIT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5zZXRVcFVybCh1cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0VXBVcmwodGhpcy5fY29uZmlnLmRlZmF1bHRQYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gQWpheExvYWQucHJvdG90eXBlO1xuXG4gICAgICAvLyBQdWJsaWNcbiAgICAgIF9wcm90by5sb2FkUGFnZSA9IGZ1bmN0aW9uIGxvYWRQYWdlKHVybCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgICAgIHZhciBjb25maWcgPSB0aGlzLl9jb25maWc7XG5cbiAgICAgICAgdmFyIGxvYWRTY3JpcHRzID0gZnVuY3Rpb24gbG9hZFNjcmlwdHMoc3JjLCBlbGVtZW50KSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZWxlbWVudCA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgICAgc2NyaXB0LnNyYyA9IHNyY1tlbGVtZW50XTtcbiAgICAgICAgICBzY3JpcHQuY2xhc3NOYW1lID0gQ2xhc3NOYW1lLlZJRVdfU0NSSVBUOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbXVsdGktYXNzaWduXG5cbiAgICAgICAgICBzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWFkeVN0YXRlIHx8IHRoaXMucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICBpZiAoc3JjLmxlbmd0aCA+IGVsZW1lbnQgKyAxKSB7XG4gICAgICAgICAgICAgICAgbG9hZFNjcmlwdHMoc3JjLCBlbGVtZW50ICsgMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgIHVybDogY29uZmlnLnN1YnBhZ2VzRGlyZWN0b3J5ICsgdXJsLFxuICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXG4gICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gYmVmb3JlU2VuZCgpIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuVklFV19TQ1JJUFQpLnJlbW92ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXN1bHQpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IHJlc3VsdDtcbiAgICAgICAgICAgIHZhciBzY3JpcHRzID0gQXJyYXkuZnJvbSh3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpKS5tYXAoZnVuY3Rpb24gKHNjcmlwdCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2NyaXB0LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdzcmMnKS5ub2RlVmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JykuZm9yRWFjaChmdW5jdGlvbiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCdib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmh0bWwod3JhcHBlcik7XG5cbiAgICAgICAgICAgIGlmIChzY3JpcHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBsb2FkU2NyaXB0cyhzY3JpcHRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNvbmZpZy5lcnJvclBhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5zZXRVcFVybCA9IGZ1bmN0aW9uIHNldFVwVXJsKHVybCkge1xuICAgICAgICAkKFNlbGVjdG9yLk5BVl9MSU5LKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZfRFJPUERPV04pLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKTtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZfRFJPUERPV04gKyBcIjpoYXMoYVtocmVmPVxcXCJcIiArIHVybC5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCc/JylbMF0gKyBcIlxcXCJdKVwiKS5hZGRDbGFzcyhDbGFzc05hbWUuT1BFTik7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWX0lURU0gKyBcIiBhW2hyZWY9XFxcIlwiICsgdXJsLnJlcGxhY2UoL15cXC8vLCAnJykuc3BsaXQoJz8nKVswXSArIFwiXFxcIl1cIikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgIHRoaXMubG9hZFBhZ2UodXJsKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5sb2FkQmxhbmsgPSBmdW5jdGlvbiBsb2FkQmxhbmsodXJsKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ubG9hZFRvcCA9IGZ1bmN0aW9uIGxvYWRUb3AodXJsKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgIH0gLy8gUHJpdmF0ZVxuICAgICAgO1xuXG4gICAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHQsIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5OQVZfTElOSyArIFwiW2hyZWYhPVxcXCIjXFxcIl1cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnRhcmdldCA9PT0gJ190b3AnKSB7XG4gICAgICAgICAgICBfdGhpcy5sb2FkVG9wKGV2ZW50LmN1cnJlbnRUYXJnZXQuaHJlZik7XG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnRhcmdldCA9PT0gJ19ibGFuaycpIHtcbiAgICAgICAgICAgIF90aGlzLmxvYWRCbGFuayhldmVudC5jdXJyZW50VGFyZ2V0LmhyZWYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRVcFVybChldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgQWpheExvYWQuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnO1xuXG4gICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gbmV3IEFqYXhMb2FkKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKEFqYXhMb2FkLCBudWxsLCBbe1xuICAgICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gRGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gQWpheExvYWQ7XG4gICAgfSgpO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBqUXVlcnlcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cblxuICAgICQuZm5bTkFNRV0gPSBBamF4TG9hZC5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBamF4TG9hZDtcblxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICByZXR1cm4gQWpheExvYWQuX2pRdWVyeUludGVyZmFjZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFqYXhMb2FkO1xuICB9KCQpO1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjkpOiB0b2dnbGUtY2xhc3Nlcy5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuICB2YXIgcmVtb3ZlQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoY2xhc3NOYW1lcykge1xuICAgIHJldHVybiBjbGFzc05hbWVzLm1hcChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9KS5pbmRleE9mKHRydWUpICE9PSAtMTtcbiAgfTtcblxuICB2YXIgdG9nZ2xlQ2xhc3NlcyA9IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzZXModG9nZ2xlQ2xhc3MsIGNsYXNzTmFtZXMpIHtcbiAgICB2YXIgYnJlYWtwb2ludCA9IGNsYXNzTmFtZXMuaW5kZXhPZih0b2dnbGVDbGFzcyk7XG4gICAgdmFyIG5ld0NsYXNzTmFtZXMgPSBjbGFzc05hbWVzLnNsaWNlKDAsIGJyZWFrcG9pbnQgKyAxKTtcblxuICAgIGlmIChyZW1vdmVDbGFzc2VzKG5ld0NsYXNzTmFtZXMpKSB7XG4gICAgICBuZXdDbGFzc05hbWVzLm1hcChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodG9nZ2xlQ2xhc3MpO1xuICAgIH1cbiAgfTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS45KTogYXNpZGUtbWVudS5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIHZhciBBc2lkZU1lbnUgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBDb25zdGFudHNcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnYXNpZGUtbWVudSc7XG4gICAgdmFyIFZFUlNJT04gPSAnMi4xLjknO1xuICAgIHZhciBEQVRBX0tFWSA9ICdjb3JldWkuYXNpZGUtbWVudSc7XG4gICAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gICAgdmFyIERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBFdmVudCA9IHtcbiAgICAgIENMSUNLOiAnY2xpY2snLFxuICAgICAgTE9BRF9EQVRBX0FQSTogXCJsb2FkXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVksXG4gICAgICBUT0dHTEU6ICd0b2dnbGUnXG4gICAgfTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBCT0RZOiAnYm9keScsXG4gICAgICBBU0lERV9NRU5VOiAnLmFzaWRlLW1lbnUnLFxuICAgICAgQVNJREVfTUVOVV9UT0dHTEVSOiAnLmFzaWRlLW1lbnUtdG9nZ2xlcidcbiAgICB9O1xuICAgIHZhciBTaG93Q2xhc3NOYW1lcyA9IFsnYXNpZGUtbWVudS1zaG93JywgJ2FzaWRlLW1lbnUtc20tc2hvdycsICdhc2lkZS1tZW51LW1kLXNob3cnLCAnYXNpZGUtbWVudS1sZy1zaG93JywgJ2FzaWRlLW1lbnUteGwtc2hvdyddO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG4gICAgdmFyIEFzaWRlTWVudSA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIEFzaWRlTWVudShlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gQXNpZGVNZW51LnByb3RvdHlwZTtcblxuICAgICAgLy8gUHJpdmF0ZVxuICAgICAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLkFTSURFX01FTlVfVE9HR0xFUiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB2YXIgdG9nZ2xlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0ID8gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRvZ2dsZSA6ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgndG9nZ2xlJyk7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3Nlcyh0b2dnbGUsIFNob3dDbGFzc05hbWVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBBc2lkZU1lbnUuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBBc2lkZU1lbnUodGhpcyk7XG4gICAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKEFzaWRlTWVudSwgbnVsbCwgW3tcbiAgICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEFzaWRlTWVudTtcbiAgICB9KCk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG5cbiAgICAkKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFzaWRlTWVudSA9ICQoU2VsZWN0b3IuQVNJREVfTUVOVSk7XG5cbiAgICAgIEFzaWRlTWVudS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoYXNpZGVNZW51KTtcbiAgICB9KTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogalF1ZXJ5XHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG4gICAgJC5mbltOQU1FXSA9IEFzaWRlTWVudS5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBc2lkZU1lbnU7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIEFzaWRlTWVudS5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gQXNpZGVNZW51O1xuICB9KCQpO1xuXG4gIC8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG5cbiAgdmFyIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICAgIHJldHVybiBfY29mKGFyZykgPT0gJ0FycmF5JztcbiAgfTtcblxuICB2YXIgU1BFQ0lFUyQyID0gX3drcygnc3BlY2llcycpO1xuXG4gIHZhciBfYXJyYXlTcGVjaWVzQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgICB2YXIgQztcbiAgICBpZiAoX2lzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IF9pc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoX2lzT2JqZWN0KEMpKSB7XG4gICAgICAgIEMgPSBDW1NQRUNJRVMkMl07XG4gICAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbiAgfTtcblxuICAvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG5cblxuICB2YXIgX2FycmF5U3BlY2llc0NyZWF0ZSA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyAoX2FycmF5U3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbiAgfTtcblxuICAvLyAwIC0+IEFycmF5I2ZvckVhY2hcbiAgLy8gMSAtPiBBcnJheSNtYXBcbiAgLy8gMiAtPiBBcnJheSNmaWx0ZXJcbiAgLy8gMyAtPiBBcnJheSNzb21lXG4gIC8vIDQgLT4gQXJyYXkjZXZlcnlcbiAgLy8gNSAtPiBBcnJheSNmaW5kXG4gIC8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG5cblxuXG5cblxuICB2YXIgX2FycmF5TWV0aG9kcyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gICAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICAgIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICAgIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgICB2YXIgY3JlYXRlID0gJGNyZWF0ZSB8fCBfYXJyYXlTcGVjaWVzQ3JlYXRlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpIHtcbiAgICAgIHZhciBPID0gX3RvT2JqZWN0KCR0aGlzKTtcbiAgICAgIHZhciBzZWxmID0gX2lvYmplY3QoTyk7XG4gICAgICB2YXIgZiA9IF9jdHgoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgICB2YXIgbGVuZ3RoID0gX3RvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciB2YWwsIHJlcztcbiAgICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICAgIGVsc2UgaWYgKHJlcykgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbiAgdmFyIFVOU0NPUEFCTEVTID0gX3drcygndW5zY29wYWJsZXMnKTtcbiAgdmFyIEFycmF5UHJvdG8kMSA9IEFycmF5LnByb3RvdHlwZTtcbiAgaWYgKEFycmF5UHJvdG8kMVtVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSBfaGlkZShBcnJheVByb3RvJDEsIFVOU0NPUEFCTEVTLCB7fSk7XG4gIHZhciBfYWRkVG9VbnNjb3BhYmxlcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBBcnJheVByb3RvJDFbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xuICB9O1xuXG4gIC8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcblxuICB2YXIgJGZpbmQgPSBfYXJyYXlNZXRob2RzKDUpO1xuICB2YXIgS0VZID0gJ2ZpbmQnO1xuICB2YXIgZm9yY2VkID0gdHJ1ZTtcbiAgLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbiAgaWYgKEtFWSBpbiBbXSkgQXJyYXkoMSlbS0VZXShmdW5jdGlvbiAoKSB7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiAgX2V4cG9ydChfZXhwb3J0LlAgKyBfZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfSk7XG4gIF9hZGRUb1Vuc2NvcGFibGVzKEtFWSk7XG5cbiAgLy8gQEBtYXRjaCBsb2dpY1xuICBfZml4UmVXa3MoJ21hdGNoJywgMSwgZnVuY3Rpb24gKGRlZmluZWQsIE1BVENILCAkbWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5tYXRjaGAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLm1hdGNoXG4gICAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgICB2YXIgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gICAgICB9LFxuICAgICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF1gIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQG1hdGNoXG4gICAgICBmdW5jdGlvbiAocmVnZXhwKSB7XG4gICAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoJG1hdGNoLCByZWdleHAsIHRoaXMpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICAgIHZhciByeCA9IF9hbk9iamVjdChyZWdleHApO1xuICAgICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgICAgaWYgKCFyeC5nbG9iYWwpIHJldHVybiBfcmVnZXhwRXhlY0Fic3RyYWN0KHJ4LCBTKTtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgICAgdmFyIEEgPSBbXTtcbiAgICAgICAgdmFyIG4gPSAwO1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB3aGlsZSAoKHJlc3VsdCA9IF9yZWdleHBFeGVjQWJzdHJhY3QocngsIFMpKSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICAgIEFbbl0gPSBtYXRjaFN0cjtcbiAgICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBfYWR2YW5jZVN0cmluZ0luZGV4KFMsIF90b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgICAgbisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgICB9XG4gICAgXTtcbiAgfSk7XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgVXRpbGl0aWVzICh2Mi4xLjkpOiBnZXQtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGNzcyBjdXN0b20gcHJvcGVydHkgbmFtZVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG4gIHZhciBnZXRDc3NDdXN0b21Qcm9wZXJ0aWVzID0gZnVuY3Rpb24gZ2V0Q3NzQ3VzdG9tUHJvcGVydGllcygpIHtcbiAgICB2YXIgY3NzQ3VzdG9tUHJvcGVydGllcyA9IHt9O1xuICAgIHZhciBzaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICB2YXIgY3NzVGV4dCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IHNoZWV0cy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgdmFyIHJ1bGVzID0gc2hlZXRzW2ldLmNzc1J1bGVzO1xuXG4gICAgICBmb3IgKHZhciBqID0gcnVsZXMubGVuZ3RoIC0gMTsgaiA+IC0xOyBqLS0pIHtcbiAgICAgICAgaWYgKHJ1bGVzW2pdLnNlbGVjdG9yVGV4dCA9PT0gJy5pZS1jdXN0b20tcHJvcGVydGllcycpIHtcbiAgICAgICAgICBjc3NUZXh0ID0gcnVsZXNbal0uY3NzVGV4dDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY3NzVGV4dCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjc3NUZXh0ID0gY3NzVGV4dC5zdWJzdHJpbmcoY3NzVGV4dC5sYXN0SW5kZXhPZigneycpICsgMSwgY3NzVGV4dC5sYXN0SW5kZXhPZignfScpKTtcbiAgICBjc3NUZXh0LnNwbGl0KCc7JykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgbmFtZSA9IHByb3BlcnR5LnNwbGl0KCc6ICcpWzBdO1xuICAgICAgICB2YXIgdmFsdWUgPSBwcm9wZXJ0eS5zcGxpdCgnOiAnKVsxXTtcblxuICAgICAgICBpZiAobmFtZSAmJiB2YWx1ZSkge1xuICAgICAgICAgIGNzc0N1c3RvbVByb3BlcnRpZXNbXCItLVwiICsgbmFtZS50cmltKCldID0gdmFsdWUudHJpbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNzc0N1c3RvbVByb3BlcnRpZXM7XG4gIH07XG5cbiAgdmFyIG1pbklFVmVyc2lvbiA9IDEwO1xuXG4gIHZhciBpc0lFMXggPSBmdW5jdGlvbiBpc0lFMXgoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUgPj0gbWluSUVWZXJzaW9uO1xuICB9O1xuXG4gIHZhciBpc0N1c3RvbVByb3BlcnR5ID0gZnVuY3Rpb24gaXNDdXN0b21Qcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgIHJldHVybiBwcm9wZXJ0eS5tYXRjaCgvXi0tLiovaSk7XG4gIH07XG5cbiAgdmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUocHJvcGVydHksIGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGU7XG5cbiAgICBpZiAoaXNDdXN0b21Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgaXNJRTF4KCkpIHtcbiAgICAgIHZhciBjc3NDdXN0b21Qcm9wZXJ0aWVzID0gZ2V0Q3NzQ3VzdG9tUHJvcGVydGllcygpO1xuICAgICAgc3R5bGUgPSBjc3NDdXN0b21Qcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KS5yZXBsYWNlKC9eXFxzLywgJycpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS45KTogc2lkZWJhci5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIHZhciBTaWRlYmFyID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ29uc3RhbnRzXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ3NpZGViYXInO1xuICAgIHZhciBWRVJTSU9OID0gJzIuMS45JztcbiAgICB2YXIgREFUQV9LRVkgPSAnY29yZXVpLnNpZGViYXInO1xuICAgIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICAgIHZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIHRyYW5zaXRpb246IDQwMFxuICAgIH07XG4gICAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICAgIEFDVElWRTogJ2FjdGl2ZScsXG4gICAgICBCUkFORF9NSU5JTUlaRUQ6ICdicmFuZC1taW5pbWl6ZWQnLFxuICAgICAgTkFWX0RST1BET1dOX1RPR0dMRTogJ25hdi1kcm9wZG93bi10b2dnbGUnLFxuICAgICAgT1BFTjogJ29wZW4nLFxuICAgICAgU0lERUJBUl9GSVhFRDogJ3NpZGViYXItZml4ZWQnLFxuICAgICAgU0lERUJBUl9NSU5JTUlaRUQ6ICdzaWRlYmFyLW1pbmltaXplZCcsXG4gICAgICBTSURFQkFSX09GRl9DQU5WQVM6ICdzaWRlYmFyLW9mZi1jYW52YXMnXG4gICAgfTtcbiAgICB2YXIgRXZlbnQgPSB7XG4gICAgICBDTElDSzogJ2NsaWNrJyxcbiAgICAgIERFU1RST1k6ICdkZXN0cm95JyxcbiAgICAgIElOSVQ6ICdpbml0JyxcbiAgICAgIExPQURfREFUQV9BUEk6IFwibG9hZFwiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZLFxuICAgICAgVE9HR0xFOiAndG9nZ2xlJyxcbiAgICAgIFVQREFURTogJ3VwZGF0ZSdcbiAgICB9O1xuICAgIHZhciBTZWxlY3RvciA9IHtcbiAgICAgIEJPRFk6ICdib2R5JyxcbiAgICAgIEJSQU5EX01JTklNSVpFUjogJy5icmFuZC1taW5pbWl6ZXInLFxuICAgICAgTkFWX0RST1BET1dOX1RPR0dMRTogJy5uYXYtZHJvcGRvd24tdG9nZ2xlJyxcbiAgICAgIE5BVl9EUk9QRE9XTl9JVEVNUzogJy5uYXYtZHJvcGRvd24taXRlbXMnLFxuICAgICAgTkFWX0lURU06ICcubmF2LWl0ZW0nLFxuICAgICAgTkFWX0xJTks6ICcubmF2LWxpbmsnLFxuICAgICAgTkFWX0xJTktfUVVFUklFRDogJy5uYXYtbGluay1xdWVyaWVkJyxcbiAgICAgIE5BVklHQVRJT05fQ09OVEFJTkVSOiAnLnNpZGViYXItbmF2JyxcbiAgICAgIE5BVklHQVRJT046ICcuc2lkZWJhci1uYXYgPiAubmF2JyxcbiAgICAgIFNJREVCQVI6ICcuc2lkZWJhcicsXG4gICAgICBTSURFQkFSX01JTklNSVpFUjogJy5zaWRlYmFyLW1pbmltaXplcicsXG4gICAgICBTSURFQkFSX1RPR0dMRVI6ICcuc2lkZWJhci10b2dnbGVyJ1xuICAgIH07XG4gICAgdmFyIFNob3dDbGFzc05hbWVzID0gWydzaWRlYmFyLXNob3cnLCAnc2lkZWJhci1zbS1zaG93JywgJ3NpZGViYXItbWQtc2hvdycsICdzaWRlYmFyLWxnLXNob3cnLCAnc2lkZWJhci14bC1zaG93J107XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIENsYXNzIERlZmluaXRpb25cclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cbiAgICB2YXIgU2lkZWJhciA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIFNpZGViYXIoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5tb2JpbGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcyA9IG51bGw7XG4gICAgICAgIHRoaXMucGVyZmVjdFNjcm9sbGJhcihFdmVudC5JTklUKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVMaW5rKCk7XG4gICAgICAgIHRoaXMuX2JyZWFrcG9pbnRUZXN0ID0gdGhpcy5fYnJlYWtwb2ludFRlc3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fY2xpY2tPdXRMaXN0ZW5lciA9IHRoaXMuX2NsaWNrT3V0TGlzdGVuZXIuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIHRoaXMuX2FkZE1lZGlhUXVlcnkoKTtcbiAgICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICAgIHZhciBfcHJvdG8gPSBTaWRlYmFyLnByb3RvdHlwZTtcblxuICAgICAgLy8gUHVibGljXG4gICAgICBfcHJvdG8ucGVyZmVjdFNjcm9sbGJhciA9IGZ1bmN0aW9uIHBlcmZlY3RTY3JvbGxiYXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mIFBlcmZlY3RTY3JvbGxiYXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdmFyIGNsYXNzTGlzdCA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0O1xuXG4gICAgICAgICAgaWYgKGV2ZW50ID09PSBFdmVudC5JTklUICYmICFjbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLlNJREVCQVJfTUlOSU1JWkVEKSkge1xuICAgICAgICAgICAgdGhpcy5wcyA9IHRoaXMubWFrZVNjcm9sbGJhcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChldmVudCA9PT0gRXZlbnQuREVTVFJPWSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV2ZW50ID09PSBFdmVudC5UT0dHTEUpIHtcbiAgICAgICAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLlNJREVCQVJfTUlOSU1JWkVEKSkge1xuICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZGVzdHJveVNjcm9sbGJhcigpO1xuICAgICAgICAgICAgICB0aGlzLnBzID0gdGhpcy5tYWtlU2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV2ZW50ID09PSBFdmVudC5VUERBVEUgJiYgIWNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuU0lERUJBUl9NSU5JTUlaRUQpKSB7XG4gICAgICAgICAgICAvLyBUb0RvOiBBZGQgc21vb3RoIHRyYW5zaXRpb25cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBfdGhpcy5kZXN0cm95U2Nyb2xsYmFyKCk7XG5cbiAgICAgICAgICAgICAgX3RoaXMucHMgPSBfdGhpcy5tYWtlU2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICB9LCBEZWZhdWx0LnRyYW5zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLm1ha2VTY3JvbGxiYXIgPSBmdW5jdGlvbiBtYWtlU2Nyb2xsYmFyKGNvbnRhaW5lcikge1xuICAgICAgICBpZiAoY29udGFpbmVyID09PSB2b2lkIDApIHtcbiAgICAgICAgICBjb250YWluZXIgPSBTZWxlY3Rvci5OQVZJR0FUSU9OX0NPTlRBSU5FUjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSwge1xuICAgICAgICAgIHN1cHByZXNzU2Nyb2xsWDogdHJ1ZVxuICAgICAgICB9KTsgLy8gVG9EbzogZmluZCByZWFsIGZpeCBmb3IgcHMgcnRsXG5cbiAgICAgICAgcHMuaXNSdGwgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHBzO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmRlc3Ryb3lTY3JvbGxiYXIgPSBmdW5jdGlvbiBkZXN0cm95U2Nyb2xsYmFyKCkge1xuICAgICAgICBpZiAodGhpcy5wcykge1xuICAgICAgICAgIHRoaXMucHMuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMucHMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uc2V0QWN0aXZlTGluayA9IGZ1bmN0aW9uIHNldEFjdGl2ZUxpbmsoKSB7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWSUdBVElPTikuZmluZChTZWxlY3Rvci5OQVZfTElOSykuZWFjaChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHZhciBsaW5rID0gdmFsdWU7XG4gICAgICAgICAgdmFyIGNVcmw7XG5cbiAgICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoU2VsZWN0b3IuTkFWX0xJTktfUVVFUklFRCkpIHtcbiAgICAgICAgICAgIGNVcmwgPSBTdHJpbmcod2luZG93LmxvY2F0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY1VybCA9IFN0cmluZyh3aW5kb3cubG9jYXRpb24pLnNwbGl0KCc/JylbMF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNVcmwuc3Vic3RyKGNVcmwubGVuZ3RoIC0gMSkgPT09ICcjJykge1xuICAgICAgICAgICAgY1VybCA9IGNVcmwuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgkKCQobGluaykpWzBdLmhyZWYgPT09IGNVcmwpIHtcbiAgICAgICAgICAgICQobGluaykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSkucGFyZW50cyhTZWxlY3Rvci5OQVZfRFJPUERPV05fSVRFTVMpLmFkZChsaW5rKS5lYWNoKGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgIGxpbmsgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgJChsaW5rKS5wYXJlbnQoKS5hZGRDbGFzcyhDbGFzc05hbWUuT1BFTik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBQcml2YXRlXG4gICAgICA7XG5cbiAgICAgIF9wcm90by5fYWRkTWVkaWFRdWVyeSA9IGZ1bmN0aW9uIF9hZGRNZWRpYVF1ZXJ5KCkge1xuICAgICAgICB2YXIgc20gPSBnZXRTdHlsZSgnLS1icmVha3BvaW50LXNtJyk7XG5cbiAgICAgICAgaWYgKCFzbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzbVZhbCA9IHBhcnNlSW50KHNtLCAxMCkgLSAxO1xuICAgICAgICB2YXIgbWVkaWFRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IFwiICsgc21WYWwgKyBcInB4KVwiKTtcblxuICAgICAgICB0aGlzLl9icmVha3BvaW50VGVzdChtZWRpYVF1ZXJ5TGlzdCk7XG5cbiAgICAgICAgbWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIodGhpcy5fYnJlYWtwb2ludFRlc3QpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9icmVha3BvaW50VGVzdCA9IGZ1bmN0aW9uIF9icmVha3BvaW50VGVzdChlKSB7XG4gICAgICAgIHRoaXMubW9iaWxlID0gQm9vbGVhbihlLm1hdGNoZXMpO1xuXG4gICAgICAgIHRoaXMuX3RvZ2dsZUNsaWNrT3V0KCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2NsaWNrT3V0TGlzdGVuZXIgPSBmdW5jdGlvbiBfY2xpY2tPdXRMaXN0ZW5lcihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIC8vIG9yIHVzZTogZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU2VsZWN0b3IuU0lERUJBUikgPT09IG51bGxcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgdGhpcy5fcmVtb3ZlQ2xpY2tPdXQoKTtcblxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1zaG93Jyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fYWRkQ2xpY2tPdXQgPSBmdW5jdGlvbiBfYWRkQ2xpY2tPdXQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrT3V0TGlzdGVuZXIsIHRydWUpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9yZW1vdmVDbGlja091dCA9IGZ1bmN0aW9uIF9yZW1vdmVDbGlja091dCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihFdmVudC5DTElDSywgdGhpcy5fY2xpY2tPdXRMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX3RvZ2dsZUNsaWNrT3V0ID0gZnVuY3Rpb24gX3RvZ2dsZUNsaWNrT3V0KCkge1xuICAgICAgICBpZiAodGhpcy5tb2JpbGUgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2hvdycpKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS1tZW51LXNob3cnKTtcblxuICAgICAgICAgIHRoaXMuX2FkZENsaWNrT3V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlQ2xpY2tPdXQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLkJSQU5EX01JTklNSVpFUiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAkKFNlbGVjdG9yLkJPRFkpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5CUkFORF9NSU5JTUlaRUQpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLk5BVl9EUk9QRE9XTl9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdmFyIGRyb3Bkb3duID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICQoZHJvcGRvd24pLnBhcmVudCgpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5PUEVOKTtcblxuICAgICAgICAgIF90aGlzMi5wZXJmZWN0U2Nyb2xsYmFyKEV2ZW50LlVQREFURSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDSywgU2VsZWN0b3IuU0lERUJBUl9NSU5JTUlaRVIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgJChTZWxlY3Rvci5CT0RZKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0lERUJBUl9NSU5JTUlaRUQpO1xuXG4gICAgICAgICAgX3RoaXMyLnBlcmZlY3RTY3JvbGxiYXIoRXZlbnQuVE9HR0xFKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5TSURFQkFSX1RPR0dMRVIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdmFyIHRvZ2dsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldCA/IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50b2dnbGUgOiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3RvZ2dsZScpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzZXModG9nZ2xlLCBTaG93Q2xhc3NOYW1lcyk7XG5cbiAgICAgICAgICBfdGhpczIuX3RvZ2dsZUNsaWNrT3V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKFNlbGVjdG9yLk5BVklHQVRJT04gKyBcIiA+IFwiICsgU2VsZWN0b3IuTkFWX0lURU0gKyBcIiBcIiArIFNlbGVjdG9yLk5BVl9MSU5LICsgXCI6bm90KFwiICsgU2VsZWN0b3IuTkFWX0RST1BET1dOX1RPR0dMRSArIFwiKVwiKS5vbihFdmVudC5DTElDSywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fcmVtb3ZlQ2xpY2tPdXQoKTtcblxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1zaG93Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyICRlbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgZGF0YSA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gbmV3IFNpZGViYXIodGhpcyk7XG4gICAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKFNpZGViYXIsIG51bGwsIFt7XG4gICAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBTaWRlYmFyO1xuICAgIH0oKTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cblxuICAgICQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2lkZWJhciA9ICQoU2VsZWN0b3IuU0lERUJBUik7XG5cbiAgICAgIFNpZGViYXIuX2pRdWVyeUludGVyZmFjZS5jYWxsKHNpZGViYXIpO1xuICAgIH0pO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBqUXVlcnlcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cbiAgICAkLmZuW05BTUVdID0gU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBTaWRlYmFyO1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBTaWRlYmFyO1xuICB9KCQpO1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJIFV0aWxpdGllcyAodjIuMS45KTogaGV4LXRvLXJnYi5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgdmFyIGhleFRvUmdiID0gZnVuY3Rpb24gaGV4VG9SZ2IoY29sb3IpIHtcbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIZXggY29sb3IgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgaGV4ID0gY29sb3IubWF0Y2goL14jKD86WzAtOWEtZl17M30pezEsMn0kL2kpO1xuXG4gICAgaWYgKCFoZXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihjb2xvciArIFwiIGlzIG5vdCBhIHZhbGlkIGhleCBjb2xvclwiKTtcbiAgICB9XG5cbiAgICB2YXIgcjtcbiAgICB2YXIgZztcbiAgICB2YXIgYjtcblxuICAgIGlmIChjb2xvci5sZW5ndGggPT09IDcpIHtcbiAgICAgIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMyksIDE2KTtcbiAgICAgIGcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMywgNSksIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoNSwgNyksIDE2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgciA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAyKSwgMTYpO1xuICAgICAgZyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygyLCAzKSwgMTYpO1xuICAgICAgYiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygzLCA1KSwgMTYpO1xuICAgIH1cblxuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIilcIjtcbiAgfTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSBVdGlsaXRpZXMgKHYyLjEuOSk6IGhleC10by1yZ2JhLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuICB2YXIgaGV4VG9SZ2JhID0gZnVuY3Rpb24gaGV4VG9SZ2JhKGNvbG9yLCBvcGFjaXR5KSB7XG4gICAgaWYgKG9wYWNpdHkgPT09IHZvaWQgMCkge1xuICAgICAgb3BhY2l0eSA9IDEwMDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIZXggY29sb3IgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgaGV4ID0gY29sb3IubWF0Y2goL14jKD86WzAtOWEtZl17M30pezEsMn0kL2kpO1xuXG4gICAgaWYgKCFoZXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihjb2xvciArIFwiIGlzIG5vdCBhIHZhbGlkIGhleCBjb2xvclwiKTtcbiAgICB9XG5cbiAgICB2YXIgcjtcbiAgICB2YXIgZztcbiAgICB2YXIgYjtcblxuICAgIGlmIChjb2xvci5sZW5ndGggPT09IDcpIHtcbiAgICAgIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMyksIDE2KTtcbiAgICAgIGcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMywgNSksIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoNSwgNyksIDE2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgciA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAyKSwgMTYpO1xuICAgICAgZyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygyLCAzKSwgMTYpO1xuICAgICAgYiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygzLCA1KSwgMTYpO1xuICAgIH1cblxuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIiwgXCIgKyBvcGFjaXR5IC8gMTAwICsgXCIpXCI7XG4gIH07XG5cbiAgLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxuICBpZiAoX2Rlc2NyaXB0b3JzICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSBfb2JqZWN0RHAuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogX2ZsYWdzXG4gIH0pO1xuXG4gIHZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xuICB2YXIgJHRvU3RyaW5nID0gLy4vW1RPX1NUUklOR107XG5cbiAgdmFyIGRlZmluZSA9IGZ1bmN0aW9uIChmbikge1xuICAgIF9yZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcbiAgfTtcblxuICAvLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG4gIGlmIChfZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gJHRvU3RyaW5nLmNhbGwoeyBzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJyB9KSAhPSAnL2EvYic7IH0pKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgdmFyIFIgPSBfYW5PYmplY3QodGhpcyk7XG4gICAgICByZXR1cm4gJy8nLmNvbmNhdChSLnNvdXJjZSwgJy8nLFxuICAgICAgICAnZmxhZ3MnIGluIFIgPyBSLmZsYWdzIDogIV9kZXNjcmlwdG9ycyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gX2ZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuICAgIH0pO1xuICAvLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxuICB9IGVsc2UgaWYgKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORykge1xuICAgIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxuXG4gIHZhciB0ZXN0ID0ge307XG4gIHRlc3RbX3drcygndG9TdHJpbmdUYWcnKV0gPSAneic7XG4gIGlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gICAgX3JlZGVmaW5lKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuICdbb2JqZWN0ICcgKyBfY2xhc3NvZih0aGlzKSArICddJztcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjkpOiByZ2ItdG8taGV4LmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuICB2YXIgcmdiVG9IZXggPSBmdW5jdGlvbiByZ2JUb0hleChjb2xvcikge1xuICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hleCBjb2xvciBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgcmV0dXJuICcjMDAwMDAwMDAnO1xuICAgIH1cblxuICAgIHZhciByZ2IgPSBjb2xvci5tYXRjaCgvXnJnYmE/W1xccytdP1xcKFtcXHMrXT8oXFxkKylbXFxzK10/LFtcXHMrXT8oXFxkKylbXFxzK10/LFtcXHMrXT8oXFxkKylbXFxzK10/L2kpO1xuXG4gICAgaWYgKCFyZ2IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihjb2xvciArIFwiIGlzIG5vdCBhIHZhbGlkIHJnYiBjb2xvclwiKTtcbiAgICB9XG5cbiAgICB2YXIgciA9IFwiMFwiICsgcGFyc2VJbnQocmdiWzFdLCAxMCkudG9TdHJpbmcoMTYpO1xuICAgIHZhciBnID0gXCIwXCIgKyBwYXJzZUludChyZ2JbMl0sIDEwKS50b1N0cmluZygxNik7XG4gICAgdmFyIGIgPSBcIjBcIiArIHBhcnNlSW50KHJnYlszXSwgMTApLnRvU3RyaW5nKDE2KTtcbiAgICByZXR1cm4gXCIjXCIgKyByLnNsaWNlKC0yKSArIGcuc2xpY2UoLTIpICsgYi5zbGljZSgtMik7XG4gIH07XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgKHYyLjEuOSk6IGluZGV4LmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgKGZ1bmN0aW9uICgkKSB7XG4gICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29yZVVJXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIENvcmVVSVxcJ3MgSmF2YVNjcmlwdC4nKTtcbiAgICB9XG5cbiAgICB2YXIgdmVyc2lvbiA9ICQuZm4uanF1ZXJ5LnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKTtcbiAgICB2YXIgbWluTWFqb3IgPSAxO1xuICAgIHZhciBsdE1ham9yID0gMjtcbiAgICB2YXIgbWluTWlub3IgPSA5O1xuICAgIHZhciBtaW5QYXRjaCA9IDE7XG4gICAgdmFyIG1heE1ham9yID0gNDtcblxuICAgIGlmICh2ZXJzaW9uWzBdIDwgbHRNYWpvciAmJiB2ZXJzaW9uWzFdIDwgbWluTWlub3IgfHwgdmVyc2lvblswXSA9PT0gbWluTWFqb3IgJiYgdmVyc2lvblsxXSA9PT0gbWluTWlub3IgJiYgdmVyc2lvblsyXSA8IG1pblBhdGNoIHx8IHZlcnNpb25bMF0gPj0gbWF4TWFqb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29yZVVJXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGF0IGxlYXN0IGpRdWVyeSB2MS45LjEgYnV0IGxlc3MgdGhhbiB2NC4wLjAnKTtcbiAgICB9XG4gIH0pKCQpO1xuICB3aW5kb3cuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiAgd2luZG93LmhleFRvUmdiID0gaGV4VG9SZ2I7XG4gIHdpbmRvdy5oZXhUb1JnYmEgPSBoZXhUb1JnYmE7XG4gIHdpbmRvdy5yZ2JUb0hleCA9IHJnYlRvSGV4O1xuXG4gIGV4cG9ydHMuQWpheExvYWQgPSBBamF4TG9hZDtcbiAgZXhwb3J0cy5Bc2lkZU1lbnUgPSBBc2lkZU1lbnU7XG4gIGV4cG9ydHMuU2lkZWJhciA9IFNpZGViYXI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29yZXVpLmpzLm1hcFxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBBamF4TW9uaXRvciwgQmFyLCBEb2N1bWVudE1vbml0b3IsIEVsZW1lbnRNb25pdG9yLCBFbGVtZW50VHJhY2tlciwgRXZlbnRMYWdNb25pdG9yLCBFdmVudGVkLCBFdmVudHMsIE5vVGFyZ2V0RXJyb3IsIFBhY2UsIFJlcXVlc3RJbnRlcmNlcHQsIFNPVVJDRV9LRVlTLCBTY2FsZXIsIFNvY2tldFJlcXVlc3RUcmFja2VyLCBYSFJSZXF1ZXN0VHJhY2tlciwgYW5pbWF0aW9uLCBhdmdBbXBsaXR1ZGUsIGJhciwgY2FuY2VsQW5pbWF0aW9uLCBjYW5jZWxBbmltYXRpb25GcmFtZSwgZGVmYXVsdE9wdGlvbnMsIGV4dGVuZCwgZXh0ZW5kTmF0aXZlLCBnZXRGcm9tRE9NLCBnZXRJbnRlcmNlcHQsIGhhbmRsZVB1c2hTdGF0ZSwgaWdub3JlU3RhY2ssIGluaXQsIG5vdywgb3B0aW9ucywgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCByZXN1bHQsIHJ1bkFuaW1hdGlvbiwgc2NhbGVycywgc2hvdWxkSWdub3JlVVJMLCBzaG91bGRUcmFjaywgc291cmNlLCBzb3VyY2VzLCB1bmlTY2FsZXIsIF9XZWJTb2NrZXQsIF9YRG9tYWluUmVxdWVzdCwgX1hNTEh0dHBSZXF1ZXN0LCBfaSwgX2ludGVyY2VwdCwgX2xlbiwgX3B1c2hTdGF0ZSwgX3JlZiwgX3JlZjEsIF9yZXBsYWNlU3RhdGUsXHJcbiAgICBfX3NsaWNlID0gW10uc2xpY2UsXHJcbiAgICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcclxuICAgIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxyXG4gICAgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH07XHJcblxyXG4gIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgY2F0Y2h1cFRpbWU6IDEwMCxcclxuICAgIGluaXRpYWxSYXRlOiAuMDMsXHJcbiAgICBtaW5UaW1lOiAyNTAsXHJcbiAgICBnaG9zdFRpbWU6IDEwMCxcclxuICAgIG1heFByb2dyZXNzUGVyRnJhbWU6IDIwLFxyXG4gICAgZWFzZUZhY3RvcjogMS4yNSxcclxuICAgIHN0YXJ0T25QYWdlTG9hZDogdHJ1ZSxcclxuICAgIHJlc3RhcnRPblB1c2hTdGF0ZTogdHJ1ZSxcclxuICAgIHJlc3RhcnRPblJlcXVlc3RBZnRlcjogNTAwLFxyXG4gICAgdGFyZ2V0OiAnYm9keScsXHJcbiAgICBlbGVtZW50czoge1xyXG4gICAgICBjaGVja0ludGVydmFsOiAxMDAsXHJcbiAgICAgIHNlbGVjdG9yczogWydib2R5J11cclxuICAgIH0sXHJcbiAgICBldmVudExhZzoge1xyXG4gICAgICBtaW5TYW1wbGVzOiAxMCxcclxuICAgICAgc2FtcGxlQ291bnQ6IDMsXHJcbiAgICAgIGxhZ1RocmVzaG9sZDogM1xyXG4gICAgfSxcclxuICAgIGFqYXg6IHtcclxuICAgICAgdHJhY2tNZXRob2RzOiBbJ0dFVCddLFxyXG4gICAgICB0cmFja1dlYlNvY2tldHM6IHRydWUsXHJcbiAgICAgIGlnbm9yZVVSTHM6IFtdXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbm93ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgX3JlZjtcclxuICAgIHJldHVybiAoX3JlZiA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCA/IHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIiA/IHBlcmZvcm1hbmNlLm5vdygpIDogdm9pZCAwIDogdm9pZCAwKSAhPSBudWxsID8gX3JlZiA6ICsobmV3IERhdGUpO1xyXG4gIH07XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuXHJcbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG5cclxuICBpZiAocmVxdWVzdEFuaW1hdGlvbkZyYW1lID09IG51bGwpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZuLCA1MCk7XHJcbiAgICB9O1xyXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBydW5BbmltYXRpb24gPSBmdW5jdGlvbihmbikge1xyXG4gICAgdmFyIGxhc3QsIHRpY2s7XHJcbiAgICBsYXN0ID0gbm93KCk7XHJcbiAgICB0aWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBkaWZmO1xyXG4gICAgICBkaWZmID0gbm93KCkgLSBsYXN0O1xyXG4gICAgICBpZiAoZGlmZiA+PSAzMykge1xyXG4gICAgICAgIGxhc3QgPSBub3coKTtcclxuICAgICAgICByZXR1cm4gZm4oZGlmZiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KHRpY2ssIDMzIC0gZGlmZik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gdGljaygpO1xyXG4gIH07XHJcblxyXG4gIHJlc3VsdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGFyZ3MsIGtleSwgb2JqO1xyXG4gICAgb2JqID0gYXJndW1lbnRzWzBdLCBrZXkgPSBhcmd1bWVudHNbMV0sIGFyZ3MgPSAzIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IFtdO1xyXG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gb2JqW2tleV0uYXBwbHkob2JqLCBhcmdzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBvYmpba2V5XTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBleHRlbmQgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBrZXksIG91dCwgc291cmNlLCBzb3VyY2VzLCB2YWwsIF9pLCBfbGVuO1xyXG4gICAgb3V0ID0gYXJndW1lbnRzWzBdLCBzb3VyY2VzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcclxuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gc291cmNlcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xyXG4gICAgICBzb3VyY2UgPSBzb3VyY2VzW19pXTtcclxuICAgICAgaWYgKHNvdXJjZSkge1xyXG4gICAgICAgIGZvciAoa2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgdmFsID0gc291cmNlW2tleV07XHJcbiAgICAgICAgICBpZiAoKG91dFtrZXldICE9IG51bGwpICYmIHR5cGVvZiBvdXRba2V5XSA9PT0gJ29iamVjdCcgJiYgKHZhbCAhPSBudWxsKSAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBleHRlbmQob3V0W2tleV0sIHZhbCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRba2V5XSA9IHZhbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbiAgfTtcclxuXHJcbiAgYXZnQW1wbGl0dWRlID0gZnVuY3Rpb24oYXJyKSB7XHJcbiAgICB2YXIgY291bnQsIHN1bSwgdiwgX2ksIF9sZW47XHJcbiAgICBzdW0gPSBjb3VudCA9IDA7XHJcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGFyci5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xyXG4gICAgICB2ID0gYXJyW19pXTtcclxuICAgICAgc3VtICs9IE1hdGguYWJzKHYpO1xyXG4gICAgICBjb3VudCsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1bSAvIGNvdW50O1xyXG4gIH07XHJcblxyXG4gIGdldEZyb21ET00gPSBmdW5jdGlvbihrZXksIGpzb24pIHtcclxuICAgIHZhciBkYXRhLCBlLCBlbDtcclxuICAgIGlmIChrZXkgPT0gbnVsbCkge1xyXG4gICAgICBrZXkgPSAnb3B0aW9ucyc7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbiA9PSBudWxsKSB7XHJcbiAgICAgIGpzb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcGFjZS1cIiArIGtleSArIFwiXVwiKTtcclxuICAgIGlmICghZWwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IGVsLmdldEF0dHJpYnV0ZShcImRhdGEtcGFjZS1cIiArIGtleSk7XHJcbiAgICBpZiAoIWpzb24pIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xyXG4gICAgICBlID0gX2Vycm9yO1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZSAhPT0gbnVsbCA/IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIGlubGluZSBwYWNlIG9wdGlvbnNcIiwgZSkgOiB2b2lkIDA7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgRXZlbnRlZCA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50ZWQoKSB7fVxyXG5cclxuICAgIEV2ZW50ZWQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIsIGN0eCwgb25jZSkge1xyXG4gICAgICB2YXIgX2Jhc2U7XHJcbiAgICAgIGlmIChvbmNlID09IG51bGwpIHtcclxuICAgICAgICBvbmNlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuYmluZGluZ3MgPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKF9iYXNlID0gdGhpcy5iaW5kaW5ncylbZXZlbnRdID09IG51bGwpIHtcclxuICAgICAgICBfYmFzZVtldmVudF0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5iaW5kaW5nc1tldmVudF0ucHVzaCh7XHJcbiAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcclxuICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICBvbmNlOiBvbmNlXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBFdmVudGVkLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIsIGN0eCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vbihldmVudCwgaGFuZGxlciwgY3R4LCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgRXZlbnRlZC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgICAgdmFyIGksIF9yZWYsIF9yZXN1bHRzO1xyXG4gICAgICBpZiAoKChfcmVmID0gdGhpcy5iaW5kaW5ncykgIT0gbnVsbCA/IF9yZWZbZXZlbnRdIDogdm9pZCAwKSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChoYW5kbGVyID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHRoaXMuYmluZGluZ3NbZXZlbnRdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGkgPSAwO1xyXG4gICAgICAgIF9yZXN1bHRzID0gW107XHJcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLmJpbmRpbmdzW2V2ZW50XS5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmJpbmRpbmdzW2V2ZW50XVtpXS5oYW5kbGVyID09PSBoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2godGhpcy5iaW5kaW5nc1tldmVudF0uc3BsaWNlKGksIDEpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goaSsrKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIEV2ZW50ZWQucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGFyZ3MsIGN0eCwgZXZlbnQsIGhhbmRsZXIsIGksIG9uY2UsIF9yZWYsIF9yZWYxLCBfcmVzdWx0cztcclxuICAgICAgZXZlbnQgPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xyXG4gICAgICBpZiAoKF9yZWYgPSB0aGlzLmJpbmRpbmdzKSAhPSBudWxsID8gX3JlZltldmVudF0gOiB2b2lkIDApIHtcclxuICAgICAgICBpID0gMDtcclxuICAgICAgICBfcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5iaW5kaW5nc1tldmVudF0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBfcmVmMSA9IHRoaXMuYmluZGluZ3NbZXZlbnRdW2ldLCBoYW5kbGVyID0gX3JlZjEuaGFuZGxlciwgY3R4ID0gX3JlZjEuY3R4LCBvbmNlID0gX3JlZjEub25jZTtcclxuICAgICAgICAgIGhhbmRsZXIuYXBwbHkoY3R4ICE9IG51bGwgPyBjdHggOiB0aGlzLCBhcmdzKTtcclxuICAgICAgICAgIGlmIChvbmNlKSB7XHJcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2godGhpcy5iaW5kaW5nc1tldmVudF0uc3BsaWNlKGksIDEpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goaSsrKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBFdmVudGVkO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBQYWNlID0gd2luZG93LlBhY2UgfHwge307XHJcblxyXG4gIHdpbmRvdy5QYWNlID0gUGFjZTtcclxuXHJcbiAgZXh0ZW5kKFBhY2UsIEV2ZW50ZWQucHJvdG90eXBlKTtcclxuXHJcbiAgb3B0aW9ucyA9IFBhY2Uub3B0aW9ucyA9IGV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIHdpbmRvdy5wYWNlT3B0aW9ucywgZ2V0RnJvbURPTSgpKTtcclxuXHJcbiAgX3JlZiA9IFsnYWpheCcsICdkb2N1bWVudCcsICdldmVudExhZycsICdlbGVtZW50cyddO1xyXG4gIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xyXG4gICAgc291cmNlID0gX3JlZltfaV07XHJcbiAgICBpZiAob3B0aW9uc1tzb3VyY2VdID09PSB0cnVlKSB7XHJcbiAgICAgIG9wdGlvbnNbc291cmNlXSA9IGRlZmF1bHRPcHRpb25zW3NvdXJjZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBOb1RhcmdldEVycm9yID0gKGZ1bmN0aW9uKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE5vVGFyZ2V0RXJyb3IsIF9zdXBlcik7XHJcblxyXG4gICAgZnVuY3Rpb24gTm9UYXJnZXRFcnJvcigpIHtcclxuICAgICAgX3JlZjEgPSBOb1RhcmdldEVycm9yLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICByZXR1cm4gX3JlZjE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE5vVGFyZ2V0RXJyb3I7XHJcblxyXG4gIH0pKEVycm9yKTtcclxuXHJcbiAgQmFyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgZnVuY3Rpb24gQmFyKCkge1xyXG4gICAgICB0aGlzLnByb2dyZXNzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBCYXIucHJvdG90eXBlLmdldEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHRhcmdldEVsZW1lbnQ7XHJcbiAgICAgIGlmICh0aGlzLmVsID09IG51bGwpIHtcclxuICAgICAgICB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnRhcmdldCk7XHJcbiAgICAgICAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgTm9UYXJnZXRFcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gXCJwYWNlIHBhY2UtYWN0aXZlXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKC9wYWNlLWRvbmUvZywgJycpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICs9ICcgcGFjZS1ydW5uaW5nJztcclxuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwicGFjZS1wcm9ncmVzc1wiPlxcbiAgPGRpdiBjbGFzcz1cInBhY2UtcHJvZ3Jlc3MtaW5uZXJcIj48L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVwicGFjZS1hY3Rpdml0eVwiPjwvZGl2Pic7XHJcbiAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQuZmlyc3RDaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICB0YXJnZXRFbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmVsLCB0YXJnZXRFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5lbDtcclxuICAgIH07XHJcblxyXG4gICAgQmFyLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGVsO1xyXG4gICAgICBlbCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xyXG4gICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1hY3RpdmUnLCAnJyk7XHJcbiAgICAgIGVsLmNsYXNzTmFtZSArPSAnIHBhY2UtaW5hY3RpdmUnO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtcnVubmluZycsICcnKTtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICs9ICcgcGFjZS1kb25lJztcclxuICAgIH07XHJcblxyXG4gICAgQmFyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihwcm9nKSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9nO1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgQmFyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmdldEVsZW1lbnQoKSk7XHJcbiAgICAgIH0gY2F0Y2ggKF9lcnJvcikge1xyXG4gICAgICAgIE5vVGFyZ2V0RXJyb3IgPSBfZXJyb3I7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZWwgPSB2b2lkIDA7XHJcbiAgICB9O1xyXG5cclxuICAgIEJhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBlbCwga2V5LCBwcm9ncmVzc1N0ciwgdHJhbnNmb3JtLCBfaiwgX2xlbjEsIF9yZWYyO1xyXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnRhcmdldCkgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBlbCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xyXG4gICAgICB0cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKFwiICsgdGhpcy5wcm9ncmVzcyArIFwiJSwgMCwgMClcIjtcclxuICAgICAgX3JlZjIgPSBbJ3dlYmtpdFRyYW5zZm9ybScsICdtc1RyYW5zZm9ybScsICd0cmFuc2Zvcm0nXTtcclxuICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XHJcbiAgICAgICAga2V5ID0gX3JlZjJbX2pdO1xyXG4gICAgICAgIGVsLmNoaWxkcmVuWzBdLnN0eWxlW2tleV0gPSB0cmFuc2Zvcm07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzIHx8IHRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3MgfCAwICE9PSB0aGlzLnByb2dyZXNzIHwgMCkge1xyXG4gICAgICAgIGVsLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9ncmVzcy10ZXh0JywgXCJcIiArICh0aGlzLnByb2dyZXNzIHwgMCkgKyBcIiVcIik7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMTAwKSB7XHJcbiAgICAgICAgICBwcm9ncmVzc1N0ciA9ICc5OSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByb2dyZXNzU3RyID0gdGhpcy5wcm9ncmVzcyA8IDEwID8gXCIwXCIgOiBcIlwiO1xyXG4gICAgICAgICAgcHJvZ3Jlc3NTdHIgKz0gdGhpcy5wcm9ncmVzcyB8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9ncmVzcycsIFwiXCIgKyBwcm9ncmVzc1N0cik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICBCYXIucHJvdG90eXBlLmRvbmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3MgPj0gMTAwO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gQmFyO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBFdmVudHMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBFdmVudHMoKSB7XHJcbiAgICAgIHRoaXMuYmluZGluZ3MgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBFdmVudHMucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lLCB2YWwpIHtcclxuICAgICAgdmFyIGJpbmRpbmcsIF9qLCBfbGVuMSwgX3JlZjIsIF9yZXN1bHRzO1xyXG4gICAgICBpZiAodGhpcy5iaW5kaW5nc1tuYW1lXSAhPSBudWxsKSB7XHJcbiAgICAgICAgX3JlZjIgPSB0aGlzLmJpbmRpbmdzW25hbWVdO1xyXG4gICAgICAgIF9yZXN1bHRzID0gW107XHJcbiAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XHJcbiAgICAgICAgICBiaW5kaW5nID0gX3JlZjJbX2pdO1xyXG4gICAgICAgICAgX3Jlc3VsdHMucHVzaChiaW5kaW5nLmNhbGwodGhpcywgdmFsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBFdmVudHMucHJvdG90eXBlLm9uID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcclxuICAgICAgdmFyIF9iYXNlO1xyXG4gICAgICBpZiAoKF9iYXNlID0gdGhpcy5iaW5kaW5ncylbbmFtZV0gPT0gbnVsbCkge1xyXG4gICAgICAgIF9iYXNlW25hbWVdID0gW107XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbbmFtZV0ucHVzaChmbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBFdmVudHM7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIF9YTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcclxuXHJcbiAgX1hEb21haW5SZXF1ZXN0ID0gd2luZG93LlhEb21haW5SZXF1ZXN0O1xyXG5cclxuICBfV2ViU29ja2V0ID0gd2luZG93LldlYlNvY2tldDtcclxuXHJcbiAgZXh0ZW5kTmF0aXZlID0gZnVuY3Rpb24odG8sIGZyb20pIHtcclxuICAgIHZhciBlLCBrZXksIF9yZXN1bHRzO1xyXG4gICAgX3Jlc3VsdHMgPSBbXTtcclxuICAgIGZvciAoa2V5IGluIGZyb20ucHJvdG90eXBlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKCh0b1trZXldID09IG51bGwpICYmIHR5cGVvZiBmcm9tW2tleV0gIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goT2JqZWN0LmRlZmluZVByb3BlcnR5KHRvLCBrZXksIHtcclxuICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyb20ucHJvdG90eXBlW2tleV07XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKHRvW2tleV0gPSBmcm9tLnByb3RvdHlwZVtrZXldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgX3Jlc3VsdHMucHVzaCh2b2lkIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgICAgZSA9IF9lcnJvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9yZXN1bHRzO1xyXG4gIH07XHJcblxyXG4gIGlnbm9yZVN0YWNrID0gW107XHJcblxyXG4gIFBhY2UuaWdub3JlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgYXJncywgZm4sIHJldDtcclxuICAgIGZuID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcclxuICAgIGlnbm9yZVN0YWNrLnVuc2hpZnQoJ2lnbm9yZScpO1xyXG4gICAgcmV0ID0gZm4uYXBwbHkobnVsbCwgYXJncyk7XHJcbiAgICBpZ25vcmVTdGFjay5zaGlmdCgpO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9O1xyXG5cclxuICBQYWNlLnRyYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgYXJncywgZm4sIHJldDtcclxuICAgIGZuID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcclxuICAgIGlnbm9yZVN0YWNrLnVuc2hpZnQoJ3RyYWNrJyk7XHJcbiAgICByZXQgPSBmbi5hcHBseShudWxsLCBhcmdzKTtcclxuICAgIGlnbm9yZVN0YWNrLnNoaWZ0KCk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH07XHJcblxyXG4gIHNob3VsZFRyYWNrID0gZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICB2YXIgX3JlZjI7XHJcbiAgICBpZiAobWV0aG9kID09IG51bGwpIHtcclxuICAgICAgbWV0aG9kID0gJ0dFVCc7XHJcbiAgICB9XHJcbiAgICBpZiAoaWdub3JlU3RhY2tbMF0gPT09ICd0cmFjaycpIHtcclxuICAgICAgcmV0dXJuICdmb3JjZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlnbm9yZVN0YWNrLmxlbmd0aCAmJiBvcHRpb25zLmFqYXgpIHtcclxuICAgICAgaWYgKG1ldGhvZCA9PT0gJ3NvY2tldCcgJiYgb3B0aW9ucy5hamF4LnRyYWNrV2ViU29ja2V0cykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKF9yZWYyID0gbWV0aG9kLnRvVXBwZXJDYXNlKCksIF9faW5kZXhPZi5jYWxsKG9wdGlvbnMuYWpheC50cmFja01ldGhvZHMsIF9yZWYyKSA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBSZXF1ZXN0SW50ZXJjZXB0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFJlcXVlc3RJbnRlcmNlcHQsIF9zdXBlcik7XHJcblxyXG4gICAgZnVuY3Rpb24gUmVxdWVzdEludGVyY2VwdCgpIHtcclxuICAgICAgdmFyIG1vbml0b3JYSFIsXHJcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xyXG4gICAgICBSZXF1ZXN0SW50ZXJjZXB0Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICBtb25pdG9yWEhSID0gZnVuY3Rpb24ocmVxKSB7XHJcbiAgICAgICAgdmFyIF9vcGVuO1xyXG4gICAgICAgIF9vcGVuID0gcmVxLm9wZW47XHJcbiAgICAgICAgcmV0dXJuIHJlcS5vcGVuID0gZnVuY3Rpb24odHlwZSwgdXJsLCBhc3luYykge1xyXG4gICAgICAgICAgaWYgKHNob3VsZFRyYWNrKHR5cGUpKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXIoJ3JlcXVlc3QnLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICByZXF1ZXN0OiByZXFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gX29wZW4uYXBwbHkocmVxLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH07XHJcbiAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdCA9IGZ1bmN0aW9uKGZsYWdzKSB7XHJcbiAgICAgICAgdmFyIHJlcTtcclxuICAgICAgICByZXEgPSBuZXcgX1hNTEh0dHBSZXF1ZXN0KGZsYWdzKTtcclxuICAgICAgICBtb25pdG9yWEhSKHJlcSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcTtcclxuICAgICAgfTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBleHRlbmROYXRpdmUod2luZG93LlhNTEh0dHBSZXF1ZXN0LCBfWE1MSHR0cFJlcXVlc3QpO1xyXG4gICAgICB9IGNhdGNoIChfZXJyb3IpIHt9XHJcbiAgICAgIGlmIChfWERvbWFpblJlcXVlc3QgIT0gbnVsbCkge1xyXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIHJlcTtcclxuICAgICAgICAgIHJlcSA9IG5ldyBfWERvbWFpblJlcXVlc3Q7XHJcbiAgICAgICAgICBtb25pdG9yWEhSKHJlcSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVxO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGV4dGVuZE5hdGl2ZSh3aW5kb3cuWERvbWFpblJlcXVlc3QsIF9YRG9tYWluUmVxdWVzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7fVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgoX1dlYlNvY2tldCAhPSBudWxsKSAmJiBvcHRpb25zLmFqYXgudHJhY2tXZWJTb2NrZXRzKSB7XHJcbiAgICAgICAgd2luZG93LldlYlNvY2tldCA9IGZ1bmN0aW9uKHVybCwgcHJvdG9jb2xzKSB7XHJcbiAgICAgICAgICB2YXIgcmVxO1xyXG4gICAgICAgICAgaWYgKHByb3RvY29scyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJlcSA9IG5ldyBfV2ViU29ja2V0KHVybCwgcHJvdG9jb2xzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcSA9IG5ldyBfV2ViU29ja2V0KHVybCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2hvdWxkVHJhY2soJ3NvY2tldCcpKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXIoJ3JlcXVlc3QnLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ3NvY2tldCcsXHJcbiAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgcHJvdG9jb2xzOiBwcm90b2NvbHMsXHJcbiAgICAgICAgICAgICAgcmVxdWVzdDogcmVxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJlcTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBleHRlbmROYXRpdmUod2luZG93LldlYlNvY2tldCwgX1dlYlNvY2tldCk7XHJcbiAgICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7fVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFJlcXVlc3RJbnRlcmNlcHQ7XHJcblxyXG4gIH0pKEV2ZW50cyk7XHJcblxyXG4gIF9pbnRlcmNlcHQgPSBudWxsO1xyXG5cclxuICBnZXRJbnRlcmNlcHQgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChfaW50ZXJjZXB0ID09IG51bGwpIHtcclxuICAgICAgX2ludGVyY2VwdCA9IG5ldyBSZXF1ZXN0SW50ZXJjZXB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9pbnRlcmNlcHQ7XHJcbiAgfTtcclxuXHJcbiAgc2hvdWxkSWdub3JlVVJMID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgICB2YXIgcGF0dGVybiwgX2osIF9sZW4xLCBfcmVmMjtcclxuICAgIF9yZWYyID0gb3B0aW9ucy5hamF4Lmlnbm9yZVVSTHM7XHJcbiAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcclxuICAgICAgcGF0dGVybiA9IF9yZWYyW19qXTtcclxuICAgICAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihwYXR0ZXJuKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocGF0dGVybi50ZXN0KHVybCkpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGdldEludGVyY2VwdCgpLm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oX2FyZykge1xyXG4gICAgdmFyIGFmdGVyLCBhcmdzLCByZXF1ZXN0LCB0eXBlLCB1cmw7XHJcbiAgICB0eXBlID0gX2FyZy50eXBlLCByZXF1ZXN0ID0gX2FyZy5yZXF1ZXN0LCB1cmwgPSBfYXJnLnVybDtcclxuICAgIGlmIChzaG91bGRJZ25vcmVVUkwodXJsKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIVBhY2UucnVubmluZyAmJiAob3B0aW9ucy5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXIgIT09IGZhbHNlIHx8IHNob3VsZFRyYWNrKHR5cGUpID09PSAnZm9yY2UnKSkge1xyXG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICBhZnRlciA9IG9wdGlvbnMucmVzdGFydE9uUmVxdWVzdEFmdGVyIHx8IDA7XHJcbiAgICAgIGlmICh0eXBlb2YgYWZ0ZXIgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgIGFmdGVyID0gMDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc3RpbGxBY3RpdmUsIF9qLCBfbGVuMSwgX3JlZjIsIF9yZWYzLCBfcmVzdWx0cztcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3NvY2tldCcpIHtcclxuICAgICAgICAgIHN0aWxsQWN0aXZlID0gcmVxdWVzdC5yZWFkeVN0YXRlIDwgMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RpbGxBY3RpdmUgPSAoMCA8IChfcmVmMiA9IHJlcXVlc3QucmVhZHlTdGF0ZSkgJiYgX3JlZjIgPCA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0aWxsQWN0aXZlKSB7XHJcbiAgICAgICAgICBQYWNlLnJlc3RhcnQoKTtcclxuICAgICAgICAgIF9yZWYzID0gUGFjZS5zb3VyY2VzO1xyXG4gICAgICAgICAgX3Jlc3VsdHMgPSBbXTtcclxuICAgICAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYzLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xyXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmM1tfal07XHJcbiAgICAgICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBamF4TW9uaXRvcikge1xyXG4gICAgICAgICAgICAgIHNvdXJjZS53YXRjaC5hcHBseShzb3VyY2UsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIF9yZXN1bHRzLnB1c2godm9pZCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgYWZ0ZXIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBBamF4TW9uaXRvciA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIEFqYXhNb25pdG9yKCkge1xyXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICB0aGlzLmVsZW1lbnRzID0gW107XHJcbiAgICAgIGdldEludGVyY2VwdCgpLm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzLndhdGNoLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBBamF4TW9uaXRvci5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbihfYXJnKSB7XHJcbiAgICAgIHZhciByZXF1ZXN0LCB0cmFja2VyLCB0eXBlLCB1cmw7XHJcbiAgICAgIHR5cGUgPSBfYXJnLnR5cGUsIHJlcXVlc3QgPSBfYXJnLnJlcXVlc3QsIHVybCA9IF9hcmcudXJsO1xyXG4gICAgICBpZiAoc2hvdWxkSWdub3JlVVJMKHVybCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGUgPT09ICdzb2NrZXQnKSB7XHJcbiAgICAgICAgdHJhY2tlciA9IG5ldyBTb2NrZXRSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cmFja2VyID0gbmV3IFhIUlJlcXVlc3RUcmFja2VyKHJlcXVlc3QpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLnB1c2godHJhY2tlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBBamF4TW9uaXRvcjtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgWEhSUmVxdWVzdFRyYWNrZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBYSFJSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KSB7XHJcbiAgICAgIHZhciBldmVudCwgc2l6ZSwgX2osIF9sZW4xLCBfb25yZWFkeXN0YXRlY2hhbmdlLCBfcmVmMixcclxuICAgICAgICBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICBpZiAod2luZG93LlByb2dyZXNzRXZlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIHNpemUgPSBudWxsO1xyXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgIGlmIChldnQubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSAxMDAgKiBldnQubG9hZGVkIC8gZXZ0LnRvdGFsO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb2dyZXNzID0gX3RoaXMucHJvZ3Jlc3MgKyAoMTAwIC0gX3RoaXMucHJvZ3Jlc3MpIC8gMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgX3JlZjIgPSBbJ2xvYWQnLCAnYWJvcnQnLCAndGltZW91dCcsICdlcnJvciddO1xyXG4gICAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xyXG4gICAgICAgICAgZXZlbnQgPSBfcmVmMltfal07XHJcbiAgICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSAxMDA7XHJcbiAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPSByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZTtcclxuICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIF9yZWYzO1xyXG4gICAgICAgICAgaWYgKChfcmVmMyA9IHJlcXVlc3QucmVhZHlTdGF0ZSkgPT09IDAgfHwgX3JlZjMgPT09IDQpIHtcclxuICAgICAgICAgICAgX3RoaXMucHJvZ3Jlc3MgPSAxMDA7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gMykge1xyXG4gICAgICAgICAgICBfdGhpcy5wcm9ncmVzcyA9IDUwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBfb25yZWFkeXN0YXRlY2hhbmdlID09PSBcImZ1bmN0aW9uXCIgPyBfb25yZWFkeXN0YXRlY2hhbmdlLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgOiB2b2lkIDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBYSFJSZXF1ZXN0VHJhY2tlcjtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgU29ja2V0UmVxdWVzdFRyYWNrZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBTb2NrZXRSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KSB7XHJcbiAgICAgIHZhciBldmVudCwgX2osIF9sZW4xLCBfcmVmMixcclxuICAgICAgICBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICBfcmVmMiA9IFsnZXJyb3InLCAnb3BlbiddO1xyXG4gICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcclxuICAgICAgICBldmVudCA9IF9yZWYyW19qXTtcclxuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIF90aGlzLnByb2dyZXNzID0gMTAwO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBTb2NrZXRSZXF1ZXN0VHJhY2tlcjtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgRWxlbWVudE1vbml0b3IgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBFbGVtZW50TW9uaXRvcihvcHRpb25zKSB7XHJcbiAgICAgIHZhciBzZWxlY3RvciwgX2osIF9sZW4xLCBfcmVmMjtcclxuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVsZW1lbnRzID0gW107XHJcbiAgICAgIGlmIChvcHRpb25zLnNlbGVjdG9ycyA9PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9ucy5zZWxlY3RvcnMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICBfcmVmMiA9IG9wdGlvbnMuc2VsZWN0b3JzO1xyXG4gICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcclxuICAgICAgICBzZWxlY3RvciA9IF9yZWYyW19qXTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2gobmV3IEVsZW1lbnRUcmFja2VyKHNlbGVjdG9yKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gRWxlbWVudE1vbml0b3I7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIEVsZW1lbnRUcmFja2VyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgZnVuY3Rpb24gRWxlbWVudFRyYWNrZXIoc2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgICB0aGlzLnByb2dyZXNzID0gMDtcclxuICAgICAgdGhpcy5jaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIEVsZW1lbnRUcmFja2VyLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvbmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gX3RoaXMuY2hlY2soKTtcclxuICAgICAgICB9KSwgb3B0aW9ucy5lbGVtZW50cy5jaGVja0ludGVydmFsKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBFbGVtZW50VHJhY2tlci5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9ncmVzcyA9IDEwMDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEVsZW1lbnRUcmFja2VyO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBEb2N1bWVudE1vbml0b3IgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBEb2N1bWVudE1vbml0b3IucHJvdG90eXBlLnN0YXRlcyA9IHtcclxuICAgICAgbG9hZGluZzogMCxcclxuICAgICAgaW50ZXJhY3RpdmU6IDUwLFxyXG4gICAgICBjb21wbGV0ZTogMTAwXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIERvY3VtZW50TW9uaXRvcigpIHtcclxuICAgICAgdmFyIF9vbnJlYWR5c3RhdGVjaGFuZ2UsIF9yZWYyLFxyXG4gICAgICAgIF90aGlzID0gdGhpcztcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IChfcmVmMiA9IHRoaXMuc3RhdGVzW2RvY3VtZW50LnJlYWR5U3RhdGVdKSAhPSBudWxsID8gX3JlZjIgOiAxMDA7XHJcbiAgICAgIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPSBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2U7XHJcbiAgICAgIGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChfdGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgX3RoaXMucHJvZ3Jlc3MgPSBfdGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0eXBlb2YgX29ucmVhZHlzdGF0ZWNoYW5nZSA9PT0gXCJmdW5jdGlvblwiID8gX29ucmVhZHlzdGF0ZWNoYW5nZS5hcHBseShudWxsLCBhcmd1bWVudHMpIDogdm9pZCAwO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBEb2N1bWVudE1vbml0b3I7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIEV2ZW50TGFnTW9uaXRvciA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50TGFnTW9uaXRvcigpIHtcclxuICAgICAgdmFyIGF2ZywgaW50ZXJ2YWwsIGxhc3QsIHBvaW50cywgc2FtcGxlcyxcclxuICAgICAgICBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICBhdmcgPSAwO1xyXG4gICAgICBzYW1wbGVzID0gW107XHJcbiAgICAgIHBvaW50cyA9IDA7XHJcbiAgICAgIGxhc3QgPSBub3coKTtcclxuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGlmZjtcclxuICAgICAgICBkaWZmID0gbm93KCkgLSBsYXN0IC0gNTA7XHJcbiAgICAgICAgbGFzdCA9IG5vdygpO1xyXG4gICAgICAgIHNhbXBsZXMucHVzaChkaWZmKTtcclxuICAgICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPiBvcHRpb25zLmV2ZW50TGFnLnNhbXBsZUNvdW50KSB7XHJcbiAgICAgICAgICBzYW1wbGVzLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF2ZyA9IGF2Z0FtcGxpdHVkZShzYW1wbGVzKTtcclxuICAgICAgICBpZiAoKytwb2ludHMgPj0gb3B0aW9ucy5ldmVudExhZy5taW5TYW1wbGVzICYmIGF2ZyA8IG9wdGlvbnMuZXZlbnRMYWcubGFnVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICBfdGhpcy5wcm9ncmVzcyA9IDEwMDtcclxuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIF90aGlzLnByb2dyZXNzID0gMTAwICogKDMgLyAoYXZnICsgMykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBFdmVudExhZ01vbml0b3I7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIFNjYWxlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIFNjYWxlcihzb3VyY2UpIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgIHRoaXMubGFzdCA9IHRoaXMuc2luY2VMYXN0VXBkYXRlID0gMDtcclxuICAgICAgdGhpcy5yYXRlID0gb3B0aW9ucy5pbml0aWFsUmF0ZTtcclxuICAgICAgdGhpcy5jYXRjaHVwID0gMDtcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IHRoaXMubGFzdFByb2dyZXNzID0gMDtcclxuICAgICAgaWYgKHRoaXMuc291cmNlICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzID0gcmVzdWx0KHRoaXMuc291cmNlLCAncHJvZ3Jlc3MnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFNjYWxlci5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uKGZyYW1lVGltZSwgdmFsKSB7XHJcbiAgICAgIHZhciBzY2FsaW5nO1xyXG4gICAgICBpZiAodmFsID09IG51bGwpIHtcclxuICAgICAgICB2YWwgPSByZXN1bHQodGhpcy5zb3VyY2UsICdwcm9ncmVzcycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWwgPj0gMTAwKSB7XHJcbiAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsID09PSB0aGlzLmxhc3QpIHtcclxuICAgICAgICB0aGlzLnNpbmNlTGFzdFVwZGF0ZSArPSBmcmFtZVRpbWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2luY2VMYXN0VXBkYXRlKSB7XHJcbiAgICAgICAgICB0aGlzLnJhdGUgPSAodmFsIC0gdGhpcy5sYXN0KSAvIHRoaXMuc2luY2VMYXN0VXBkYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhdGNodXAgPSAodmFsIC0gdGhpcy5wcm9ncmVzcykgLyBvcHRpb25zLmNhdGNodXBUaW1lO1xyXG4gICAgICAgIHRoaXMuc2luY2VMYXN0VXBkYXRlID0gMDtcclxuICAgICAgICB0aGlzLmxhc3QgPSB2YWw7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZhbCA+IHRoaXMucHJvZ3Jlc3MpIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzICs9IHRoaXMuY2F0Y2h1cCAqIGZyYW1lVGltZTtcclxuICAgICAgfVxyXG4gICAgICBzY2FsaW5nID0gMSAtIE1hdGgucG93KHRoaXMucHJvZ3Jlc3MgLyAxMDAsIG9wdGlvbnMuZWFzZUZhY3Rvcik7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3MgKz0gc2NhbGluZyAqIHRoaXMucmF0ZSAqIGZyYW1lVGltZTtcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgubWluKHRoaXMubGFzdFByb2dyZXNzICsgb3B0aW9ucy5tYXhQcm9ncmVzc1BlckZyYW1lLCB0aGlzLnByb2dyZXNzKTtcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgubWF4KDAsIHRoaXMucHJvZ3Jlc3MpO1xyXG4gICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5taW4oMTAwLCB0aGlzLnByb2dyZXNzKTtcclxuICAgICAgdGhpcy5sYXN0UHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzO1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9ncmVzcztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFNjYWxlcjtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgc291cmNlcyA9IG51bGw7XHJcblxyXG4gIHNjYWxlcnMgPSBudWxsO1xyXG5cclxuICBiYXIgPSBudWxsO1xyXG5cclxuICB1bmlTY2FsZXIgPSBudWxsO1xyXG5cclxuICBhbmltYXRpb24gPSBudWxsO1xyXG5cclxuICBjYW5jZWxBbmltYXRpb24gPSBudWxsO1xyXG5cclxuICBQYWNlLnJ1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgaGFuZGxlUHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAob3B0aW9ucy5yZXN0YXJ0T25QdXNoU3RhdGUpIHtcclxuICAgICAgcmV0dXJuIFBhY2UucmVzdGFydCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmICh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgIT0gbnVsbCkge1xyXG4gICAgX3B1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBoYW5kbGVQdXNoU3RhdGUoKTtcclxuICAgICAgcmV0dXJuIF9wdXNoU3RhdGUuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSAhPSBudWxsKSB7XHJcbiAgICBfcmVwbGFjZVN0YXRlID0gd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlO1xyXG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGhhbmRsZVB1c2hTdGF0ZSgpO1xyXG4gICAgICByZXR1cm4gX3JlcGxhY2VTdGF0ZS5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBTT1VSQ0VfS0VZUyA9IHtcclxuICAgIGFqYXg6IEFqYXhNb25pdG9yLFxyXG4gICAgZWxlbWVudHM6IEVsZW1lbnRNb25pdG9yLFxyXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50TW9uaXRvcixcclxuICAgIGV2ZW50TGFnOiBFdmVudExhZ01vbml0b3JcclxuICB9O1xyXG5cclxuICAoaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHR5cGUsIF9qLCBfaywgX2xlbjEsIF9sZW4yLCBfcmVmMiwgX3JlZjMsIF9yZWY0O1xyXG4gICAgUGFjZS5zb3VyY2VzID0gc291cmNlcyA9IFtdO1xyXG4gICAgX3JlZjIgPSBbJ2FqYXgnLCAnZWxlbWVudHMnLCAnZG9jdW1lbnQnLCAnZXZlbnRMYWcnXTtcclxuICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xyXG4gICAgICB0eXBlID0gX3JlZjJbX2pdO1xyXG4gICAgICBpZiAob3B0aW9uc1t0eXBlXSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBzb3VyY2VzLnB1c2gobmV3IFNPVVJDRV9LRVlTW3R5cGVdKG9wdGlvbnNbdHlwZV0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlZjQgPSAoX3JlZjMgPSBvcHRpb25zLmV4dHJhU291cmNlcykgIT0gbnVsbCA/IF9yZWYzIDogW107XHJcbiAgICBmb3IgKF9rID0gMCwgX2xlbjIgPSBfcmVmNC5sZW5ndGg7IF9rIDwgX2xlbjI7IF9rKyspIHtcclxuICAgICAgc291cmNlID0gX3JlZjRbX2tdO1xyXG4gICAgICBzb3VyY2VzLnB1c2gobmV3IHNvdXJjZShvcHRpb25zKSk7XHJcbiAgICB9XHJcbiAgICBQYWNlLmJhciA9IGJhciA9IG5ldyBCYXI7XHJcbiAgICBzY2FsZXJzID0gW107XHJcbiAgICByZXR1cm4gdW5pU2NhbGVyID0gbmV3IFNjYWxlcjtcclxuICB9KSgpO1xyXG5cclxuICBQYWNlLnN0b3AgPSBmdW5jdGlvbigpIHtcclxuICAgIFBhY2UudHJpZ2dlcignc3RvcCcpO1xyXG4gICAgUGFjZS5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICBiYXIuZGVzdHJveSgpO1xyXG4gICAgY2FuY2VsQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgIGlmIChhbmltYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICBpZiAodHlwZW9mIGNhbmNlbEFuaW1hdGlvbkZyYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICAgIGFuaW1hdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5pdCgpO1xyXG4gIH07XHJcblxyXG4gIFBhY2UucmVzdGFydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgUGFjZS50cmlnZ2VyKCdyZXN0YXJ0Jyk7XHJcbiAgICBQYWNlLnN0b3AoKTtcclxuICAgIHJldHVybiBQYWNlLnN0YXJ0KCk7XHJcbiAgfTtcclxuXHJcbiAgUGFjZS5nbyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHN0YXJ0O1xyXG4gICAgUGFjZS5ydW5uaW5nID0gdHJ1ZTtcclxuICAgIGJhci5yZW5kZXIoKTtcclxuICAgIHN0YXJ0ID0gbm93KCk7XHJcbiAgICBjYW5jZWxBbmltYXRpb24gPSBmYWxzZTtcclxuICAgIHJldHVybiBhbmltYXRpb24gPSBydW5BbmltYXRpb24oZnVuY3Rpb24oZnJhbWVUaW1lLCBlbnF1ZXVlTmV4dEZyYW1lKSB7XHJcbiAgICAgIHZhciBhdmcsIGNvdW50LCBkb25lLCBlbGVtZW50LCBlbGVtZW50cywgaSwgaiwgcmVtYWluaW5nLCBzY2FsZXIsIHNjYWxlckxpc3QsIHN1bSwgX2osIF9rLCBfbGVuMSwgX2xlbjIsIF9yZWYyO1xyXG4gICAgICByZW1haW5pbmcgPSAxMDAgLSBiYXIucHJvZ3Jlc3M7XHJcbiAgICAgIGNvdW50ID0gc3VtID0gMDtcclxuICAgICAgZG9uZSA9IHRydWU7XHJcbiAgICAgIGZvciAoaSA9IF9qID0gMCwgX2xlbjEgPSBzb3VyY2VzLmxlbmd0aDsgX2ogPCBfbGVuMTsgaSA9ICsrX2opIHtcclxuICAgICAgICBzb3VyY2UgPSBzb3VyY2VzW2ldO1xyXG4gICAgICAgIHNjYWxlckxpc3QgPSBzY2FsZXJzW2ldICE9IG51bGwgPyBzY2FsZXJzW2ldIDogc2NhbGVyc1tpXSA9IFtdO1xyXG4gICAgICAgIGVsZW1lbnRzID0gKF9yZWYyID0gc291cmNlLmVsZW1lbnRzKSAhPSBudWxsID8gX3JlZjIgOiBbc291cmNlXTtcclxuICAgICAgICBmb3IgKGogPSBfayA9IDAsIF9sZW4yID0gZWxlbWVudHMubGVuZ3RoOyBfayA8IF9sZW4yOyBqID0gKytfaykge1xyXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRzW2pdO1xyXG4gICAgICAgICAgc2NhbGVyID0gc2NhbGVyTGlzdFtqXSAhPSBudWxsID8gc2NhbGVyTGlzdFtqXSA6IHNjYWxlckxpc3Rbal0gPSBuZXcgU2NhbGVyKGVsZW1lbnQpO1xyXG4gICAgICAgICAgZG9uZSAmPSBzY2FsZXIuZG9uZTtcclxuICAgICAgICAgIGlmIChzY2FsZXIuZG9uZSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICBzdW0gKz0gc2NhbGVyLnRpY2soZnJhbWVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXZnID0gc3VtIC8gY291bnQ7XHJcbiAgICAgIGJhci51cGRhdGUodW5pU2NhbGVyLnRpY2soZnJhbWVUaW1lLCBhdmcpKTtcclxuICAgICAgaWYgKGJhci5kb25lKCkgfHwgZG9uZSB8fCBjYW5jZWxBbmltYXRpb24pIHtcclxuICAgICAgICBiYXIudXBkYXRlKDEwMCk7XHJcbiAgICAgICAgUGFjZS50cmlnZ2VyKCdkb25lJyk7XHJcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBiYXIuZmluaXNoKCk7XHJcbiAgICAgICAgICBQYWNlLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybiBQYWNlLnRyaWdnZXIoJ2hpZGUnKTtcclxuICAgICAgICB9LCBNYXRoLm1heChvcHRpb25zLmdob3N0VGltZSwgTWF0aC5tYXgob3B0aW9ucy5taW5UaW1lIC0gKG5vdygpIC0gc3RhcnQpLCAwKSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBlbnF1ZXVlTmV4dEZyYW1lKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIFBhY2Uuc3RhcnQgPSBmdW5jdGlvbihfb3B0aW9ucykge1xyXG4gICAgZXh0ZW5kKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuICAgIFBhY2UucnVubmluZyA9IHRydWU7XHJcbiAgICB0cnkge1xyXG4gICAgICBiYXIucmVuZGVyKCk7XHJcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgTm9UYXJnZXRFcnJvciA9IF9lcnJvcjtcclxuICAgIH1cclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhY2UnKSkge1xyXG4gICAgICByZXR1cm4gc2V0VGltZW91dChQYWNlLnN0YXJ0LCA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBQYWNlLnRyaWdnZXIoJ3N0YXJ0Jyk7XHJcbiAgICAgIHJldHVybiBQYWNlLmdvKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKFsncGFjZSddLCBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIFBhY2U7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBQYWNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAob3B0aW9ucy5zdGFydE9uUGFnZUxvYWQpIHtcclxuICAgICAgUGFjZS5zdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pLmNhbGwodGhpcyk7XHJcbiIsIi8qIVxuICogcGVyZmVjdC1zY3JvbGxiYXIgdjEuNC4wXG4gKiAoYykgMjAxOCBIeXVuamUgSnVuXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZnVuY3Rpb24gZ2V0KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHNldChlbGVtZW50LCBvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbCA9IHZhbCArIFwicHhcIjtcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkaXYoY2xhc3NOYW1lKSB7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgcmV0dXJuIGRpdjtcbn1cblxudmFyIGVsTWF0Y2hlcyA9XG4gIHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAoRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yKTtcblxuZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBxdWVyeSkge1xuICBpZiAoIWVsTWF0Y2hlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBtYXRjaGluZyBtZXRob2Qgc3VwcG9ydGVkJyk7XG4gIH1cblxuICByZXR1cm4gZWxNYXRjaGVzLmNhbGwoZWxlbWVudCwgcXVlcnkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5yZW1vdmUpIHtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcXVlcnlDaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGVsZW1lbnQuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gbWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpOyB9XG4gICk7XG59XG5cbnZhciBjbHMgPSB7XG4gIG1haW46ICdwcycsXG4gIGVsZW1lbnQ6IHtcbiAgICB0aHVtYjogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzX190aHVtYi1cIiArIHgpOyB9LFxuICAgIHJhaWw6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoXCJwc19fcmFpbC1cIiArIHgpOyB9LFxuICAgIGNvbnN1bWluZzogJ3BzX19jaGlsZC0tY29uc3VtZScsXG4gIH0sXG4gIHN0YXRlOiB7XG4gICAgZm9jdXM6ICdwcy0tZm9jdXMnLFxuICAgIGNsaWNraW5nOiAncHMtLWNsaWNraW5nJyxcbiAgICBhY3RpdmU6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoXCJwcy0tYWN0aXZlLVwiICsgeCk7IH0sXG4gICAgc2Nyb2xsaW5nOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHMtLXNjcm9sbGluZy1cIiArIHgpOyB9LFxuICB9LFxufTtcblxuLypcbiAqIEhlbHBlciBtZXRob2RzXG4gKi9cbnZhciBzY3JvbGxpbmdDbGFzc1RpbWVvdXQgPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcblxuZnVuY3Rpb24gYWRkU2Nyb2xsaW5nQ2xhc3MoaSwgeCkge1xuICB2YXIgY2xhc3NMaXN0ID0gaS5lbGVtZW50LmNsYXNzTGlzdDtcbiAgdmFyIGNsYXNzTmFtZSA9IGNscy5zdGF0ZS5zY3JvbGxpbmcoeCk7XG5cbiAgaWYgKGNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgY2xlYXJUaW1lb3V0KHNjcm9sbGluZ0NsYXNzVGltZW91dFt4XSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNjcm9sbGluZ0NsYXNzKGksIHgpIHtcbiAgc2Nyb2xsaW5nQ2xhc3NUaW1lb3V0W3hdID0gc2V0VGltZW91dChcbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBpLmlzQWxpdmUgJiYgaS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLnNjcm9sbGluZyh4KSk7IH0sXG4gICAgaS5zZXR0aW5ncy5zY3JvbGxpbmdUaHJlc2hvbGRcbiAgKTtcbn1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsaW5nQ2xhc3NJbnN0YW50bHkoaSwgeCkge1xuICBhZGRTY3JvbGxpbmdDbGFzcyhpLCB4KTtcbiAgcmVtb3ZlU2Nyb2xsaW5nQ2xhc3MoaSwgeCk7XG59XG5cbnZhciBFdmVudEVsZW1lbnQgPSBmdW5jdGlvbiBFdmVudEVsZW1lbnQoZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB0aGlzLmhhbmRsZXJzID0ge307XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc0VtcHR5OiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbkV2ZW50RWxlbWVudC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIGJpbmQgKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgfVxuICB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0ucHVzaChoYW5kbGVyKTtcbiAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVsZW1lbnQucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIHVuYmluZCAoZXZlbnROYW1lLCB0YXJnZXQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0gPSB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0uZmlsdGVyKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgaWYgKHRhcmdldCAmJiBoYW5kbGVyICE9PSB0YXJnZXQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzJDEuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgZmFsc2UpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59O1xuXG5FdmVudEVsZW1lbnQucHJvdG90eXBlLnVuYmluZEFsbCA9IGZ1bmN0aW9uIHVuYmluZEFsbCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgZm9yICh2YXIgbmFtZSBpbiB0aGlzJDEuaGFuZGxlcnMpIHtcbiAgICB0aGlzJDEudW5iaW5kKG5hbWUpO1xuICB9XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuaXNFbXB0eS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaGFuZGxlcnMpLmV2ZXJ5KFxuICAgIGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHRoaXMkMS5oYW5kbGVyc1trZXldLmxlbmd0aCA9PT0gMDsgfVxuICApO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEV2ZW50RWxlbWVudC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG52YXIgRXZlbnRNYW5hZ2VyID0gZnVuY3Rpb24gRXZlbnRNYW5hZ2VyKCkge1xuICB0aGlzLmV2ZW50RWxlbWVudHMgPSBbXTtcbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUuZXZlbnRFbGVtZW50ID0gZnVuY3Rpb24gZXZlbnRFbGVtZW50IChlbGVtZW50KSB7XG4gIHZhciBlZSA9IHRoaXMuZXZlbnRFbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKGVlKSB7IHJldHVybiBlZS5lbGVtZW50ID09PSBlbGVtZW50OyB9KVswXTtcbiAgaWYgKCFlZSkge1xuICAgIGVlID0gbmV3IEV2ZW50RWxlbWVudChlbGVtZW50KTtcbiAgICB0aGlzLmV2ZW50RWxlbWVudHMucHVzaChlZSk7XG4gIH1cbiAgcmV0dXJuIGVlO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gYmluZCAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpLmJpbmQoZXZlbnROYW1lLCBoYW5kbGVyKTtcbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gdW5iaW5kIChlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIGVlID0gdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGVlLnVuYmluZChldmVudE5hbWUsIGhhbmRsZXIpO1xuXG4gIGlmIChlZS5pc0VtcHR5KSB7XG4gICAgLy8gcmVtb3ZlXG4gICAgdGhpcy5ldmVudEVsZW1lbnRzLnNwbGljZSh0aGlzLmV2ZW50RWxlbWVudHMuaW5kZXhPZihlZSksIDEpO1xuICB9XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLnVuYmluZEFsbCA9IGZ1bmN0aW9uIHVuYmluZEFsbCAoKSB7XG4gIHRoaXMuZXZlbnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnVuYmluZEFsbCgpOyB9KTtcbiAgdGhpcy5ldmVudEVsZW1lbnRzID0gW107XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlIChlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIGVlID0gdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciBvbmNlSGFuZGxlciA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBlZS51bmJpbmQoZXZlbnROYW1lLCBvbmNlSGFuZGxlcik7XG4gICAgaGFuZGxlcihldnQpO1xuICB9O1xuICBlZS5iaW5kKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRXZlbnQobmFtZSkge1xuICBpZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQobmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgZmFsc2UsIGZhbHNlLCB1bmRlZmluZWQpO1xuICAgIHJldHVybiBldnQ7XG4gIH1cbn1cblxudmFyIHByb2Nlc3NTY3JvbGxEaWZmID0gZnVuY3Rpb24oXG4gIGksXG4gIGF4aXMsXG4gIGRpZmYsXG4gIHVzZVNjcm9sbGluZ0NsYXNzLFxuICBmb3JjZUZpcmVSZWFjaEV2ZW50XG4pIHtcbiAgaWYgKCB1c2VTY3JvbGxpbmdDbGFzcyA9PT0gdm9pZCAwICkgdXNlU2Nyb2xsaW5nQ2xhc3MgPSB0cnVlO1xuICBpZiAoIGZvcmNlRmlyZVJlYWNoRXZlbnQgPT09IHZvaWQgMCApIGZvcmNlRmlyZVJlYWNoRXZlbnQgPSBmYWxzZTtcblxuICB2YXIgZmllbGRzO1xuICBpZiAoYXhpcyA9PT0gJ3RvcCcpIHtcbiAgICBmaWVsZHMgPSBbXG4gICAgICAnY29udGVudEhlaWdodCcsXG4gICAgICAnY29udGFpbmVySGVpZ2h0JyxcbiAgICAgICdzY3JvbGxUb3AnLFxuICAgICAgJ3knLFxuICAgICAgJ3VwJyxcbiAgICAgICdkb3duJyBdO1xuICB9IGVsc2UgaWYgKGF4aXMgPT09ICdsZWZ0Jykge1xuICAgIGZpZWxkcyA9IFtcbiAgICAgICdjb250ZW50V2lkdGgnLFxuICAgICAgJ2NvbnRhaW5lcldpZHRoJyxcbiAgICAgICdzY3JvbGxMZWZ0JyxcbiAgICAgICd4JyxcbiAgICAgICdsZWZ0JyxcbiAgICAgICdyaWdodCcgXTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgcHJvcGVyIGF4aXMgc2hvdWxkIGJlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBwcm9jZXNzU2Nyb2xsRGlmZiQxKGksIGRpZmYsIGZpZWxkcywgdXNlU2Nyb2xsaW5nQ2xhc3MsIGZvcmNlRmlyZVJlYWNoRXZlbnQpO1xufTtcblxuZnVuY3Rpb24gcHJvY2Vzc1Njcm9sbERpZmYkMShcbiAgaSxcbiAgZGlmZixcbiAgcmVmLFxuICB1c2VTY3JvbGxpbmdDbGFzcyxcbiAgZm9yY2VGaXJlUmVhY2hFdmVudFxuKSB7XG4gIHZhciBjb250ZW50SGVpZ2h0ID0gcmVmWzBdO1xuICB2YXIgY29udGFpbmVySGVpZ2h0ID0gcmVmWzFdO1xuICB2YXIgc2Nyb2xsVG9wID0gcmVmWzJdO1xuICB2YXIgeSA9IHJlZlszXTtcbiAgdmFyIHVwID0gcmVmWzRdO1xuICB2YXIgZG93biA9IHJlZls1XTtcbiAgaWYgKCB1c2VTY3JvbGxpbmdDbGFzcyA9PT0gdm9pZCAwICkgdXNlU2Nyb2xsaW5nQ2xhc3MgPSB0cnVlO1xuICBpZiAoIGZvcmNlRmlyZVJlYWNoRXZlbnQgPT09IHZvaWQgMCApIGZvcmNlRmlyZVJlYWNoRXZlbnQgPSBmYWxzZTtcblxuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICAvLyByZXNldCByZWFjaFxuICBpLnJlYWNoW3ldID0gbnVsbDtcblxuICAvLyAxIGZvciBzdWJwaXhlbCByb3VuZGluZ1xuICBpZiAoZWxlbWVudFtzY3JvbGxUb3BdIDwgMSkge1xuICAgIGkucmVhY2hbeV0gPSAnc3RhcnQnO1xuICB9XG5cbiAgLy8gMSBmb3Igc3VicGl4ZWwgcm91bmRpbmdcbiAgaWYgKGVsZW1lbnRbc2Nyb2xsVG9wXSA+IGlbY29udGVudEhlaWdodF0gLSBpW2NvbnRhaW5lckhlaWdodF0gLSAxKSB7XG4gICAgaS5yZWFjaFt5XSA9ICdlbmQnO1xuICB9XG5cbiAgaWYgKGRpZmYpIHtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtc2Nyb2xsLVwiICsgeSkpKTtcblxuICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLXNjcm9sbC1cIiArIHVwKSkpO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1zY3JvbGwtXCIgKyBkb3duKSkpO1xuICAgIH1cblxuICAgIGlmICh1c2VTY3JvbGxpbmdDbGFzcykge1xuICAgICAgc2V0U2Nyb2xsaW5nQ2xhc3NJbnN0YW50bHkoaSwgeSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGkucmVhY2hbeV0gJiYgKGRpZmYgfHwgZm9yY2VGaXJlUmVhY2hFdmVudCkpIHtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtXCIgKyB5ICsgXCItcmVhY2gtXCIgKyAoaS5yZWFjaFt5XSkpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9JbnQoeCkge1xuICByZXR1cm4gcGFyc2VJbnQoeCwgMTApIHx8IDA7XG59XG5cbmZ1bmN0aW9uIGlzRWRpdGFibGUoZWwpIHtcbiAgcmV0dXJuIChcbiAgICBtYXRjaGVzKGVsLCAnaW5wdXQsW2NvbnRlbnRlZGl0YWJsZV0nKSB8fFxuICAgIG1hdGNoZXMoZWwsICdzZWxlY3QsW2NvbnRlbnRlZGl0YWJsZV0nKSB8fFxuICAgIG1hdGNoZXMoZWwsICd0ZXh0YXJlYSxbY29udGVudGVkaXRhYmxlXScpIHx8XG4gICAgbWF0Y2hlcyhlbCwgJ2J1dHRvbixbY29udGVudGVkaXRhYmxlXScpXG4gICk7XG59XG5cbmZ1bmN0aW9uIG91dGVyV2lkdGgoZWxlbWVudCkge1xuICB2YXIgc3R5bGVzID0gZ2V0KGVsZW1lbnQpO1xuICByZXR1cm4gKFxuICAgIHRvSW50KHN0eWxlcy53aWR0aCkgK1xuICAgIHRvSW50KHN0eWxlcy5wYWRkaW5nTGVmdCkgK1xuICAgIHRvSW50KHN0eWxlcy5wYWRkaW5nUmlnaHQpICtcbiAgICB0b0ludChzdHlsZXMuYm9yZGVyTGVmdFdpZHRoKSArXG4gICAgdG9JbnQoc3R5bGVzLmJvcmRlclJpZ2h0V2lkdGgpXG4gICk7XG59XG5cbnZhciBlbnYgPSB7XG4gIGlzV2ViS2l0OlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAnV2Via2l0QXBwZWFyYW5jZScgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxuICBzdXBwb3J0c1RvdWNoOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICAgICAgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpKSxcbiAgc3VwcG9ydHNJZVBvaW50ZXI6XG4gICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMsXG4gIGlzQ2hyb21lOlxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgL0Nocm9tZS9pLnRlc3QobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQpLFxufTtcblxudmFyIHVwZGF0ZUdlb21ldHJ5ID0gZnVuY3Rpb24oaSkge1xuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcbiAgdmFyIHJvdW5kZWRTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcblxuICBpLmNvbnRhaW5lcldpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgaS5jb250YWluZXJIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgaS5jb250ZW50V2lkdGggPSBlbGVtZW50LnNjcm9sbFdpZHRoO1xuICBpLmNvbnRlbnRIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcblxuICBpZiAoIWVsZW1lbnQuY29udGFpbnMoaS5zY3JvbGxiYXJYUmFpbCkpIHtcbiAgICAvLyBjbGVhbiB1cCBhbmQgYXBwZW5kXG4gICAgcXVlcnlDaGlsZHJlbihlbGVtZW50LCBjbHMuZWxlbWVudC5yYWlsKCd4JykpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiByZW1vdmUoZWwpOyB9XG4gICAgKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGkuc2Nyb2xsYmFyWFJhaWwpO1xuICB9XG4gIGlmICghZWxlbWVudC5jb250YWlucyhpLnNjcm9sbGJhcllSYWlsKSkge1xuICAgIC8vIGNsZWFuIHVwIGFuZCBhcHBlbmRcbiAgICBxdWVyeUNoaWxkcmVuKGVsZW1lbnQsIGNscy5lbGVtZW50LnJhaWwoJ3knKSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIHJlbW92ZShlbCk7IH1cbiAgICApO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaS5zY3JvbGxiYXJZUmFpbCk7XG4gIH1cblxuICBpZiAoXG4gICAgIWkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxYICYmXG4gICAgaS5jb250YWluZXJXaWR0aCArIGkuc2V0dGluZ3Muc2Nyb2xsWE1hcmdpbk9mZnNldCA8IGkuY29udGVudFdpZHRoXG4gICkge1xuICAgIGkuc2Nyb2xsYmFyWEFjdGl2ZSA9IHRydWU7XG4gICAgaS5yYWlsWFdpZHRoID0gaS5jb250YWluZXJXaWR0aCAtIGkucmFpbFhNYXJnaW5XaWR0aDtcbiAgICBpLnJhaWxYUmF0aW8gPSBpLmNvbnRhaW5lcldpZHRoIC8gaS5yYWlsWFdpZHRoO1xuICAgIGkuc2Nyb2xsYmFyWFdpZHRoID0gZ2V0VGh1bWJTaXplKFxuICAgICAgaSxcbiAgICAgIHRvSW50KGkucmFpbFhXaWR0aCAqIGkuY29udGFpbmVyV2lkdGggLyBpLmNvbnRlbnRXaWR0aClcbiAgICApO1xuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSB0b0ludChcbiAgICAgIChpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArIGVsZW1lbnQuc2Nyb2xsTGVmdCkgKlxuICAgICAgICAoaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGgpIC9cbiAgICAgICAgKGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aClcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGkuc2Nyb2xsYmFyWEFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKFxuICAgICFpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWSAmJlxuICAgIGkuY29udGFpbmVySGVpZ2h0ICsgaS5zZXR0aW5ncy5zY3JvbGxZTWFyZ2luT2Zmc2V0IDwgaS5jb250ZW50SGVpZ2h0XG4gICkge1xuICAgIGkuc2Nyb2xsYmFyWUFjdGl2ZSA9IHRydWU7XG4gICAgaS5yYWlsWUhlaWdodCA9IGkuY29udGFpbmVySGVpZ2h0IC0gaS5yYWlsWU1hcmdpbkhlaWdodDtcbiAgICBpLnJhaWxZUmF0aW8gPSBpLmNvbnRhaW5lckhlaWdodCAvIGkucmFpbFlIZWlnaHQ7XG4gICAgaS5zY3JvbGxiYXJZSGVpZ2h0ID0gZ2V0VGh1bWJTaXplKFxuICAgICAgaSxcbiAgICAgIHRvSW50KGkucmFpbFlIZWlnaHQgKiBpLmNvbnRhaW5lckhlaWdodCAvIGkuY29udGVudEhlaWdodClcbiAgICApO1xuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IHRvSW50KFxuICAgICAgcm91bmRlZFNjcm9sbFRvcCAqXG4gICAgICAgIChpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0KSAvXG4gICAgICAgIChpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodClcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGkuc2Nyb2xsYmFyWUFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGkuc2Nyb2xsYmFyWExlZnQgPj0gaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGgpIHtcbiAgICBpLnNjcm9sbGJhclhMZWZ0ID0gaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGg7XG4gIH1cbiAgaWYgKGkuc2Nyb2xsYmFyWVRvcCA+PSBpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0KSB7XG4gICAgaS5zY3JvbGxiYXJZVG9wID0gaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodDtcbiAgfVxuXG4gIHVwZGF0ZUNzcyhlbGVtZW50LCBpKTtcblxuICBpZiAoaS5zY3JvbGxiYXJYQWN0aXZlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5hY3RpdmUoJ3gnKSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5hY3RpdmUoJ3gnKSk7XG4gICAgaS5zY3JvbGxiYXJYV2lkdGggPSAwO1xuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSAwO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IDA7XG4gIH1cbiAgaWYgKGkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuYWN0aXZlKCd5JykpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuYWN0aXZlKCd5JykpO1xuICAgIGkuc2Nyb2xsYmFyWUhlaWdodCA9IDA7XG4gICAgaS5zY3JvbGxiYXJZVG9wID0gMDtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldFRodW1iU2l6ZShpLCB0aHVtYlNpemUpIHtcbiAgaWYgKGkuc2V0dGluZ3MubWluU2Nyb2xsYmFyTGVuZ3RoKSB7XG4gICAgdGh1bWJTaXplID0gTWF0aC5tYXgodGh1bWJTaXplLCBpLnNldHRpbmdzLm1pblNjcm9sbGJhckxlbmd0aCk7XG4gIH1cbiAgaWYgKGkuc2V0dGluZ3MubWF4U2Nyb2xsYmFyTGVuZ3RoKSB7XG4gICAgdGh1bWJTaXplID0gTWF0aC5taW4odGh1bWJTaXplLCBpLnNldHRpbmdzLm1heFNjcm9sbGJhckxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIHRodW1iU2l6ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsZW1lbnQsIGkpIHtcbiAgdmFyIHhSYWlsT2Zmc2V0ID0geyB3aWR0aDogaS5yYWlsWFdpZHRoIH07XG4gIHZhciByb3VuZGVkU2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG5cbiAgaWYgKGkuaXNSdGwpIHtcbiAgICB4UmFpbE9mZnNldC5sZWZ0ID1cbiAgICAgIGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArXG4gICAgICBpLmNvbnRhaW5lcldpZHRoIC1cbiAgICAgIGkuY29udGVudFdpZHRoO1xuICB9IGVsc2Uge1xuICAgIHhSYWlsT2Zmc2V0LmxlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gIH1cbiAgaWYgKGkuaXNTY3JvbGxiYXJYVXNpbmdCb3R0b20pIHtcbiAgICB4UmFpbE9mZnNldC5ib3R0b20gPSBpLnNjcm9sbGJhclhCb3R0b20gLSByb3VuZGVkU2Nyb2xsVG9wO1xuICB9IGVsc2Uge1xuICAgIHhSYWlsT2Zmc2V0LnRvcCA9IGkuc2Nyb2xsYmFyWFRvcCArIHJvdW5kZWRTY3JvbGxUb3A7XG4gIH1cbiAgc2V0KGkuc2Nyb2xsYmFyWFJhaWwsIHhSYWlsT2Zmc2V0KTtcblxuICB2YXIgeVJhaWxPZmZzZXQgPSB7IHRvcDogcm91bmRlZFNjcm9sbFRvcCwgaGVpZ2h0OiBpLnJhaWxZSGVpZ2h0IH07XG4gIGlmIChpLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQpIHtcbiAgICBpZiAoaS5pc1J0bCkge1xuICAgICAgeVJhaWxPZmZzZXQucmlnaHQgPVxuICAgICAgICBpLmNvbnRlbnRXaWR0aCAtXG4gICAgICAgIChpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArIGVsZW1lbnQuc2Nyb2xsTGVmdCkgLVxuICAgICAgICBpLnNjcm9sbGJhcllSaWdodCAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWU91dGVyV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHlSYWlsT2Zmc2V0LnJpZ2h0ID0gaS5zY3JvbGxiYXJZUmlnaHQgLSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpLmlzUnRsKSB7XG4gICAgICB5UmFpbE9mZnNldC5sZWZ0ID1cbiAgICAgICAgaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgK1xuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgK1xuICAgICAgICBpLmNvbnRhaW5lcldpZHRoICogMiAtXG4gICAgICAgIGkuY29udGVudFdpZHRoIC1cbiAgICAgICAgaS5zY3JvbGxiYXJZTGVmdCAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWU91dGVyV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHlSYWlsT2Zmc2V0LmxlZnQgPSBpLnNjcm9sbGJhcllMZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfVxuICBzZXQoaS5zY3JvbGxiYXJZUmFpbCwgeVJhaWxPZmZzZXQpO1xuXG4gIHNldChpLnNjcm9sbGJhclgsIHtcbiAgICBsZWZ0OiBpLnNjcm9sbGJhclhMZWZ0LFxuICAgIHdpZHRoOiBpLnNjcm9sbGJhclhXaWR0aCAtIGkucmFpbEJvcmRlclhXaWR0aCxcbiAgfSk7XG4gIHNldChpLnNjcm9sbGJhclksIHtcbiAgICB0b3A6IGkuc2Nyb2xsYmFyWVRvcCxcbiAgICBoZWlnaHQ6IGkuc2Nyb2xsYmFyWUhlaWdodCAtIGkucmFpbEJvcmRlcllXaWR0aCxcbiAgfSk7XG59XG5cbnZhciBjbGlja1JhaWwgPSBmdW5jdGlvbihpKSB7XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclksICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTsgfSk7XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhcllSYWlsLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcG9zaXRpb25Ub3AgPVxuICAgICAgZS5wYWdlWSAtXG4gICAgICB3aW5kb3cucGFnZVlPZmZzZXQgLVxuICAgICAgaS5zY3JvbGxiYXJZUmFpbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgdmFyIGRpcmVjdGlvbiA9IHBvc2l0aW9uVG9wID4gaS5zY3JvbGxiYXJZVG9wID8gMSA6IC0xO1xuXG4gICAgaS5lbGVtZW50LnNjcm9sbFRvcCArPSBkaXJlY3Rpb24gKiBpLmNvbnRhaW5lckhlaWdodDtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclgsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTsgfSk7XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclhSYWlsLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcG9zaXRpb25MZWZ0ID1cbiAgICAgIGUucGFnZVggLVxuICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0IC1cbiAgICAgIGkuc2Nyb2xsYmFyWFJhaWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICB2YXIgZGlyZWN0aW9uID0gcG9zaXRpb25MZWZ0ID4gaS5zY3JvbGxiYXJYTGVmdCA/IDEgOiAtMTtcblxuICAgIGkuZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRpcmVjdGlvbiAqIGkuY29udGFpbmVyV2lkdGg7XG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn07XG5cbnZhciBkcmFnVGh1bWIgPSBmdW5jdGlvbihpKSB7XG4gIGJpbmRNb3VzZVNjcm9sbEhhbmRsZXIoaSwgW1xuICAgICdjb250YWluZXJXaWR0aCcsXG4gICAgJ2NvbnRlbnRXaWR0aCcsXG4gICAgJ3BhZ2VYJyxcbiAgICAncmFpbFhXaWR0aCcsXG4gICAgJ3Njcm9sbGJhclgnLFxuICAgICdzY3JvbGxiYXJYV2lkdGgnLFxuICAgICdzY3JvbGxMZWZ0JyxcbiAgICAneCcsXG4gICAgJ3Njcm9sbGJhclhSYWlsJyBdKTtcbiAgYmluZE1vdXNlU2Nyb2xsSGFuZGxlcihpLCBbXG4gICAgJ2NvbnRhaW5lckhlaWdodCcsXG4gICAgJ2NvbnRlbnRIZWlnaHQnLFxuICAgICdwYWdlWScsXG4gICAgJ3JhaWxZSGVpZ2h0JyxcbiAgICAnc2Nyb2xsYmFyWScsXG4gICAgJ3Njcm9sbGJhcllIZWlnaHQnLFxuICAgICdzY3JvbGxUb3AnLFxuICAgICd5JyxcbiAgICAnc2Nyb2xsYmFyWVJhaWwnIF0pO1xufTtcblxuZnVuY3Rpb24gYmluZE1vdXNlU2Nyb2xsSGFuZGxlcihcbiAgaSxcbiAgcmVmXG4pIHtcbiAgdmFyIGNvbnRhaW5lckhlaWdodCA9IHJlZlswXTtcbiAgdmFyIGNvbnRlbnRIZWlnaHQgPSByZWZbMV07XG4gIHZhciBwYWdlWSA9IHJlZlsyXTtcbiAgdmFyIHJhaWxZSGVpZ2h0ID0gcmVmWzNdO1xuICB2YXIgc2Nyb2xsYmFyWSA9IHJlZls0XTtcbiAgdmFyIHNjcm9sbGJhcllIZWlnaHQgPSByZWZbNV07XG4gIHZhciBzY3JvbGxUb3AgPSByZWZbNl07XG4gIHZhciB5ID0gcmVmWzddO1xuICB2YXIgc2Nyb2xsYmFyWVJhaWwgPSByZWZbOF07XG5cbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgdmFyIHN0YXJ0aW5nU2Nyb2xsVG9wID0gbnVsbDtcbiAgdmFyIHN0YXJ0aW5nTW91c2VQYWdlWSA9IG51bGw7XG4gIHZhciBzY3JvbGxCeSA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihlKSB7XG4gICAgZWxlbWVudFtzY3JvbGxUb3BdID1cbiAgICAgIHN0YXJ0aW5nU2Nyb2xsVG9wICsgc2Nyb2xsQnkgKiAoZVtwYWdlWV0gLSBzdGFydGluZ01vdXNlUGFnZVkpO1xuICAgIGFkZFNjcm9sbGluZ0NsYXNzKGksIHkpO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZVVwSGFuZGxlcigpIHtcbiAgICByZW1vdmVTY3JvbGxpbmdDbGFzcyhpLCB5KTtcbiAgICBpW3Njcm9sbGJhcllSYWlsXS5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5jbGlja2luZyk7XG4gICAgaS5ldmVudC51bmJpbmQoaS5vd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBpLmV2ZW50LmJpbmQoaVtzY3JvbGxiYXJZXSwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgc3RhcnRpbmdTY3JvbGxUb3AgPSBlbGVtZW50W3Njcm9sbFRvcF07XG4gICAgc3RhcnRpbmdNb3VzZVBhZ2VZID0gZVtwYWdlWV07XG4gICAgc2Nyb2xsQnkgPVxuICAgICAgKGlbY29udGVudEhlaWdodF0gLSBpW2NvbnRhaW5lckhlaWdodF0pIC9cbiAgICAgIChpW3JhaWxZSGVpZ2h0XSAtIGlbc2Nyb2xsYmFyWUhlaWdodF0pO1xuXG4gICAgaS5ldmVudC5iaW5kKGkub3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIGkuZXZlbnQub25jZShpLm93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xuXG4gICAgaVtzY3JvbGxiYXJZUmFpbF0uY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuY2xpY2tpbmcpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufVxuXG52YXIga2V5Ym9hcmQgPSBmdW5jdGlvbihpKSB7XG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIHZhciBlbGVtZW50SG92ZXJlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1hdGNoZXMoZWxlbWVudCwgJzpob3ZlcicpOyB9O1xuICB2YXIgc2Nyb2xsYmFyRm9jdXNlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1hdGNoZXMoaS5zY3JvbGxiYXJYLCAnOmZvY3VzJykgfHwgbWF0Y2hlcyhpLnNjcm9sbGJhclksICc6Zm9jdXMnKTsgfTtcblxuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkge1xuICAgIHZhciBzY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgICBpZiAoZGVsdGFYID09PSAwKSB7XG4gICAgICBpZiAoIWkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIChzY3JvbGxUb3AgPT09IDAgJiYgZGVsdGFZID4gMCkgfHxcbiAgICAgICAgKHNjcm9sbFRvcCA+PSBpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodCAmJiBkZWx0YVkgPCAwKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIGlmIChkZWx0YVkgPT09IDApIHtcbiAgICAgIGlmICghaS5zY3JvbGxiYXJYQWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKHNjcm9sbExlZnQgPT09IDAgJiYgZGVsdGFYIDwgMCkgfHxcbiAgICAgICAgKHNjcm9sbExlZnQgPj0gaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoICYmIGRlbHRhWCA+IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaS5ldmVudC5iaW5kKGkub3duZXJEb2N1bWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChcbiAgICAgIChlLmlzRGVmYXVsdFByZXZlbnRlZCAmJiBlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB8fFxuICAgICAgZS5kZWZhdWx0UHJldmVudGVkXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFlbGVtZW50SG92ZXJlZCgpICYmICFzY3JvbGxiYXJGb2N1c2VkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgOiBpLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ0lGUkFNRScpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQuY29udGVudERvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnbyBkZWVwZXIgaWYgZWxlbWVudCBpcyBhIHdlYmNvbXBvbmVudFxuICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudC5zaGFkb3dSb290KSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNFZGl0YWJsZShhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlbHRhWCA9IDA7XG4gICAgdmFyIGRlbHRhWSA9IDA7XG5cbiAgICBzd2l0Y2ggKGUud2hpY2gpIHtcbiAgICAgIGNhc2UgMzc6IC8vIGxlZnRcbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWCA9IC1pLmNvbnRlbnRXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGRlbHRhWCA9IC1pLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWCA9IC0zMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzg6IC8vIHVwXG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSBpLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSBpLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVkgPSAzMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzk6IC8vIHJpZ2h0XG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICBkZWx0YVggPSBpLmNvbnRlbnRXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGRlbHRhWCA9IGkuY29udGFpbmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFYID0gMzA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQwOiAvLyBkb3duXG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSAtaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWSA9IC0zMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzI6IC8vIHNwYWNlIGJhclxuICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWSA9IC1pLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzM6IC8vIHBhZ2UgdXBcbiAgICAgICAgZGVsdGFZID0gaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNDogLy8gcGFnZSBkb3duXG4gICAgICAgIGRlbHRhWSA9IC1pLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM2OiAvLyBob21lXG4gICAgICAgIGRlbHRhWSA9IGkuY29udGVudEhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM1OiAvLyBlbmRcbiAgICAgICAgZGVsdGFZID0gLWkuY29udGVudEhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxYICYmIGRlbHRhWCAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFkgJiYgZGVsdGFZICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGVsdGFZO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArPSBkZWx0YVg7XG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBpZiAoc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciB3aGVlbCA9IGZ1bmN0aW9uKGkpIHtcbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICB2YXIgcm91bmRlZFNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuICAgIHZhciBpc1RvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wID09PSAwO1xuICAgIHZhciBpc0JvdHRvbSA9XG4gICAgICByb3VuZGVkU2Nyb2xsVG9wICsgZWxlbWVudC5vZmZzZXRIZWlnaHQgPT09IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIHZhciBpc0xlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQgPT09IDA7XG4gICAgdmFyIGlzUmlnaHQgPVxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICsgZWxlbWVudC5vZmZzZXRXaWR0aCA9PT0gZWxlbWVudC5zY3JvbGxXaWR0aDtcblxuICAgIHZhciBoaXRzQm91bmQ7XG5cbiAgICAvLyBwaWNrIGF4aXMgd2l0aCBwcmltYXJ5IGRpcmVjdGlvblxuICAgIGlmIChNYXRoLmFicyhkZWx0YVkpID4gTWF0aC5hYnMoZGVsdGFYKSkge1xuICAgICAgaGl0c0JvdW5kID0gaXNUb3AgfHwgaXNCb3R0b207XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpdHNCb3VuZCA9IGlzTGVmdCB8fCBpc1JpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiBoaXRzQm91bmQgPyAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlbHRhRnJvbUV2ZW50KGUpIHtcbiAgICB2YXIgZGVsdGFYID0gZS5kZWx0YVg7XG4gICAgdmFyIGRlbHRhWSA9IC0xICogZS5kZWx0YVk7XG5cbiAgICBpZiAodHlwZW9mIGRlbHRhWCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRlbHRhWSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIE9TIFggU2FmYXJpXG4gICAgICBkZWx0YVggPSAtMSAqIGUud2hlZWxEZWx0YVggLyA2O1xuICAgICAgZGVsdGFZID0gZS53aGVlbERlbHRhWSAvIDY7XG4gICAgfVxuXG4gICAgaWYgKGUuZGVsdGFNb2RlICYmIGUuZGVsdGFNb2RlID09PSAxKSB7XG4gICAgICAvLyBGaXJlZm94IGluIGRlbHRhTW9kZSAxOiBMaW5lIHNjcm9sbGluZ1xuICAgICAgZGVsdGFYICo9IDEwO1xuICAgICAgZGVsdGFZICo9IDEwO1xuICAgIH1cblxuICAgIGlmIChkZWx0YVggIT09IGRlbHRhWCAmJiBkZWx0YVkgIT09IGRlbHRhWSAvKiBOYU4gY2hlY2tzICovKSB7XG4gICAgICAvLyBJRSBpbiBzb21lIG1vdXNlIGRyaXZlcnNcbiAgICAgIGRlbHRhWCA9IDA7XG4gICAgICBkZWx0YVkgPSBlLndoZWVsRGVsdGE7XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgIC8vIHJldmVyc2UgYXhpcyB3aXRoIHNoaWZ0IGtleVxuICAgICAgcmV0dXJuIFstZGVsdGFZLCAtZGVsdGFYXTtcbiAgICB9XG4gICAgcmV0dXJuIFtkZWx0YVgsIGRlbHRhWV07XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRCZUNvbnN1bWVkQnlDaGlsZCh0YXJnZXQsIGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgLy8gRklYTUU6IHRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvciA8c2VsZWN0PiBpc3N1ZSBpbiBGRiBhbmQgSUUgIzU3MVxuICAgIGlmICghZW52LmlzV2ViS2l0ICYmIGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0OmZvY3VzJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghZWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGN1cnNvciA9IHRhcmdldDtcblxuICAgIHdoaWxlIChjdXJzb3IgJiYgY3Vyc29yICE9PSBlbGVtZW50KSB7XG4gICAgICBpZiAoY3Vyc29yLmNsYXNzTGlzdC5jb250YWlucyhjbHMuZWxlbWVudC5jb25zdW1pbmcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGUgPSBnZXQoY3Vyc29yKTtcbiAgICAgIHZhciBvdmVyZmxvdyA9IFtzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYLCBzdHlsZS5vdmVyZmxvd1ldLmpvaW4oXG4gICAgICAgICcnXG4gICAgICApO1xuXG4gICAgICAvLyBpZiBzY3JvbGxhYmxlXG4gICAgICBpZiAob3ZlcmZsb3cubWF0Y2goLyhzY3JvbGx8YXV0bykvKSkge1xuICAgICAgICB2YXIgbWF4U2Nyb2xsVG9wID0gY3Vyc29yLnNjcm9sbEhlaWdodCAtIGN1cnNvci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGlmIChtYXhTY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsVG9wID09PSAwICYmIGRlbHRhWSA+IDApICYmXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxUb3AgPT09IG1heFNjcm9sbFRvcCAmJiBkZWx0YVkgPCAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtYXhTY3JvbGxMZWZ0ID0gY3Vyc29yLnNjcm9sbFdpZHRoIC0gY3Vyc29yLmNsaWVudFdpZHRoO1xuICAgICAgICBpZiAobWF4U2Nyb2xsTGVmdCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxMZWZ0ID09PSAwICYmIGRlbHRhWCA8IDApICYmXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxMZWZ0ID09PSBtYXhTY3JvbGxMZWZ0ICYmIGRlbHRhWCA+IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3Vyc29yID0gY3Vyc29yLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbW91c2V3aGVlbEhhbmRsZXIoZSkge1xuICAgIHZhciByZWYgPSBnZXREZWx0YUZyb21FdmVudChlKTtcbiAgICB2YXIgZGVsdGFYID0gcmVmWzBdO1xuICAgIHZhciBkZWx0YVkgPSByZWZbMV07XG5cbiAgICBpZiAoc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQoZS50YXJnZXQsIGRlbHRhWCwgZGVsdGFZKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzaG91bGRQcmV2ZW50ID0gZmFsc2U7XG4gICAgaWYgKCFpLnNldHRpbmdzLnVzZUJvdGhXaGVlbEF4ZXMpIHtcbiAgICAgIC8vIGRlbHRhWCB3aWxsIG9ubHkgYmUgdXNlZCBmb3IgaG9yaXpvbnRhbCBzY3JvbGxpbmcgYW5kIGRlbHRhWSB3aWxsXG4gICAgICAvLyBvbmx5IGJlIHVzZWQgZm9yIHZlcnRpY2FsIHNjcm9sbGluZyAtIHRoaXMgaXMgdGhlIGRlZmF1bHRcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wIC09IGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArPSBkZWx0YVggKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgfSBlbHNlIGlmIChpLnNjcm9sbGJhcllBY3RpdmUgJiYgIWkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xuICAgICAgLy8gb25seSB2ZXJ0aWNhbCBzY3JvbGxiYXIgaXMgYWN0aXZlIGFuZCB1c2VCb3RoV2hlZWxBeGVzIG9wdGlvbiBpc1xuICAgICAgLy8gYWN0aXZlLCBzbyBsZXQncyBzY3JvbGwgdmVydGljYWwgYmFyIHVzaW5nIGJvdGggbW91c2Ugd2hlZWwgYXhlc1xuICAgICAgaWYgKGRlbHRhWSkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCArPSBkZWx0YVggKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICB9XG4gICAgICBzaG91bGRQcmV2ZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGkuc2Nyb2xsYmFyWEFjdGl2ZSAmJiAhaS5zY3JvbGxiYXJZQWN0aXZlKSB7XG4gICAgICAvLyB1c2VCb3RoV2hlZWxBeGVzIGFuZCBvbmx5IGhvcml6b250YWwgYmFyIGlzIGFjdGl2ZSwgc28gdXNlIGJvdGhcbiAgICAgIC8vIHdoZWVsIGF4ZXMgZm9yIGhvcml6b250YWwgYmFyXG4gICAgICBpZiAoZGVsdGFYKSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArPSBkZWx0YVggKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgLT0gZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfVxuICAgICAgc2hvdWxkUHJldmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBzaG91bGRQcmV2ZW50ID0gc2hvdWxkUHJldmVudCB8fCBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSk7XG4gICAgaWYgKHNob3VsZFByZXZlbnQgJiYgIWUuY3RybEtleSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdy5vbndoZWVsICE9PSAndW5kZWZpbmVkJykge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnd2hlZWwnLCBtb3VzZXdoZWVsSGFuZGxlcik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5vbm1vdXNld2hlZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdtb3VzZXdoZWVsJywgbW91c2V3aGVlbEhhbmRsZXIpO1xuICB9XG59O1xuXG52YXIgdG91Y2ggPSBmdW5jdGlvbihpKSB7XG4gIGlmICghZW52LnN1cHBvcnRzVG91Y2ggJiYgIWVudi5zdXBwb3J0c0llUG9pbnRlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnQoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgdmFyIG1hZ25pdHVkZVggPSBNYXRoLmFicyhkZWx0YVgpO1xuICAgIHZhciBtYWduaXR1ZGVZID0gTWF0aC5hYnMoZGVsdGFZKTtcblxuICAgIGlmIChtYWduaXR1ZGVZID4gbWFnbml0dWRlWCkge1xuICAgICAgLy8gdXNlciBpcyBwZXJoYXBzIHRyeWluZyB0byBzd2lwZSB1cC9kb3duIHRoZSBwYWdlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKGRlbHRhWSA8IDAgJiYgc2Nyb2xsVG9wID09PSBpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodCkgfHxcbiAgICAgICAgKGRlbHRhWSA+IDAgJiYgc2Nyb2xsVG9wID09PSAwKVxuICAgICAgKSB7XG4gICAgICAgIC8vIHNldCBwcmV2ZW50IGZvciBtb2JpbGUgQ2hyb21lIHJlZnJlc2hcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZID09PSAwICYmIGRlbHRhWSA+IDAgJiYgZW52LmlzQ2hyb21lO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWFnbml0dWRlWCA+IG1hZ25pdHVkZVkpIHtcbiAgICAgIC8vIHVzZXIgaXMgcGVyaGFwcyB0cnlpbmcgdG8gc3dpcGUgbGVmdC9yaWdodCBhY3Jvc3MgdGhlIHBhZ2VcblxuICAgICAgaWYgKFxuICAgICAgICAoZGVsdGFYIDwgMCAmJiBzY3JvbGxMZWZ0ID09PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpIHx8XG4gICAgICAgIChkZWx0YVggPiAwICYmIHNjcm9sbExlZnQgPT09IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVRvdWNoTW92ZShkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpIHtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkaWZmZXJlbmNlWTtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgLT0gZGlmZmVyZW5jZVg7XG5cbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcbiAgfVxuXG4gIHZhciBzdGFydE9mZnNldCA9IHt9O1xuICB2YXIgc3RhcnRUaW1lID0gMDtcbiAgdmFyIHNwZWVkID0ge307XG4gIHZhciBlYXNpbmdMb29wID0gbnVsbDtcblxuICBmdW5jdGlvbiBnZXRUb3VjaChlKSB7XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcykge1xuICAgICAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTWF5YmUgSUUgcG9pbnRlclxuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSGFuZGxlKGUpIHtcbiAgICBpZiAoZS5wb2ludGVyVHlwZSAmJiBlLnBvaW50ZXJUeXBlID09PSAncGVuJyAmJiBlLmJ1dHRvbnMgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZS5wb2ludGVyVHlwZSAmJlxuICAgICAgZS5wb2ludGVyVHlwZSAhPT0gJ21vdXNlJyAmJlxuICAgICAgZS5wb2ludGVyVHlwZSAhPT0gZS5NU1BPSU5URVJfVFlQRV9NT1VTRVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoU3RhcnQoZSkge1xuICAgIGlmICghc2hvdWxkSGFuZGxlKGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvdWNoID0gZ2V0VG91Y2goZSk7XG5cbiAgICBzdGFydE9mZnNldC5wYWdlWCA9IHRvdWNoLnBhZ2VYO1xuICAgIHN0YXJ0T2Zmc2V0LnBhZ2VZID0gdG91Y2gucGFnZVk7XG5cbiAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIGlmIChlYXNpbmdMb29wICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKHRhcmdldCwgZGVsdGFYLCBkZWx0YVkpIHtcbiAgICBpZiAoIWVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjdXJzb3IgPSB0YXJnZXQ7XG5cbiAgICB3aGlsZSAoY3Vyc29yICYmIGN1cnNvciAhPT0gZWxlbWVudCkge1xuICAgICAgaWYgKGN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoY2xzLmVsZW1lbnQuY29uc3VtaW5nKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlID0gZ2V0KGN1cnNvcik7XG4gICAgICB2YXIgb3ZlcmZsb3cgPSBbc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZXS5qb2luKFxuICAgICAgICAnJ1xuICAgICAgKTtcblxuICAgICAgLy8gaWYgc2Nyb2xsYWJsZVxuICAgICAgaWYgKG92ZXJmbG93Lm1hdGNoKC8oc2Nyb2xsfGF1dG8pLykpIHtcbiAgICAgICAgdmFyIG1heFNjcm9sbFRvcCA9IGN1cnNvci5zY3JvbGxIZWlnaHQgLSBjdXJzb3IuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAobWF4U2Nyb2xsVG9wID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSAmJlxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsVG9wID09PSBtYXhTY3JvbGxUb3AgJiYgZGVsdGFZIDwgMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4U2Nyb2xsTGVmdCA9IGN1cnNvci5zY3JvbGxMZWZ0IC0gY3Vyc29yLmNsaWVudFdpZHRoO1xuICAgICAgICBpZiAobWF4U2Nyb2xsTGVmdCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxMZWZ0ID09PSAwICYmIGRlbHRhWCA8IDApICYmXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxMZWZ0ID09PSBtYXhTY3JvbGxMZWZ0ICYmIGRlbHRhWCA+IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3Vyc29yID0gY3Vyc29yLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2hNb3ZlKGUpIHtcbiAgICBpZiAoc2hvdWxkSGFuZGxlKGUpKSB7XG4gICAgICB2YXIgdG91Y2ggPSBnZXRUb3VjaChlKTtcblxuICAgICAgdmFyIGN1cnJlbnRPZmZzZXQgPSB7IHBhZ2VYOiB0b3VjaC5wYWdlWCwgcGFnZVk6IHRvdWNoLnBhZ2VZIH07XG5cbiAgICAgIHZhciBkaWZmZXJlbmNlWCA9IGN1cnJlbnRPZmZzZXQucGFnZVggLSBzdGFydE9mZnNldC5wYWdlWDtcbiAgICAgIHZhciBkaWZmZXJlbmNlWSA9IGN1cnJlbnRPZmZzZXQucGFnZVkgLSBzdGFydE9mZnNldC5wYWdlWTtcblxuICAgICAgaWYgKHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKGUudGFyZ2V0LCBkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBwbHlUb3VjaE1vdmUoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKTtcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gY3VycmVudE9mZnNldDtcblxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgIHZhciB0aW1lR2FwID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG4gICAgICBpZiAodGltZUdhcCA+IDApIHtcbiAgICAgICAgc3BlZWQueCA9IGRpZmZlcmVuY2VYIC8gdGltZUdhcDtcbiAgICAgICAgc3BlZWQueSA9IGRpZmZlcmVuY2VZIC8gdGltZUdhcDtcbiAgICAgICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRQcmV2ZW50KGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0b3VjaEVuZCgpIHtcbiAgICBpZiAoaS5zZXR0aW5ncy5zd2lwZUVhc2luZykge1xuICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgIGVhc2luZ0xvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGkuaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzcGVlZC54ICYmICFzcGVlZC55KSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoc3BlZWQueCkgPCAwLjAxICYmIE1hdGguYWJzKHNwZWVkLnkpIDwgMC4wMSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwbHlUb3VjaE1vdmUoc3BlZWQueCAqIDMwLCBzcGVlZC55ICogMzApO1xuXG4gICAgICAgIHNwZWVkLnggKj0gMC44O1xuICAgICAgICBzcGVlZC55ICo9IDAuODtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW52LnN1cHBvcnRzVG91Y2gpIHtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0KTtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcbiAgfSBlbHNlIGlmIChlbnYuc3VwcG9ydHNJZVBvaW50ZXIpIHtcbiAgICBpZiAod2luZG93LlBvaW50ZXJFdmVudCkge1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdwb2ludGVyZG93bicsIHRvdWNoU3RhcnQpO1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdwb2ludGVybW92ZScsIHRvdWNoTW92ZSk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJ1cCcsIHRvdWNoRW5kKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5NU1BvaW50ZXJFdmVudCkge1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJEb3duJywgdG91Y2hTdGFydCk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlck1vdmUnLCB0b3VjaE1vdmUpO1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJVcCcsIHRvdWNoRW5kKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0U2V0dGluZ3MgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICBoYW5kbGVyczogWydjbGljay1yYWlsJywgJ2RyYWctdGh1bWInLCAna2V5Ym9hcmQnLCAnd2hlZWwnLCAndG91Y2gnXSxcbiAgbWF4U2Nyb2xsYmFyTGVuZ3RoOiBudWxsLFxuICBtaW5TY3JvbGxiYXJMZW5ndGg6IG51bGwsXG4gIHNjcm9sbGluZ1RocmVzaG9sZDogMTAwMCxcbiAgc2Nyb2xsWE1hcmdpbk9mZnNldDogMCxcbiAgc2Nyb2xsWU1hcmdpbk9mZnNldDogMCxcbiAgc3VwcHJlc3NTY3JvbGxYOiBmYWxzZSxcbiAgc3VwcHJlc3NTY3JvbGxZOiBmYWxzZSxcbiAgc3dpcGVFYXNpbmc6IHRydWUsXG4gIHVzZUJvdGhXaGVlbEF4ZXM6IGZhbHNlLFxuICB3aGVlbFByb3BhZ2F0aW9uOiB0cnVlLFxuICB3aGVlbFNwZWVkOiAxLFxufSk7IH07XG5cbnZhciBoYW5kbGVycyA9IHtcbiAgJ2NsaWNrLXJhaWwnOiBjbGlja1JhaWwsXG4gICdkcmFnLXRodW1iJzogZHJhZ1RodW1iLFxuICBrZXlib2FyZDoga2V5Ym9hcmQsXG4gIHdoZWVsOiB3aGVlbCxcbiAgdG91Y2g6IHRvdWNoLFxufTtcblxudmFyIFBlcmZlY3RTY3JvbGxiYXIgPSBmdW5jdGlvbiBQZXJmZWN0U2Nyb2xsYmFyKGVsZW1lbnQsIHVzZXJTZXR0aW5ncykge1xuICB2YXIgdGhpcyQxID0gdGhpcztcbiAgaWYgKCB1c2VyU2V0dGluZ3MgPT09IHZvaWQgMCApIHVzZXJTZXR0aW5ncyA9IHt9O1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgfVxuXG4gIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5ub2RlTmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBpcyBzcGVjaWZpZWQgdG8gaW5pdGlhbGl6ZSBQZXJmZWN0U2Nyb2xsYmFyJyk7XG4gIH1cblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMubWFpbik7XG5cbiAgdGhpcy5zZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncygpO1xuICBmb3IgKHZhciBrZXkgaW4gdXNlclNldHRpbmdzKSB7XG4gICAgdGhpcyQxLnNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgfVxuXG4gIHRoaXMuY29udGFpbmVyV2lkdGggPSBudWxsO1xuICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IG51bGw7XG4gIHRoaXMuY29udGVudFdpZHRoID0gbnVsbDtcbiAgdGhpcy5jb250ZW50SGVpZ2h0ID0gbnVsbDtcblxuICB2YXIgZm9jdXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLnN0YXRlLmZvY3VzKTsgfTtcbiAgdmFyIGJsdXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLmZvY3VzKTsgfTtcblxuICB0aGlzLmlzUnRsID0gZ2V0KGVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCc7XG4gIHRoaXMuaXNOZWdhdGl2ZVNjcm9sbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9yaWdpbmFsU2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAtMTtcbiAgICByZXN1bHQgPSBlbGVtZW50LnNjcm9sbExlZnQgPCAwO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IG9yaWdpbmFsU2Nyb2xsTGVmdDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSgpO1xuICB0aGlzLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCA9IHRoaXMuaXNOZWdhdGl2ZVNjcm9sbFxuICAgID8gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICA6IDA7XG4gIHRoaXMuZXZlbnQgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XG4gIHRoaXMub3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcblxuICB0aGlzLnNjcm9sbGJhclhSYWlsID0gZGl2KGNscy5lbGVtZW50LnJhaWwoJ3gnKSk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zY3JvbGxiYXJYUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWCA9IGRpdihjbHMuZWxlbWVudC50aHVtYigneCcpKTtcbiAgdGhpcy5zY3JvbGxiYXJYUmFpbC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhclgpO1xuICB0aGlzLnNjcm9sbGJhclguc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5zY3JvbGxiYXJYLCAnZm9jdXMnLCBmb2N1cyk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclgsICdibHVyJywgYmx1cik7XG4gIHRoaXMuc2Nyb2xsYmFyWEFjdGl2ZSA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWFdpZHRoID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYTGVmdCA9IG51bGw7XG4gIHZhciByYWlsWFN0eWxlID0gZ2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwpO1xuICB0aGlzLnNjcm9sbGJhclhCb3R0b20gPSBwYXJzZUludChyYWlsWFN0eWxlLmJvdHRvbSwgMTApO1xuICBpZiAoaXNOYU4odGhpcy5zY3JvbGxiYXJYQm90dG9tKSkge1xuICAgIHRoaXMuaXNTY3JvbGxiYXJYVXNpbmdCb3R0b20gPSBmYWxzZTtcbiAgICB0aGlzLnNjcm9sbGJhclhUb3AgPSB0b0ludChyYWlsWFN0eWxlLnRvcCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSA9IHRydWU7XG4gIH1cbiAgdGhpcy5yYWlsQm9yZGVyWFdpZHRoID1cbiAgICB0b0ludChyYWlsWFN0eWxlLmJvcmRlckxlZnRXaWR0aCkgKyB0b0ludChyYWlsWFN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpO1xuICAvLyBTZXQgcmFpbCB0byBkaXNwbGF5OmJsb2NrIHRvIGNhbGN1bGF0ZSBtYXJnaW5zXG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gIHRoaXMucmFpbFhNYXJnaW5XaWR0aCA9XG4gICAgdG9JbnQocmFpbFhTdHlsZS5tYXJnaW5MZWZ0KSArIHRvSW50KHJhaWxYU3R5bGUubWFyZ2luUmlnaHQpO1xuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5yYWlsWFdpZHRoID0gbnVsbDtcbiAgdGhpcy5yYWlsWFJhdGlvID0gbnVsbDtcblxuICB0aGlzLnNjcm9sbGJhcllSYWlsID0gZGl2KGNscy5lbGVtZW50LnJhaWwoJ3knKSk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zY3JvbGxiYXJZUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWSA9IGRpdihjbHMuZWxlbWVudC50aHVtYigneScpKTtcbiAgdGhpcy5zY3JvbGxiYXJZUmFpbC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhclkpO1xuICB0aGlzLnNjcm9sbGJhclkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5zY3JvbGxiYXJZLCAnZm9jdXMnLCBmb2N1cyk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclksICdibHVyJywgYmx1cik7XG4gIHRoaXMuc2Nyb2xsYmFyWUFjdGl2ZSA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWUhlaWdodCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWVRvcCA9IG51bGw7XG4gIHZhciByYWlsWVN0eWxlID0gZ2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwpO1xuICB0aGlzLnNjcm9sbGJhcllSaWdodCA9IHBhcnNlSW50KHJhaWxZU3R5bGUucmlnaHQsIDEwKTtcbiAgaWYgKGlzTmFOKHRoaXMuc2Nyb2xsYmFyWVJpZ2h0KSkge1xuICAgIHRoaXMuaXNTY3JvbGxiYXJZVXNpbmdSaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsYmFyWUxlZnQgPSB0b0ludChyYWlsWVN0eWxlLmxlZnQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaXNTY3JvbGxiYXJZVXNpbmdSaWdodCA9IHRydWU7XG4gIH1cbiAgdGhpcy5zY3JvbGxiYXJZT3V0ZXJXaWR0aCA9IHRoaXMuaXNSdGwgPyBvdXRlcldpZHRoKHRoaXMuc2Nyb2xsYmFyWSkgOiBudWxsO1xuICB0aGlzLnJhaWxCb3JkZXJZV2lkdGggPVxuICAgIHRvSW50KHJhaWxZU3R5bGUuYm9yZGVyVG9wV2lkdGgpICsgdG9JbnQocmFpbFlTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gIHRoaXMucmFpbFlNYXJnaW5IZWlnaHQgPVxuICAgIHRvSW50KHJhaWxZU3R5bGUubWFyZ2luVG9wKSArIHRvSW50KHJhaWxZU3R5bGUubWFyZ2luQm90dG9tKTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJycgfSk7XG4gIHRoaXMucmFpbFlIZWlnaHQgPSBudWxsO1xuICB0aGlzLnJhaWxZUmF0aW8gPSBudWxsO1xuXG4gIHRoaXMucmVhY2ggPSB7XG4gICAgeDpcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA8PSAwXG4gICAgICAgID8gJ3N0YXJ0J1xuICAgICAgICA6IGVsZW1lbnQuc2Nyb2xsTGVmdCA+PSB0aGlzLmNvbnRlbnRXaWR0aCAtIHRoaXMuY29udGFpbmVyV2lkdGhcbiAgICAgICAgICA/ICdlbmQnXG4gICAgICAgICAgOiBudWxsLFxuICAgIHk6XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA8PSAwXG4gICAgICAgID8gJ3N0YXJ0J1xuICAgICAgICA6IGVsZW1lbnQuc2Nyb2xsVG9wID49IHRoaXMuY29udGVudEhlaWdodCAtIHRoaXMuY29udGFpbmVySGVpZ2h0XG4gICAgICAgICAgPyAnZW5kJ1xuICAgICAgICAgIDogbnVsbCxcbiAgfTtcblxuICB0aGlzLmlzQWxpdmUgPSB0cnVlO1xuXG4gIHRoaXMuc2V0dGluZ3MuaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlck5hbWUpIHsgcmV0dXJuIGhhbmRsZXJzW2hhbmRsZXJOYW1lXSh0aGlzJDEpOyB9KTtcblxuICB0aGlzLmxhc3RTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTsgLy8gZm9yIG9uU2Nyb2xsIG9ubHlcbiAgdGhpcy5sYXN0U2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDsgLy8gZm9yIG9uU2Nyb2xsIG9ubHlcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuZWxlbWVudCwgJ3Njcm9sbCcsIGZ1bmN0aW9uIChlKSB7IHJldHVybiB0aGlzJDEub25TY3JvbGwoZSk7IH0pO1xuICB1cGRhdGVHZW9tZXRyeSh0aGlzKTtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gIGlmICghdGhpcy5pc0FsaXZlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUmVjYWxjdWF0ZSBuZWdhdGl2ZSBzY3JvbGxMZWZ0IGFkanVzdG1lbnRcbiAgdGhpcy5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgPSB0aGlzLmlzTmVnYXRpdmVTY3JvbGxcbiAgICA/IHRoaXMuZWxlbWVudC5zY3JvbGxXaWR0aCAtIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aFxuICAgIDogMDtcblxuICAvLyBSZWNhbGN1bGF0ZSByYWlsIG1hcmdpbnNcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWE1hcmdpbldpZHRoID1cbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJYUmFpbCkubWFyZ2luTGVmdCkgK1xuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhclhSYWlsKS5tYXJnaW5SaWdodCk7XG4gIHRoaXMucmFpbFlNYXJnaW5IZWlnaHQgPVxuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhcllSYWlsKS5tYXJnaW5Ub3ApICtcbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJZUmFpbCkubWFyZ2luQm90dG9tKTtcblxuICAvLyBIaWRlIHNjcm9sbGJhcnMgbm90IHRvIGFmZmVjdCBzY3JvbGxXaWR0aCBhbmQgc2Nyb2xsSGVpZ2h0XG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICdub25lJyB9KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ25vbmUnIH0pO1xuXG4gIHVwZGF0ZUdlb21ldHJ5KHRoaXMpO1xuXG4gIHByb2Nlc3NTY3JvbGxEaWZmKHRoaXMsICd0b3AnLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gIHByb2Nlc3NTY3JvbGxEaWZmKHRoaXMsICdsZWZ0JywgMCwgZmFsc2UsIHRydWUpO1xuXG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLm9uU2Nyb2xsID0gZnVuY3Rpb24gb25TY3JvbGwgKGUpIHtcbiAgaWYgKCF0aGlzLmlzQWxpdmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB1cGRhdGVHZW9tZXRyeSh0aGlzKTtcbiAgcHJvY2Vzc1Njcm9sbERpZmYodGhpcywgJ3RvcCcsIHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgLSB0aGlzLmxhc3RTY3JvbGxUb3ApO1xuICBwcm9jZXNzU2Nyb2xsRGlmZihcbiAgICB0aGlzLFxuICAgICdsZWZ0JyxcbiAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdCAtIHRoaXMubGFzdFNjcm9sbExlZnRcbiAgKTtcblxuICB0aGlzLmxhc3RTY3JvbGxUb3AgPSBNYXRoLmZsb29yKHRoaXMuZWxlbWVudC5zY3JvbGxUb3ApO1xuICB0aGlzLmxhc3RTY3JvbGxMZWZ0ID0gdGhpcy5lbGVtZW50LnNjcm9sbExlZnQ7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIGlmICghdGhpcy5pc0FsaXZlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5ldmVudC51bmJpbmRBbGwoKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWCk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhclkpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJYUmFpbCk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhcllSYWlsKTtcbiAgdGhpcy5yZW1vdmVQc0NsYXNzZXMoKTtcblxuICAvLyB1bnNldCBlbGVtZW50c1xuICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclggPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclkgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclhSYWlsID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZUmFpbCA9IG51bGw7XG5cbiAgdGhpcy5pc0FsaXZlID0gZmFsc2U7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS5yZW1vdmVQc0NsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVQc0NsYXNzZXMgKCkge1xuICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5lbGVtZW50LmNsYXNzTmFtZVxuICAgIC5zcGxpdCgnICcpXG4gICAgLmZpbHRlcihmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW5hbWUubWF0Y2goL15wcyhbLV9dLit8KSQvKTsgfSlcbiAgICAuam9pbignICcpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVyZmVjdFNjcm9sbGJhcjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvLyBMb2FkZWQgYWZ0ZXIgQ29yZVVJIGFwcC5qc1xuXG4iLCJpbXBvcnQgJ0Bjb3JldWkvY29yZXVpJ1xuIiwiLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlcyBWdWUgYW5kIG90aGVyIGxpYnJhcmllcy4gSXQgaXMgYSBncmVhdCBzdGFydGluZyBwb2ludCB3aGVuXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbi8vIExvYWRlZCBiZWZvcmUgQ29yZVVJIGFwcC5qc1xuaW1wb3J0ICcuLi9ib290c3RyYXAnO1xuaW1wb3J0ICdwYWNlJztcbmltcG9ydCAnLi4vcGx1Z2lucyc7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgJCgnW3JlbD1cInRvb2x0aXBcIl0nKS50b29sdGlwKHt0cmlnZ2VyOiBcImhvdmVyXCJ9KTtcbn0pO1xuIiwiLyoqXG4gKiBUaGlzIGJvb3RzdHJhcCBmaWxlIGlzIHVzZWQgZm9yIGJvdGggZnJvbnRlbmQgYW5kIGJhY2tlbmRcbiAqL1xuXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdwb3BwZXIuanMnOyAvLyBSZXF1aXJlZCBmb3IgQlM0XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSAkO1xud2luZG93LlN3YWwgPSBTd2FsO1xud2luZG93Ll8gPSBfOyAvLyBMb2Rhc2hcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gYXhpb3M7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogTmV4dCB3ZSB3aWxsIHJlZ2lzdGVyIHRoZSBDU1JGIFRva2VuIGFzIGEgY29tbW9uIGhlYWRlciB3aXRoIEF4aW9zIHNvIHRoYXRcbiAqIGFsbCBvdXRnb2luZyBIVFRQIHJlcXVlc3RzIGF1dG9tYXRpY2FsbHkgaGF2ZSBpdCBhdHRhY2hlZC4gVGhpcyBpcyBqdXN0XG4gKiBhIHNpbXBsZSBjb252ZW5pZW5jZSBzbyB3ZSBkb24ndCBoYXZlIHRvIGF0dGFjaCBldmVyeSB0b2tlbiBtYW51YWxseS5cbiAqL1xuXG5jb25zdCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpO1xuXG5pZiAodG9rZW4pIHtcbiAgICB3aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRi1UT0tFTiddID0gdG9rZW4uY29udGVudDtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ1NSRiB0b2tlbiBub3QgZm91bmQ6IGh0dHBzOi8vbGFyYXZlbC5jb20vZG9jcy9jc3JmI2NzcmYteC1jc3JmLXRva2VuJyk7XG59XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nXG5cbi8vIHdpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfS0VZXG4vLyAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfQ0xVU1RFUixcbi8vICAgICBlbmNyeXB0ZWQ6IHRydWVcbi8vIH0pO1xuIiwiLyoqXG4gKiBBbGxvd3MgeW91IHRvIGFkZCBkYXRhLW1ldGhvZD1cIk1FVEhPRCB0byBsaW5rcyB0byBhdXRvbWF0aWNhbGx5IGluamVjdCBhIGZvcm1cbiAqIHdpdGggdGhlIG1ldGhvZCBvbiBjbGlja1xuICpcbiAqIEV4YW1wbGU6IDxhIGhyZWY9XCJ7e3JvdXRlKCdjdXN0b21lcnMuZGVzdHJveScsICRjdXN0b21lci0+aWQpfX1cIlxuICogZGF0YS1tZXRob2Q9XCJkZWxldGVcIiBuYW1lPVwiZGVsZXRlX2l0ZW1cIj5EZWxldGU8L2E+XG4gKlxuICogSW5qZWN0cyBhIGZvcm0gd2l0aCB0aGF0J3MgZmlyZWQgb24gY2xpY2sgb2YgdGhlIGxpbmsgd2l0aCBhIERFTEVURSByZXF1ZXN0LlxuICogR29vZCBiZWNhdXNlIHlvdSBkb24ndCBoYXZlIHRvIGRpcnR5IHlvdXIgSFRNTCB3aXRoIGRlbGV0ZSBmb3JtcyBldmVyeXdoZXJlLlxuICovXG5mdW5jdGlvbiBhZGREZWxldGVGb3JtcygpIHtcbiAgICAkKCdbZGF0YS1tZXRob2RdJykuYXBwZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEkKHRoaXMpLmZpbmQoJ2Zvcm0nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXG48Zm9ybSBhY3Rpb249J1wiICsgJCh0aGlzKS5hdHRyKCdocmVmJykgKyBcIicgbWV0aG9kPSdQT1NUJyBuYW1lPSdkZWxldGVfaXRlbScgc3R5bGU9J2Rpc3BsYXk6bm9uZSc+XFxuXCIgK1xuICAgICAgICAgICAgICAgIFwiPGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0nX21ldGhvZCcgdmFsdWU9J1wiICsgJCh0aGlzKS5hdHRyKCdkYXRhLW1ldGhvZCcpICsgXCInPlxcblwiICtcbiAgICAgICAgICAgICAgICBcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J190b2tlbicgdmFsdWU9J1wiICsgJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKSArIFwiJz5cXG5cIiArXG4gICAgICAgICAgICAgICAgJzwvZm9ybT5cXG4nO1xuICAgICAgICB9IGVsc2UgeyByZXR1cm4gJycgfVxuICAgIH0pXG4gICAgICAgIC5hdHRyKCdocmVmJywgJyMnKVxuICAgICAgICAuYXR0cignc3R5bGUnLCAnY3Vyc29yOnBvaW50ZXI7JylcbiAgICAgICAgLmF0dHIoJ29uY2xpY2snLCAnJCh0aGlzKS5maW5kKFwiZm9ybVwiKS5zdWJtaXQoKTsnKTtcbn1cblxuJChkb2N1bWVudCkuYWpheFN0YXJ0KGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiI2FqYXhTcGlubmVyQ29udGFpbmVyXCIpLnNob3coKTtcbn0pLmFqYXhFcnJvcihmdW5jdGlvbiAoZXZlbnQsIGpxeGhyLCBzZXR0aW5ncywgdGhyb3duRXJyb3IpIHtcbiAgICAkKFwiI2FqYXhTcGlubmVyQ29udGFpbmVyXCIpLmhpZGUoKTtcbn0pLmFqYXhTdG9wKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiI2FqYXhTcGlubmVyQ29udGFpbmVyXCIpLmhpZGUoKTtcbn0pO1xuXG4vKipcbiAqIFBsYWNlIGFueSBqUXVlcnkvaGVscGVyIHBsdWdpbnMgaW4gaGVyZS5cbiAqL1xuJChmdW5jdGlvbiAoKSB7XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGRhdGEtbWV0aG9kPVwiZGVsZXRlXCIgZm9ybXMgdG8gYWxsIGRlbGV0ZSBsaW5rc1xuICAgICAqL1xuICAgIGFkZERlbGV0ZUZvcm1zKCk7XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIGFsbCBzdWJtaXQgYnV0dG9ucyBvbmNlIGNsaWNrZWRcbiAgICAgKi9cbiAgICAkKCdmb3JtJykuc3VibWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJpYyBjb25maXJtIGZvcm0gZGVsZXRlIHVzaW5nIFN3ZWV0IEFsZXJ0XG4gICAgICovXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnZm9ybVtuYW1lPWRlbGV0ZV9pdGVtXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcztcbiAgICAgICAgY29uc3QgbGluayA9ICQoJ2FbZGF0YS1tZXRob2Q9XCJkZWxldGVcIl0nKTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY2FuY2VsJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jYW5jZWwnKSA6ICdDYW5jZWwnO1xuICAgICAgICBjb25zdCBjb25maXJtID0gKGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY29uZmlybScpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY29uZmlybScpIDogJ1llcywgZGVsZXRlJztcbiAgICAgICAgY29uc3QgdGl0bGUgPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLXRpdGxlJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLXRpdGxlJykgOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/JztcblxuICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsLFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlICYmIGZvcm0uc3VibWl0KCk7XG4gICAgICAgIH0pO1xuICAgIH0pLm9uKCdjbGljaycsICdhW25hbWU9Y29uZmlybV9pdGVtXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmljICdhcmUgeW91IHN1cmUnIGNvbmZpcm0gYm94XG4gICAgICAgICAqL1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbGluayA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpIDogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkbyB0aGlzPyc7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNhbmNlbCcpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY2FuY2VsJykgOiAnQ2FuY2VsJztcbiAgICAgICAgY29uc3QgY29uZmlybSA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSA6ICdDb250aW51ZSc7XG5cbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybSxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbCxcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvJ1xuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSAmJiB3aW5kb3cubG9jYXRpb24uYXNzaWduKGxpbmsuYXR0cignaHJlZicpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=