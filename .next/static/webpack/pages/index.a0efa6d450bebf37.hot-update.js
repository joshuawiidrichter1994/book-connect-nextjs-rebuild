"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./dom/dom.js":
/*!********************!*\
  !*** ./dom/dom.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM: function() { return /* binding */ DOM; }\n/* harmony export */ });\nconst DOM = {\n    search: {\n        form: ()=>getDOM(\"search-form\"),\n        cancel: ()=>getDOM(\"search-cancel\"),\n        overlay: ()=>getDOM(\"search-overlay\")\n    },\n    settings: {\n        theme: ()=>getDOM(\"settings-theme\"),\n        form: ()=>getDOM(\"settings-form\"),\n        cancel: ()=>getDOM(\"settings-cancel\"),\n        overlay: ()=>getDOM(\"settings-overlay\")\n    }\n};\n/**\n * @param {string} attribute\n */ const getDOM = (attribute)=>{\n    if (typeof document === \"undefined\") {\n        throw new Error(\"`getDOM` can only be used in the browser environment\");\n    }\n    let result = document.querySelector(\"[data-\".concat(attribute, \"]\"));\n    if (!result) throw new Error('\"[data-'.concat(attribute, ']\" is required in HTML'));\n    return result;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb20vZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxNQUFNO0lBRWpCQyxRQUFRO1FBQ05DLE1BQU0sSUFBTUMsT0FBTztRQUNuQkMsUUFBUSxJQUFNRCxPQUFPO1FBQ3JCRSxTQUFTLElBQU1GLE9BQU87SUFDeEI7SUFDQUcsVUFBVTtRQUNSQyxPQUFPLElBQU1KLE9BQU87UUFDcEJELE1BQU0sSUFBTUMsT0FBTztRQUNuQkMsUUFBUSxJQUFNRCxPQUFPO1FBQ3JCRSxTQUFTLElBQU1GLE9BQU87SUFDeEI7QUFDRixFQUFFO0FBRUY7O0NBRUMsR0FDRCxNQUFNQSxTQUFTLENBQUNLO0lBQ2QsSUFBSSxPQUFPQyxhQUFhLGFBQWE7UUFDbkMsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBRUEsSUFBSUMsU0FBU0YsU0FBU0csYUFBYSxDQUFDLFNBQW1CLE9BQVZKLFdBQVU7SUFDdkQsSUFBSSxDQUFDRyxRQUFRLE1BQU0sSUFBSUQsTUFBTSxVQUFvQixPQUFWRixXQUFVO0lBQ2pELE9BQU9HO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZG9tL2RvbS5qcz9lOTY0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBET00gPSB7XG5cbiAgc2VhcmNoOiB7XG4gICAgZm9ybTogKCkgPT4gZ2V0RE9NKFwic2VhcmNoLWZvcm1cIiksXG4gICAgY2FuY2VsOiAoKSA9PiBnZXRET00oXCJzZWFyY2gtY2FuY2VsXCIpLFxuICAgIG92ZXJsYXk6ICgpID0+IGdldERPTShcInNlYXJjaC1vdmVybGF5XCIpLFxuICB9LFxuICBzZXR0aW5nczoge1xuICAgIHRoZW1lOiAoKSA9PiBnZXRET00oXCJzZXR0aW5ncy10aGVtZVwiKSxcbiAgICBmb3JtOiAoKSA9PiBnZXRET00oXCJzZXR0aW5ncy1mb3JtXCIpLFxuICAgIGNhbmNlbDogKCkgPT4gZ2V0RE9NKFwic2V0dGluZ3MtY2FuY2VsXCIpLFxuICAgIG92ZXJsYXk6ICgpID0+IGdldERPTShcInNldHRpbmdzLW92ZXJsYXlcIiksXG4gIH0sXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAqL1xuY29uc3QgZ2V0RE9NID0gKGF0dHJpYnV0ZSkgPT4ge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYGdldERPTWAgY2FuIG9ubHkgYmUgdXNlZCBpbiB0aGUgYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS0ke2F0dHJpYnV0ZX1dYCk7XG4gIGlmICghcmVzdWx0KSB0aHJvdyBuZXcgRXJyb3IoYFwiW2RhdGEtJHthdHRyaWJ1dGV9XVwiIGlzIHJlcXVpcmVkIGluIEhUTUxgKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07Il0sIm5hbWVzIjpbIkRPTSIsInNlYXJjaCIsImZvcm0iLCJnZXRET00iLCJjYW5jZWwiLCJvdmVybGF5Iiwic2V0dGluZ3MiLCJ0aGVtZSIsImF0dHJpYnV0ZSIsImRvY3VtZW50IiwiRXJyb3IiLCJyZXN1bHQiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dom/dom.js\n"));

/***/ })

});