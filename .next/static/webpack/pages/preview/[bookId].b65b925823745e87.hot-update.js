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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookPreview.module.css */ \"./components/bookComponents/bookPreview/bookPreview.module.css\");\n/* harmony import */ var _bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dom/dom */ \"./dom/dom.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import the useRouter hook\nfunction BookPreview(props) {\n    _s();\n    const { Book, books, authors, BOOKS_PER_PAGE, genres } = props;\n    let { page, matches } = props;\n    const actions = {\n        list: {\n            updateRemaining: ()=>{\n                const initial = matches.length - page * BOOKS_PER_PAGE;\n                const hasRemaining = initial > 0;\n                const remaining = hasRemaining ? initial : 0;\n                getDOM(\"list-button\").disabled = !hasRemaining;\n                getDOM(\"list-button\").innerHTML = /* html */ '\\n                <span>Show more</span>\\n                <span class=\"list__remaining\"> ('.concat(remaining, \")</span>\\n            \");\n            },\n            increase: ()=>{\n                const newPage = page + 1;\n                const start = (newPage - 1) * BOOKS_PER_PAGE;\n                const end = newPage * BOOKS_PER_PAGE;\n                _dom_dom__WEBPACK_IMPORTED_MODULE_2__.DOM.list.items().appendChild(createPreviewsFragment(matches, [\n                    start,\n                    end\n                ]));\n                actions.list.updateRemaining();\n                page = newPage;\n            },\n            recreate: (display)=>{\n                matches = display;\n                page = 1;\n                if (display.length < 1) {\n                    getDOM(\"list-message\").classList.add(\"list__message_show\");\n                } else {\n                    getDOM(\"list-message\").classList.remove(\"list__message_show\");\n                }\n                getDOM(\"list-items\").innerHTML = \"\";\n                const fragments = createPreviewsFragment(display, [\n                    0,\n                    36\n                ]);\n                getDOM(\"list-items\").appendChild(fragments);\n                actions.list.updateRemaining();\n                window.scrollTo({\n                    top: 0,\n                    behavior: \"smooth\"\n                });\n            },\n            close: ()=>{\n                router.push(\"/\"); // Navigate back to the index page\n            },\n            open: (book)=>{\n                const year = new Date(book.published).getFullYear();\n                getDOM(\"list-active\").open = true;\n                getDOM(\"list-blur\").src = book.image;\n                getDOM(\"list-image\").src = book.image;\n                getDOM(\"list-title\").innerText = book.title;\n                getDOM(\"list-subtitle\").innerText = \"\".concat(authors[book.author], \" (\").concat(year, \")\");\n                getDOM(\"list-description\").innerText = book.description;\n            }\n        }\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // Initialize the useRouter hook\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Extract the bookId from the URL parameters\n        const { bookId } = router.query;\n        // Find the book with the extracted bookId\n        const selectedBook = books.find((book)=>book.id === bookId);\n        // Open the previews fragment for the selected book\n        if (selectedBook) {\n            actions.list.open(selectedBook);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dialog\", {\n        className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay),\n        \"data-list-active\": true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__preview),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__blur),\n                        \"data-list-blur\": true,\n                        src: \"\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__image),\n                        \"data-list-image\": true,\n                        src: \"\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__title),\n                        \"data-list-title\": true\n                    }, void 0, false, {\n                        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__data),\n                        \"data-list-subtitle\": true\n                    }, void 0, false, {\n                        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\".concat((_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__data), \" \").concat((_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__data_secondary)),\n                        \"data-list-description\": true\n                    }, void 0, false, {\n                        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__row),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__button), \" \").concat((_bookPreview_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay__button_primary)),\n                    onClick: actions.list.close,\n                    \"data-list-close\": true,\n                    children: \"Close\"\n                }, void 0, false, {\n                    fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookPreview/bookPreview.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(BookPreview, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = BookPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookPreview);\nvar _c;\n$RefreshReg$(_c, \"BookPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jvb2tDb21wb25lbnRzL2Jvb2tQcmV2aWV3L2Jvb2tQcmV2aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2Y7QUFDUTtBQUNMO0FBQ00sQ0FBQyw0QkFBNEI7QUFFckUsU0FBU0ssWUFBWUMsS0FBSzs7SUFDeEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRSxHQUFHTDtJQUN6RCxJQUFJLEVBQUVNLElBQUksRUFBRUMsT0FBTyxFQUFFLEdBQUdQO0lBRXhCLE1BQU1RLFVBQVU7UUFDZEMsTUFBTTtZQUNKQyxpQkFBaUI7Z0JBQ2YsTUFBTUMsVUFBVUosUUFBUUssTUFBTSxHQUFHTixPQUFPRjtnQkFDeEMsTUFBTVMsZUFBZUYsVUFBVTtnQkFFL0IsTUFBTUcsWUFBWUQsZUFBZUYsVUFBVTtnQkFFM0NJLE9BQU8sZUFBZUMsUUFBUSxHQUFHLENBQUNIO2dCQUNsQ0UsT0FBTyxlQUFlRSxTQUFTLEdBQUcsUUFBUSxHQUFHLDZGQUVPLE9BQVZILFdBQVU7WUFFdEQ7WUFFQUksVUFBVTtnQkFDUixNQUFNQyxVQUFVYixPQUFPO2dCQUN2QixNQUFNYyxRQUFRLENBQUNELFVBQVUsS0FBS2Y7Z0JBQzlCLE1BQU1pQixNQUFNRixVQUFVZjtnQkFFdEJSLHlDQUFHQSxDQUFDYSxJQUFJLENBQ0xhLEtBQUssR0FDTEMsV0FBVyxDQUFDQyx1QkFBdUJqQixTQUFTO29CQUFDYTtvQkFBT0M7aUJBQUk7Z0JBQzNEYixRQUFRQyxJQUFJLENBQUNDLGVBQWU7Z0JBQzVCSixPQUFPYTtZQUNUO1lBRUFNLFVBQVUsQ0FBQ0M7Z0JBQ1RuQixVQUFVbUI7Z0JBQ1ZwQixPQUFPO2dCQUVQLElBQUlvQixRQUFRZCxNQUFNLEdBQUcsR0FBRztvQkFDdEJHLE9BQU8sZ0JBQWdCWSxTQUFTLENBQUNDLEdBQUcsQ0FBQztnQkFDdkMsT0FBTztvQkFDTGIsT0FBTyxnQkFBZ0JZLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO2dCQUMxQztnQkFFQWQsT0FBTyxjQUFjRSxTQUFTLEdBQUc7Z0JBQ2pDLE1BQU1hLFlBQVlOLHVCQUF1QkUsU0FBUztvQkFBQztvQkFBRztpQkFBRztnQkFDekRYLE9BQU8sY0FBY1EsV0FBVyxDQUFDTztnQkFDakN0QixRQUFRQyxJQUFJLENBQUNDLGVBQWU7Z0JBQzVCcUIsT0FBT0MsUUFBUSxDQUFDO29CQUFFQyxLQUFLO29CQUFHQyxVQUFVO2dCQUFTO1lBQy9DO1lBRUFDLE9BQU87Z0JBQ0xDLE9BQU9DLElBQUksQ0FBQyxNQUFNLGtDQUFrQztZQUN0RDtZQUdBQyxNQUFNLENBQUNDO2dCQUNMLE1BQU1DLE9BQU8sSUFBSUMsS0FBS0YsS0FBS0csU0FBUyxFQUFFQyxXQUFXO2dCQUVqRDVCLE9BQU8sZUFBZXVCLElBQUksR0FBRztnQkFDN0J2QixPQUFPLGFBQWE2QixHQUFHLEdBQUdMLEtBQUtNLEtBQUs7Z0JBQ3BDOUIsT0FBTyxjQUFjNkIsR0FBRyxHQUFHTCxLQUFLTSxLQUFLO2dCQUNyQzlCLE9BQU8sY0FBYytCLFNBQVMsR0FBR1AsS0FBS1EsS0FBSztnQkFDM0NoQyxPQUFPLGlCQUFpQitCLFNBQVMsR0FBRyxHQUE0Qk4sT0FBekJyQyxPQUFPLENBQUNvQyxLQUFLUyxNQUFNLENBQUMsRUFBQyxNQUFTLE9BQUxSLE1BQUs7Z0JBRXJFekIsT0FBTyxvQkFBb0IrQixTQUFTLEdBQUdQLEtBQUtVLFdBQVc7WUFDekQ7UUFFRjtJQUNGO0lBRUEsTUFBTWIsU0FBU3RDLHNEQUFTQSxJQUFJLGdDQUFnQztJQUU1REQsZ0RBQVNBLENBQUM7UUFDUiw2Q0FBNkM7UUFDN0MsTUFBTSxFQUFFcUQsTUFBTSxFQUFFLEdBQUdkLE9BQU9lLEtBQUs7UUFFL0IsMENBQTBDO1FBQzFDLE1BQU1DLGVBQWVsRCxNQUFNbUQsSUFBSSxDQUFDLENBQUNkLE9BQVNBLEtBQUtlLEVBQUUsS0FBS0o7UUFFdEQsbURBQW1EO1FBQ25ELElBQUlFLGNBQWM7WUFDaEI1QyxRQUFRQyxJQUFJLENBQUM2QixJQUFJLENBQUNjO1FBQ3BCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNHO1FBQU9DLFdBQVc5RCx3RUFBYztRQUFFZ0Usa0JBQWdCOzswQkFDakQsOERBQUNDO2dCQUFJSCxXQUFXOUQsaUZBQXVCOztrQ0FDckMsOERBQUNDLG1EQUFLQTt3QkFBQzZELFdBQVc5RCw4RUFBb0I7d0JBQUVvRSxnQkFBYzt3QkFBQ2xCLEtBQUk7d0JBQUdtQixLQUFJOzs7Ozs7a0NBQ2xFLDhEQUFDcEUsbURBQUtBO3dCQUNKNkQsV0FBVzlELCtFQUFxQjt3QkFDaEN1RSxpQkFBZTt3QkFDZnJCLEtBQUk7d0JBQ0ptQixLQUFJOzs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNKO2dCQUFJSCxXQUFXOUQsaUZBQXVCOztrQ0FDckMsOERBQUN5RTt3QkFBR1gsV0FBVzlELCtFQUFxQjt3QkFBRTJFLGlCQUFlOzs7Ozs7a0NBQ3JELDhEQUFDVjt3QkFBSUgsV0FBVzlELDhFQUFvQjt3QkFBRTZFLG9CQUFrQjs7Ozs7O2tDQUN4RCw4REFBQ0M7d0JBQ0NoQixXQUFXLEdBQTJCOUQsT0FBeEJBLDhFQUFvQixFQUFDLEtBQWtDLE9BQS9CQSx3RkFBOEI7d0JBQ3BFZ0YsdUJBQXFCOzs7Ozs7Ozs7Ozs7MEJBSXpCLDhEQUFDZjtnQkFBSUgsV0FBVzlELDZFQUFtQjswQkFDakMsNEVBQUNrRjtvQkFDQ3BCLFdBQVcsR0FBNkI5RCxPQUExQkEsZ0ZBQXNCLEVBQUMsS0FBa0MsT0FBL0JBLHdGQUE4QjtvQkFDdEVxRixTQUFTdkUsUUFBUUMsSUFBSSxDQUFDMEIsS0FBSztvQkFDM0I2QyxpQkFBZTs4QkFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0FsSFNqRjs7UUFvRVFELGtEQUFTQTs7O0tBcEVqQkM7QUFvSFQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib29rQ29tcG9uZW50cy9ib29rUHJldmlldy9ib29rUHJldmlldy5qcz8yYmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYm9va1ByZXZpZXcubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vLi4vZG9tL2RvbVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7IC8vIEltcG9ydCB0aGUgdXNlUm91dGVyIGhvb2tcblxuZnVuY3Rpb24gQm9va1ByZXZpZXcocHJvcHMpIHtcbiAgY29uc3QgeyBCb29rLCBib29rcywgYXV0aG9ycywgQk9PS1NfUEVSX1BBR0UsIGdlbnJlcyB9ID0gcHJvcHM7XG4gIGxldCB7IHBhZ2UsIG1hdGNoZXMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgbGlzdDoge1xuICAgICAgdXBkYXRlUmVtYWluaW5nOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluaXRpYWwgPSBtYXRjaGVzLmxlbmd0aCAtIHBhZ2UgKiBCT09LU19QRVJfUEFHRTtcbiAgICAgICAgY29uc3QgaGFzUmVtYWluaW5nID0gaW5pdGlhbCA+IDA7XG5cbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gaGFzUmVtYWluaW5nID8gaW5pdGlhbCA6IDA7XG5cbiAgICAgICAgZ2V0RE9NKFwibGlzdC1idXR0b25cIikuZGlzYWJsZWQgPSAhaGFzUmVtYWluaW5nO1xuICAgICAgICBnZXRET00oXCJsaXN0LWJ1dHRvblwiKS5pbm5lckhUTUwgPSAvKiBodG1sICovIGBcbiAgICAgICAgICAgICAgICA8c3Bhbj5TaG93IG1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0X19yZW1haW5pbmdcIj4gKCR7cmVtYWluaW5nfSk8L3NwYW4+XG4gICAgICAgICAgICBgO1xuICAgICAgfSxcblxuICAgICAgaW5jcmVhc2U6ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFnZSA9IHBhZ2UgKyAxO1xuICAgICAgICBjb25zdCBzdGFydCA9IChuZXdQYWdlIC0gMSkgKiBCT09LU19QRVJfUEFHRTtcbiAgICAgICAgY29uc3QgZW5kID0gbmV3UGFnZSAqIEJPT0tTX1BFUl9QQUdFO1xuXG4gICAgICAgIERPTS5saXN0XG4gICAgICAgICAgLml0ZW1zKClcbiAgICAgICAgICAuYXBwZW5kQ2hpbGQoY3JlYXRlUHJldmlld3NGcmFnbWVudChtYXRjaGVzLCBbc3RhcnQsIGVuZF0pKTtcbiAgICAgICAgYWN0aW9ucy5saXN0LnVwZGF0ZVJlbWFpbmluZygpO1xuICAgICAgICBwYWdlID0gbmV3UGFnZTtcbiAgICAgIH0sXG5cbiAgICAgIHJlY3JlYXRlOiAoZGlzcGxheSkgPT4ge1xuICAgICAgICBtYXRjaGVzID0gZGlzcGxheTtcbiAgICAgICAgcGFnZSA9IDE7XG5cbiAgICAgICAgaWYgKGRpc3BsYXkubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIGdldERPTShcImxpc3QtbWVzc2FnZVwiKS5jbGFzc0xpc3QuYWRkKFwibGlzdF9fbWVzc2FnZV9zaG93XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdldERPTShcImxpc3QtbWVzc2FnZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibGlzdF9fbWVzc2FnZV9zaG93XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RE9NKFwibGlzdC1pdGVtc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb25zdCBmcmFnbWVudHMgPSBjcmVhdGVQcmV2aWV3c0ZyYWdtZW50KGRpc3BsYXksIFswLCAzNl0pO1xuICAgICAgICBnZXRET00oXCJsaXN0LWl0ZW1zXCIpLmFwcGVuZENoaWxkKGZyYWdtZW50cyk7XG4gICAgICAgIGFjdGlvbnMubGlzdC51cGRhdGVSZW1haW5pbmcoKTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIE5hdmlnYXRlIGJhY2sgdG8gdGhlIGluZGV4IHBhZ2VcbiAgICAgIH0sXG4gICAgICBcblxuICAgICAgb3BlbjogKGJvb2spID0+IHsgLy8gUmVtb3ZlIHRoZSBldmVudCBwYXJhbWV0ZXIgYW5kIHVzZSB0aGUgYGJvb2tgIHBhcmFtZXRlclxuICAgICAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoYm9vay5wdWJsaXNoZWQpLmdldEZ1bGxZZWFyKCk7XG4gICAgICBcbiAgICAgICAgZ2V0RE9NKFwibGlzdC1hY3RpdmVcIikub3BlbiA9IHRydWU7XG4gICAgICAgIGdldERPTShcImxpc3QtYmx1clwiKS5zcmMgPSBib29rLmltYWdlO1xuICAgICAgICBnZXRET00oXCJsaXN0LWltYWdlXCIpLnNyYyA9IGJvb2suaW1hZ2U7XG4gICAgICAgIGdldERPTShcImxpc3QtdGl0bGVcIikuaW5uZXJUZXh0ID0gYm9vay50aXRsZTtcbiAgICAgICAgZ2V0RE9NKFwibGlzdC1zdWJ0aXRsZVwiKS5pbm5lclRleHQgPSBgJHthdXRob3JzW2Jvb2suYXV0aG9yXX0gKCR7eWVhcn0pYDtcbiAgICAgIFxuICAgICAgICBnZXRET00oXCJsaXN0LWRlc2NyaXB0aW9uXCIpLmlubmVyVGV4dCA9IGJvb2suZGVzY3JpcHRpb247XG4gICAgICB9LFxuXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgLy8gSW5pdGlhbGl6ZSB0aGUgdXNlUm91dGVyIGhvb2tcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEV4dHJhY3QgdGhlIGJvb2tJZCBmcm9tIHRoZSBVUkwgcGFyYW1ldGVyc1xuICAgIGNvbnN0IHsgYm9va0lkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICAvLyBGaW5kIHRoZSBib29rIHdpdGggdGhlIGV4dHJhY3RlZCBib29rSWRcbiAgICBjb25zdCBzZWxlY3RlZEJvb2sgPSBib29rcy5maW5kKChib29rKSA9PiBib29rLmlkID09PSBib29rSWQpO1xuXG4gICAgLy8gT3BlbiB0aGUgcHJldmlld3MgZnJhZ21lbnQgZm9yIHRoZSBzZWxlY3RlZCBib29rXG4gICAgaWYgKHNlbGVjdGVkQm9vaykge1xuICAgICAgYWN0aW9ucy5saXN0Lm9wZW4oc2VsZWN0ZWRCb29rKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaWFsb2cgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0gZGF0YS1saXN0LWFjdGl2ZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheV9fcHJldmlld30+XG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5X19ibHVyfSBkYXRhLWxpc3QtYmx1ciBzcmM9XCJcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5X19pbWFnZX1cbiAgICAgICAgICBkYXRhLWxpc3QtaW1hZ2VcbiAgICAgICAgICBzcmM9XCJcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheV9fY29udGVudH0+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5X190aXRsZX0gZGF0YS1saXN0LXRpdGxlPjwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheV9fZGF0YX0gZGF0YS1saXN0LXN1YnRpdGxlPjwvZGl2PlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm92ZXJsYXlfX2RhdGF9ICR7c3R5bGVzLm92ZXJsYXlfX2RhdGFfc2Vjb25kYXJ5fWB9XG4gICAgICAgICAgZGF0YS1saXN0LWRlc2NyaXB0aW9uXG4gICAgICAgID48L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5X19yb3d9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMub3ZlcmxheV9fYnV0dG9ufSAke3N0eWxlcy5vdmVybGF5X19idXR0b25fcHJpbWFyeX1gfVxuICAgICAgICAgIG9uQ2xpY2s9e2FjdGlvbnMubGlzdC5jbG9zZX1cbiAgICAgICAgICBkYXRhLWxpc3QtY2xvc2VcbiAgICAgICAgPlxuICAgICAgICAgIENsb3NlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaWFsb2c+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tQcmV2aWV3O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwiRE9NIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQm9va1ByZXZpZXciLCJwcm9wcyIsIkJvb2siLCJib29rcyIsImF1dGhvcnMiLCJCT09LU19QRVJfUEFHRSIsImdlbnJlcyIsInBhZ2UiLCJtYXRjaGVzIiwiYWN0aW9ucyIsImxpc3QiLCJ1cGRhdGVSZW1haW5pbmciLCJpbml0aWFsIiwibGVuZ3RoIiwiaGFzUmVtYWluaW5nIiwicmVtYWluaW5nIiwiZ2V0RE9NIiwiZGlzYWJsZWQiLCJpbm5lckhUTUwiLCJpbmNyZWFzZSIsIm5ld1BhZ2UiLCJzdGFydCIsImVuZCIsIml0ZW1zIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVQcmV2aWV3c0ZyYWdtZW50IiwicmVjcmVhdGUiLCJkaXNwbGF5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZnJhZ21lbnRzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImNsb3NlIiwicm91dGVyIiwicHVzaCIsIm9wZW4iLCJib29rIiwieWVhciIsIkRhdGUiLCJwdWJsaXNoZWQiLCJnZXRGdWxsWWVhciIsInNyYyIsImltYWdlIiwiaW5uZXJUZXh0IiwidGl0bGUiLCJhdXRob3IiLCJkZXNjcmlwdGlvbiIsImJvb2tJZCIsInF1ZXJ5Iiwic2VsZWN0ZWRCb29rIiwiZmluZCIsImlkIiwiZGlhbG9nIiwiY2xhc3NOYW1lIiwib3ZlcmxheSIsImRhdGEtbGlzdC1hY3RpdmUiLCJkaXYiLCJvdmVybGF5X19wcmV2aWV3Iiwib3ZlcmxheV9fYmx1ciIsImRhdGEtbGlzdC1ibHVyIiwiYWx0Iiwib3ZlcmxheV9faW1hZ2UiLCJkYXRhLWxpc3QtaW1hZ2UiLCJvdmVybGF5X19jb250ZW50IiwiaDMiLCJvdmVybGF5X190aXRsZSIsImRhdGEtbGlzdC10aXRsZSIsIm92ZXJsYXlfX2RhdGEiLCJkYXRhLWxpc3Qtc3VidGl0bGUiLCJwIiwib3ZlcmxheV9fZGF0YV9zZWNvbmRhcnkiLCJkYXRhLWxpc3QtZGVzY3JpcHRpb24iLCJvdmVybGF5X19yb3ciLCJidXR0b24iLCJvdmVybGF5X19idXR0b24iLCJvdmVybGF5X19idXR0b25fcHJpbWFyeSIsIm9uQ2xpY2siLCJkYXRhLWxpc3QtY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/bookComponents/bookPreview/bookPreview.js\n"));

/***/ })

});