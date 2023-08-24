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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM: function() { return /* binding */ DOM; }\n/* harmony export */ });\nconst DOM = {\n    header: {\n        settings: ()=>getDOM(\"header-settings\")\n    },\n    search: {\n        title: ()=>getDOM(\"search-title\"),\n        genres: ()=>getDOM(\"search-genres\"),\n        authors: ()=>getDOM(\"search-authors\"),\n        form: ()=>getDOM(\"search-form\"),\n        cancel: ()=>getDOM(\"search-cancel\"),\n        overlay: ()=>getDOM(\"search-overlay\")\n    },\n    settings: {\n        theme: ()=>getDOM(\"settings-theme\"),\n        form: ()=>getDOM(\"settings-form\"),\n        cancel: ()=>getDOM(\"settings-cancel\"),\n        overlay: ()=>getDOM(\"settings-overlay\")\n    }\n};\n/**\n * @param {string} attribute\n */ const getDOM = (attribute)=>{\n    if (typeof document === \"undefined\") {\n        throw new Error(\"`getDOM` can only be used in the browser environment\");\n    }\n    let result = document.querySelector(\"[data-\".concat(attribute, \"]\"));\n    if (!result) throw new Error('\"[data-'.concat(attribute, ']\" is required in HTML'));\n    return result;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb20vZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxNQUFNO0lBQ2pCQyxRQUFRO1FBQ05DLFVBQVUsSUFBTUMsT0FBTztJQUN6QjtJQUNBQyxRQUFRO1FBQ05DLE9BQU8sSUFBTUYsT0FBTztRQUNwQkcsUUFBUSxJQUFNSCxPQUFPO1FBQ3JCSSxTQUFTLElBQU1KLE9BQU87UUFDdEJLLE1BQU0sSUFBTUwsT0FBTztRQUNuQk0sUUFBUSxJQUFNTixPQUFPO1FBQ3JCTyxTQUFTLElBQU1QLE9BQU87SUFDeEI7SUFDQUQsVUFBVTtRQUNSUyxPQUFPLElBQU1SLE9BQU87UUFDcEJLLE1BQU0sSUFBTUwsT0FBTztRQUNuQk0sUUFBUSxJQUFNTixPQUFPO1FBQ3JCTyxTQUFTLElBQU1QLE9BQU87SUFDeEI7QUFDRixFQUFFO0FBRUY7O0NBRUMsR0FDRCxNQUFNQSxTQUFTLENBQUNTO0lBQ2QsSUFBSSxPQUFPQyxhQUFhLGFBQWE7UUFDbkMsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBRUEsSUFBSUMsU0FBU0YsU0FBU0csYUFBYSxDQUFDLFNBQW1CLE9BQVZKLFdBQVU7SUFDdkQsSUFBSSxDQUFDRyxRQUFRLE1BQU0sSUFBSUQsTUFBTSxVQUFvQixPQUFWRixXQUFVO0lBQ2pELE9BQU9HO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZG9tL2RvbS5qcz9lOTY0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBET00gPSB7XG4gIGhlYWRlcjoge1xuICAgIHNldHRpbmdzOiAoKSA9PiBnZXRET00oXCJoZWFkZXItc2V0dGluZ3NcIiksXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIHRpdGxlOiAoKSA9PiBnZXRET00oXCJzZWFyY2gtdGl0bGVcIiksXG4gICAgZ2VucmVzOiAoKSA9PiBnZXRET00oXCJzZWFyY2gtZ2VucmVzXCIpLFxuICAgIGF1dGhvcnM6ICgpID0+IGdldERPTShcInNlYXJjaC1hdXRob3JzXCIpLFxuICAgIGZvcm06ICgpID0+IGdldERPTShcInNlYXJjaC1mb3JtXCIpLFxuICAgIGNhbmNlbDogKCkgPT4gZ2V0RE9NKFwic2VhcmNoLWNhbmNlbFwiKSxcbiAgICBvdmVybGF5OiAoKSA9PiBnZXRET00oXCJzZWFyY2gtb3ZlcmxheVwiKSxcbiAgfSxcbiAgc2V0dGluZ3M6IHtcbiAgICB0aGVtZTogKCkgPT4gZ2V0RE9NKFwic2V0dGluZ3MtdGhlbWVcIiksXG4gICAgZm9ybTogKCkgPT4gZ2V0RE9NKFwic2V0dGluZ3MtZm9ybVwiKSxcbiAgICBjYW5jZWw6ICgpID0+IGdldERPTShcInNldHRpbmdzLWNhbmNlbFwiKSxcbiAgICBvdmVybGF5OiAoKSA9PiBnZXRET00oXCJzZXR0aW5ncy1vdmVybGF5XCIpLFxuICB9LFxufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlXG4gKi9cbmNvbnN0IGdldERPTSA9IChhdHRyaWJ1dGUpID0+IHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImBnZXRET01gIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGhlIGJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtJHthdHRyaWJ1dGV9XWApO1xuICBpZiAoIXJlc3VsdCkgdGhyb3cgbmV3IEVycm9yKGBcIltkYXRhLSR7YXR0cmlidXRlfV1cIiBpcyByZXF1aXJlZCBpbiBIVE1MYCk7XG4gIHJldHVybiByZXN1bHQ7XG59OyJdLCJuYW1lcyI6WyJET00iLCJoZWFkZXIiLCJzZXR0aW5ncyIsImdldERPTSIsInNlYXJjaCIsInRpdGxlIiwiZ2VucmVzIiwiYXV0aG9ycyIsImZvcm0iLCJjYW5jZWwiLCJvdmVybGF5IiwidGhlbWUiLCJhdHRyaWJ1dGUiLCJkb2N1bWVudCIsIkVycm9yIiwicmVzdWx0IiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dom/dom.js\n"));

/***/ })

});