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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookDisplay.module.css */ \"./components/bookComponents/bookDisplay/bookDisplay.module.css\");\n/* harmony import */ var _bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dom/dom */ \"./dom/dom.js\");\n\nvar _s = $RefreshSig$();\n\n // Import the useRouter hook\n\n\nfunction BookDisplay(props) {\n    _s();\n    const { Book, books, authors, BOOKS_PER_PAGE, genres } = props;\n    let { page, matches } = props;\n    const actions = {\n        list: {\n            updateRemaining: ()=>{\n                const initial = matches.length - page * BOOKS_PER_PAGE;\n                const hasRemaining = initial > 0;\n                const remaining = hasRemaining ? initial : 0;\n                _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.list.button().disabled = !hasRemaining;\n                _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.list.button().innerHTML = /* html */ '\\n                <span>Show more</span>\\n                <span class=\"list__remaining\"> ('.concat(remaining, \")</span>\\n            \");\n            },\n            increase: ()=>{\n                const newPage = page + 1;\n                const start = (newPage - 1) * BOOKS_PER_PAGE;\n                const end = newPage * BOOKS_PER_PAGE;\n                _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.list.items().appendChild(createPreviewsFragment(matches, [\n                    start,\n                    end\n                ]));\n                actions.list.updateRemaining();\n                page = newPage;\n            },\n            recreate: (display)=>{\n                matches = display;\n                page = 1;\n                if (display.length < 1) {\n                    _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.list.message().classList.add(\"list__message_show\");\n                } else {\n                    _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.list.message().classList.remove(\"list__message_show\");\n                }\n                getDOM(\"list-items\").innerHTML = \"\";\n                const fragments = createPreviewsFragment(display, [\n                    0,\n                    36\n                ]);\n                getDOM(\"list-items\").appendChild(fragments);\n                actions.list.updateRemaining();\n                window.scrollTo({\n                    top: 0,\n                    behavior: \"smooth\"\n                });\n            },\n            close: ()=>{\n                _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.list.active().open = false;\n            },\n            open: (event)=>{\n                const previewId = event.target.dataset.preview;\n                if (previewId) {\n                    const active = getBookById(previewId);\n                    // Instead of opening a preview, navigate to the dynamic route\n                    router.push(\"/preview/\".concat(active.id));\n                }\n            }\n        }\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const css = {\n        day: {\n            dark: \"10, 10, 20\",\n            light: \"255, 255, 255\"\n        },\n        night: {\n            dark: \"255, 255, 255\",\n            light: \"10, 10, 20\"\n        }\n    };\n    const initialise = ()=>{\n        _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.list.items().appendChild(createPreviewsFragment(books, [\n            0,\n            BOOKS_PER_PAGE\n        ]));\n        _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.search.genres().appendChild(createGenresFragment(genres));\n        _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.search.authors().appendChild(createAuthorsFragment(authors));\n        _dom_dom__WEBPACK_IMPORTED_MODULE_3__.DOM.settings.theme().value = isDarkMode() ? \"night\" : \"day\";\n        setTheme(isDarkMode() ? \"night\" : \"day\");\n        const remaining = books.length - BOOKS_PER_PAGE;\n        getDOM(\"list-button\").innerText = \"Show more (\".concat(remaining, \")\");\n    };\n    /**\n   * @param {string} id\n   * @returns {Book}\n   */ const getBookById = (id)=>{\n        let result = null;\n        for (const singleBook of books){\n            if (result) break;\n            if (singleBook.id === id) result = singleBook;\n        }\n        return result;\n    };\n    /**\n   * ...\n   *\n   * @param {Book} props\n   * @returns {HTMLButtonElement}\n   */ const createPreview = (props)=>{\n        const { author: authorId, id, image, title } = props;\n        const element = document.createElement(\"button\");\n        element.classList = (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview);\n        element.setAttribute(\"data-preview\", id);\n        element.innerHTML = /* html */ \"\\n        <img\\n            class=\" + (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview__image) + \"\\n            src=\" + image + \"\\n        />\\n        \\n        <div className=\" + (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview__info) + \">\\n            <h3 className=\" + (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview__title) + \">\".concat(title, \"</h3>\\n            <div className=\") + (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview__author) + \">\".concat(authors[authorId], \"</div>\\n        </div>\\n    \");\n        return element;\n    };\n    const createPreviewsFragment = (source, range)=>{\n        if (!source || !Array.isArray(source)) throw new Error(\"Source required\");\n        if (!range || range.length < 2) throw new Error(\"Range must be an array with two numbers\");\n        const fragment = document.createDocumentFragment();\n        const [start, end] = range;\n        /**\n     * @type {Book[]}\n     */ const extracted = source.slice(start, end);\n        for (const { author, image, title, id } of extracted){\n            const preview = createPreview({\n                author,\n                id,\n                image,\n                title\n            });\n            fragment.appendChild(preview);\n        }\n        return fragment;\n    };\n    /**\n   * @returns {HTMLElement}\n   */ const createAuthorsFragment = ()=>{\n        const fragment = document.createDocumentFragment();\n        const option = createOption(\"any\", \"All Authors\");\n        fragment.appendChild(option);\n        for (const [id, name] of Object.entries(authors)){\n            const option = createOption(id, name);\n            fragment.appendChild(option);\n        }\n        return fragment;\n    };\n    /**\n   *\n   * @returns\n   */ const createGenresFragment = ()=>{\n        const fragment = document.createDocumentFragment();\n        const option = createOption(\"any\", \"All Genres\");\n        fragment.appendChild(option);\n        for (const [id, name] of Object.entries(genres)){\n            const option = createOption(id, name);\n            fragment.appendChild(option);\n        }\n        return fragment;\n    };\n    /**\n   * @param {string} value\n   * @param {string} text\n   * @returns {HTMLElement}\n   */ const createOption = (value, text)=>{\n        const element = document.createElement(\"option\");\n        element.value = value;\n        element.innerText = text;\n        return element;\n    };\n    /**\n   *\n   * @returns {boolean}\n   */ const isDarkMode = ()=>window.matchMedia && window.matchMedia(\"(prefers-color-scheme: dark)\").matches;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        initialise();\n    }, []);\n    /**\n   * @param {'day' | 'night'} theme\n   */ const setTheme = (theme)=>{\n        document.documentElement.style.setProperty(\"--color-dark\", css[theme].dark);\n        document.documentElement.style.setProperty(\"--color-light\", css[theme].light);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().list),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().list__items),\n                onClick: actions.list.open,\n                \"data-list-items\": true\n            }, void 0, false, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookDisplay/bookDisplay.js\",\n                lineNumber: 248,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().list__message),\n                \"data-list-message\": true,\n                children: \"No results found. Your filters might be too narrow.\"\n            }, void 0, false, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookDisplay/bookDisplay.js\",\n                lineNumber: 253,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_4___default().list__button),\n                onClick: actions.list.increase,\n                \"data-list-button\": true\n            }, void 0, false, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookDisplay/bookDisplay.js\",\n                lineNumber: 256,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookDisplay/bookDisplay.js\",\n        lineNumber: 247,\n        columnNumber: 5\n    }, this);\n}\n_s(BookDisplay, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = BookDisplay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookDisplay);\nvar _c;\n$RefreshReg$(_c, \"BookDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jvb2tDb21wb25lbnRzL2Jvb2tEaXNwbGF5L2Jvb2tEaXNwbGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNOLENBQUMsNEJBQTRCO0FBQ25DO0FBQ0s7QUFFdkMsU0FBU0ksWUFBWUMsS0FBSzs7SUFDeEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRSxHQUFHTDtJQUN6RCxJQUFJLEVBQUVNLElBQUksRUFBRUMsT0FBTyxFQUFFLEdBQUdQO0lBRXhCLE1BQU1RLFVBQVU7UUFDZEMsTUFBTTtZQUNKQyxpQkFBaUI7Z0JBQ2YsTUFBTUMsVUFBVUosUUFBUUssTUFBTSxHQUFHTixPQUFPRjtnQkFDeEMsTUFBTVMsZUFBZUYsVUFBVTtnQkFFL0IsTUFBTUcsWUFBWUQsZUFBZUYsVUFBVTtnQkFFM0NiLHlDQUFHQSxDQUFDVyxJQUFJLENBQUNNLE1BQU0sR0FBR0MsUUFBUSxHQUFHLENBQUNIO2dCQUM5QmYseUNBQUdBLENBQUNXLElBQUksQ0FBQ00sTUFBTSxHQUFHRSxTQUFTLEdBQUcsUUFBUSxHQUFHLDZGQUVXLE9BQVZILFdBQVU7WUFFdEQ7WUFFQUksVUFBVTtnQkFDUixNQUFNQyxVQUFVYixPQUFPO2dCQUN2QixNQUFNYyxRQUFRLENBQUNELFVBQVUsS0FBS2Y7Z0JBQzlCLE1BQU1pQixNQUFNRixVQUFVZjtnQkFFdEJOLHlDQUFHQSxDQUFDVyxJQUFJLENBQ0xhLEtBQUssR0FDTEMsV0FBVyxDQUFDQyx1QkFBdUJqQixTQUFTO29CQUFDYTtvQkFBT0M7aUJBQUk7Z0JBQzNEYixRQUFRQyxJQUFJLENBQUNDLGVBQWU7Z0JBQzVCSixPQUFPYTtZQUNUO1lBRUFNLFVBQVUsQ0FBQ0M7Z0JBQ1RuQixVQUFVbUI7Z0JBQ1ZwQixPQUFPO2dCQUVQLElBQUlvQixRQUFRZCxNQUFNLEdBQUcsR0FBRztvQkFDdEJkLHlDQUFHQSxDQUFDVyxJQUFJLENB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LEdBQ0QsTUFBTUssZUFBZSxDQUFDN0IsT0FBT2lDO1FBQzNCLE1BQU10QixVQUFVQyxTQUFTQyxhQUFhLENBQUM7UUFDdkNGLFFBQVFYLEtBQUssR0FBR0E7UUFDaEJXLFFBQVFSLFNBQVMsR0FBRzhCO1FBQ3BCLE9BQU90QjtJQUNUO0lBRUE7OztHQUdDLEdBQ0QsTUFBTVYsYUFBYSxJQUNqQjVCLE9BQU82RCxVQUFVLElBQ2pCN0QsT0FBTzZELFVBQVUsQ0FBQyxnQ0FBZ0N2RixPQUFPO0lBRTNEVixnREFBU0EsQ0FBQztRQUNSeUQ7SUFDRixHQUFHLEVBQUU7SUFFTDs7R0FFQyxHQUNELE1BQU1RLFdBQVcsQ0FBQ0g7UUFDaEJhLFNBQVN1QixlQUFlLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGdCQUFnQmhELEdBQUcsQ0FBQ1UsTUFBTSxDQUFDUixJQUFJO1FBQzFFcUIsU0FBU3VCLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQ3hDLGlCQUNBaEQsR0FBRyxDQUFDVSxNQUFNLENBQUNQLEtBQUs7SUFFcEI7SUFFQSxxQkFDRSw4REFBQzhDO1FBQUtDLFdBQVd4RyxxRUFBVzs7MEJBQzFCLDhEQUFDeUc7Z0JBQ0NELFdBQVd4Ryw0RUFBa0I7Z0JBQzdCMkcsU0FBUzlGLFFBQVFDLElBQUksQ0FBQzhCLElBQUk7Z0JBQzFCZ0UsaUJBQWU7Ozs7OzswQkFFakIsOERBQUNIO2dCQUFJRCxXQUFXeEcsOEVBQW9CO2dCQUFFOEcsbUJBQWlCOzBCQUFDOzs7Ozs7MEJBR3hELDhEQUFDMUY7Z0JBQ0NvRixXQUFXeEcsNkVBQW1CO2dCQUM5QjJHLFNBQVM5RixRQUFRQyxJQUFJLENBQUNTLFFBQVE7Z0JBQzlCeUYsa0JBQWdCOzs7Ozs7Ozs7Ozs7QUFJeEI7R0FqUVM1Rzs7UUFnRVFILGtEQUFTQTs7O0tBaEVqQkc7QUFtUVQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib29rQ29tcG9uZW50cy9ib29rRGlzcGxheS9ib29rRGlzcGxheS5qcz9lZmZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYm9va0Rpc3BsYXkubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIEltcG9ydCB0aGUgdXNlUm91dGVyIGhvb2tcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uLy4uL2RvbS9kb21cIjtcblxuZnVuY3Rpb24gQm9va0Rpc3BsYXkocHJvcHMpIHtcbiAgY29uc3QgeyBCb29rLCBib29rcywgYXV0aG9ycywgQk9PS1NfUEVSX1BBR0UsIGdlbnJlcyB9ID0gcHJvcHM7XG4gIGxldCB7IHBhZ2UsIG1hdGNoZXMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgbGlzdDoge1xuICAgICAgdXBkYXRlUmVtYWluaW5nOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluaXRpYWwgPSBtYXRjaGVzLmxlbmd0aCAtIHBhZ2UgKiBCT09LU19QRVJfUEFHRTtcbiAgICAgICAgY29uc3QgaGFzUmVtYWluaW5nID0gaW5pdGlhbCA+IDA7XG5cbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gaGFzUmVtYWluaW5nID8gaW5pdGlhbCA6IDA7XG5cbiAgICAgICAgRE9NLmxpc3QuYnV0dG9uKCkuZGlzYWJsZWQgPSAhaGFzUmVtYWluaW5nO1xuICAgICAgICBET00ubGlzdC5idXR0b24oKS5pbm5lckhUTUwgPSAvKiBodG1sICovIGBcbiAgICAgICAgICAgICAgICA8c3Bhbj5TaG93IG1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0X19yZW1haW5pbmdcIj4gKCR7cmVtYWluaW5nfSk8L3NwYW4+XG4gICAgICAgICAgICBgO1xuICAgICAgfSxcblxuICAgICAgaW5jcmVhc2U6ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFnZSA9IHBhZ2UgKyAxO1xuICAgICAgICBjb25zdCBzdGFydCA9IChuZXdQYWdlIC0gMSkgKiBCT09LU19QRVJfUEFHRTtcbiAgICAgICAgY29uc3QgZW5kID0gbmV3UGFnZSAqIEJPT0tTX1BFUl9QQUdFO1xuXG4gICAgICAgIERPTS5saXN0XG4gICAgICAgICAgLml0ZW1zKClcbiAgICAgICAgICAuYXBwZW5kQ2hpbGQoY3JlYXRlUHJldmlld3NGcmFnbWVudChtYXRjaGVzLCBbc3RhcnQsIGVuZF0pKTtcbiAgICAgICAgYWN0aW9ucy5saXN0LnVwZGF0ZVJlbWFpbmluZygpO1xuICAgICAgICBwYWdlID0gbmV3UGFnZTtcbiAgICAgIH0sXG5cbiAgICAgIHJlY3JlYXRlOiAoZGlzcGxheSkgPT4ge1xuICAgICAgICBtYXRjaGVzID0gZGlzcGxheTtcbiAgICAgICAgcGFnZSA9IDE7XG5cbiAgICAgICAgaWYgKGRpc3BsYXkubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIERPTS5saXN0Lm1lc3NhZ2UoKS5jbGFzc0xpc3QuYWRkKFwibGlzdF9fbWVzc2FnZV9zaG93XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIERPTS5saXN0Lm1lc3NhZ2UoKS5jbGFzc0xpc3QucmVtb3ZlKFwibGlzdF9fbWVzc2FnZV9zaG93XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RE9NKFwibGlzdC1pdGVtc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb25zdCBmcmFnbWVudHMgPSBjcmVhdGVQcmV2aWV3c0ZyYWdtZW50KGRpc3BsYXksIFswLCAzNl0pO1xuICAgICAgICBnZXRET00oXCJsaXN0LWl0ZW1zXCIpLmFwcGVuZENoaWxkKGZyYWdtZW50cyk7XG4gICAgICAgIGFjdGlvbnMubGlzdC51cGRhdGVSZW1haW5pbmcoKTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICAgIERPTS5saXN0LmFjdGl2ZSgpLm9wZW4gPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIG9wZW46IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aWV3SWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5wcmV2aWV3O1xuXG4gICAgICAgIGlmIChwcmV2aWV3SWQpIHtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBnZXRCb29rQnlJZChwcmV2aWV3SWQpO1xuICAgICAgICAgIC8vIEluc3RlYWQgb2Ygb3BlbmluZyBhIHByZXZpZXcsIG5hdmlnYXRlIHRvIHRoZSBkeW5hbWljIHJvdXRlXG4gICAgICAgICAgcm91dGVyLnB1c2goYC9wcmV2aWV3LyR7YWN0aXZlLmlkfWApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgY3NzID0ge1xuICAgIGRheToge1xuICAgICAgZGFyazogXCIxMCwgMTAsIDIwXCIsXG4gICAgICBsaWdodDogXCIyNTUsIDI1NSwgMjU1XCIsXG4gICAgfSxcbiAgICBuaWdodDoge1xuICAgICAgZGFyazogXCIyNTUsIDI1NSwgMjU1XCIsXG4gICAgICBsaWdodDogXCIxMCwgMTAsIDIwXCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBpbml0aWFsaXNlID0gKCkgPT4ge1xuICAgIERPTS5saXN0XG4gICAgICAuaXRlbXMoKVxuICAgICAgLmFwcGVuZENoaWxkKGNyZWF0ZVByZXZpZXdzRnJhZ21lbnQoYm9va3MsIFswLCBCT09LU19QRVJfUEFHRV0pKTtcbiAgICBET00uc2VhcmNoLmdlbnJlcygpLmFwcGVuZENoaWxkKGNyZWF0ZUdlbnJlc0ZyYWdtZW50KGdlbnJlcykpO1xuICAgIERPTS5zZWFyY2guYXV0aG9ycygpLmFwcGVuZENoaWxkKGNyZWF0ZUF1dGhvcnNGcmFnbWVudChhdXRob3JzKSk7XG4gICAgRE9NLnNldHRpbmdzLnRoZW1lKCkudmFsdWUgPSBpc0RhcmtNb2RlKCkgPyBcIm5pZ2h0XCIgOiBcImRheVwiO1xuICAgIHNldFRoZW1lKGlzRGFya01vZGUoKSA/IFwibmlnaHRcIiA6IFwiZGF5XCIpO1xuXG4gICAgY29uc3QgcmVtYWluaW5nID0gYm9va3MubGVuZ3RoIC0gQk9PS1NfUEVSX1BBR0U7XG4gICAgZ2V0RE9NKFwibGlzdC1idXR0b25cIikuaW5uZXJUZXh0ID0gYFNob3cgbW9yZSAoJHtyZW1haW5pbmd9KWA7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKiBAcmV0dXJucyB7Qm9va31cbiAgICovXG4gIGNvbnN0IGdldEJvb2tCeUlkID0gKGlkKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICBmb3IgKGNvbnN0IHNpbmdsZUJvb2sgb2YgYm9va3MpIHtcbiAgICAgIGlmIChyZXN1bHQpIGJyZWFrO1xuICAgICAgaWYgKHNpbmdsZUJvb2suaWQgPT09IGlkKSByZXN1bHQgPSBzaW5nbGVCb29rO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIC4uLlxuICAgKlxuICAgKiBAcGFyYW0ge0Jvb2t9IHByb3BzXG4gICAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudH1cbiAgICovXG4gIGNvbnN0IGNyZWF0ZVByZXZpZXcgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGF1dGhvcjogYXV0aG9ySWQsIGlkLCBpbWFnZSwgdGl0bGUgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QgPSBzdHlsZXMucHJldmlldztcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcHJldmlld1wiLCBpZCk7XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAvKiBodG1sICovIGBcbiAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3M9YCArXG4gICAgICBzdHlsZXMucHJldmlld19faW1hZ2UgK1xuICAgICAgYFxuICAgICAgICAgICAgc3JjPWAgK1xuICAgICAgaW1hZ2UgK1xuICAgICAgYFxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9YCArXG4gICAgICBzdHlsZXMucHJldmlld19faW5mbyArXG4gICAgICBgPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1gICtcbiAgICAgIHN0eWxlcy5wcmV2aWV3X190aXRsZSArXG4gICAgICBgPiR7dGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPWAgK1xuICAgICAgc3R5bGVzLnByZXZpZXdfX2F1dGhvciArXG4gICAgICBgPiR7YXV0aG9yc1thdXRob3JJZF19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcmV2aWV3c0ZyYWdtZW50ID0gKHNvdXJjZSwgcmFuZ2UpID0+IHtcbiAgICBpZiAoIXNvdXJjZSB8fCAhQXJyYXkuaXNBcnJheShzb3VyY2UpKSB0aHJvdyBuZXcgRXJyb3IoXCJTb3VyY2UgcmVxdWlyZWRcIik7XG4gICAgaWYgKCFyYW5nZSB8fCByYW5nZS5sZW5ndGggPCAyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmFuZ2UgbXVzdCBiZSBhbiBhcnJheSB3aXRoIHR3byBudW1iZXJzXCIpO1xuXG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSByYW5nZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCb29rW119XG4gICAgICovXG4gICAgY29uc3QgZXh0cmFjdGVkID0gc291cmNlLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gICAgZm9yIChjb25zdCB7IGF1dGhvciwgaW1hZ2UsIHRpdGxlLCBpZCB9IG9mIGV4dHJhY3RlZCkge1xuICAgICAgY29uc3QgcHJldmlldyA9IGNyZWF0ZVByZXZpZXcoe1xuICAgICAgICBhdXRob3IsXG4gICAgICAgIGlkLFxuICAgICAgICBpbWFnZSxcbiAgICAgICAgdGl0bGUsXG4gICAgICB9KTtcblxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocHJldmlldyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBjb25zdCBjcmVhdGVBdXRob3JzRnJhZ21lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlT3B0aW9uKFwiYW55XCIsIFwiQWxsIEF1dGhvcnNcIik7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgIGZvciAoY29uc3QgW2lkLCBuYW1lXSBvZiBPYmplY3QuZW50cmllcyhhdXRob3JzKSkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlT3B0aW9uKGlkLCBuYW1lKTtcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgY29uc3QgY3JlYXRlR2VucmVzRnJhZ21lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlT3B0aW9uKFwiYW55XCIsIFwiQWxsIEdlbnJlc1wiKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgZm9yIChjb25zdCBbaWQsIG5hbWVdIG9mIE9iamVjdC5lbnRyaWVzKGdlbnJlcykpIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZU9wdGlvbihpZCwgbmFtZSk7XG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGNvbnN0IGNyZWF0ZU9wdGlvbiA9ICh2YWx1ZSwgdGV4dCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNEYXJrTW9kZSA9ICgpID0+XG4gICAgd2luZG93Lm1hdGNoTWVkaWEgJiZcbiAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXRpYWxpc2UoKTtcbiAgfSwgW10pO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0geydkYXknIHwgJ25pZ2h0J30gdGhlbWVcbiAgICovXG4gIGNvbnN0IHNldFRoZW1lID0gKHRoZW1lKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci1kYXJrXCIsIGNzc1t0aGVtZV0uZGFyayk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLWNvbG9yLWxpZ2h0XCIsXG4gICAgICBjc3NbdGhlbWVdLmxpZ2h0XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saXN0X19pdGVtc31cbiAgICAgICAgb25DbGljaz17YWN0aW9ucy5saXN0Lm9wZW59XG4gICAgICAgIGRhdGEtbGlzdC1pdGVtc1xuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0X19tZXNzYWdlfSBkYXRhLWxpc3QtbWVzc2FnZT5cbiAgICAgICAgTm8gcmVzdWx0cyBmb3VuZC4gWW91ciBmaWx0ZXJzIG1pZ2h0IGJlIHRvbyBuYXJyb3cuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9fYnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXthY3Rpb25zLmxpc3QuaW5jcmVhc2V9XG4gICAgICAgIGRhdGEtbGlzdC1idXR0b25cbiAgICAgID48L2J1dHRvbj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tEaXNwbGF5O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkRPTSIsIkJvb2tEaXNwbGF5IiwicHJvcHMiLCJCb29rIiwiYm9va3MiLCJhdXRob3JzIiwiQk9PS1NfUEVSX1BBR0UiLCJnZW5yZXMiLCJwYWdlIiwibWF0Y2hlcyIsImFjdGlvbnMiLCJsaXN0IiwidXBkYXRlUmVtYWluaW5nIiwiaW5pdGlhbCIsImxlbmd0aCIsImhhc1JlbWFpbmluZyIsInJlbWFpbmluZyIsImJ1dHRvbiIsImRpc2FibGVkIiwiaW5uZXJIVE1MIiwiaW5jcmVhc2UiLCJuZXdQYWdlIiwic3RhcnQiLCJlbmQiLCJpdGVtcyIsImFwcGVuZENoaWxkIiwiY3JlYXRlUHJldmlld3NGcmFnbWVudCIsInJlY3JlYXRlIiwiZGlzcGxheSIsIm1lc3NhZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJnZXRET00iLCJmcmFnbWVudHMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY2xvc2UiLCJhY3RpdmUiLCJvcGVuIiwiZXZlbnQiLCJwcmV2aWV3SWQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwicHJldmlldyIsImdldEJvb2tCeUlkIiwicm91dGVyIiwicHVzaCIsImlkIiwiY3NzIiwiZGF5IiwiZGFyayIsImxpZ2h0IiwibmlnaHQiLCJpbml0aWFsaXNlIiwic2VhcmNoIiwiY3JlYXRlR2VucmVzRnJhZ21lbnQiLCJjcmVhdGVBdXRob3JzRnJhZ21lbnQiLCJzZXR0aW5ncyIsInRoZW1lIiwidmFsdWUiLCJpc0RhcmtNb2RlIiwic2V0VGhlbWUiLCJpbm5lclRleHQiLCJyZXN1bHQiLCJzaW5nbGVCb29rIiwiY3JlYXRlUHJldmlldyIsImF1dGhvciIsImF1dGhvcklkIiwiaW1hZ2UiLCJ0aXRsZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJwcmV2aWV3X19pbWFnZSIsInByZXZpZXdfX2luZm8iLCJwcmV2aWV3X190aXRsZSIsInByZXZpZXdfX2F1dGhvciIsInNvdXJjZSIsInJhbmdlIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJleHRyYWN0ZWQiLCJzbGljZSIsIm9wdGlvbiIsImNyZWF0ZU9wdGlvbiIsIm5hbWUiLCJPYmplY3QiLCJlbnRyaWVzIiwidGV4dCIsIm1hdGNoTWVkaWEiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImxpc3RfX2l0ZW1zIiwib25DbGljayIsImRhdGEtbGlzdC1pdGVtcyIsImxpc3RfX21lc3NhZ2UiLCJkYXRhLWxpc3QtbWVzc2FnZSIsImxpc3RfX2J1dHRvbiIsImRhdGEtbGlzdC1idXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/bookComponents/bookDisplay/bookDisplay.js\n"));

/***/ })

});