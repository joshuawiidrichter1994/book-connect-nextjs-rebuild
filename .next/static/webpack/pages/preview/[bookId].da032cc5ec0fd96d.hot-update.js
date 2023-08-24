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

/***/ "./components/bookComponents/bookPreview/bookPreview.js":
/*!**************************************************************!*\
  !*** ./components/bookComponents/bookPreview/bookPreview.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookPreview.module.css */ \"./components/bookComponents/bookPreview/bookPreview.module.css\");\n/* harmony import */ var _bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dom/dom */ \"./dom/dom.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import the useRouter hook\nfunction BookPreview(props) {\n    _s();\n    const { Book, books, authors, BOOKS_PER_PAGE, genres } = props;\n    let { page, matches } = props;\n    const actions = {\n        list: {\n            updateRemaining: ()=>{\n                const initial = matches.length - page * BOOKS_PER_PAGE;\n                const hasRemaining = initial > 0;\n                const remaining = hasRemaining ? initial : 0;\n                getDOM(\"list-button\").disabled = !hasRemaining;\n                _dom_dom__WEBPACK_IMPORTED_MODULE_2__.DOM.list.button().innerHTML = /* html */ '\\n                <span>Show more</span>\\n                <span class=\"list__remaining\"> ('.concat(remaining, \")</span>\\n            \");\n            },\n            increase: ()=>{\n                const newPage = page + 1;\n                const start = (newPage - 1) * BOOKS_PER_PAGE;\n                const end = newPage * BOOKS_PER_PAGE;\n                _dom_dom__WEBPACK_IMPORTED_MODULE_2__.DOM.list.items().appendChild(createPreviewsFragment(matches, [\n                    start,\n                    end\n                ]));\n                actions.list.updateRemaining();\n                page = newPage;\n            },\n            recreate: (display)=>{\n                matches = display;\n                page = 1;\n                if (display.length < 1) {\n                    _dom_dom__WEBPACK_IMPORTED_MODULE_2__.DOM.list.message().classList.add(\"list__message_show\");\n                } else {\n                    _dom_dom__WEBPACK_IMPORTED_MODULE_2__.DOM.list.message().classList.remove(\"list__message_show\");\n                }\n                getDOM(\"list-items\").innerHTML = \"\";\n                const fragments = createPreviewsFragment(display, [\n                    0,\n                    36\n                ]);\n                getDOM(\"list-items\").appendChild(fragments);\n                actions.list.updateRemaining();\n                window.scrollTo({\n                    top: 0,\n                    behavior: \"smooth\"\n                });\n            },\n            close: ()=>{\n                //DOM.list.active().open = false;\n                router.push(\"/\"); // Navigate back to the index page\n            },\n            open: (book)=>{\n                const year = new Date(book.published).getFullYear();\n                _dom_dom__WEBPACK_IMPORTED_MODULE_2__.DOM.list.active().open = true;\n                _dom_dom__WEBPACK_IMPORTED_MODULE_2__.DOM.list.blur().src = book.image;\n                _dom_dom__WEBPACK_IMPORTED_MODULE_2__.DOM.list.image().src = book.image;\n                _dom_dom__WEBPACK_IMPORTED_MODULE_2__.DOM.list.title().innerText = book.title;\n                _dom_dom__WEBPACK_IMPORTED_MODULE_2__.DOM.list.subtitle().innerText = \"\".concat(authors[book.author], \" (\").concat(year, \")\");\n                _dom_dom__WEBPACK_IMPORTED_MODULE_2__.DOM.list.description().innerText = book.description;\n            }\n        }\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // Initialize the useRouter hook\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Extract the bookId from the URL parameters\n        const { bookId } = router.query;\n        // Find the book with the extracted bookId\n        const selectedBook = books.find((book)=>book.id === bookId);\n        // Open the previews fragment for the selected book\n        if (selectedBook) {\n            actions.list.open(selectedBook);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dialog\", {\n        className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay),\n        \"data-list-active\": true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__preview),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__blur),\n                        \"data-list-blur\": true,\n                        src: \"\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__image),\n                        \"data-list-image\": true,\n                        src: \"\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__title),\n                        \"data-list-title\": true\n                    }, void 0, false, {\n                        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__data),\n                        \"data-list-subtitle\": true\n                    }, void 0, false, {\n                        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\".concat((_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__data), \" \").concat((_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__data_secondary)),\n                        \"data-list-description\": true\n                    }, void 0, false, {\n                        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__row),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__button), \" \").concat((_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__button_primary)),\n                    onClick: actions.list.close,\n                    \"data-list-close\": true,\n                    children: \"Close\"\n                }, void 0, false, {\n                    fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, this);\n}\n_s(BookPreview, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = BookPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookPreview);\nvar _c;\n$RefreshReg$(_c, \"BookPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jvb2tDb21wb25lbnRzL2Jvb2tQcmV2aWV3L2Jvb2tQcmV2aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2Y7QUFDUTtBQUNMO0FBQ00sQ0FBQyw0QkFBNEI7QUFFckUsU0FBU0ssWUFBWUMsS0FBSzs7SUFDeEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRSxHQUFHTDtJQUN6RCxJQUFJLEVBQUVNLElBQUksRUFBRUMsT0FBTyxFQUFFLEdBQUdQO0lBRXhCLE1BQU1RLFVBQVU7UUFDZEMsTUFBTTtZQUNKQyxpQkFBaUI7Z0JBQ2YsTUFBTUMsVUFBVUosUUFBUUssTUFBTSxHQUFHTixPQUFPRjtnQkFDeEMsTUFBTVMsZUFBZUYsVUFBVTtnQkFFL0IsTUFBTUcsWUFBWUQsZUFBZUYsVUFBVTtnQkFFM0NJLE9BQU8sZUFBZUMsUUFBUSxHQUFHLENBQUNIO2dCQUNsQ2pCLHlDQUFHQSxDQUFDYSxJQUFJLENBQUNRLE1BQU0sR0FBR0MsU0FBUyxHQUFHLFFBQVEsR0FBRyw2RkFFVyxPQUFWSixXQUFVO1lBRXREO1lBRUFLLFVBQVU7Z0JBQ1IsTUFBTUMsVUFBVWQsT0FBTztnQkFDdkIsTUFBTWUsUUFBUSxDQUFDRCxVQUFVLEtBQUtoQjtnQkFDOUIsTUFBTWtCLE1BQU1GLFVBQVVoQjtnQkFFdEJSLHlDQUFHQSxDQUFDYSxJQUFJLENBQ0xjLEtBQUssR0FDTEMsV0FBVyxDQUFDQyx1QkFBdUJsQixTQUFTO29CQUFDYztvQkFBT0M7aUJBQUk7Z0JBQzNEZCxRQUFRQyxJQUFJLENBQUNDLGVBQWU7Z0JBQzVCSixPQUFPYztZQUNUO1lBRUFNLFVBQVUsQ0FBQ0M7Z0JBQ1RwQixVQUFVb0I7Z0JBQ1ZyQixPQUFPO2dCQUVQLElBQUlxQixRQUFRZixNQUFNLEdBQUcsR0FBRztvQkFDdEJoQix5Q0FBR0EsQ0FBQ2EsSUFBSSxDQUFDbUIsT0FBTyxHQUFH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QUEvQkEsd0ZBQThCO29CQUN0RXlGLFNBQVMzRSxRQUFRQyxJQUFJLENBQUM0QixLQUFLO29CQUMzQitDLGlCQUFlOzhCQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQW5IU3JGOztRQXFFUUQsa0RBQVNBOzs7S0FyRWpCQztBQXFIVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Jvb2tDb21wb25lbnRzL2Jvb2tQcmV2aWV3L2Jvb2tQcmV2aWV3LmpzPzJiZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ib29rUHJldmlldy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9kb20vZG9tXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJzsgLy8gSW1wb3J0IHRoZSB1c2VSb3V0ZXIgaG9va1xuXG5mdW5jdGlvbiBCb29rUHJldmlldyhwcm9wcykge1xuICBjb25zdCB7IEJvb2ssIGJvb2tzLCBhdXRob3JzLCBCT09LU19QRVJfUEFHRSwgZ2VucmVzIH0gPSBwcm9wcztcbiAgbGV0IHsgcGFnZSwgbWF0Y2hlcyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgYWN0aW9ucyA9IHtcbiAgICBsaXN0OiB7XG4gICAgICB1cGRhdGVSZW1haW5pbmc6ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5pdGlhbCA9IG1hdGNoZXMubGVuZ3RoIC0gcGFnZSAqIEJPT0tTX1BFUl9QQUdFO1xuICAgICAgICBjb25zdCBoYXNSZW1haW5pbmcgPSBpbml0aWFsID4gMDtcblxuICAgICAgICBjb25zdCByZW1haW5pbmcgPSBoYXNSZW1haW5pbmcgPyBpbml0aWFsIDogMDtcblxuICAgICAgICBnZXRET00oXCJsaXN0LWJ1dHRvblwiKS5kaXNhYmxlZCA9ICFoYXNSZW1haW5pbmc7XG4gICAgICAgIERPTS5saXN0LmJ1dHRvbigpLmlubmVySFRNTCA9IC8qIGh0bWwgKi8gYFxuICAgICAgICAgICAgICAgIDxzcGFuPlNob3cgbW9yZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3RfX3JlbWFpbmluZ1wiPiAoJHtyZW1haW5pbmd9KTwvc3Bhbj5cbiAgICAgICAgICAgIGA7XG4gICAgICB9LFxuXG4gICAgICBpbmNyZWFzZTogKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYWdlID0gcGFnZSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gKG5ld1BhZ2UgLSAxKSAqIEJPT0tTX1BFUl9QQUdFO1xuICAgICAgICBjb25zdCBlbmQgPSBuZXdQYWdlICogQk9PS1NfUEVSX1BBR0U7XG5cbiAgICAgICAgRE9NLmxpc3RcbiAgICAgICAgICAuaXRlbXMoKVxuICAgICAgICAgIC5hcHBlbmRDaGlsZChjcmVhdGVQcmV2aWV3c0ZyYWdtZW50KG1hdGNoZXMsIFtzdGFydCwgZW5kXSkpO1xuICAgICAgICBhY3Rpb25zLmxpc3QudXBkYXRlUmVtYWluaW5nKCk7XG4gICAgICAgIHBhZ2UgPSBuZXdQYWdlO1xuICAgICAgfSxcblxuICAgICAgcmVjcmVhdGU6IChkaXNwbGF5KSA9PiB7XG4gICAgICAgIG1hdGNoZXMgPSBkaXNwbGF5O1xuICAgICAgICBwYWdlID0gMTtcblxuICAgICAgICBpZiAoZGlzcGxheS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgRE9NLmxpc3QubWVzc2FnZSgpLmNsYXNzTGlzdC5hZGQoXCJsaXN0X19tZXNzYWdlX3Nob3dcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRE9NLmxpc3QubWVzc2FnZSgpLmNsYXNzTGlzdC5yZW1vdmUoXCJsaXN0X19tZXNzYWdlX3Nob3dcIik7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRET00oXCJsaXN0LWl0ZW1zXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50cyA9IGNyZWF0ZVByZXZpZXdzRnJhZ21lbnQoZGlzcGxheSwgWzAsIDM2XSk7XG4gICAgICAgIGdldERPTShcImxpc3QtaXRlbXNcIikuYXBwZW5kQ2hpbGQoZnJhZ21lbnRzKTtcbiAgICAgICAgYWN0aW9ucy5saXN0LnVwZGF0ZVJlbWFpbmluZygpO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgfSxcbiAgICAgIFxuICAgICAgY2xvc2U6ICgpID0+IHtcbiAgICAgICAgLy9ET00ubGlzdC5hY3RpdmUoKS5vcGVuID0gZmFsc2U7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIE5hdmlnYXRlIGJhY2sgdG8gdGhlIGluZGV4IHBhZ2VcbiAgICAgIH0sXG4gICAgICBcblxuICAgICAgb3BlbjogKGJvb2spID0+IHsgLy8gUmVtb3ZlIHRoZSBldmVudCBwYXJhbWV0ZXIgYW5kIHVzZSB0aGUgYGJvb2tgIHBhcmFtZXRlclxuICAgICAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoYm9vay5wdWJsaXNoZWQpLmdldEZ1bGxZZWFyKCk7XG4gICAgICBcbiAgICAgICAgRE9NLmxpc3QuYWN0aXZlKCkub3BlbiA9IHRydWU7XG4gICAgICAgIERPTS5saXN0LmJsdXIoKS5zcmMgPSBib29rLmltYWdlO1xuICAgICAgICBET00ubGlzdC5pbWFnZSgpLnNyYyA9IGJvb2suaW1hZ2U7XG4gICAgICAgIERPTS5saXN0LnRpdGxlKCkuaW5uZXJUZXh0ID0gYm9vay50aXRsZTtcbiAgICAgICAgRE9NLmxpc3Quc3VidGl0bGUoKS5pbm5lclRleHQgPSBgJHthdXRob3JzW2Jvb2suYXV0aG9yXX0gKCR7eWVhcn0pYDtcbiAgICAgIFxuICAgICAgICBET00ubGlzdC5kZXNjcmlwdGlvbigpLmlubmVyVGV4dCA9IGJvb2suZGVzY3JpcHRpb247XG4gICAgICB9LFxuXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgLy8gSW5pdGlhbGl6ZSB0aGUgdXNlUm91dGVyIGhvb2tcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEV4dHJhY3QgdGhlIGJvb2tJZCBmcm9tIHRoZSBVUkwgcGFyYW1ldGVyc1xuICAgIGNvbnN0IHsgYm9va0lkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICAvLyBGaW5kIHRoZSBib29rIHdpdGggdGhlIGV4dHJhY3RlZCBib29rSWRcbiAgICBjb25zdCBzZWxlY3RlZEJvb2sgPSBib29rcy5maW5kKChib29rKSA9PiBib29rLmlkID09PSBib29rSWQpO1xuXG4gICAgLy8gT3BlbiB0aGUgcHJldmlld3MgZnJhZ21lbnQgZm9yIHRoZSBzZWxlY3RlZCBib29rXG4gICAgaWYgKHNlbGVjdGVkQm9vaykge1xuICAgICAgYWN0aW9ucy5saXN0Lm9wZW4oc2VsZWN0ZWRCb29rKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaWFsb2cgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0gZGF0YS1saXN0LWFjdGl2ZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheV9fcHJldmlld30+XG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5X19ibHVyfSBkYXRhLWxpc3QtYmx1ciBzcmM9XCJcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5X19pbWFnZX1cbiAgICAgICAgICBkYXRhLWxpc3QtaW1hZ2VcbiAgICAgICAgICBzcmM9XCJcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheV9fY29udGVudH0+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5X190aXRsZX0gZGF0YS1saXN0LXRpdGxlPjwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheV9fZGF0YX0gZGF0YS1saXN0LXN1YnRpdGxlPjwvZGl2PlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm92ZXJsYXlfX2RhdGF9ICR7c3R5bGVzLm92ZXJsYXlfX2RhdGFfc2Vjb25kYXJ5fWB9XG4gICAgICAgICAgZGF0YS1saXN0LWRlc2NyaXB0aW9uXG4gICAgICAgID48L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5X19yb3d9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMub3ZlcmxheV9fYnV0dG9ufSAke3N0eWxlcy5vdmVybGF5X19idXR0b25fcHJpbWFyeX1gfVxuICAgICAgICAgIG9uQ2xpY2s9e2FjdGlvbnMubGlzdC5jbG9zZX1cbiAgICAgICAgICBkYXRhLWxpc3QtY2xvc2VcbiAgICAgICAgPlxuICAgICAgICAgIENsb3NlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaWFsb2c+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tQcmV2aWV3O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwiRE9NIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQm9va1ByZXZpZXciLCJwcm9wcyIsIkJvb2siLCJib29rcyIsImF1dGhvcnMiLCJCT09LU19QRVJfUEFHRSIsImdlbnJlcyIsInBhZ2UiLCJtYXRjaGVzIiwiYWN0aW9ucyIsImxpc3QiLCJ1cGRhdGVSZW1haW5pbmciLCJpbml0aWFsIiwibGVuZ3RoIiwiaGFzUmVtYWluaW5nIiwicmVtYWluaW5nIiwiZ2V0RE9NIiwiZGlzYWJsZWQiLCJidXR0b24iLCJpbm5lckhUTUwiLCJpbmNyZWFzZSIsIm5ld1BhZ2UiLCJzdGFydCIsImVuZCIsIml0ZW1zIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVQcmV2aWV3c0ZyYWdtZW50IiwicmVjcmVhdGUiLCJkaXNwbGF5IiwibWVzc2FnZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImZyYWdtZW50cyIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjbG9zZSIsInJvdXRlciIsInB1c2giLCJvcGVuIiwiYm9vayIsInllYXIiLCJEYXRlIiwicHVibGlzaGVkIiwiZ2V0RnVsbFllYXIiLCJhY3RpdmUiLCJibHVyIiwic3JjIiwiaW1hZ2UiLCJ0aXRsZSIsImlubmVyVGV4dCIsInN1YnRpdGxlIiwiYXV0aG9yIiwiZGVzY3JpcHRpb24iLCJib29rSWQiLCJxdWVyeSIsInNlbGVjdGVkQm9vayIsImZpbmQiLCJpZCIsImRpYWxvZyIsImNsYXNzTmFtZSIsIm92ZXJsYXkiLCJkYXRhLWxpc3QtYWN0aXZlIiwiZGl2Iiwib3ZlcmxheV9fcHJldmlldyIsIm92ZXJsYXlfX2JsdXIiLCJkYXRhLWxpc3QtYmx1ciIsImFsdCIsIm92ZXJsYXlfX2ltYWdlIiwiZGF0YS1saXN0LWltYWdlIiwib3ZlcmxheV9fY29udGVudCIsImgzIiwib3ZlcmxheV9fdGl0bGUiLCJkYXRhLWxpc3QtdGl0bGUiLCJvdmVybGF5X19kYXRhIiwiZGF0YS1saXN0LXN1YnRpdGxlIiwicCIsIm92ZXJsYXlfX2RhdGFfc2Vjb25kYXJ5IiwiZGF0YS1saXN0LWRlc2NyaXB0aW9uIiwib3ZlcmxheV9fcm93Iiwib3ZlcmxheV9fYnV0dG9uIiwib3ZlcmxheV9fYnV0dG9uX3ByaW1hcnkiLCJvbkNsaWNrIiwiZGF0YS1saXN0LWNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/bookComponents/bookPreview/bookPreview.js\n"));

/***/ })

});