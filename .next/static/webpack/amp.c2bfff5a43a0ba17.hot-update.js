"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("amp",{

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _construct(Parent1, args1, Class1) {\n    if (isNativeReflectConstruct()) {\n        _construct = Reflect.construct;\n    } else {\n        _construct = function _construct(Parent, args, Class) {\n            var a = [\n                null\n            ];\n            a.push.apply(a, args);\n            var Constructor = Function.bind.apply(Parent, a);\n            var instance = new Constructor();\n            if (Class) _setPrototypeOf(instance, Class.prototype);\n            return instance;\n        };\n    }\n    return _construct.apply(null, arguments);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _setPrototypeOf(o1, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o1, p1);\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"Router\", ({\n    enumerable: true,\n    get: function get() {\n        return _router.default;\n    }\n}));\nObject.defineProperty(exports, \"withRouter\", ({\n    enumerable: true,\n    get: function get() {\n        return _withRouter.default;\n    }\n}));\nexports.useRouter = useRouter;\nexports.createRouter = createRouter;\nexports.makePublicRouterInstance = makePublicRouterInstance;\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ \"./node_modules/next/dist/shared/lib/router/router.js\"));\nvar _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ \"./node_modules/next/dist/shared/lib/router-context.js\");\nvar _isError = _interopRequireDefault(__webpack_require__(/*! ../lib/is-error */ \"./node_modules/next/dist/lib/is-error.js\"));\nvar _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ \"./node_modules/next/dist/client/with-router.js\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nvar singletonRouter = {\n    router: null,\n    readyCallbacks: [],\n    ready: function ready(cb) {\n        if (this.router) return cb();\n        if (true) {\n            this.readyCallbacks.push(cb);\n        }\n    }\n};\n// Create public properties and methods of the router in the singletonRouter\nvar urlPropertyFields = [\n    \"pathname\",\n    \"route\",\n    \"query\",\n    \"asPath\",\n    \"components\",\n    \"isFallback\",\n    \"basePath\",\n    \"locale\",\n    \"locales\",\n    \"defaultLocale\",\n    \"isReady\",\n    \"isPreview\",\n    \"isLocaleDomain\",\n    \"domainLocales\", \n];\nvar routerEvents = [\n    \"routeChangeStart\",\n    \"beforeHistoryChange\",\n    \"routeChangeComplete\",\n    \"routeChangeError\",\n    \"hashChangeStart\",\n    \"hashChangeComplete\", \n];\nvar coreMethodFields = [\n    \"push\",\n    \"replace\",\n    \"reload\",\n    \"back\",\n    \"prefetch\",\n    \"beforePopState\", \n];\n// Events is a static property on the router, the router doesn't have to be initialized to use it\nObject.defineProperty(singletonRouter, \"events\", {\n    get: function get() {\n        return _router.default.events;\n    }\n});\nurlPropertyFields.forEach(function(field) {\n    // Here we need to use Object.defineProperty because we need to return\n    // the property assigned to the actual router\n    // The value might get changed as we change routes and this is the\n    // proper way to access it\n    Object.defineProperty(singletonRouter, field, {\n        get: function get() {\n            var router = getRouter();\n            return router[field];\n        }\n    });\n});\ncoreMethodFields.forEach(function(field) {\n    singletonRouter[field] = function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        var _router1;\n        var router = getRouter();\n        return (_router1 = router)[field].apply(_router1, _toConsumableArray(args));\n    };\n});\nrouterEvents.forEach(function(event) {\n    singletonRouter.ready(function() {\n        _router.default.events.on(event, function() {\n            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n                args[_key] = arguments[_key];\n            }\n            var eventField = \"on\".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));\n            var _singletonRouter = singletonRouter;\n            if (_singletonRouter[eventField]) {\n                try {\n                    var __singletonRouter;\n                    (__singletonRouter = _singletonRouter)[eventField].apply(__singletonRouter, _toConsumableArray(args));\n                } catch (err) {\n                    console.error(\"Error when running the Router event: \".concat(eventField));\n                    console.error((0, _isError).default(err) ? \"\".concat(err.message, \"\\n\").concat(err.stack) : err + \"\");\n                }\n            }\n        });\n    });\n});\nfunction getRouter() {\n    if (!singletonRouter.router) {\n        var message = \"No router instance found.\\n\" + 'You should only use \"next/router\" on the client side of your app.\\n';\n        throw new Error(message);\n    }\n    return singletonRouter.router;\n}\nvar _default = singletonRouter;\nexports[\"default\"] = _default;\nfunction useRouter() {\n    _s();\n    return _react.default.useContext(_routerContext.RouterContext);\n}\n_s(useRouter, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nfunction createRouter() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    singletonRouter.router = _construct(_router.default, _toConsumableArray(args));\n    singletonRouter.readyCallbacks.forEach(function(cb) {\n        return cb();\n    });\n    singletonRouter.readyCallbacks = [];\n    return singletonRouter.router;\n}\nfunction makePublicRouterInstance(router) {\n    var scopedRouter = router;\n    var instance = {};\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = urlPropertyFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var property = _step.value;\n            if (typeof scopedRouter[property] === \"object\") {\n                instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]) // makes sure query is not stateful\n                ;\n                continue;\n            }\n            instance[property] = scopedRouter[property];\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    // Events is a static property on the router, the router doesn't have to be initialized to use it\n    instance.events = _router.default.events;\n    coreMethodFields.forEach(function(field) {\n        instance[field] = function() {\n            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n                args[_key] = arguments[_key];\n            }\n            var _scopedRouter;\n            return (_scopedRouter = scopedRouter)[field].apply(_scopedRouter, _toConsumableArray(args));\n        };\n    });\n    return instance;\n}\nif (typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) {\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=router.js.map\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2JBLDhDQUE2QztJQUN6Q0csS0FBSyxFQUFFLElBQUk7Q0FDZCxFQUFDLENBQUM7QUFDSEgsMENBQXlDO0lBQ3JDSSxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsR0FBRyxFQUFFLFNBQUxBLEdBQUcsR0FBYTtRQUNaLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDO0tBQzFCO0NBQ0osRUFBQyxDQUFDO0FBQ0hQLDhDQUE2QztJQUN6Q0ksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxTQUFMQSxHQUFHLEdBQWE7UUFDWixPQUFPRyxXQUFXLENBQUNELE9BQU8sQ0FBQztLQUM5QjtDQUNKLEVBQUMsQ0FBQztBQUNITCxpQkFBaUIsR0FBR08sU0FBUyxDQUFDO0FBQzlCUCxvQkFBb0IsR0FBR1EsWUFBWSxDQUFDO0FBQ3BDUixnQ0FBZ0MsR0FBR1Msd0JBQXdCLENBQUM7QUFDNURULGtCQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDekIsSUFBSVUsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw0Q0FBTyxDQUFDLENBQUM7QUFDckQsSUFBSVIsT0FBTyxHQUFHTyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx5RkFBNkIsQ0FBQyxDQUFDO0FBQzVFLElBQUlDLGNBQWMsR0FBR0QsbUJBQU8sQ0FBQywyRkFBOEIsQ0FBQztBQUM1RCxJQUFJRSxRQUFRLEdBQUdILHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLGlFQUFpQixDQUFDLENBQUM7QUFDakUsSUFBSU4sV0FBVyxHQUFHSyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxxRUFBZSxDQUFDLENBQUM7QUFDbEUsU0FBU0Qsc0JBQXNCLENBQUNJLEdBQUcsRUFBRTtJQUNq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U0FBUzthQUNaO1lBQ0RELFFBQVEsQ0FBQ0MsUUFBUSxDQUFDLEdBQUdGLFlBQVksQ0FBQ0UsUUFBUSxDQUFDLENBQUM7U0FDL0M7O1FBUEksaUJBQWM7UUFBZCxjQUFjOzs7aUJBQWQseUJBQWMsSUFBZCxTQUFjO2dCQUFkLFNBQWM7OztnQkFBZCxpQkFBYztzQkFBZCxjQUFjOzs7O0lBUW5CLGlHQUFpRztJQUNqR0QsUUFBUSxDQUFDdEIsTUFBTSxHQUFHdEIsT0FBTyxDQUFDQyxPQUFPLENBQUNxQixNQUFNLENBQUM7SUFDekNELGdCQUFnQixDQUFDRSxPQUFPLENBQUMsU0FBQ0MsS0FBSyxFQUFHO1FBQzlCb0IsUUFBUSxDQUFDcEIsS0FBSyxDQUFDLEdBQUcsV0FBVzs2Q0FBUEUsSUFBSTtnQkFBSkEsSUFBSTs7Z0JBQ2ZpQixhQUFZO1lBQW5CLE9BQU9BLENBQUFBLGFBQVksR0FBWkEsWUFBWSxFQUFDbkIsS0FBSyxDQUFDLENBQW5CbUIsS0FBNEIsQ0FBNUJBLGFBQVksRUFBUSxtQkFBR2pCLElBQUksQ0FBSkEsQ0FBSyxDQUFDO1NBQ3ZDLENBQUM7S0FDTCxDQUFDLENBQUM7SUFDSCxPQUFPa0IsUUFBUSxDQUFDO0NBQ25CO0FBRUQsSUFBSSxPQUFPaEQsT0FBTyxDQUFDSyxPQUFPLEtBQUssVUFBVSxJQUFLLE9BQU9MLE9BQU8sQ0FBQ0ssT0FBTyxLQUFLLFFBQVEsSUFBSUwsT0FBTyxDQUFDSyxPQUFPLEtBQUssSUFBSSxFQUFHO0lBQzlHUCxNQUFNLENBQUNvRCxNQUFNLENBQUNsRCxPQUFPLENBQUNLLE9BQU8sRUFBRUwsT0FBTyxDQUFDLENBQUM7SUFDeENxRCxNQUFNLENBQUNyRCxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDO0NBQ2xDLENBRUQsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcz8zMWZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF9pc0Vycm9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbGliL2lzLWVycm9yXCIpKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKDAsIF9pc0Vycm9yKS5kZWZhdWx0KGVycikgPyBgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gIDogZXJyICsgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBzY29wZWRSb3V0ZXIgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBzY29wZWRSb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KHNjb3BlZFJvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSwgc2NvcGVkUm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IHNjb3BlZFJvdXRlcltwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlZFJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5pZiAodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cy5kZWZhdWx0ICE9PSBudWxsKSkge1xuICBPYmplY3QuYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4gIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW51bWVyYWJsZSIsImdldCIsIl9yb3V0ZXIiLCJkZWZhdWx0IiwiX3dpdGhSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXJDb250ZXh0IiwiX2lzRXJyb3IiLCJvYmoiLCJfX2VzTW9kdWxlIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsImNiIiwicHVzaCIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZvckVhY2giLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3MiLCJldmVudCIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwiX2RlZmF1bHQiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsInNjb3BlZFJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJtb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/client/router.js\n");

/***/ })

});