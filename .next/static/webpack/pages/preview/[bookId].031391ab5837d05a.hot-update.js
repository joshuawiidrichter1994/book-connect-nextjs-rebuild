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

/***/ "./components/bookComponents/bookDisplay/bookDisplay.js":
/*!**************************************************************!*\
  !*** ./components/bookComponents/bookDisplay/bookDisplay.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookDisplay.module.css */ \"./components/bookComponents/bookDisplay/bookDisplay.module.css\");\n/* harmony import */ var _bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dom/dom */ \"./dom/dom.js\");\n\nvar _s = $RefreshSig$();\n\n // Import the useRouter hook\n\n\nfunction BookDisplay(props) {\n    _s();\n    const { Book, books, authors, BOOKS_PER_PAGE, genres } = props;\n    let { page, matches } = props;\n    const actions = {\n        list: {\n            updateRemaining: ()=>{\n                const initial = matches.length - page * BOOKS_PER_PAGE;\n                const hasRemaining = initial > 0;\n                const remaining = hasRemaining ? initial : 0;\n                getDOM(\"list-button\").disabled = !hasRemaining;\n                getDOM(\"list-button\").innerHTML = /* html */ '\\n                <span>Show more</span>\\n                <span class=\"list__remaining\"> ('.concat(remaining, \")</span>\\n            \");\n            },\n            increase: ()=>{\n                const newPage = page + 1;\n                const start = (newPage - 1) * BOOKS_PER_PAGE;\n                const end = newPage * BOOKS_PER_PAGE;\n                _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.list.items().appendChild(createPreviewsFragment(matches, [\n                    start,\n                    end\n                ]));\n                actions.list.updateRemaining();\n                page = newPage;\n            },\n            recreate: (display)=>{\n                matches = display;\n                page = 1;\n                if (display.length < 1) {\n                    getDOM(\"list-message\").classList.add(\"list__message_show\");\n                } else {\n                    getDOM(\"list-message\").classList.remove(\"list__message_show\");\n                }\n                getDOM(\"list-items\").innerHTML = \"\";\n                const fragments = createPreviewsFragment(display, [\n                    0,\n                    36\n                ]);\n                getDOM(\"list-items\").appendChild(fragments);\n                actions.list.updateRemaining();\n                window.scrollTo({\n                    top: 0,\n                    behavior: \"smooth\"\n                });\n            },\n            close: ()=>{\n                getDOM(\"list-active\").open = false;\n            },\n            open: (event)=>{\n                const previewId = event.target.dataset.preview;\n                if (previewId) {\n                    const active = getBookById(previewId);\n                    // Instead of opening a preview, navigate to the dynamic route\n                    router.push(\"/preview/\".concat(active.id));\n                }\n            }\n        }\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const css = {\n        day: {\n            dark: \"10, 10, 20\",\n            light: \"255, 255, 255\"\n        },\n        night: {\n            dark: \"255, 255, 255\",\n            light: \"10, 10, 20\"\n        }\n    };\n    const initialise = ()=>{\n        _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.list.items().appendChild(createPreviewsFragment(books, [\n            0,\n            BOOKS_PER_PAGE\n        ]));\n        _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.search.genres().appendChild(createGenresFragment(genres));\n        _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.search.authors().appendChild(createAuthorsFragment(authors));\n        _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.settings.theme().value = isDarkMode() ? \"night\" : \"day\";\n        setTheme(isDarkMode() ? \"night\" : \"day\");\n        const remaining = books.length - BOOKS_PER_PAGE;\n        getDOM(\"list-button\").innerText = \"Show more (\".concat(remaining, \")\");\n    };\n    /**\n   * @param {string} id\n   * @returns {Book}\n   */ const getBookById = (id)=>{\n        let result = null;\n        for (const singleBook of books){\n            if (result) break;\n            if (singleBook.id === id) result = singleBook;\n        }\n        return result;\n    };\n    /**\n   * ...\n   *\n   * @param {Book} props\n   * @returns {HTMLButtonElement}\n   */ const createPreview = (props)=>{\n        const { author: authorId, id, image, title } = props;\n        const element = document.createElement(\"button\");\n        element.classList = (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview);\n        element.setAttribute(\"data-preview\", id);\n        element.innerHTML = /* html */ \"\\n        <img\\n            class=\" + (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview__image) + \"\\n            src=\" + image + \"\\n        />\\n        \\n        <div className=\" + (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview__info) + \">\\n            <h3 className=\" + (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview__title) + \">\".concat(title, \"</h3>\\n            <div className=\") + (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview__author) + \">\".concat(authors[authorId], \"</div>\\n        </div>\\n    \");\n        return element;\n    };\n    const createPreviewsFragment = (source, range)=>{\n        if (!source || !Array.isArray(source)) throw new Error(\"Source required\");\n        if (!range || range.length < 2) throw new Error(\"Range must be an array with two numbers\");\n        const fragment = document.createDocumentFragment();\n        const [start, end] = range;\n        /**\n     * @type {Book[]}\n     */ const extracted = source.slice(start, end);\n        for (const { author, image, title, id } of extracted){\n            const preview = createPreview({\n                author,\n                id,\n                image,\n                title\n            });\n            fragment.appendChild(preview);\n        }\n        return fragment;\n    };\n    /**\n   * @returns {HTMLElement}\n   */ const createAuthorsFragment = ()=>{\n        const fragment = document.createDocumentFragment();\n        const option = createOption(\"any\", \"All Authors\");\n        fragment.appendChild(option);\n        for (const [id, name] of Object.entries(authors)){\n            const option = createOption(id, name);\n            fragment.appendChild(option);\n        }\n        return fragment;\n    };\n    /**\n   *\n   * @returns\n   */ const createGenresFragment = ()=>{\n        const fragment = document.createDocumentFragment();\n        const option = createOption(\"any\", \"All Genres\");\n        fragment.appendChild(option);\n        for (const [id, name] of Object.entries(genres)){\n            const option = createOption(id, name);\n            fragment.appendChild(option);\n        }\n        return fragment;\n    };\n    /**\n   * @param {string} value\n   * @param {string} text\n   * @returns {HTMLElement}\n   */ const createOption = (value, text)=>{\n        const element = document.createElement(\"option\");\n        element.value = value;\n        element.innerText = text;\n        return element;\n    };\n    /**\n   *\n   * @returns {boolean}\n   */ const isDarkMode = ()=>window.matchMedia && window.matchMedia(\"(prefers-color-scheme: dark)\").matches;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        initialise();\n    }, []);\n    /**\n   * @param {'day' | 'night'} theme\n   */ const setTheme = (theme)=>{\n        document.documentElement.style.setProperty(\"--color-dark\", css[theme].dark);\n        document.documentElement.style.setProperty(\"--color-light\", css[theme].light);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().list),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().list__items),\n                onClick: actions.list.open,\n                \"data-list-items\": true\n            }, void 0, false, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookDisplay/bookDisplay.js\",\n                lineNumber: 248,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().list__message),\n                \"data-list-message\": true,\n                children: \"No results found. Your filters might be too narrow.\"\n            }, void 0, false, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookDisplay/bookDisplay.js\",\n                lineNumber: 253,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().list__button),\n                onClick: actions.list.increase,\n                \"data-list-button\": true\n            }, void 0, false, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookDisplay/bookDisplay.js\",\n                lineNumber: 256,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookDisplay/bookDisplay.js\",\n        lineNumber: 247,\n        columnNumber: 5\n    }, this);\n}\n_s(BookDisplay, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = BookDisplay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookDisplay);\nvar _c;\n$RefreshReg$(_c, \"BookDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jvb2tDb21wb25lbnRzL2Jvb2tEaXNwbGF5L2Jvb2tEaXNwbGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNOLENBQUMsNEJBQTRCO0FBQ25DO0FBQ0s7QUFFdkMsU0FBU0ksWUFBWUMsS0FBSzs7SUFDeEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRSxHQUFHTDtJQUN6RCxJQUFJLEVBQUVNLElBQUksRUFBRUMsT0FBTyxFQUFFLEdBQUdQO0lBRXhCLE1BQU1RLFVBQVU7UUFDZEMsTUFBTTtZQUNKQyxpQkFBaUI7Z0JBQ2YsTUFBTUMsVUFBVUosUUFBUUssTUFBTSxHQUFHTixPQUFPRjtnQkFDeEMsTUFBTVMsZUFBZUYsVUFBVTtnQkFFL0IsTUFBTUcsWUFBWUQsZUFBZUYsVUFBVTtnQkFFM0NJLE9BQU8sZUFBZUMsUUFBUSxHQUFHLENBQUNIO2dCQUNsQ0UsT0FBTyxlQUFlRSxTQUFTLEdBQUcsUUFBUSxHQUFHLDZGQUVPLE9BQVZILFdBQVU7WUFFdEQ7WUFFQUksVUFBVTtnQkFDUixNQUFNQyxVQUFVYixPQUFPO2dCQUN2QixNQUFNYyxRQUFRLENBQUNELFVBQVUsS0FBS2Y7Z0JBQzlCLE1BQU1pQixNQUFNRixVQUFVZjtnQkFFdEJOLHlDQUFHQSxDQUFDVyxJQUFJLENBQ0xhLEtBQUssR0FDTEMsV0FBVyxDQUFDQyx1QkFBdUJqQixTQUFTO29CQUFDYTtvQkFBT0M7aUJBQUk7Z0JBQzNEYixRQUFRQyxJQUFJLENBQUNDLGVBQWU7Z0JBQzVCSixPQUFPYTtZQUNUO1lBRUFNLFVBQVUsQ0FBQ0M7Z0JBQ1RuQixVQUFVbUI7Z0JBQ1ZwQixPQUFPO2dCQUVQLElBQUlvQixRQUFRZCxNQUFNLEdBQUcsR0FBRztvQkFDdEJHLE9BQU8sZ0JBQWdCWSxTQUFTLENBQUNDLEdBQUcsQ0FBQztnQkFDdkMsT0FBTztvQkFDTGIsT0FBTyxnQkFBZ0JZLFNB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LE9BQU90QjtJQUNUO0lBRUE7OztHQUdDLEdBQ0QsTUFBTVYsYUFBYSxJQUNqQjVCLE9BQU82RCxVQUFVLElBQ2pCN0QsT0FBTzZELFVBQVUsQ0FBQyxnQ0FBZ0NyRixPQUFPO0lBRTNEVixnREFBU0EsQ0FBQztRQUNSdUQ7SUFDRixHQUFHLEVBQUU7SUFFTDs7R0FFQyxHQUNELE1BQU1RLFdBQVcsQ0FBQ0g7UUFDaEJhLFNBQVN1QixlQUFlLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGdCQUFnQmhELEdBQUcsQ0FBQ1UsTUFBTSxDQUFDUixJQUFJO1FBQzFFcUIsU0FBU3VCLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQ3hDLGlCQUNBaEQsR0FBRyxDQUFDVSxNQUFNLENBQUNQLEtBQUs7SUFFcEI7SUFFQSxxQkFDRSw4REFBQzhDO1FBQUtDLFdBQVd0RyxxRUFBVzs7MEJBQzFCLDhEQUFDdUc7Z0JBQ0NELFdBQVd0Ryw0RUFBa0I7Z0JBQzdCeUcsU0FBUzVGLFFBQVFDLElBQUksQ0FBQzJCLElBQUk7Z0JBQzFCaUUsaUJBQWU7Ozs7OzswQkFFakIsOERBQUNIO2dCQUFJRCxXQUFXdEcsOEVBQW9CO2dCQUFFNEcsbUJBQWlCOzBCQUFDOzs7Ozs7MEJBR3hELDhEQUFDQztnQkFDQ1AsV0FBV3RHLDZFQUFtQjtnQkFDOUJ5RyxTQUFTNUYsUUFBUUMsSUFBSSxDQUFDUyxRQUFRO2dCQUM5QndGLGtCQUFnQjs7Ozs7Ozs7Ozs7O0FBSXhCO0dBalFTM0c7O1FBZ0VRSCxrREFBU0E7OztLQWhFakJHO0FBbVFULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9va0NvbXBvbmVudHMvYm9va0Rpc3BsYXkvYm9va0Rpc3BsYXkuanM/ZWZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Jvb2tEaXNwbGF5Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBJbXBvcnQgdGhlIHVzZVJvdXRlciBob29rXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9kb20vZG9tXCI7XG5cbmZ1bmN0aW9uIEJvb2tEaXNwbGF5KHByb3BzKSB7XG4gIGNvbnN0IHsgQm9vaywgYm9va3MsIGF1dGhvcnMsIEJPT0tTX1BFUl9QQUdFLCBnZW5yZXMgfSA9IHByb3BzO1xuICBsZXQgeyBwYWdlLCBtYXRjaGVzIH0gPSBwcm9wcztcblxuICBjb25zdCBhY3Rpb25zID0ge1xuICAgIGxpc3Q6IHtcbiAgICAgIHVwZGF0ZVJlbWFpbmluZzogKCkgPT4ge1xuICAgICAgICBjb25zdCBpbml0aWFsID0gbWF0Y2hlcy5sZW5ndGggLSBwYWdlICogQk9PS1NfUEVSX1BBR0U7XG4gICAgICAgIGNvbnN0IGhhc1JlbWFpbmluZyA9IGluaXRpYWwgPiAwO1xuXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IGhhc1JlbWFpbmluZyA/IGluaXRpYWwgOiAwO1xuXG4gICAgICAgIGdldERPTShcImxpc3QtYnV0dG9uXCIpLmRpc2FibGVkID0gIWhhc1JlbWFpbmluZztcbiAgICAgICAgZ2V0RE9NKFwibGlzdC1idXR0b25cIikuaW5uZXJIVE1MID0gLyogaHRtbCAqLyBgXG4gICAgICAgICAgICAgICAgPHNwYW4+U2hvdyBtb3JlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdF9fcmVtYWluaW5nXCI+ICgke3JlbWFpbmluZ30pPC9zcGFuPlxuICAgICAgICAgICAgYDtcbiAgICAgIH0sXG5cbiAgICAgIGluY3JlYXNlOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhZ2UgPSBwYWdlICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAobmV3UGFnZSAtIDEpICogQk9PS1NfUEVSX1BBR0U7XG4gICAgICAgIGNvbnN0IGVuZCA9IG5ld1BhZ2UgKiBCT09LU19QRVJfUEFHRTtcblxuICAgICAgICBET00ubGlzdFxuICAgICAgICAgIC5pdGVtcygpXG4gICAgICAgICAgLmFwcGVuZENoaWxkKGNyZWF0ZVByZXZpZXdzRnJhZ21lbnQobWF0Y2hlcywgW3N0YXJ0LCBlbmRdKSk7XG4gICAgICAgIGFjdGlvbnMubGlzdC51cGRhdGVSZW1haW5pbmcoKTtcbiAgICAgICAgcGFnZSA9IG5ld1BhZ2U7XG4gICAgICB9LFxuXG4gICAgICByZWNyZWF0ZTogKGRpc3BsYXkpID0+IHtcbiAgICAgICAgbWF0Y2hlcyA9IGRpc3BsYXk7XG4gICAgICAgIHBhZ2UgPSAxO1xuXG4gICAgICAgIGlmIChkaXNwbGF5Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICBnZXRET00oXCJsaXN0LW1lc3NhZ2VcIikuY2xhc3NMaXN0LmFkZChcImxpc3RfX21lc3NhZ2Vfc2hvd1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnZXRET00oXCJsaXN0LW1lc3NhZ2VcIikuY2xhc3NMaXN0LnJlbW92ZShcImxpc3RfX21lc3NhZ2Vfc2hvd1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldERPTShcImxpc3QtaXRlbXNcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29uc3QgZnJhZ21lbnRzID0gY3JlYXRlUHJldmlld3NGcmFnbWVudChkaXNwbGF5LCBbMCwgMzZdKTtcbiAgICAgICAgZ2V0RE9NKFwibGlzdC1pdGVtc1wiKS5hcHBlbmRDaGlsZChmcmFnbWVudHMpO1xuICAgICAgICBhY3Rpb25zLmxpc3QudXBkYXRlUmVtYWluaW5nKCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICB9LFxuXG4gICAgICBjbG9zZTogKCkgPT4ge1xuICAgICAgICBnZXRET00oXCJsaXN0LWFjdGl2ZVwiKS5vcGVuID0gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBvcGVuOiAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlld0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJldmlldztcblxuICAgICAgICBpZiAocHJldmlld0lkKSB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gZ2V0Qm9va0J5SWQocHJldmlld0lkKTtcbiAgICAgICAgICAvLyBJbnN0ZWFkIG9mIG9wZW5pbmcgYSBwcmV2aWV3LCBuYXZpZ2F0ZSB0byB0aGUgZHluYW1pYyByb3V0ZVxuICAgICAgICAgIHJvdXRlci5wdXNoKGAvcHJldmlldy8ke2FjdGl2ZS5pZH1gKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGNzcyA9IHtcbiAgICBkYXk6IHtcbiAgICAgIGRhcms6IFwiMTAsIDEwLCAyMFwiLFxuICAgICAgbGlnaHQ6IFwiMjU1LCAyNTUsIDI1NVwiLFxuICAgIH0sXG4gICAgbmlnaHQ6IHtcbiAgICAgIGRhcms6IFwiMjU1LCAyNTUsIDI1NVwiLFxuICAgICAgbGlnaHQ6IFwiMTAsIDEwLCAyMFwiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbGlzZSA9ICgpID0+IHtcbiAgICBET00ubGlzdFxuICAgICAgLml0ZW1zKClcbiAgICAgIC5hcHBlbmRDaGlsZChjcmVhdGVQcmV2aWV3c0ZyYWdtZW50KGJvb2tzLCBbMCwgQk9PS1NfUEVSX1BBR0VdKSk7XG4gICAgRE9NLnNlYXJjaC5nZW5yZXMoKS5hcHBlbmRDaGlsZChjcmVhdGVHZW5yZXNGcmFnbWVudChnZW5yZXMpKTtcbiAgICBET00uc2VhcmNoLmF1dGhvcnMoKS5hcHBlbmRDaGlsZChjcmVhdGVBdXRob3JzRnJhZ21lbnQoYXV0aG9ycykpO1xuICAgIERPTS5zZXR0aW5ncy50aGVtZSgpLnZhbHVlID0gaXNEYXJrTW9kZSgpID8gXCJuaWdodFwiIDogXCJkYXlcIjtcbiAgICBzZXRUaGVtZShpc0RhcmtNb2RlKCkgPyBcIm5pZ2h0XCIgOiBcImRheVwiKTtcblxuICAgIGNvbnN0IHJlbWFpbmluZyA9IGJvb2tzLmxlbmd0aCAtIEJPT0tTX1BFUl9QQUdFO1xuICAgIGdldERPTShcImxpc3QtYnV0dG9uXCIpLmlubmVyVGV4dCA9IGBTaG93IG1vcmUgKCR7cmVtYWluaW5nfSlgO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICogQHJldHVybnMge0Jvb2t9XG4gICAqL1xuICBjb25zdCBnZXRCb29rQnlJZCA9IChpZCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgZm9yIChjb25zdCBzaW5nbGVCb29rIG9mIGJvb2tzKSB7XG4gICAgICBpZiAocmVzdWx0KSBicmVhaztcbiAgICAgIGlmIChzaW5nbGVCb29rLmlkID09PSBpZCkgcmVzdWx0ID0gc2luZ2xlQm9vaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiAuLi5cbiAgICpcbiAgICogQHBhcmFtIHtCb29rfSBwcm9wc1xuICAgKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnR9XG4gICAqL1xuICBjb25zdCBjcmVhdGVQcmV2aWV3ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhdXRob3I6IGF1dGhvcklkLCBpZCwgaW1hZ2UsIHRpdGxlIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0ID0gc3R5bGVzLnByZXZpZXc7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByZXZpZXdcIiwgaWQpO1xuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgLyogaHRtbCAqLyBgXG4gICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzPWAgK1xuICAgICAgc3R5bGVzLnByZXZpZXdfX2ltYWdlICtcbiAgICAgIGBcbiAgICAgICAgICAgIHNyYz1gICtcbiAgICAgIGltYWdlICtcbiAgICAgIGBcbiAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPWAgK1xuICAgICAgc3R5bGVzLnByZXZpZXdfX2luZm8gK1xuICAgICAgYD5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9YCArXG4gICAgICBzdHlsZXMucHJldmlld19fdGl0bGUgK1xuICAgICAgYD4ke3RpdGxlfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1gICtcbiAgICAgIHN0eWxlcy5wcmV2aWV3X19hdXRob3IgK1xuICAgICAgYD4ke2F1dGhvcnNbYXV0aG9ySWRdfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJldmlld3NGcmFnbWVudCA9IChzb3VyY2UsIHJhbmdlKSA9PiB7XG4gICAgaWYgKCFzb3VyY2UgfHwgIUFycmF5LmlzQXJyYXkoc291cmNlKSkgdGhyb3cgbmV3IEVycm9yKFwiU291cmNlIHJlcXVpcmVkXCIpO1xuICAgIGlmICghcmFuZ2UgfHwgcmFuZ2UubGVuZ3RoIDwgMilcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJhbmdlIG11c3QgYmUgYW4gYXJyYXkgd2l0aCB0d28gbnVtYmVyc1wiKTtcblxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gcmFuZ2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Qm9va1tdfVxuICAgICAqL1xuICAgIGNvbnN0IGV4dHJhY3RlZCA9IHNvdXJjZS5zbGljZShzdGFydCwgZW5kKTtcblxuICAgIGZvciAoY29uc3QgeyBhdXRob3IsIGltYWdlLCB0aXRsZSwgaWQgfSBvZiBleHRyYWN0ZWQpIHtcbiAgICAgIGNvbnN0IHByZXZpZXcgPSBjcmVhdGVQcmV2aWV3KHtcbiAgICAgICAgYXV0aG9yLFxuICAgICAgICBpZCxcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIHRpdGxlLFxuICAgICAgfSk7XG5cbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHByZXZpZXcpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgY29uc3QgY3JlYXRlQXV0aG9yc0ZyYWdtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZU9wdGlvbihcImFueVwiLCBcIkFsbCBBdXRob3JzXCIpO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICBmb3IgKGNvbnN0IFtpZCwgbmFtZV0gb2YgT2JqZWN0LmVudHJpZXMoYXV0aG9ycykpIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZU9wdGlvbihpZCwgbmFtZSk7XG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfTtcblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnNcbiAgICovXG4gIGNvbnN0IGNyZWF0ZUdlbnJlc0ZyYWdtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZU9wdGlvbihcImFueVwiLCBcIkFsbCBHZW5yZXNcIik7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgIGZvciAoY29uc3QgW2lkLCBuYW1lXSBvZiBPYmplY3QuZW50cmllcyhnZW5yZXMpKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVPcHRpb24oaWQsIG5hbWUpO1xuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBjb25zdCBjcmVhdGVPcHRpb24gPSAodmFsdWUsIHRleHQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzRGFya01vZGUgPSAoKSA9PlxuICAgIHdpbmRvdy5tYXRjaE1lZGlhICYmXG4gICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXM7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0aWFsaXNlKCk7XG4gIH0sIFtdKTtcblxuICAvKipcbiAgICogQHBhcmFtIHsnZGF5JyB8ICduaWdodCd9IHRoZW1lXG4gICAqL1xuICBjb25zdCBzZXRUaGVtZSA9ICh0aGVtZSkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sb3ItZGFya1wiLCBjc3NbdGhlbWVdLmRhcmspO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS1jb2xvci1saWdodFwiLFxuICAgICAgY3NzW3RoZW1lXS5saWdodFxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9faXRlbXN9XG4gICAgICAgIG9uQ2xpY2s9e2FjdGlvbnMubGlzdC5vcGVufVxuICAgICAgICBkYXRhLWxpc3QtaXRlbXNcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9fbWVzc2FnZX0gZGF0YS1saXN0LW1lc3NhZ2U+XG4gICAgICAgIE5vIHJlc3VsdHMgZm91bmQuIFlvdXIgZmlsdGVycyBtaWdodCBiZSB0b28gbmFycm93LlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfX2J1dHRvbn1cbiAgICAgICAgb25DbGljaz17YWN0aW9ucy5saXN0LmluY3JlYXNlfVxuICAgICAgICBkYXRhLWxpc3QtYnV0dG9uXG4gICAgICA+PC9idXR0b24+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rRGlzcGxheTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJET00iLCJCb29rRGlzcGxheSIsInByb3BzIiwiQm9vayIsImJvb2tzIiwiYXV0aG9ycyIsIkJPT0tTX1BFUl9QQUdFIiwiZ2VucmVzIiwicGFnZSIsIm1hdGNoZXMiLCJhY3Rpb25zIiwibGlzdCIsInVwZGF0ZVJlbWFpbmluZyIsImluaXRpYWwiLCJsZW5ndGgiLCJoYXNSZW1haW5pbmciLCJyZW1haW5pbmciLCJnZXRET00iLCJkaXNhYmxlZCIsImlubmVySFRNTCIsImluY3JlYXNlIiwibmV3UGFnZSIsInN0YXJ0IiwiZW5kIiwiaXRlbXMiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVByZXZpZXdzRnJhZ21lbnQiLCJyZWNyZWF0ZSIsImRpc3BsYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJmcmFnbWVudHMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY2xvc2UiLCJvcGVuIiwiZXZlbnQiLCJwcmV2aWV3SWQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwicHJldmlldyIsImFjdGl2ZSIsImdldEJvb2tCeUlkIiwicm91dGVyIiwicHVzaCIsImlkIiwiY3NzIiwiZGF5IiwiZGFyayIsImxpZ2h0IiwibmlnaHQiLCJpbml0aWFsaXNlIiwic2VhcmNoIiwiY3JlYXRlR2VucmVzRnJhZ21lbnQiLCJjcmVhdGVBdXRob3JzRnJhZ21lbnQiLCJzZXR0aW5ncyIsInRoZW1lIiwidmFsdWUiLCJpc0RhcmtNb2RlIiwic2V0VGhlbWUiLCJpbm5lclRleHQiLCJyZXN1bHQiLCJzaW5nbGVCb29rIiwiY3JlYXRlUHJldmlldyIsImF1dGhvciIsImF1dGhvcklkIiwiaW1hZ2UiLCJ0aXRsZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJwcmV2aWV3X19pbWFnZSIsInByZXZpZXdfX2luZm8iLCJwcmV2aWV3X190aXRsZSIsInByZXZpZXdfX2F1dGhvciIsInNvdXJjZSIsInJhbmdlIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJleHRyYWN0ZWQiLCJzbGljZSIsIm9wdGlvbiIsImNyZWF0ZU9wdGlvbiIsIm5hbWUiLCJPYmplY3QiLCJlbnRyaWVzIiwidGV4dCIsIm1hdGNoTWVkaWEiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImxpc3RfX2l0ZW1zIiwib25DbGljayIsImRhdGEtbGlzdC1pdGVtcyIsImxpc3RfX21lc3NhZ2UiLCJkYXRhLWxpc3QtbWVzc2FnZSIsImJ1dHRvbiIsImxpc3RfX2J1dHRvbiIsImRhdGEtbGlzdC1idXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/bookComponents/bookDisplay/bookDisplay.js\n"));

/***/ })

});