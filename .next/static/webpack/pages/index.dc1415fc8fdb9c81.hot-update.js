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

/***/ "./components/CustomModel.jsx":
/*!************************************!*\
  !*** ./components/CustomModel.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CustomModel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction CustomModel(param) {\n    var modelPath = param.modelPath, position = param.position, scale = param.scale, spinning = param.spinning;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var gltf = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useLoader)(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader, modelPath);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)(function() {\n        ref.current.rotation.y += !spinning ? 0 : 0;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n        ref: ref,\n        object: gltf.scene,\n        position: position,\n        scale: scale\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Meryr\\\\Downloads\\\\Personal\\\\yoyoyo\\\\components\\\\CustomModel.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(CustomModel, \"WfHTTql6d4E+T5qv4i5tMXnHV4c=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useLoader,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame\n    ];\n});\n_c = CustomModel;\n;\nvar _c;\n$RefreshReg$(_c, \"CustomModel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbU1vZGVsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDUztBQUNVOztBQUVwRCxTQUFTTSxXQUFXLENBQUMsS0FBd0MsRUFBRTtRQUF4Q0MsU0FBUyxHQUFYLEtBQXdDLENBQXRDQSxTQUFTLEVBQUVDLFFBQVEsR0FBckIsS0FBd0MsQ0FBM0JBLFFBQVEsRUFBRUMsS0FBSyxHQUE1QixLQUF3QyxDQUFqQkEsS0FBSyxFQUFFQyxRQUFRLEdBQXRDLEtBQXdDLENBQVZBLFFBQVE7O0lBQ3hFLElBQU1DLEdBQUcsR0FBR1YsNkNBQU0sRUFBRTtJQUNwQixJQUFNVyxJQUFJLEdBQUdULDZEQUFTLENBQUNFLDZFQUFVLEVBQUVFLFNBQVMsQ0FBQztJQUU3Q0gsNERBQVEsQ0FBQyxXQUFNO1FBQ2JPLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDQyxRQUFRLENBQUNDLENBQUMsSUFBSSxDQUFDTCxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM3QyxDQUFDLENBQUM7SUFFSCxxQkFDRSw4REFBQ00sV0FBUztRQUNSTCxHQUFHLEVBQUVBLEdBQUc7UUFDUk0sTUFBTSxFQUFFTCxJQUFJLENBQUNNLEtBQUs7UUFDbEJWLFFBQVEsRUFBRUEsUUFBUTtRQUNsQkMsS0FBSyxFQUFFQSxLQUFLOzs7OztZQUNaLENBQ0Y7Q0FDSDtHQWhCdUJILFdBQVc7O1FBRXBCSCx5REFBUztRQUV0QkMsd0RBQVE7OztBQUpjRSxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VzdG9tTW9kZWwuanN4PzhiMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTG9hZGVyLCB1c2VGcmFtZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21Nb2RlbCh7IG1vZGVsUGF0aCwgcG9zaXRpb24sIHNjYWxlLCBzcGlubmluZyB9KSB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZ2x0ZiA9IHVzZUxvYWRlcihHTFRGTG9hZGVyLCBtb2RlbFBhdGgpO1xyXG5cclxuICB1c2VGcmFtZSgoKSA9PiB7XHJcbiAgICByZWYuY3VycmVudC5yb3RhdGlvbi55ICs9ICFzcGlubmluZyA/IDAgOiAwO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHByaW1pdGl2ZVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgb2JqZWN0PXtnbHRmLnNjZW5lfVxyXG4gICAgICBwb3NpdGlvbj17cG9zaXRpb259XHJcbiAgICAgIHNjYWxlPXtzY2FsZX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlTG9hZGVyIiwidXNlRnJhbWUiLCJHTFRGTG9hZGVyIiwiQ3VzdG9tTW9kZWwiLCJtb2RlbFBhdGgiLCJwb3NpdGlvbiIsInNjYWxlIiwic3Bpbm5pbmciLCJyZWYiLCJnbHRmIiwiY3VycmVudCIsInJvdGF0aW9uIiwieSIsInByaW1pdGl2ZSIsIm9iamVjdCIsInNjZW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CustomModel.jsx\n");

/***/ })

});