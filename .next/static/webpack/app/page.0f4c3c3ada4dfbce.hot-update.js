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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"92094b420b44\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9heW91bmcvRG9jdW1lbnRzL0dpdEh1Yi9GaW50ZWNoTW9iaWxlLUxpbWl0SW5xdWlyeS12Mi9hcHAvZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI5MjA5NGI0MjBiNDRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/services/UserInfoRepository/api.ts":
/*!************************************************!*\
  !*** ./src/services/UserInfoRepository/api.ts ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_CustomAxios_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/CustomAxios/axios */ \"(app-pages-browser)/./src/utils/CustomAxios/axios.ts\");\n\nclass UserInfoApi {\n    async getUserInfoAPI() {\n        try {\n            const response = await _utils_CustomAxios_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/account/v4/user/info');\n            return response.data;\n        } catch (error) {\n            throw new Error('An error occurred while fetching user information');\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserInfoApi());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9Vc2VySW5mb1JlcG9zaXRvcnkvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3NEO0FBR3RELE1BQU1DO0lBQ0YsTUFBYUMsaUJBQTZDO1FBQ3RELElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1ILGdFQUFhQSxDQUFDSSxHQUFHLENBQUM7WUFDekMsT0FBT0QsU0FBU0UsSUFBSTtRQUN4QixFQUFFLE9BQU9DLE9BQU87WUFDWixNQUFNLElBQUlDLE1BQU07UUFDcEI7SUFDSjtBQUNKO0FBRUEsaUVBQWUsSUFBSU4sYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2F5b3VuZy9Eb2N1bWVudHMvR2l0SHViL0ZpbnRlY2hNb2JpbGUtTGltaXRJbnF1aXJ5LXYyL3NyYy9zZXJ2aWNlcy9Vc2VySW5mb1JlcG9zaXRvcnkvYXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgYXhpb3NJbnN0YW5jZSBmcm9tICdAL3V0aWxzL0N1c3RvbUF4aW9zL2F4aW9zJztcbmltcG9ydCB7IFVzZXJJbmZvU3RhdGVUeXBlIH0gZnJvbSAnQC90eXBlcy9Vc2VySW5mb1N0YXRlVHlwZS91c2VySW5mb1N0YXRlLnR5cGUnO1xuXG5jbGFzcyBVc2VySW5mb0FwaSB7XG4gICAgcHVibGljIGFzeW5jIGdldFVzZXJJbmZvQVBJKCk6IFByb21pc2U8VXNlckluZm9TdGF0ZVR5cGU+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoJy9hY2NvdW50L3Y0L3VzZXIvaW5mbycpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHVzZXIgaW5mb3JtYXRpb24nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJJbmZvQXBpKCk7XG4iXSwibmFtZXMiOlsiYXhpb3NJbnN0YW5jZSIsIlVzZXJJbmZvQXBpIiwiZ2V0VXNlckluZm9BUEkiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/UserInfoRepository/api.ts\n"));

/***/ })

});