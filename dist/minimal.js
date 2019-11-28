(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Component =
/*#__PURE__*/
function () {
  function Component(el) {
    _classCallCheck(this, Component);

    this.el = el;
    this.data = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["saferEval"])(this.el.getAttribute('x-data'), {});
    this.concernedData = [];
    this.initialize();
  }

  _createClass(Component, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["walk"])(this.el, function (el) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getXAttrs"])(el).forEach(function (_ref) {
          var type = _ref.type,
              value = _ref.value,
              modifiers = _ref.modifiers,
              expression = _ref.expression;

          switch (type) {
            case 'on':
              var event = value;

              _this.registerListener(el, event, modifiers, expression);

              break;

            case 'model':
              // If the element we are binding to is a select, a radio, or checkbox
              // we'll listen for the change event instead of the "input" event.
              var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';

              var listenerExpression = _this.generateExpressionForXModelListener(el, modifiers, expression);

              _this.registerListener(el, event, modifiers, listenerExpression);

              var attrName = 'value';

              var _this$evaluateReturnE = _this.evaluateReturnExpression(expression),
                  output = _this$evaluateReturnE.output;

              _this.updateAttributeValue(el, attrName, output);

              break;

            case 'bind':
              var attrName = value;

              var _this$evaluateReturnE2 = _this.evaluateReturnExpression(expression),
                  output = _this$evaluateReturnE2.output;

              _this.updateAttributeValue(el, attrName, output);

              break;

            case 'text':
              var _this$evaluateReturnE3 = _this.evaluateReturnExpression(expression),
                  output = _this$evaluateReturnE3.output;

              _this.updateTextValue(el, output);

              break;

            default:
              break;
          }
        });
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var self = this;
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["debounce"])(_utils__WEBPACK_IMPORTED_MODULE_0__["walk"], 5)(this.el, function (el) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getXAttrs"])(el).forEach(function (_ref2) {
          var type = _ref2.type,
              value = _ref2.value,
              modifiers = _ref2.modifiers,
              expression = _ref2.expression;

          switch (type) {
            case 'bind':
              var attrName = value;

              var _self$evaluateReturnE = self.evaluateReturnExpression(expression),
                  output = _self$evaluateReturnE.output,
                  deps = _self$evaluateReturnE.deps;

              if (self.concernedData.filter(function (i) {
                return deps.includes(i);
              }).length > 0) {
                self.updateAttributeValue(el, attrName, output);
              }

              break;

            case 'text':
              var _self$evaluateReturnE2 = self.evaluateReturnExpression(expression),
                  output = _self$evaluateReturnE2.output,
                  deps = _self$evaluateReturnE2.deps;

              if (self.concernedData.filter(function (i) {
                return deps.includes(i);
              }).length > 0) {
                self.updateTextValue(el, output);
              }

              break;

            default:
              break;
          }
        });
      });
    }
  }, {
    key: "generateExpressionForXModelListener",
    value: function generateExpressionForXModelListener(el, modifiers, dataKey) {
      var rightSideOfExpression = '';

      if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle it's value inside the array.
        if (Array.isArray(this.data[dataKey])) {
          rightSideOfExpression = "$event.target.checked ? ".concat(dataKey, ".concat([$event.target.value]) : [...").concat(dataKey, ".splice(0, ").concat(dataKey, ".indexOf($event.target.value)), ...").concat(dataKey, ".splice(").concat(dataKey, ".indexOf($event.target.value)+1)]");
        } else {
          rightSideOfExpression = "$event.target.checked";
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        rightSideOfExpression = modifiers.includes('number') ? 'Array.from($event.target.selectedOptions).map(option => { return parseFloat(option.value || option.text) })' : 'Array.from($event.target.selectedOptions).map(option => { return option.value || option.text })';
      } else {
        rightSideOfExpression = modifiers.includes('number') ? 'parseFloat($event.target.value)' : modifiers.includes('trim') ? '$event.target.value.trim()' : '$event.target.value';
      }

      if (el.type === 'radio') {
        // Radio buttons only work properly when they share a name attribute.
        // People might assume we take care of that for them, because
        // they already set a shared "x-model" attribute.
        if (!el.hasAttribute('name')) el.setAttribute('name', dataKey);
      }

      return "".concat(dataKey, " = ").concat(rightSideOfExpression);
    }
  }, {
    key: "registerListener",
    value: function registerListener(el, event, modifiers, expression) {
      var _this2 = this;

      if (modifiers.includes('away')) {
        // Listen for this event at the root level.
        document.addEventListener(event, function (e) {
          // Don't do anything if the click came form the element or within it.
          if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

          if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
          // is from outside it, let's run the expression.

          _this2.runListenerHandler(expression, e);
        });
      } else {
        el.addEventListener(event, function (e) {
          _this2.runListenerHandler(expression, e);
        });
      }
    }
  }, {
    key: "runListenerHandler",
    value: function runListenerHandler(expression, e) {
      var _this$concernedData;

      var _this$evaluateCommand = this.evaluateCommandExpression(expression, {
        '$event': e
      }),
          deps = _this$evaluateCommand.deps;

      (_this$concernedData = this.concernedData).push.apply(_this$concernedData, _toConsumableArray(deps));

      this.concernedData = this.concernedData.filter(_utils__WEBPACK_IMPORTED_MODULE_0__["onlyUnique"]);
      this.refresh();
    }
  }, {
    key: "evaluateReturnExpression",
    value: function evaluateReturnExpression(expression) {
      var affectedDataKeys = [];
      var proxiedData = new Proxy(this.data, {
        get: function get(object, prop) {
          affectedDataKeys.push(prop);
          return object[prop];
        }
      });
      var result = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["saferEval"])(expression, proxiedData);
      return {
        output: result,
        deps: affectedDataKeys
      };
    }
  }, {
    key: "evaluateCommandExpression",
    value: function evaluateCommandExpression(expression, extraData) {
      var affectedDataKeys = [];
      var proxiedData = new Proxy(this.data, {
        set: function set(obj, property, value) {
          var setWasSuccessful = Reflect.set(obj, property, value);
          affectedDataKeys.push(property);
          return setWasSuccessful;
        }
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["saferEvalNoReturn"])(expression, proxiedData, extraData);
      return {
        deps: affectedDataKeys
      };
    }
  }, {
    key: "updateTextValue",
    value: function updateTextValue(el, value) {
      el.innerText = value;
    }
  }, {
    key: "updateAttributeValue",
    value: function updateAttributeValue(el, attrName, value) {
      if (attrName === 'value') {
        if (el.type === 'radio') {
          el.checked = el.value == value;
        } else if (el.type === 'checkbox') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            var valueFound = false;
            value.forEach(function (val) {
              if (val == el.value) {
                valueFound = true;
              }
            });
            el.checked = valueFound;
          } else {
            el.checked = !!value;
          }
        } else if (el.tagName === 'SELECT') {
          this.updateSelect(el, value);
        } else {
          el.value = value;
        }
      } else if (attrName === 'class') {
        if (Array.isArray(value)) {
          el.setAttribute('class', value.join(' '));
        } else {
          // Use the class object syntax that vue uses to toggle them.
          Object.keys(value).forEach(function (className) {
            if (value[className]) {
              el.classList.add(className);
            } else {
              el.classList.remove(className);
            }
          });
        }
      } else if (['disabled', 'readonly', 'required', 'checked'].includes(attrName)) {
        // Boolean attributes have to be explicitly added and removed, not just set.
        if (!!value) {
          el.setAttribute(attrName, '');
        } else {
          el.removeAttribute(attrName);
        }
      } else {
        el.setAttribute(attrName, value);
      }
    }
  }, {
    key: "updateSelect",
    value: function updateSelect(el, value) {
      var arrayWrappedValue = [].concat(value).map(function (value) {
        return value + '';
      });
      Array.from(el.options).forEach(function (option) {
        option.selected = arrayWrappedValue.includes(option.value || option.text);
      });
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* @flow */

var minimal = {
  start: function start() {
    var _this = this;

    this.discoverComponents(); // It's easier and more performant to just support Turbolinks than listen
    // to MutationOberserver mutations at the document level.

    document.addEventListener("turbolinks:load", function () {
      _this.discoverComponents();
    });
    var targetNode = document.querySelector('body');
    var observerOptions = {
      childList: true,
      attributes: true,
      subtree: true //Omit or set to false to observe only changes to the parent node.

    };
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].addedNodes.length > 0) {
          mutations[i].addedNodes.forEach(function (node) {
            if (node.nodeType !== 1) return;

            if (node.matches('[x-data]')) {
              _this.initializeElement(node);
            }
          });
        }
      }
    });
    observer.observe(targetNode, observerOptions);
  },
  discoverComponents: function discoverComponents() {
    var _this2 = this;

    var rootEls = document.querySelectorAll('[x-data]');
    rootEls.forEach(function (rootEl) {
      _this2.initializeElement(rootEl);
    });
  },
  initializeElement: function initializeElement(el) {
    if (process.env.JEST_WORKER_ID) {
      // This is so the component is accessible to Jest tests.
      // It's ok to put this in a loop because Jest tests
      // typically test only 1 component.
      window.component = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](el);
    } else {
      new _component__WEBPACK_IMPORTED_MODULE_0__["default"](el);
    }
  }
};

