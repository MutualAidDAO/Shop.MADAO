"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sell-page",{

/***/ "./hooks/useShop.ts":
/*!**************************!*\
  !*** ./hooks/useShop.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useShop; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nfunction useShop() {\n    var config = {\n        apiKey: \"yHFcBOA0TL94BmUYPCdZ49zbOS0LVFBC2qxQT33V\",\n        apiEndP: \"https://09zlx4b2rl.execute-api.us-west-2.amazonaws.com/Listings/ListingQuery\"\n    };\n    var getProducts = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n                // setup the api call to get products\n                // exicute call to get products\n                // await \n                // await fetch()\n                // get the data from the responce\n                // return that data(records)\n                return [\n                    2,\n                    []\n                ];\n            });\n        });\n        return function getProducts() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createProduct = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n            var response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://09zlx4b2rl.execute-api.us-west-2.amazonaws.com/Listings/ListingQuery\", {\n                                method: \"POST\",\n                                headers: {\n                                    \"Content-Type\": \"application/json\",\n                                    \"Access-Control-Allow-Origin\": \"http://localhost:3000/\",\n                                    \"Access-Control-Request-Methods\": \"POST\",\n                                    \"Access-Control-Request-Headers\": \"Content-Type\"\n                                },\n                                body: JSON.stringify({\n                                    Item: {\n                                        productID: {\n                                            S: \" productKey\"\n                                        },\n                                        key: {\n                                            S: \"productKey\"\n                                        },\n                                        productName: {\n                                            S: \"Kai's Kitchen\"\n                                        },\n                                        contactHereToPurchase: {\n                                            S: \"Contact Kai to purchase\"\n                                        },\n                                        shippingOnline: {\n                                            S: \"Shipping/Online(boolean)\"\n                                        },\n                                        productDescription: {\n                                            S: \"Tasty\"\n                                        },\n                                        price: {\n                                            N: 35\n                                        }\n                                    },\n                                    ReturnConsumedCapacity: \"TOTAL\",\n                                    TableName: \"Listings\"\n                                })\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        console.log(\"response\", response);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function createProduct() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        // getProducts,\n        createProduct: createProduct\n    };\n}\n// this is for another part, you know ;p\nvar params = {\n    Item: {\n        \"AlbumTitle\": {\n            S: \"Somewhat Famous\"\n        },\n        \"Artist\": {\n            S: \"No One You Know\"\n        },\n        \"SongTitle\": {\n            S: \"Call Me Today\"\n        }\n    },\n    ReturnConsumedCapacity: \"TOTAL\",\n    TableName: \"Music\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VTaG9wLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFRWCxTQUFTQyxPQUFPLEdBQWU7SUFFNUMsSUFBTUMsTUFBTSxHQUFHO1FBQ2JDLE1BQU0sRUFBRSwwQ0FBMEM7UUFDbERDLE9BQU8sRUFBRSw4RUFBOEU7S0FDeEY7SUFFRCxJQUFNQyxXQUFXO21CQUFHLCtGQUFZOztnQkFFOUIscUNBQXFDO2dCQUNyQywrQkFBK0I7Z0JBQy9CLFNBQVM7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixpQ0FBaUM7Z0JBR2pDLDRCQUE0QjtnQkFDNUI7OztrQkFBVTs7UUFDWixDQUFDO3dCQVhLQSxXQUFXOzs7T0FXaEI7SUFFRCxJQUFNQyxhQUFhO21CQUFHLCtGQUFZO2dCQUUxQkMsUUFBUTs7Ozt3QkFBRzs7NEJBQU1QLGtEQUFVLENBQUMsOEVBQThFLEVBQ2hIO2dDQUNFUyxNQUFNLEVBQUUsTUFBTTtnQ0FDZEMsT0FBTyxFQUFFO29DQUNQLGNBQWMsRUFBRSxrQkFBa0I7b0NBQ2xDLDZCQUE2QixFQUFFLHdCQUF3QjtvQ0FDdkQsZ0NBQWdDLEVBQUUsTUFBTTtvQ0FDeEMsZ0NBQWdDLEVBQUUsY0FBYztpQ0FFakQ7Z0NBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7b0NBQ25CQyxJQUFJLEVBQ0o7d0NBQ0VDLFNBQVMsRUFBRTs0Q0FDVEMsQ0FBQyxFQUFDLGFBQWE7eUNBQUM7d0NBQ25CQyxHQUFHLEVBQUU7NENBQ0xELENBQUMsRUFBRSxZQUFZO3lDQUFDO3dDQUVmRSxXQUFXLEVBQUM7NENBQ1ZGLENBQUMsRUFBRSxlQUFlO3lDQUFDO3dDQUNqQkcscUJBQXFCLEVBQUM7NENBQ3BCSCxDQUFDLEVBQ0YseUJBQXVCO3lDQUFFO3dDQUMxQkksY0FBYyxFQUFDOzRDQUFFSixDQUFDLEVBQUUsMEJBQTBCO3lDQUFDO3dDQUMvQ0ssa0JBQWtCLEVBQUM7NENBQUVMLENBQUMsRUFBRSxPQUFPO3lDQUFDO3dDQUNoQ00sS0FBSyxFQUFFOzRDQUFDQyxDQUFDLEVBQUUsRUFBRTt5Q0FBQztxQ0FDbkI7b0NBYURDLHNCQUFzQixFQUFFLE9BQU87b0NBQy9CQyxTQUFTLEVBQUUsVUFBVTtpQ0FDckIsQ0FBQzs2QkFDSixDQUFDOzBCQUFBOzt3QkExQ0lsQixRQUFRLEdBQUcsYUEwQ2Y7d0JBRUZtQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVwQixRQUFRLENBQUMsQ0FBQzs7Ozs7O1FBQ3BDLENBQUM7d0JBL0NLRCxhQUFhOzs7T0ErQ2xCO0lBRUQsT0FBTztRQUNMLGVBQWU7UUFDZkEsYUFBYSxFQUFiQSxhQUFhO0tBQ2Q7QUFDSCxDQUFDO0FBR0Qsd0NBQXdDO0FBRXhDLElBQUlzQixNQUFNLEdBQUc7SUFDWGQsSUFBSSxFQUFFO1FBQ0wsWUFBWSxFQUFFO1lBQ1pFLENBQUMsRUFBRSxpQkFBaUI7U0FDcEI7UUFDRixRQUFRLEVBQUU7WUFDUkEsQ0FBQyxFQUFFLGlCQUFpQjtTQUNwQjtRQUNGLFdBQVcsRUFBRTtZQUNYQSxDQUFDLEVBQUUsZUFBZTtTQUNsQjtLQUNGO0lBQ0RRLHNCQUFzQixFQUFFLE9BQU87SUFDL0JDLFNBQVMsRUFBRSxPQUFPO0NBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVNob3AudHM/ZjJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxudHlwZSBSZXR1cm5UeXBlID0ge1xyXG4gIC8vIGdldFByb2R1Y3RzOiAoKSA9PiBhbnlbXTtcclxuICBjcmVhdGVQcm9kdWN0OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTaG9wKCk6IFJldHVyblR5cGUge1xyXG5cclxuICBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGlLZXk6ICd5SEZjQk9BMFRMOTRCbVVZUENkWjQ5emJPUzBMVkZCQzJxeFFUMzNWJyAsXHJcbiAgICBhcGlFbmRQOiAnaHR0cHM6Ly8wOXpseDRiMnJsLmV4ZWN1dGUtYXBpLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tL0xpc3RpbmdzL0xpc3RpbmdRdWVyeSdcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIC8vIHNldHVwIHRoZSBhcGkgY2FsbCB0byBnZXQgcHJvZHVjdHNcclxuICAgIC8vIGV4aWN1dGUgY2FsbCB0byBnZXQgcHJvZHVjdHNcclxuICAgIC8vIGF3YWl0IFxyXG4gICAgLy8gYXdhaXQgZmV0Y2goKVxyXG4gICAgLy8gZ2V0IHRoZSBkYXRhIGZyb20gdGhlIHJlc3BvbmNlXHJcblxyXG5cclxuICAgIC8vIHJldHVybiB0aGF0IGRhdGEocmVjb3JkcylcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy9UT0RPIGFic3RyYWN0IHRoaXMgcmVzcG9uc2UgaW50byBuZXh0IGFwaSBmb2xkZXIgZm9yIGFkZGl0aW9uYWwgc2VjdXJpdHlcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly8wOXpseDRiMnJsLmV4ZWN1dGUtYXBpLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tL0xpc3RpbmdzL0xpc3RpbmdRdWVyeScsIFxyXG4gICAgeyBcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsIFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZHMnOiAnUE9TVCcgICxcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1IZWFkZXJzJzogJ0NvbnRlbnQtVHlwZScgLCBcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBJdGVtOiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm9kdWN0SUQ6IHtcclxuICAgICAgICAgICAgUzonIHByb2R1Y3RLZXknfSxcclxuICAgICAgICAga2V5OiB7XHJcbiAgICAgICAgIFM6ICdwcm9kdWN0S2V5J31cclxuICAgICAgICAgICxcclxuICAgICAgICAgIHByb2R1Y3ROYW1lOntcclxuICAgICAgICAgICAgUzogXCJLYWkncyBLaXRjaGVuXCJ9LFxyXG4gICAgICAgICAgICAgIGNvbnRhY3RIZXJlVG9QdXJjaGFzZTp7XHJcbiAgICAgICAgICAgICAgICBTOlxyXG4gICAgICAgICAgICAgIGBDb250YWN0IEthaSB0byBwdXJjaGFzZWB9LFxyXG4gICAgICAgICAgICAgIHNoaXBwaW5nT25saW5lOnsgUzogXCJTaGlwcGluZy9PbmxpbmUoYm9vbGVhbilcIn0sLy9zdGF0ZSxcclxuICAgICAgICAgICAgICBwcm9kdWN0RGVzY3JpcHRpb246eyBTOiBcIlRhc3R5XCJ9LFxyXG4gICAgICAgICAgICAgIHByaWNlOiB7TjogMzV9LCAgICAvL1wi4oKlMzVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gIFwiQWxidW1UaXRsZVwiOiB7XHJcbiAgICAgICAgLy8gICAgUzogXCJTb21ld2hhdCBGYW1vdXNcIlxyXG4gICAgICAgIC8vICAgfSwgXHJcbiAgICAgICAgLy8gIFwiQXJ0aXN0XCI6IHtcclxuICAgICAgICAvLyAgICBTOiBcIk5vIE9uZSBZb3UgS25vd1wiXHJcbiAgICAgICAgLy8gICB9LCBcclxuICAgICAgICAvLyAgXCJTb25nVGl0bGVcIjoge1xyXG4gICAgICAgIC8vICAgIFM6IFwiQ2FsbCBNZSBUb2RheVwiXHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfSwgXHJcbiAgICAgICAgLFxyXG4gICAgICAgIFJldHVybkNvbnN1bWVkQ2FwYWNpdHk6IFwiVE9UQUxcIiwgXHJcbiAgICAgICAgVGFibGVOYW1lOiBcIkxpc3RpbmdzXCJcclxuICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvLyBnZXRQcm9kdWN0cyxcclxuICAgIGNyZWF0ZVByb2R1Y3RcclxuICB9XHJcbn07XHJcblxyXG5cclxuLy8gdGhpcyBpcyBmb3IgYW5vdGhlciBwYXJ0LCB5b3Uga25vdyA7cFxyXG5cclxudmFyIHBhcmFtcyA9IHtcclxuICBJdGVtOiB7XHJcbiAgIFwiQWxidW1UaXRsZVwiOiB7XHJcbiAgICAgUzogXCJTb21ld2hhdCBGYW1vdXNcIlxyXG4gICAgfSwgXHJcbiAgIFwiQXJ0aXN0XCI6IHtcclxuICAgICBTOiBcIk5vIE9uZSBZb3UgS25vd1wiXHJcbiAgICB9LCBcclxuICAgXCJTb25nVGl0bGVcIjoge1xyXG4gICAgIFM6IFwiQ2FsbCBNZSBUb2RheVwiXHJcbiAgICB9XHJcbiAgfSwgXHJcbiAgUmV0dXJuQ29uc3VtZWRDYXBhY2l0eTogXCJUT1RBTFwiLCBcclxuICBUYWJsZU5hbWU6IFwiTXVzaWNcIlxyXG4gfTtcclxuXHJcbiB0eXBlIENyZWF0ZVByb2R1Y3RCb2R5ID0ge1xyXG4gIEl0ZW06IEl0ZW07XHJcbiAgUmV0dXJuQ29uc3VtZWRDYXBhY2l0eTogc3RyaW5nO1xyXG4gIFRhYmxlTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIEl0ZW0gPSB7XHJcbiAgQWxidW1UaXRsZTogQWxidW1UaXRsZTtcclxuICBBcnRpc3Q6IEFsYnVtVGl0bGU7XHJcbiAgU29uZ1RpdGxlOiBBbGJ1bVRpdGxlO1xyXG59XHJcblxyXG50eXBlIEFsYnVtVGl0bGUgPSB7XHJcbiAgUzogc3RyaW5nO1xyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU2hvcCIsImNvbmZpZyIsImFwaUtleSIsImFwaUVuZFAiLCJnZXRQcm9kdWN0cyIsImNyZWF0ZVByb2R1Y3QiLCJyZXNwb25zZSIsInBvc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJJdGVtIiwicHJvZHVjdElEIiwiUyIsImtleSIsInByb2R1Y3ROYW1lIiwiY29udGFjdEhlcmVUb1B1cmNoYXNlIiwic2hpcHBpbmdPbmxpbmUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJwcmljZSIsIk4iLCJSZXR1cm5Db25zdW1lZENhcGFjaXR5IiwiVGFibGVOYW1lIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useShop.ts\n"));

/***/ })

});