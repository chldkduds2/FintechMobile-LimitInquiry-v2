"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"a73e8fc9c4b8\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9heW91bmcvRG9jdW1lbnRzL0dpdEh1Yi9GaW50ZWNoTW9iaWxlLUxpbWl0SW5xdWlyeS12Mi9hcHAvZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhNzNlOGZjOWM0YjhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/AccessDeniedModal/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/AccessDeniedModal/index.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst AccessDeniedModal = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleLoginRedirect = ()=>{\n        try {\n            // 페이지 이동\n            router.push('/');\n        } catch (error) {\n            console.error('Login redirect failed:', error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-0 bottom-0 left-0 z-50 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-100 bg-gray-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-18 pr-10 pl-10 text-center w-[90%] overflow-hidden h-[40%] bg-white shadow-lg overflow-y-auto no-scrollbar transform transition-transform duration-300 rounded-[1.25rem]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center whitespace-pre-wrap text-20-bold\",\n                    children: [\n                        \"로그인되지 않은\",\n                        '\\n',\n                        \"사용자 정보입니다.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ayoung/Documents/GitHub/FintechMobile-LimitInquiry-v2/src/components/AccessDeniedModal/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[10px]\"\n                }, void 0, false, {\n                    fileName: \"/Users/ayoung/Documents/GitHub/FintechMobile-LimitInquiry-v2/src/components/AccessDeniedModal/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-center whitespace-pre-wrap text-15-regular text-gray-70\",\n                    children: [\n                        \"서비스 사용을 위해\",\n                        '\\n',\n                        \"다시 로그인해주세요.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ayoung/Documents/GitHub/FintechMobile-LimitInquiry-v2/src/components/AccessDeniedModal/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"hover:active:bg-uniqueGray-99 mt-15 text-sm flex items-center justify-center cursor-pointer transition-colors duration-100 ease-linear outline-none disabled:cursor-not-allowed bg-indigo-50 border-white border-[1px] border-solid text-white font-bold w-full text-[17px] lg:text-[17px] h-[60px] lg:h-[52px] rounded-[100px]\",\n                    children: \"다시 로그인하기\"\n                }, void 0, false, {\n                    fileName: \"/Users/ayoung/Documents/GitHub/FintechMobile-LimitInquiry-v2/src/components/AccessDeniedModal/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ayoung/Documents/GitHub/FintechMobile-LimitInquiry-v2/src/components/AccessDeniedModal/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ayoung/Documents/GitHub/FintechMobile-LimitInquiry-v2/src/components/AccessDeniedModal/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AccessDeniedModal, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = AccessDeniedModal;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccessDeniedModal);\nvar _c;\n$RefreshReg$(_c, \"AccessDeniedModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FjY2Vzc0RlbmllZE1vZGFsL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUV4QyxNQUFNQyxvQkFBb0I7O0lBQ3RCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixNQUFNRyxzQkFBc0I7UUFDeEIsSUFBSTtZQUNBLFNBQVM7WUFDVEQsT0FBT0UsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUM1QztJQUNKO0lBRUEscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs7d0JBQStDO3dCQUV4RDt3QkFBSzs7Ozs7Ozs4QkFHViw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0U7b0JBQUtGLFdBQVU7O3dCQUErRDt3QkFFMUU7d0JBQUs7Ozs7Ozs7OEJBR1YsOERBQUNHO29CQUFPSCxXQUFVOzhCQUFrVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcFc7R0FoQ01QOztRQUNhRCxrREFBU0E7OztLQUR0QkM7QUFrQ04saUVBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2F5b3VuZy9Eb2N1bWVudHMvR2l0SHViL0ZpbnRlY2hNb2JpbGUtTGltaXRJbnF1aXJ5LXYyL3NyYy9jb21wb25lbnRzL0FjY2Vzc0RlbmllZE1vZGFsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IEFjY2Vzc0RlbmllZE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlTG9naW5SZWRpcmVjdCA9ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIO2OmOydtOyngCDsnbTrj5lcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdMb2dpbiByZWRpcmVjdCBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgYm90dG9tLTAgbGVmdC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwIG9wYWNpdHktMTAwIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTggcHItMTAgcGwtMTAgdGV4dC1jZW50ZXIgdy1bOTAlXSBvdmVyZmxvdy1oaWRkZW4gaC1bNDAlXSBiZy13aGl0ZSBzaGFkb3ctbGcgb3ZlcmZsb3cteS1hdXRvIG5vLXNjcm9sbGJhciB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIHJvdW5kZWQtWzEuMjVyZW1dXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHdoaXRlc3BhY2UtcHJlLXdyYXAgdGV4dC0yMC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIOuhnOq3uOyduOuQmOyngCDslYrsnYBcbiAgICAgICAgICAgICAgICAgICAgeydcXG4nfVxuICAgICAgICAgICAgICAgICAgICDsgqzsmqnsnpAg7KCV67O07J6F64uI64ukLlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsxMHB4XVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgd2hpdGVzcGFjZS1wcmUtd3JhcCB0ZXh0LTE1LXJlZ3VsYXIgdGV4dC1ncmF5LTcwXCI+XG4gICAgICAgICAgICAgICAgICAgIOyEnOu5hOyKpCDsgqzsmqnsnYQg7JyE7ZW0XG4gICAgICAgICAgICAgICAgICAgIHsnXFxuJ31cbiAgICAgICAgICAgICAgICAgICAg64uk7IucIOuhnOq3uOyduO2VtOyjvOyEuOyalC5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJob3ZlcjphY3RpdmU6YmctdW5pcXVlR3JheS05OSBtdC0xNSB0ZXh0LXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTEwMCBlYXNlLWxpbmVhciBvdXRsaW5lLW5vbmUgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGJnLWluZGlnby01MCBib3JkZXItd2hpdGUgYm9yZGVyLVsxcHhdIGJvcmRlci1zb2xpZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB3LWZ1bGwgdGV4dC1bMTdweF0gbGc6dGV4dC1bMTdweF0gaC1bNjBweF0gbGc6aC1bNTJweF0gcm91bmRlZC1bMTAwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIOuLpOyLnCDroZzqt7jsnbjtlZjquLBcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjZXNzRGVuaWVkTW9kYWw7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiQWNjZXNzRGVuaWVkTW9kYWwiLCJyb3V0ZXIiLCJoYW5kbGVMb2dpblJlZGlyZWN0IiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic3BhbiIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AccessDeniedModal/index.tsx\n"));

/***/ })

});