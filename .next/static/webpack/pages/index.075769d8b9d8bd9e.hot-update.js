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

/***/ "./components/bookComponents/bookDisplay/bookDisplay.js":
/*!**************************************************************!*\
  !*** ./components/bookComponents/bookDisplay/bookDisplay.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookDisplay.module.css */ \"./components/bookComponents/bookDisplay/bookDisplay.module.css\");\n/* harmony import */ var _bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n // Import the useRouter hook\n\nfunction BookDisplay(props) {\n    _s();\n    const { Book, books, authors, BOOKS_PER_PAGE, genres } = props;\n    let { page, matches } = props;\n    const updateRemaining = ()=>{\n        const initial = matches.length - page * BOOKS_PER_PAGE;\n        const hasRemaining = initial > 0;\n        const remaining = hasRemaining ? initial : 0;\n        document.querySelector(\"[data-list-button]\").disabled = !hasRemaining;\n        document.querySelector(\"[data-list-button]\").innerHTML = /* html */ '\\n                <span>Show more</span>\\n                <span class=\"list__remaining\"> ('.concat(remaining, \")</span>\\n            \");\n    };\n    const increase = ()=>{\n        const newPage = page + 1;\n        const start = (newPage - 1) * BOOKS_PER_PAGE;\n        const end = newPage * BOOKS_PER_PAGE;\n        document.querySelector(\"[data-list-items]\").appendChild(createPreviewsFragment(matches, [\n            start,\n            end\n        ]));\n        updateRemaining();\n        page = newPage;\n    };\n    const recreate = (display)=>{\n        matches = display;\n        page = 1;\n        if (display.length < 1) {\n            document.querySelector(\"[data-list-message]\").classList.add(\"list__message_show\");\n        } else {\n            document.querySelector(\"[data-list-message]\").classList.remove(\"list__message_show\");\n        }\n        document.querySelector(\"[data-list-items]\").innerHTML = \"\";\n        const fragments = createPreviewsFragment(display, [\n            0,\n            36\n        ]);\n        document.querySelector(\"[data-list-items]\").appendChild(fragments);\n        updateRemaining();\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    const close = ()=>{\n        document.querySelector(\"[data-list-active]\").open = false;\n    };\n    const open = (event)=>{\n        const previewId = event.target.dataset.preview;\n        if (previewId) {\n            const active = getBookById(previewId);\n            // Instead of opening a preview, navigate to the dynamic route\n            router.push(\"/preview/\".concat(active.id));\n        }\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const css = {\n        day: {\n            dark: \"10, 10, 20\",\n            light: \"255, 255, 255\"\n        },\n        night: {\n            dark: \"255, 255, 255\",\n            light: \"10, 10, 20\"\n        }\n    };\n    const initialise = ()=>{\n        document.querySelector(\"[data-list-items]\").appendChild(createPreviewsFragment(books, [\n            0,\n            BOOKS_PER_PAGE\n        ]));\n        document.querySelector(\"[data-search-genres]\").appendChild(createGenresFragment(genres));\n        document.querySelector(\"[data-search-authors]\").appendChild(createAuthorsFragment(authors));\n        document.querySelector(\"[data-settings-theme]\").value = isDarkMode() ? \"night\" : \"day\";\n        setTheme(isDarkMode() ? \"night\" : \"day\");\n        const remaining = books.length - BOOKS_PER_PAGE;\n        document.querySelector(\"[data-list-button]\").innerText = \"Show more (\".concat(remaining, \")\");\n    };\n    /**\n   * @param {string} id\n   * @returns {Book}\n   */ const getBookById = (id)=>{\n        let result = null;\n        for (const singleBook of books){\n            if (result) break;\n            if (singleBook.id === id) result = singleBook;\n        }\n        return result;\n    };\n    /**\n   * ...\n   *\n   * @param {Book} props\n   * @returns {HTMLButtonElement}\n   */ const createPreview = (props)=>{\n        const { author: authorId, id, image, title } = props;\n        const element = document.createElement(\"button\");\n        element.classList = (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview);\n        element.setAttribute(\"data-preview\", id);\n        element.innerHTML = /* html */ \"\\n        <img\\n            class=\" + (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview__image) + \"\\n            src=\" + image + \"\\n        />\\n        \\n        <div className=\" + (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview__info) + \">\\n            <h3 className=\" + (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview__title) + \">\".concat(title, \"</h3>\\n            <div className=\") + (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview__author) + \">\".concat(authors[authorId], \"</div>\\n        </div>\\n    \");\n        return element;\n    };\n    const createPreviewsFragment = (source, range)=>{\n        if (!source || !Array.isArray(source)) throw new Error(\"Source required\");\n        if (!range || range.length < 2) throw new Error(\"Range must be an array with two numbers\");\n        const fragment = document.createDocumentFragment();\n        const [start, end] = range;\n        /**\n     * @type {Book[]}\n     */ const extracted = source.slice(start, end);\n        for (const { author, image, title, id } of extracted){\n            const preview = createPreview({\n                author,\n                id,\n                image,\n                title\n            });\n            fragment.appendChild(preview);\n        }\n        return fragment;\n    };\n    /**\n   * @returns {HTMLElement}\n   */ const createAuthorsFragment = ()=>{\n        const fragment = document.createDocumentFragment();\n        const option = createOption(\"any\", \"All Authors\");\n        fragment.appendChild(option);\n        for (const [id, name] of Object.entries(authors)){\n            const option = createOption(id, name);\n            fragment.appendChild(option);\n        }\n        return fragment;\n    };\n    /**\n   *\n   * @returns\n   */ const createGenresFragment = ()=>{\n        const fragment = document.createDocumentFragment();\n        const option = createOption(\"any\", \"All Genres\");\n        fragment.appendChild(option);\n        for (const [id, name] of Object.entries(genres)){\n            const option = createOption(id, name);\n            fragment.appendChild(option);\n        }\n        return fragment;\n    };\n    /**\n   * @param {string} value\n   * @param {string} text\n   * @returns {HTMLElement}\n   */ const createOption = (value, text)=>{\n        const element = document.createElement(\"option\");\n        element.value = value;\n        element.innerText = text;\n        return element;\n    };\n    /**\n   *\n   * @returns {boolean}\n   */ const isDarkMode = ()=>window.matchMedia && window.matchMedia(\"(prefers-color-scheme: dark)\").matches;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        initialise();\n    }, []);\n    /**\n   * @param {'day' | 'night'} theme\n   */ const setTheme = (theme)=>{\n        document.documentElement.style.setProperty(\"--color-dark\", css[theme].dark);\n        document.documentElement.style.setProperty(\"--color-light\", css[theme].light);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_3___default().list),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_3___default().list__items),\n                onClick: actions.list.open,\n                \"data-list-items\": true\n            }, void 0, false, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookDisplay/bookDisplay.js\",\n                lineNumber: 255,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_3___default().list__message),\n                \"data-list-message\": true,\n                children: \"No results found. Your filters might be too narrow.\"\n            }, void 0, false, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookDisplay/bookDisplay.js\",\n                lineNumber: 260,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_bookDisplay_module_css__WEBPACK_IMPORTED_MODULE_3___default().list__button),\n                onClick: actions.list.increase,\n                \"data-list-button\": true\n            }, void 0, false, {\n                fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookDisplay/bookDisplay.js\",\n                lineNumber: 263,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rels/Documents/book-connect-nextjs-rebuild/components/bookComponents/bookDisplay/bookDisplay.js\",\n        lineNumber: 254,\n        columnNumber: 5\n    }, this);\n}\n_s(BookDisplay, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = BookDisplay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookDisplay);\nvar _c;\n$RefreshReg$(_c, \"BookDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jvb2tDb21wb25lbnRzL2Jvb2tEaXNwbGF5L2Jvb2tEaXNwbGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBQ04sQ0FBQyw0QkFBNEI7QUFDbkM7QUFFbEMsU0FBU0csWUFBWUMsS0FBSzs7SUFDeEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRSxHQUFHTDtJQUN6RCxJQUFJLEVBQUVNLElBQUksRUFBRUMsT0FBTyxFQUFFLEdBQUdQO0lBRXhCLE1BQU1RLGtCQUFrQjtRQUN0QixNQUFNQyxVQUFVRixRQUFRRyxNQUFNLEdBQUdKLE9BQU9GO1FBQ3hDLE1BQU1PLGVBQWVGLFVBQVU7UUFFL0IsTUFBTUcsWUFBWUQsZUFBZUYsVUFBVTtRQUUzQ0ksU0FBU0MsYUFBYSxDQUFFLHNCQUFxQkMsUUFBUSxHQUFHLENBQUNKO1FBQ3pERSxTQUFTQyxhQUFhLENBQUUsc0JBQXFCRSxTQUFTLEdBQUcsUUFBUSxHQUFHLDZGQUVaLE9BQVZKLFdBQVU7SUFFMUQ7SUFFQSxNQUFNSyxXQUFXO1FBQ2YsTUFBTUMsVUFBVVosT0FBTztRQUN2QixNQUFNYSxRQUFRLENBQUNELFVBQVUsS0FBS2Q7UUFDOUIsTUFBTWdCLE1BQU1GLFVBQVVkO1FBRXRCUyxTQUNHQyxhQUFhLENBQUUscUJBQ2ZPLFdBQVcsQ0FBQ0MsdUJBQXVCZixTQUFTO1lBQUNZO1lBQU9DO1NBQUk7UUFDM0RaO1FBQ0FGLE9BQU9ZO0lBQ1Q7SUFFQSxNQUFNSyxXQUFXLENBQUNDO1FBQ2hCakIsVUFBVWlCO1FBQ1ZsQixPQUFPO1FBRVAsSUFBSWtCLFFBQVFkLE1BQU0sR0FBRyxHQUFHO1lBQ3RCRyxTQUNHQyxhQUFhLENBQUUsdUJBQ2ZXLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQ25CLE9BQU87WUFDTGIsU0FDR0MsYUFBYSxDQUFFLHVCQUNmVyxTQUFTLENBQUNFLE1BQU0sQ0FBQztRQUN0QjtR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QUNqQnpELE9BQU95RCxVQUFVLENBQUMsZ0NBQWdDL0UsT0FBTztJQUUzRFQsZ0RBQVNBLENBQUM7UUFDUm9EO0lBQ0YsR0FBRyxFQUFFO0lBRUw7O0dBRUMsR0FDRCxNQUFNSyxXQUFXLENBQUNnQztRQUNoQjFFLFNBQVMyRSxlQUFlLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGdCQUFnQjdDLEdBQUcsQ0FBQzBDLE1BQU0sQ0FBQ3hDLElBQUk7UUFDMUVsQyxTQUFTMkUsZUFBZSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FDeEMsaUJBQ0E3QyxHQUFHLENBQUMwQyxNQUFNLENBQUN2QyxLQUFLO0lBRXBCO0lBRUEscUJBQ0UsOERBQUMyQztRQUFLQyxXQUFXaEcscUVBQVc7OzBCQUMxQiw4REFBQ2tHO2dCQUNDRixXQUFXaEcsNEVBQWtCO2dCQUM3Qm9HLFNBQVNDLFFBQVFKLElBQUksQ0FBQzNELElBQUk7Z0JBQzFCZ0UsaUJBQWU7Ozs7OzswQkFFakIsOERBQUNKO2dCQUFJRixXQUFXaEcsOEVBQW9CO2dCQUFFd0csbUJBQWlCOzBCQUFDOzs7Ozs7MEJBR3hELDhEQUFDQztnQkFDQ1QsV0FBV2hHLDZFQUFtQjtnQkFDOUJvRyxTQUFTQyxRQUFRSixJQUFJLENBQUM1RSxRQUFRO2dCQUM5QnNGLGtCQUFnQjs7Ozs7Ozs7Ozs7O0FBSXhCO0dBelFTeEc7O1FBZ0VRRixrREFBU0E7OztLQWhFakJFO0FBMlFULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9va0NvbXBvbmVudHMvYm9va0Rpc3BsYXkvYm9va0Rpc3BsYXkuanM/ZWZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Jvb2tEaXNwbGF5Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBJbXBvcnQgdGhlIHVzZVJvdXRlciBob29rXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQm9va0Rpc3BsYXkocHJvcHMpIHtcbiAgY29uc3QgeyBCb29rLCBib29rcywgYXV0aG9ycywgQk9PS1NfUEVSX1BBR0UsIGdlbnJlcyB9ID0gcHJvcHM7XG4gIGxldCB7IHBhZ2UsIG1hdGNoZXMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHVwZGF0ZVJlbWFpbmluZyA9ICgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsID0gbWF0Y2hlcy5sZW5ndGggLSBwYWdlICogQk9PS1NfUEVSX1BBR0U7XG4gICAgY29uc3QgaGFzUmVtYWluaW5nID0gaW5pdGlhbCA+IDA7XG5cbiAgICBjb25zdCByZW1haW5pbmcgPSBoYXNSZW1haW5pbmcgPyBpbml0aWFsIDogMDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWxpc3QtYnV0dG9uXWApLmRpc2FibGVkID0gIWhhc1JlbWFpbmluZztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saXN0LWJ1dHRvbl1gKS5pbm5lckhUTUwgPSAvKiBodG1sICovIGBcbiAgICAgICAgICAgICAgICA8c3Bhbj5TaG93IG1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0X19yZW1haW5pbmdcIj4gKCR7cmVtYWluaW5nfSk8L3NwYW4+XG4gICAgICAgICAgICBgO1xuICB9O1xuXG4gIGNvbnN0IGluY3JlYXNlID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1BhZ2UgPSBwYWdlICsgMTtcbiAgICBjb25zdCBzdGFydCA9IChuZXdQYWdlIC0gMSkgKiBCT09LU19QRVJfUEFHRTtcbiAgICBjb25zdCBlbmQgPSBuZXdQYWdlICogQk9PS1NfUEVSX1BBR0U7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWxpc3QtaXRlbXNdYClcbiAgICAgIC5hcHBlbmRDaGlsZChjcmVhdGVQcmV2aWV3c0ZyYWdtZW50KG1hdGNoZXMsIFtzdGFydCwgZW5kXSkpO1xuICAgIHVwZGF0ZVJlbWFpbmluZygpO1xuICAgIHBhZ2UgPSBuZXdQYWdlO1xuICB9O1xuXG4gIGNvbnN0IHJlY3JlYXRlID0gKGRpc3BsYXkpID0+IHtcbiAgICBtYXRjaGVzID0gZGlzcGxheTtcbiAgICBwYWdlID0gMTtcblxuICAgIGlmIChkaXNwbGF5Lmxlbmd0aCA8IDEpIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saXN0LW1lc3NhZ2VdYClcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJsaXN0X19tZXNzYWdlX3Nob3dcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saXN0LW1lc3NhZ2VdYClcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJsaXN0X19tZXNzYWdlX3Nob3dcIik7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbGlzdC1pdGVtc11gKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGZyYWdtZW50cyA9IGNyZWF0ZVByZXZpZXdzRnJhZ21lbnQoZGlzcGxheSwgWzAsIDM2XSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbGlzdC1pdGVtc11gKS5hcHBlbmRDaGlsZChmcmFnbWVudHMpO1xuICB1cGRhdGVSZW1haW5pbmcoKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWxpc3QtYWN0aXZlXWApLm9wZW4gPSBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBvcGVuID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcHJldmlld0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJldmlldztcblxuICAgIGlmIChwcmV2aWV3SWQpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IGdldEJvb2tCeUlkKHByZXZpZXdJZCk7XG4gICAgICAvLyBJbnN0ZWFkIG9mIG9wZW5pbmcgYSBwcmV2aWV3LCBuYXZpZ2F0ZSB0byB0aGUgZHluYW1pYyByb3V0ZVxuICAgICAgcm91dGVyLnB1c2goYC9wcmV2aWV3LyR7YWN0aXZlLmlkfWApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBjc3MgPSB7XG4gICAgZGF5OiB7XG4gICAgICBkYXJrOiBcIjEwLCAxMCwgMjBcIixcbiAgICAgIGxpZ2h0OiBcIjI1NSwgMjU1LCAyNTVcIixcbiAgICB9LFxuICAgIG5pZ2h0OiB7XG4gICAgICBkYXJrOiBcIjI1NSwgMjU1LCAyNTVcIixcbiAgICAgIGxpZ2h0OiBcIjEwLCAxMCwgMjBcIixcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxpc2UgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saXN0LWl0ZW1zXWApXG4gICAgICAuYXBwZW5kQ2hpbGQoY3JlYXRlUHJldmlld3NGcmFnbWVudChib29rcywgWzAsIEJPT0tTX1BFUl9QQUdFXSkpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc2VhcmNoLWdlbnJlc11gKVxuICAgICAgLmFwcGVuZENoaWxkKGNyZWF0ZUdlbnJlc0ZyYWdtZW50KGdlbnJlcykpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc2VhcmNoLWF1dGhvcnNdYClcbiAgICAgIC5hcHBlbmRDaGlsZChjcmVhdGVBdXRob3JzRnJhZ21lbnQoYXV0aG9ycykpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNldHRpbmdzLXRoZW1lXWApLnZhbHVlID0gaXNEYXJrTW9kZSgpXG4gICAgICA/IFwibmlnaHRcIlxuICAgICAgOiBcImRheVwiO1xuICAgIHNldFRoZW1lKGlzRGFya01vZGUoKSA/IFwibmlnaHRcIiA6IFwiZGF5XCIpO1xuXG4gICAgY29uc3QgcmVtYWluaW5nID0gYm9va3MubGVuZ3RoIC0gQk9PS1NfUEVSX1BBR0U7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1saXN0LWJ1dHRvbl1gXG4gICAgKS5pbm5lclRleHQgPSBgU2hvdyBtb3JlICgke3JlbWFpbmluZ30pYDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAqIEByZXR1cm5zIHtCb29rfVxuICAgKi9cbiAgY29uc3QgZ2V0Qm9va0J5SWQgPSAoaWQpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgIGZvciAoY29uc3Qgc2luZ2xlQm9vayBvZiBib29rcykge1xuICAgICAgaWYgKHJlc3VsdCkgYnJlYWs7XG4gICAgICBpZiAoc2luZ2xlQm9vay5pZCA9PT0gaWQpIHJlc3VsdCA9IHNpbmdsZUJvb2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogLi4uXG4gICAqXG4gICAqIEBwYXJhbSB7Qm9va30gcHJvcHNcbiAgICogQHJldHVybnMge0hUTUxCdXR0b25FbGVtZW50fVxuICAgKi9cbiAgY29uc3QgY3JlYXRlUHJldmlldyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYXV0aG9yOiBhdXRob3JJZCwgaWQsIGltYWdlLCB0aXRsZSB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdCA9IHN0eWxlcy5wcmV2aWV3O1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmV2aWV3XCIsIGlkKTtcblxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID1cbiAgICAgIC8qIGh0bWwgKi8gYFxuICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzcz1gICtcbiAgICAgIHN0eWxlcy5wcmV2aWV3X19pbWFnZSArXG4gICAgICBgXG4gICAgICAgICAgICBzcmM9YCArXG4gICAgICBpbWFnZSArXG4gICAgICBgXG4gICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1gICtcbiAgICAgIHN0eWxlcy5wcmV2aWV3X19pbmZvICtcbiAgICAgIGA+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPWAgK1xuICAgICAgc3R5bGVzLnByZXZpZXdfX3RpdGxlICtcbiAgICAgIGA+JHt0aXRsZX08L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9YCArXG4gICAgICBzdHlsZXMucHJldmlld19fYXV0aG9yICtcbiAgICAgIGA+JHthdXRob3JzW2F1dGhvcklkXX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByZXZpZXdzRnJhZ21lbnQgPSAoc291cmNlLCByYW5nZSkgPT4ge1xuICAgIGlmICghc291cmNlIHx8ICFBcnJheS5pc0FycmF5KHNvdXJjZSkpIHRocm93IG5ldyBFcnJvcihcIlNvdXJjZSByZXF1aXJlZFwiKTtcbiAgICBpZiAoIXJhbmdlIHx8IHJhbmdlLmxlbmd0aCA8IDIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYW5nZSBtdXN0IGJlIGFuIGFycmF5IHdpdGggdHdvIG51bWJlcnNcIik7XG5cbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Jvb2tbXX1cbiAgICAgKi9cbiAgICBjb25zdCBleHRyYWN0ZWQgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICBmb3IgKGNvbnN0IHsgYXV0aG9yLCBpbWFnZSwgdGl0bGUsIGlkIH0gb2YgZXh0cmFjdGVkKSB7XG4gICAgICBjb25zdCBwcmV2aWV3ID0gY3JlYXRlUHJldmlldyh7XG4gICAgICAgIGF1dGhvcixcbiAgICAgICAgaWQsXG4gICAgICAgIGltYWdlLFxuICAgICAgICB0aXRsZSxcbiAgICAgIH0pO1xuXG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChwcmV2aWV3KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGNvbnN0IGNyZWF0ZUF1dGhvcnNGcmFnbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVPcHRpb24oXCJhbnlcIiwgXCJBbGwgQXV0aG9yc1wiKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgZm9yIChjb25zdCBbaWQsIG5hbWVdIG9mIE9iamVjdC5lbnRyaWVzKGF1dGhvcnMpKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVPcHRpb24oaWQsIG5hbWUpO1xuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBjb25zdCBjcmVhdGVHZW5yZXNGcmFnbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVPcHRpb24oXCJhbnlcIiwgXCJBbGwgR2VucmVzXCIpO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICBmb3IgKGNvbnN0IFtpZCwgbmFtZV0gb2YgT2JqZWN0LmVudHJpZXMoZ2VucmVzKSkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlT3B0aW9uKGlkLCBuYW1lKTtcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgY29uc3QgY3JlYXRlT3B0aW9uID0gKHZhbHVlLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc0RhcmtNb2RlID0gKCkgPT5cbiAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJlxuICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5pdGlhbGlzZSgpO1xuICB9LCBbXSk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7J2RheScgfCAnbmlnaHQnfSB0aGVtZVxuICAgKi9cbiAgY29uc3Qgc2V0VGhlbWUgPSAodGhlbWUpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbG9yLWRhcmtcIiwgY3NzW3RoZW1lXS5kYXJrKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tY29sb3ItbGlnaHRcIixcbiAgICAgIGNzc1t0aGVtZV0ubGlnaHRcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfX2l0ZW1zfVxuICAgICAgICBvbkNsaWNrPXthY3Rpb25zLmxpc3Qub3Blbn1cbiAgICAgICAgZGF0YS1saXN0LWl0ZW1zXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfX21lc3NhZ2V9IGRhdGEtbGlzdC1tZXNzYWdlPlxuICAgICAgICBObyByZXN1bHRzIGZvdW5kLiBZb3VyIGZpbHRlcnMgbWlnaHQgYmUgdG9vIG5hcnJvdy5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saXN0X19idXR0b259XG4gICAgICAgIG9uQ2xpY2s9e2FjdGlvbnMubGlzdC5pbmNyZWFzZX1cbiAgICAgICAgZGF0YS1saXN0LWJ1dHRvblxuICAgICAgPjwvYnV0dG9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va0Rpc3BsYXk7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiQm9va0Rpc3BsYXkiLCJwcm9wcyIsIkJvb2siLCJib29rcyIsImF1dGhvcnMiLCJCT09LU19QRVJfUEFHRSIsImdlbnJlcyIsInBhZ2UiLCJtYXRjaGVzIiwidXBkYXRlUmVtYWluaW5nIiwiaW5pdGlhbCIsImxlbmd0aCIsImhhc1JlbWFpbmluZyIsInJlbWFpbmluZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRpc2FibGVkIiwiaW5uZXJIVE1MIiwiaW5jcmVhc2UiLCJuZXdQYWdlIiwic3RhcnQiLCJlbmQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVByZXZpZXdzRnJhZ21lbnQiLCJyZWNyZWF0ZSIsImRpc3BsYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJmcmFnbWVudHMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY2xvc2UiLCJvcGVuIiwiZXZlbnQiLCJwcmV2aWV3SWQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwicHJldmlldyIsImFjdGl2ZSIsImdldEJvb2tCeUlkIiwicm91dGVyIiwicHVzaCIsImlkIiwiY3NzIiwiZGF5IiwiZGFyayIsImxpZ2h0IiwibmlnaHQiLCJpbml0aWFsaXNlIiwiY3JlYXRlR2VucmVzRnJhZ21lbnQiLCJjcmVhdGVBdXRob3JzRnJhZ21lbnQiLCJ2YWx1ZSIsImlzRGFya01vZGUiLCJzZXRUaGVtZSIsImlubmVyVGV4dCIsInJlc3VsdCIsInNpbmdsZUJvb2siLCJjcmVhdGVQcmV2aWV3IiwiYXV0aG9yIiwiYXV0aG9ySWQiLCJpbWFnZSIsInRpdGxlIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJwcmV2aWV3X19pbWFnZSIsInByZXZpZXdfX2luZm8iLCJwcmV2aWV3X190aXRsZSIsInByZXZpZXdfX2F1dGhvciIsInNvdXJjZSIsInJhbmdlIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJleHRyYWN0ZWQiLCJzbGljZSIsIm9wdGlvbiIsImNyZWF0ZU9wdGlvbiIsIm5hbWUiLCJPYmplY3QiLCJlbnRyaWVzIiwidGV4dCIsIm1hdGNoTWVkaWEiLCJ0aGVtZSIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJtYWluIiwiY2xhc3NOYW1lIiwibGlzdCIsImRpdiIsImxpc3RfX2l0ZW1zIiwib25DbGljayIsImFjdGlvbnMiLCJkYXRhLWxpc3QtaXRlbXMiLCJsaXN0X19tZXNzYWdlIiwiZGF0YS1saXN0LW1lc3NhZ2UiLCJidXR0b24iLCJsaXN0X19idXR0b24iLCJkYXRhLWxpc3QtYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/bookComponents/bookDisplay/bookDisplay.js\n"));

/***/ })

});