"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/preview/[bookId]",{

/***/ "./dom/dom.js":
/*!********************!*\
  !*** ./dom/dom.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM: function() { return /* binding */ DOM; }\n/* harmony export */ });\nconst DOM = {\n    search: {\n        genres: ()=>getDOM(\"search-genres\"),\n        authors: ()=>getDOM(\"search-authors\"),\n        form: ()=>getDOM(\"search-form\"),\n        cancel: ()=>getDOM(\"search-cancel\"),\n        overlay: ()=>getDOM(\"search-overlay\")\n    },\n    settings: {\n        theme: ()=>getDOM(\"settings-theme\"),\n        form: ()=>getDOM(\"settings-form\"),\n        cancel: ()=>getDOM(\"settings-cancel\"),\n        overlay: ()=>getDOM(\"settings-overlay\")\n    }\n};\n/**\n * @param {string} attribute\n */ const getDOM = (attribute)=>{\n    if (typeof document === \"undefined\") {\n        throw new Error(\"`getDOM` can only be used in the browser environment\");\n    }\n    let result = document.querySelector(\"[data-\".concat(attribute, \"]\"));\n    if (!result) throw new Error('\"[data-'.concat(attribute, ']\" is required in HTML'));\n    return result;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb20vZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxNQUFNO0lBRWpCQyxRQUFRO1FBQ05DLFFBQVEsSUFBTUMsT0FBTztRQUNyQkMsU0FBUyxJQUFNRCxPQUFPO1FBQ3RCRSxNQUFNLElBQU1GLE9BQU87UUFDbkJHLFFBQVEsSUFBTUgsT0FBTztRQUNyQkksU0FBUyxJQUFNSixPQUFPO0lBQ3hCO0lBQ0FLLFVBQVU7UUFDUkMsT0FBTyxJQUFNTixPQUFPO1FBQ3BCRSxNQUFNLElBQU1GLE9BQU87UUFDbkJHLFFBQVEsSUFBTUgsT0FBTztRQUNyQkksU0FBUyxJQUFNSixPQUFPO0lBQ3hCO0FBQ0YsRUFBRTtBQUVGOztDQUVDLEdBQ0QsTUFBTUEsU0FBUyxDQUFDTztJQUNkLElBQUksT0FBT0MsYUFBYSxhQUFhO1FBQ25DLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUVBLElBQUlDLFNBQVNGLFNBQVNHLGFBQWEsQ0FBQyxTQUFtQixPQUFWSixXQUFVO0lBQ3ZELElBQUksQ0FBQ0csUUFBUSxNQUFNLElBQUlELE1BQU0sVUFBb0IsT0FBVkYsV0FBVTtJQUNqRCxPQUFPRztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RvbS9kb20uanM/ZTk2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRE9NID0ge1xuXG4gIHNlYXJjaDoge1xuICAgIGdlbnJlczogKCkgPT4gZ2V0RE9NKFwic2VhcmNoLWdlbnJlc1wiKSxcbiAgICBhdXRob3JzOiAoKSA9PiBnZXRET00oXCJzZWFyY2gtYXV0aG9yc1wiKSxcbiAgICBmb3JtOiAoKSA9PiBnZXRET00oXCJzZWFyY2gtZm9ybVwiKSxcbiAgICBjYW5jZWw6ICgpID0+IGdldERPTShcInNlYXJjaC1jYW5jZWxcIiksXG4gICAgb3ZlcmxheTogKCkgPT4gZ2V0RE9NKFwic2VhcmNoLW92ZXJsYXlcIiksXG4gIH0sXG4gIHNldHRpbmdzOiB7XG4gICAgdGhlbWU6ICgpID0+IGdldERPTShcInNldHRpbmdzLXRoZW1lXCIpLFxuICAgIGZvcm06ICgpID0+IGdldERPTShcInNldHRpbmdzLWZvcm1cIiksXG4gICAgY2FuY2VsOiAoKSA9PiBnZXRET00oXCJzZXR0aW5ncy1jYW5jZWxcIiksXG4gICAgb3ZlcmxheTogKCkgPT4gZ2V0RE9NKFwic2V0dGluZ3Mtb3ZlcmxheVwiKSxcbiAgfSxcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICovXG5jb25zdCBnZXRET00gPSAoYXR0cmlidXRlKSA9PiB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJgZ2V0RE9NYCBjYW4gb25seSBiZSB1c2VkIGluIHRoZSBicm93c2VyIGVudmlyb25tZW50XCIpO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLSR7YXR0cmlidXRlfV1gKTtcbiAgaWYgKCFyZXN1bHQpIHRocm93IG5ldyBFcnJvcihgXCJbZGF0YS0ke2F0dHJpYnV0ZX1dXCIgaXMgcmVxdWlyZWQgaW4gSFRNTGApO1xuICByZXR1cm4gcmVzdWx0O1xufTsiXSwibmFtZXMiOlsiRE9NIiwic2VhcmNoIiwiZ2VucmVzIiwiZ2V0RE9NIiwiYXV0aG9ycyIsImZvcm0iLCJjYW5jZWwiLCJvdmVybGF5Iiwic2V0dGluZ3MiLCJ0aGVtZSIsImF0dHJpYnV0ZSIsImRvY3VtZW50IiwiRXJyb3IiLCJyZXN1bHQiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dom/dom.js\n"));

/***/ })

});