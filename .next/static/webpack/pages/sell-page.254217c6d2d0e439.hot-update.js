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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useShop; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nfunction useShop() {\n    var config = {\n        apiKey: \"yHFcBOA0TL94BmUYPCdZ49zbOS0LVFBC2qxQT33V\",\n        apiEndP: \"https://09zlx4b2rl.execute-api.us-west-2.amazonaws.com/Listings/ListingQuery\"\n    };\n    var getProducts = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n                // setup the api call to get products\n                // exicute call to get products\n                // await \n                // await fetch()\n                // get the data from the responce\n                // return that data(records)\n                return [\n                    2,\n                    []\n                ];\n            });\n        });\n        return function getProducts() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createProduct = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n            var response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(config.apiEndP, {\n                                method: \"POST\",\n                                headers: {\n                                    \"Content-Type\": \"application/json\",\n                                    \"Origin\": \"http://localhost:3000/\",\n                                    \"Access-Control-Request-Methods\": \"POST, ANY, OPTIONS\",\n                                    \"Access-Control-Request-Headers\": \"Content-Type, Authorization, X-Requested-With\",\n                                    \"Access-Control-Allow-Credentials\": true,\n                                    \"x-api-key\": config.apiKey\n                                },\n                                body: JSON.stringify({\n                                    Item: {\n                                        listing: {\n                                            S: \" productKey\"\n                                        },\n                                        productName: {\n                                            S: \"Kai's Kitchen\"\n                                        },\n                                        contactHereToPurchase: {\n                                            S: \"Contact Kai to purchase\"\n                                        },\n                                        shippingOnline: {\n                                            S: \"Shipping/Online(boolean)\"\n                                        },\n                                        productDescription: {\n                                            S: \"Tasty\"\n                                        },\n                                        price: {\n                                            N: \"35\"\n                                        }\n                                    },\n                                    ReturnConsumedCapacity: \"TOTAL\",\n                                    TableName: \"Listings\"\n                                })\n                            }).then(function(response) {\n                                console.log(response);\n                            }).catch(function(error) {\n                                console.log(error);\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        console.log(\"response\", response);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function createProduct() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        // getProducts,\n        createProduct: createProduct\n    };\n}\n// this is for another part, you know ;p\nvar params = {\n    Item: {\n        \"AlbumTitle\": {\n            S: \"Somewhat Famous\"\n        },\n        \"Artist\": {\n            S: \"No One You Know\"\n        },\n        \"SongTitle\": {\n            S: \"Call Me Today\"\n        }\n    },\n    ReturnConsumedCapacity: \"TOTAL\",\n    TableName: \"Music\"\n};\n // productID: {\n //   S:' productKey'},\n // key: {\n // S: 'productKey'}\n // ,\n // productName:{ \"CopyMeme\"},\n // contactHereToPurchase:{S: `Contact shael to purchase`},\n // shippingOnline: {S: \"Shipping/Online(boolean)\"},//stateful,\n // productDescription:{S: \"Copywriting/MemeMaking\"},\n // price:{N: 25} ,  //\"₥25\"\n // },\n // ReturnConsumedCapacity: \"TOTAL\", \n // TableName: \"Listings\"}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VTaG9wLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFRWCxTQUFTQyxPQUFPLEdBQWU7SUFFNUMsSUFBTUMsTUFBTSxHQUFHO1FBQ2JDLE1BQU0sRUFBRSwwQ0FBMEM7UUFDbERDLE9BQU8sRUFBRSw4RUFBOEU7S0FDeEY7SUFFRCxJQUFNQyxXQUFXO21CQUFHLCtGQUFZOztnQkFFOUIscUNBQXFDO2dCQUNyQywrQkFBK0I7Z0JBQy9CLFNBQVM7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixpQ0FBaUM7Z0JBR2pDLDRCQUE0QjtnQkFDNUI7OztrQkFBVTs7UUFDWixDQUFDO3dCQVhLQSxXQUFXOzs7T0FXaEI7SUFFRCxJQUFNQyxhQUFhO21CQUFHLCtGQUFZO2dCQUUxQkMsUUFBUTs7Ozt3QkFBRzs7NEJBQU1QLGtEQUFVLENBQUNFLE1BQU0sQ0FBQ0UsT0FBTyxFQUNoRDtnQ0FDRUssTUFBTSxFQUFFLE1BQU07Z0NBQ2RDLE9BQU8sRUFBRTtvQ0FDUCxjQUFjLEVBQUUsa0JBQWtCO29DQUNsQyxRQUFRLEVBQUUsd0JBQXdCO29DQUNsQyxnQ0FBZ0MsRUFBRSxvQkFBb0I7b0NBQ3RELGdDQUFnQyxFQUFFLCtDQUErQztvQ0FDakYsa0NBQWtDLEVBQUcsSUFBSTtvQ0FDekMsV0FBVyxFQUFHUixNQUFNLENBQUNDLE1BQU07aUNBRTVCO2dDQUNEUSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO29DQUNuQkMsSUFBSSxFQUNKO3dDQUNFQyxPQUFPLEVBQUU7NENBQ1BDLENBQUMsRUFBQyxhQUFhO3lDQUFDO3dDQUdsQkMsV0FBVyxFQUFDOzRDQUNWRCxDQUFDLEVBQUUsZUFBZTt5Q0FBQzt3Q0FDakJFLHFCQUFxQixFQUFDOzRDQUNwQkYsQ0FBQyxFQUNGLHlCQUF1Qjt5Q0FBRTt3Q0FDMUJHLGNBQWMsRUFBQzs0Q0FBRUgsQ0FBQyxFQUFFLDBCQUEwQjt5Q0FBQzt3Q0FDL0NJLGtCQUFrQixFQUFDOzRDQUFFSixDQUFDLEVBQUUsT0FBTzt5Q0FBQzt3Q0FDaENLLEtBQUssRUFBRTs0Q0FBQ0MsQ0FBQyxFQUFFLElBQUk7eUNBQUM7cUNBQ3JCO29DQWFEQyxzQkFBc0IsRUFBRSxPQUFPO29DQUMvQkMsU0FBUyxFQUFFLFVBQVU7aUNBQ3JCLENBQUM7NkJBQ0osQ0FBQyxDQUFDQyxJQUFJLENBQUMsU0FBVWxCLFFBQVEsRUFBRTtnQ0FDMUJtQixPQUFPLENBQUNDLEdBQUcsQ0FBQ3BCLFFBQVEsQ0FBQyxDQUFDOzRCQUN4QixDQUFDLENBQUMsQ0FDRHFCLEtBQUssQ0FBQyxTQUFVQyxLQUFLLEVBQUU7Z0NBQ3RCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7NEJBQ3JCLENBQUMsQ0FBQzswQkFBQTs7d0JBaERJdEIsUUFBUSxHQUFHLGFBZ0RmO3dCQUVGbUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFcEIsUUFBUSxDQUFDLENBQUM7Ozs7OztRQUNwQyxDQUFDO3dCQXJES0QsYUFBYTs7O09BcURsQjtJQUVELE9BQU87UUFDTCxlQUFlO1FBQ2ZBLGFBQWEsRUFBYkEsYUFBYTtLQUNkO0FBQ0gsQ0FBQztBQUdELHdDQUF3QztBQUV4QyxJQUFJd0IsTUFBTSxHQUFHO0lBQ1hoQixJQUFJLEVBQUU7UUFDTCxZQUFZLEVBQUU7WUFDWkUsQ0FBQyxFQUFFLGlCQUFpQjtTQUNwQjtRQUNGLFFBQVEsRUFBRTtZQUNSQSxDQUFDLEVBQUUsaUJBQWlCO1NBQ3BCO1FBQ0YsV0FBVyxFQUFFO1lBQ1hBLENBQUMsRUFBRSxlQUFlO1NBQ2xCO0tBQ0Y7SUFDRE8sc0JBQXNCLEVBQUUsT0FBTztJQUMvQkMsU0FBUyxFQUFFLE9BQU87Q0FDbEI7QUFnQkQsQ0FFRCxlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxtQkFBbUI7Q0FDbkIsSUFBSTtDQUNKLDZCQUE2QjtDQUM3QiwwREFBMEQ7Q0FDMUQsOERBQThEO0NBQzlELG9EQUFvRDtDQUNwRCwyQkFBMkI7Q0FDM0IsS0FBSztDQUNMLG9DQUFvQztDQUNwQyx5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlU2hvcC50cz9mMmEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG50eXBlIFJldHVyblR5cGUgPSB7XHJcbiAgLy8gZ2V0UHJvZHVjdHM6ICgpID0+IGFueVtdO1xyXG4gIGNyZWF0ZVByb2R1Y3Q6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNob3AoKTogUmV0dXJuVHlwZSB7XHJcblxyXG4gIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogJ3lIRmNCT0EwVEw5NEJtVVlQQ2RaNDl6Yk9TMExWRkJDMnF4UVQzM1YnICxcclxuICAgIGFwaUVuZFA6ICdodHRwczovLzA5emx4NGIycmwuZXhlY3V0ZS1hcGkudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vTGlzdGluZ3MvTGlzdGluZ1F1ZXJ5J1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgLy8gc2V0dXAgdGhlIGFwaSBjYWxsIHRvIGdldCBwcm9kdWN0c1xyXG4gICAgLy8gZXhpY3V0ZSBjYWxsIHRvIGdldCBwcm9kdWN0c1xyXG4gICAgLy8gYXdhaXQgXHJcbiAgICAvLyBhd2FpdCBmZXRjaCgpXHJcbiAgICAvLyBnZXQgdGhlIGRhdGEgZnJvbSB0aGUgcmVzcG9uY2VcclxuXHJcblxyXG4gICAgLy8gcmV0dXJuIHRoYXQgZGF0YShyZWNvcmRzKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlUHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvL1RPRE8gYWJzdHJhY3QgdGhpcyByZXNwb25zZSBpbnRvIG5leHQgYXBpIGZvbGRlciBmb3IgYWRkaXRpb25hbCBzZWN1cml0eVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGNvbmZpZy5hcGlFbmRQLCBcclxuICAgIHsgXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLCBcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ09yaWdpbic6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1NZXRob2RzJzogJ1BPU1QsIEFOWSwgT1BUSU9OUycgICxcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1IZWFkZXJzJzogJ0NvbnRlbnQtVHlwZSwgQXV0aG9yaXphdGlvbiwgWC1SZXF1ZXN0ZWQtV2l0aCcgLCBcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnIDogdHJ1ZSAsXHJcbiAgICAgICAgJ3gtYXBpLWtleScgOiBjb25maWcuYXBpS2V5LFxyXG5cclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIEl0ZW06IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxpc3Rpbmc6IHtcclxuICAgICAgICAgICAgUzonIHByb2R1Y3RLZXknfSwgLy8gbXVzdCBiZSBhIHN0cmluZyB3aXRoIHBhcnRpdGlvbiBrZXkgb2YgbGlzdGluZyAvL3JlcXVpcmVkXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBwcm9kdWN0TmFtZTp7XHJcbiAgICAgICAgICAgIFM6IFwiS2FpJ3MgS2l0Y2hlblwifSxcclxuICAgICAgICAgICAgICBjb250YWN0SGVyZVRvUHVyY2hhc2U6e1xyXG4gICAgICAgICAgICAgICAgUzpcclxuICAgICAgICAgICAgICBgQ29udGFjdCBLYWkgdG8gcHVyY2hhc2VgfSxcclxuICAgICAgICAgICAgICBzaGlwcGluZ09ubGluZTp7IFM6IFwiU2hpcHBpbmcvT25saW5lKGJvb2xlYW4pXCJ9LC8vc3RhdGUsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdERlc2NyaXB0aW9uOnsgUzogXCJUYXN0eVwifSxcclxuICAgICAgICAgICAgICBwcmljZToge046IFwiMzVcIn0sICAgIC8vXCLigqUzNVwiIC8vYWxsIEFXUyBkeW5hbW8gREIgbmVlZHMgc3RyaW5nc1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gIFwiQWxidW1UaXRsZVwiOiB7XHJcbiAgICAgICAgLy8gICAgUzogXCJTb21ld2hhdCBGYW1vdXNcIlxyXG4gICAgICAgIC8vICAgfSwgXHJcbiAgICAgICAgLy8gIFwiQXJ0aXN0XCI6IHtcclxuICAgICAgICAvLyAgICBTOiBcIk5vIE9uZSBZb3UgS25vd1wiXHJcbiAgICAgICAgLy8gICB9LCBcclxuICAgICAgICAvLyAgXCJTb25nVGl0bGVcIjoge1xyXG4gICAgICAgIC8vICAgIFM6IFwiQ2FsbCBNZSBUb2RheVwiXHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfSwgXHJcbiAgICAgICAgLFxyXG4gICAgICAgIFJldHVybkNvbnN1bWVkQ2FwYWNpdHk6IFwiVE9UQUxcIiwgXHJcbiAgICAgICAgVGFibGVOYW1lOiBcIkxpc3RpbmdzXCJcclxuICAgICAgIH0pXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLy8gZ2V0UHJvZHVjdHMsXHJcbiAgICBjcmVhdGVQcm9kdWN0XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbi8vIHRoaXMgaXMgZm9yIGFub3RoZXIgcGFydCwgeW91IGtub3cgO3BcclxuXHJcbnZhciBwYXJhbXMgPSB7XHJcbiAgSXRlbToge1xyXG4gICBcIkFsYnVtVGl0bGVcIjoge1xyXG4gICAgIFM6IFwiU29tZXdoYXQgRmFtb3VzXCJcclxuICAgIH0sIFxyXG4gICBcIkFydGlzdFwiOiB7XHJcbiAgICAgUzogXCJObyBPbmUgWW91IEtub3dcIlxyXG4gICAgfSwgXHJcbiAgIFwiU29uZ1RpdGxlXCI6IHtcclxuICAgICBTOiBcIkNhbGwgTWUgVG9kYXlcIlxyXG4gICAgfVxyXG4gIH0sIFxyXG4gIFJldHVybkNvbnN1bWVkQ2FwYWNpdHk6IFwiVE9UQUxcIiwgXHJcbiAgVGFibGVOYW1lOiBcIk11c2ljXCJcclxuIH07XHJcblxyXG4gdHlwZSBDcmVhdGVQcm9kdWN0Qm9keSA9IHtcclxuICBJdGVtOiBJdGVtO1xyXG4gIFJldHVybkNvbnN1bWVkQ2FwYWNpdHk6IHN0cmluZztcclxuICBUYWJsZU5hbWU6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBJdGVtID0ge1xyXG4gIEFsYnVtVGl0bGU6IEFsYnVtVGl0bGU7XHJcbiAgQXJ0aXN0OiBBbGJ1bVRpdGxlO1xyXG4gIFNvbmdUaXRsZTogQWxidW1UaXRsZTtcclxufVxyXG5cclxudHlwZSBBbGJ1bVRpdGxlID0ge1xyXG4gIFM6IHN0cmluZztcclxufVxyXG5cclxuLy8gcHJvZHVjdElEOiB7XHJcbi8vICAgUzonIHByb2R1Y3RLZXknfSxcclxuLy8ga2V5OiB7XHJcbi8vIFM6ICdwcm9kdWN0S2V5J31cclxuLy8gLFxyXG4vLyBwcm9kdWN0TmFtZTp7IFwiQ29weU1lbWVcIn0sXHJcbi8vIGNvbnRhY3RIZXJlVG9QdXJjaGFzZTp7UzogYENvbnRhY3Qgc2hhZWwgdG8gcHVyY2hhc2VgfSxcclxuLy8gc2hpcHBpbmdPbmxpbmU6IHtTOiBcIlNoaXBwaW5nL09ubGluZShib29sZWFuKVwifSwvL3N0YXRlZnVsLFxyXG4vLyBwcm9kdWN0RGVzY3JpcHRpb246e1M6IFwiQ29weXdyaXRpbmcvTWVtZU1ha2luZ1wifSxcclxuLy8gcHJpY2U6e046IDI1fSAsICAvL1wi4oKlMjVcIlxyXG4vLyB9LFxyXG4vLyBSZXR1cm5Db25zdW1lZENhcGFjaXR5OiBcIlRPVEFMXCIsIFxyXG4vLyBUYWJsZU5hbWU6IFwiTGlzdGluZ3NcIn0iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTaG9wIiwiY29uZmlnIiwiYXBpS2V5IiwiYXBpRW5kUCIsImdldFByb2R1Y3RzIiwiY3JlYXRlUHJvZHVjdCIsInJlc3BvbnNlIiwicG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIkl0ZW0iLCJsaXN0aW5nIiwiUyIsInByb2R1Y3ROYW1lIiwiY29udGFjdEhlcmVUb1B1cmNoYXNlIiwic2hpcHBpbmdPbmxpbmUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJwcmljZSIsIk4iLCJSZXR1cm5Db25zdW1lZENhcGFjaXR5IiwiVGFibGVOYW1lIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwicGFyYW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useShop.ts\n"));

/***/ })

});