if (!window.minimal) {
  window.minimal = minimal;
}

/* harmony default export */ __webpack_exports__["default"] = (minimal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: walk, debounce, onlyUnique, saferEval, saferEvalNoReturn, isXAttr, getXAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return walk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUnique", function() { return onlyUnique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saferEval", function() { return saferEval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saferEvalNoReturn", function() { return saferEvalNoReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isXAttr", function() { return isXAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXAttrs", function() { return getXAttrs; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function walk(el, callback) {
  callback(el);
  var node = el.firstElementChild;

  while (node) {
    walk(node, callback);
    node = node.nextElementSibling;
  }
}
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
;
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
function saferEval(expression, dataContext) {
  var additionalHelperVariables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Function(['$data'].concat(_toConsumableArray(Object.keys(additionalHelperVariables))), "var result; with($data) { result = ".concat(expression, " }; return result")).apply(void 0, [dataContext].concat(_toConsumableArray(Object.values(additionalHelperVariables))));
}
function saferEvalNoReturn(expression, dataContext) {
  var additionalHelperVariables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Function(['$data'].concat(_toConsumableArray(Object.keys(additionalHelperVariables))), "with($data) { ".concat(expression, " }")).apply(void 0, [dataContext].concat(_toConsumableArray(Object.values(additionalHelperVariables))));
}
function isXAttr(attr) {
  var xAttrRE = /x-(on|bind|data|text|model)/;
  return xAttrRE.test(attr.name);
}
function getXAttrs(el, type) {
  return Array.from(el.attributes).filter(isXAttr).map(function (attr) {
    var typeMatch = attr.name.match(/x-(on|bind|data|text|model)/);
    var valueMatch = attr.name.match(/:([a-zA-Z\-]+)/);
    var modifiers = attr.name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(function (i) {
        return i.replace('.', '');
      }),
      expression: attr.value
    };
  }).filter(function (i) {
    // If no type is passed in for filtering, bypassfilter
    if (!type) return true;
    return i.type === name;
  });
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/calebporzio/Documents/Code/sites/minimal/src/index.js */"./src/index.js");


/***/ })

/******/ });
});