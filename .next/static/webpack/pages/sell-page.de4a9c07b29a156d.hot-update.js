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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useShop; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nfunction useShop() {\n    var apiKey = \"yHFcBOA0TL94BmUYPCdZ49zbOS0LVFBC2qxQT33V\";\n    var apiEndP = \"https://09zlx4b2rl.execute-api.us-west-2.amazonaws.com/Listings/ListingQuery\";\n    var getProducts = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n                // setup the api call to get products\n                // exicute call to get products\n                // await \n                // await fetch()\n                // get the data from the responce\n                // return that data(records)\n                return [\n                    2,\n                    []\n                ];\n            });\n        });\n        return function getProducts() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createProduct = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(ListedData) {\n            var params, response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        params = {\n                            Item: {\n                                listing: ListedData.productID,\n                                productImage: ListedData.productImage,\n                                contactHereToPurchase: ListedData.contactHereToPurchase,\n                                shipping: ListedData.shipping,\n                                Online: ListedData.Online,\n                                productDescription: ListedData.productDescription,\n                                price: ListedData.price\n                            },\n                            ReturnConsumedCapacity: \"TOTAL\",\n                            TableName: \"Listings\"\n                        };\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(apiEndP, params, {\n                                // method: 'POST', \n                                headers: {\n                                    \"Content-Type\": \"application/json\",\n                                    \"x-api-key\": apiKey,\n                                    \"Access-Control-Allow-Origin\": \"*\",\n                                    \"Access-Control-Allow-Credentials\": true\n                                }\n                            }).then(function(response) {\n                                console.log(response);\n                            }).catch(function(error) {\n                                console.log(error);\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        console.log(\"response\", response);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function createProduct(ListedData) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        // getProducts,\n        createProduct: createProduct\n    };\n}\n // var paras = {\n //   Item: {\n //    \"AlbumTitle\": \"Somewhat Famous\", \n //    \"Artist\": \"No One You Know\", \n //    \"SongTitle\":  \"Call Me Today\"\n //   }, \n //   ReturnConsumedCapacity: \"TOTAL\", \n //   TableName: \"Music\"\n //  };\n // productID: {\n //   S:' productKey'},\n // key: {\n // S: 'productKey'}\n // ,\n // productName:{ \"CopyMeme\"},\n // contactHereToPurchase:{S: `Contact shael to purchase`},\n // shippingOnline: {S: \"Shipping/Online(boolean)\"},//stateful,\n // productDescription:{S: \"Copywriting/MemeMaking\"},\n // price:{N: 25} ,  //\"₥25\"\n // },\n // ReturnConsumedCapacity: \"TOTAL\", \n // TableName: \"Listings\"}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VTaG9wLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFTWCxTQUFTQyxPQUFPLEdBQWU7SUFHM0MsSUFBTUMsTUFBTSxHQUFHLDBDQUEwQztJQUN4RCxJQUFNQyxPQUFPLEdBQUksOEVBQTRFO0lBRy9GLElBQU1DLFdBQVc7bUJBQUcsK0ZBQVk7O2dCQUU5QixxQ0FBcUM7Z0JBQ3JDLCtCQUErQjtnQkFDL0IsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLGlDQUFpQztnQkFHakMsNEJBQTRCO2dCQUM1Qjs7O2tCQUFVOztRQUNaLENBQUM7d0JBWEtBLFdBQVc7OztPQVdoQjtJQUVELElBQU1DLGFBQWE7bUJBQUcsNkZBQU9DLFVBQWUsRUFBSztnQkFHdENDLE1BQU0sRUF1QlRDLFFBQVE7Ozs7d0JBdkJMRCxNQUFNLEdBQXFCOzRCQUM5QkUsSUFBSSxFQUNKO2dDQUNHQyxPQUFPLEVBQUVKLFVBQVUsQ0FBQ0ssU0FBUztnQ0FFOUJDLFlBQVksRUFDVE4sVUFBVSxDQUFDTSxZQUFZO2dDQUd0QkMscUJBQXFCLEVBRXJCUCxVQUFVLENBQUNPLHFCQUFxQjtnQ0FDaENDLFFBQVEsRUFBRVIsVUFBVSxDQUFDUSxRQUFRO2dDQUU3QkMsTUFBTSxFQUFFVCxVQUFVLENBQUNTLE1BQU07Z0NBQ3pCQyxrQkFBa0IsRUFBRVYsVUFBVSxDQUFDVSxrQkFBa0I7Z0NBQ2pEQyxLQUFLLEVBQUVYLFVBQVUsQ0FBQ1csS0FBSzs2QkFDNUI7NEJBQ0RDLHNCQUFzQixFQUFFLE9BQU87NEJBQy9CQyxTQUFTLEVBQUUsVUFBVTt5QkFDckIsQ0FBQzt3QkFHVTs7NEJBQU1uQixrREFBVSxDQUFDRyxPQUFPLEVBQUVJLE1BQU0sRUFDakQ7Z0NBQ0UsbUJBQW1CO2dDQUNuQmMsT0FBTyxFQUFFO29DQUNQLGNBQWMsRUFBRSxrQkFBa0I7b0NBRWxDLFdBQVcsRUFBR25CLE1BQU07b0NBRW5CLDZCQUE2QixFQUFFLEdBQUc7b0NBQ25DLGtDQUFrQyxFQUFHLElBQUk7aUNBTzFDOzZCQUVGLENBQUMsQ0FBQ29CLElBQUksQ0FBQyxTQUFVZCxRQUFRLEVBQUU7Z0NBQzFCZSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLFFBQVEsQ0FBQyxDQUFDOzRCQUN4QixDQUFDLENBQUMsQ0FDRGlCLEtBQUssQ0FBQyxTQUFVQyxLQUFLLEVBQUU7Z0NBQ3RCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7NEJBQ3JCLENBQUMsQ0FBQzswQkFBQTs7d0JBdkJJbEIsUUFBUSxHQUFHLGFBdUJmO3dCQUVGZSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVoQixRQUFRLENBQUMsQ0FBQzs7Ozs7O1FBQ3BDLENBQUM7d0JBcERLSCxhQUFhLENBQVVDLFVBQWU7OztPQW9EM0M7SUFFRCxPQUFPO1FBQ0wsZUFBZTtRQUNmRCxhQUFhLEVBQWJBLGFBQWE7S0FDZDtBQUNILENBQUM7QUF3QlcsQ0FJRixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLHVDQUF1QztDQUN2QyxtQ0FBbUM7Q0FDbkMsbUNBQW1DO0NBRW5DLFFBQVE7Q0FDUixzQ0FBc0M7Q0FDdEMsdUJBQXVCO0NBQ3ZCLE1BQU07Q0FHaEIsZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsbUJBQW1CO0NBQ25CLElBQUk7Q0FDSiw2QkFBNkI7Q0FDN0IsMERBQTBEO0NBQzFELDhEQUE4RDtDQUM5RCxvREFBb0Q7Q0FDcEQsMkJBQTJCO0NBQzNCLEtBQUs7Q0FDTCxvQ0FBb0M7Q0FDcEMseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVNob3AudHM/ZjJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJwcm9jZXNzXCI7XHJcblxyXG5cclxudHlwZSBSZXR1cm5UeXBlID0ge1xyXG4gIC8vIGdldFByb2R1Y3RzOiAoKSA9PiBhbnlbXTtcclxuICBjcmVhdGVQcm9kdWN0OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTaG9wKCk6IFJldHVyblR5cGUge1xyXG4gIFxyXG4gXHJcbiAgIGNvbnN0IGFwaUtleSA9ICd5SEZjQk9BMFRMOTRCbVVZUENkWjQ5emJPUzBMVkZCQzJxeFFUMzNWJyA7XHJcbiAgICBjb25zdCBhcGlFbmRQID0gYGh0dHBzOi8vMDl6bHg0YjJybC5leGVjdXRlLWFwaS51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9MaXN0aW5ncy9MaXN0aW5nUXVlcnlgXHJcbiAgXHJcblxyXG4gIGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIC8vIHNldHVwIHRoZSBhcGkgY2FsbCB0byBnZXQgcHJvZHVjdHNcclxuICAgIC8vIGV4aWN1dGUgY2FsbCB0byBnZXQgcHJvZHVjdHNcclxuICAgIC8vIGF3YWl0IFxyXG4gICAgLy8gYXdhaXQgZmV0Y2goKVxyXG4gICAgLy8gZ2V0IHRoZSBkYXRhIGZyb20gdGhlIHJlc3BvbmNlXHJcblxyXG5cclxuICAgIC8vIHJldHVybiB0aGF0IGRhdGEocmVjb3JkcylcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiBcclxuICBjb25zdCBjcmVhdGVQcm9kdWN0ID0gYXN5bmMgKExpc3RlZERhdGE6SXRlbSkgPT4ge1xyXG4gICAgICAgIC8vVE9ETyBhYnN0cmFjdCB0aGlzIHJlc3BvbnNlIGludG8gbmV4dCBhcGkgZm9sZGVyIGZvciBhZGRpdGlvbmFsIHNlY3VyaXR5XHJcblxyXG4gICAgICAgY29uc3QgcGFyYW1zOkNyZWF0ZVByb2R1Y3RCb2R5ID0geyAgLy9ETyBOT1QgU1RSSU5HOyB0aGVyZSBpcyBzdHJpbmdpZnkgaW4gWE1MIGNvbXBpbGF0aW9uLiBBV1MgZHluYW1vIERCIG5lZWRzIHN0cmluZ3NcclxuICAgICAgICAgIEl0ZW06IFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgbGlzdGluZzogTGlzdGVkRGF0YS5wcm9kdWN0SUQsIC8vIG11c3QgYmUgYSBzdHJpbmcgd2l0aCBwYXJ0aXRpb24ga2V5IG9mIGxpc3RpbmcgLy9yZXF1aXJlZFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9kdWN0SW1hZ2U6IFxyXG4gICAgICAgICAgICAgICBMaXN0ZWREYXRhLnByb2R1Y3RJbWFnZSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb250YWN0SGVyZVRvUHVyY2hhc2U6XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgTGlzdGVkRGF0YS5jb250YWN0SGVyZVRvUHVyY2hhc2UsXHJcbiAgICAgICAgICAgICAgICBzaGlwcGluZzogTGlzdGVkRGF0YS5zaGlwcGluZyAsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIE9ubGluZTogTGlzdGVkRGF0YS5PbmxpbmUsLy9zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3REZXNjcmlwdGlvbjogTGlzdGVkRGF0YS5wcm9kdWN0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBwcmljZTogTGlzdGVkRGF0YS5wcmljZSwgICAgLy9cIuKCpTM1XCIgVGhpcyBpcyB0aGUgZm9ybWF0IHRvIGRpc3BsYXkgd2l0aCB0aGUgTWlsbCBzeW1ib2wgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgUmV0dXJuQ29uc3VtZWRDYXBhY2l0eTogXCJUT1RBTFwiLCBcclxuICAgICAgICAgIFRhYmxlTmFtZTogXCJMaXN0aW5nc1wiXHJcbiAgICAgICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChhcGlFbmRQLCBwYXJhbXMsXHJcbiAgICB7IFxyXG4gICAgICAvLyBtZXRob2Q6ICdQT1NUJywgXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIFxyXG4gICAgICAgICd4LWFwaS1rZXknIDogYXBpS2V5LFxyXG4gICAgICAgXHJcbiAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJyA6IHRydWUgLFxyXG4gICAgICAgIC8vRGVwcmljYXRlZCBIZWFkZXJzXHJcbiAgICAgICAgLy8nQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1NZXRob2RzJzogJ1BPU1QsIEFOWSwgT1BUSU9OUycgICxcclxuICAgICAgICAvLydPcmlnaW4nOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gJ0FjY2Vzcy1Db250cm9sLVJlcXVlc3QtSGVhZGVycyc6ICdDb250ZW50LVR5cGUsWC1BbXotRGF0ZSxBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4sQXV0aG9yaXphdGlvbixYLUFwaS1LZXksWC1BbXotU2VjdXJpdHktVG9rZW4nICwgXHJcblxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvLyBnZXRQcm9kdWN0cyxcclxuICAgIGNyZWF0ZVByb2R1Y3RcclxuICB9XHJcbn07XHJcblxyXG5cclxuLy8gdGhpcyBpcyBmb3IgYW5vdGhlciBwYXJ0LCB5b3Uga25vdyA7cFxyXG50eXBlIFRhYmxlTmFtZSA9ICAgc3RyaW5nO1xyXG5cclxuIHR5cGUgQ3JlYXRlUHJvZHVjdEJvZHkgPSB7XHJcbiAgSXRlbTogSXRlbTtcclxuICBSZXR1cm5Db25zdW1lZENhcGFjaXR5OiBzdHJpbmc7XHJcbiAgVGFibGVOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgSXRlbSA9IHtcclxuICBwcm9kdWN0SUQ6IHN0cmluZywgLy8gbXVzdCBiZSBhIHN0cmluZyB3aXRoIHBhcnRpdGlvbiBrZXkgb2YgbGlzdGluZyAvL3JlcXVpcmVkXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2R1Y3RJbWFnZTogXHJcbiAgICAgICAgICAgICAgIG51bGwgfCBCbG9iXHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29udGFjdEhlcmVUb1B1cmNoYXNlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBzaGlwcGluZzogc3RyaW5nIHwgbnVsbCwvL3N0YXRlLFxyXG4gICAgICAgICAgICAgICAgT25saW5lOiBib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdERlc2NyaXB0aW9uOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogbnVtYmVyLCAgICAvL1wi4oKlMzVcIiBUaGlzIGlzIHRoZSBmb3JtYXQgdG8gZGlzcGxheSB3aXRoIHRoZSBNaWxsIHN5bWJvbCBcclxuICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAvLyB2YXIgcGFyYXMgPSB7XHJcbiAgICAgICAgICAvLyAgIEl0ZW06IHtcclxuICAgICAgICAgIC8vICAgIFwiQWxidW1UaXRsZVwiOiBcIlNvbWV3aGF0IEZhbW91c1wiLCBcclxuICAgICAgICAgIC8vICAgIFwiQXJ0aXN0XCI6IFwiTm8gT25lIFlvdSBLbm93XCIsIFxyXG4gICAgICAgICAgLy8gICAgXCJTb25nVGl0bGVcIjogIFwiQ2FsbCBNZSBUb2RheVwiXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAvLyAgIH0sIFxyXG4gICAgICAgICAgLy8gICBSZXR1cm5Db25zdW1lZENhcGFjaXR5OiBcIlRPVEFMXCIsIFxyXG4gICAgICAgICAgLy8gICBUYWJsZU5hbWU6IFwiTXVzaWNcIlxyXG4gICAgICAgICAgLy8gIH07XHJcblxyXG5cclxuLy8gcHJvZHVjdElEOiB7XHJcbi8vICAgUzonIHByb2R1Y3RLZXknfSxcclxuLy8ga2V5OiB7XHJcbi8vIFM6ICdwcm9kdWN0S2V5J31cclxuLy8gLFxyXG4vLyBwcm9kdWN0TmFtZTp7IFwiQ29weU1lbWVcIn0sXHJcbi8vIGNvbnRhY3RIZXJlVG9QdXJjaGFzZTp7UzogYENvbnRhY3Qgc2hhZWwgdG8gcHVyY2hhc2VgfSxcclxuLy8gc2hpcHBpbmdPbmxpbmU6IHtTOiBcIlNoaXBwaW5nL09ubGluZShib29sZWFuKVwifSwvL3N0YXRlZnVsLFxyXG4vLyBwcm9kdWN0RGVzY3JpcHRpb246e1M6IFwiQ29weXdyaXRpbmcvTWVtZU1ha2luZ1wifSxcclxuLy8gcHJpY2U6e046IDI1fSAsICAvL1wi4oKlMjVcIlxyXG4vLyB9LFxyXG4vLyBSZXR1cm5Db25zdW1lZENhcGFjaXR5OiBcIlRPVEFMXCIsIFxyXG4vLyBUYWJsZU5hbWU6IFwiTGlzdGluZ3NcIn0iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTaG9wIiwiYXBpS2V5IiwiYXBpRW5kUCIsImdldFByb2R1Y3RzIiwiY3JlYXRlUHJvZHVjdCIsIkxpc3RlZERhdGEiLCJwYXJhbXMiLCJyZXNwb25zZSIsIkl0ZW0iLCJsaXN0aW5nIiwicHJvZHVjdElEIiwicHJvZHVjdEltYWdlIiwiY29udGFjdEhlcmVUb1B1cmNoYXNlIiwic2hpcHBpbmciLCJPbmxpbmUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJwcmljZSIsIlJldHVybkNvbnN1bWVkQ2FwYWNpdHkiLCJUYWJsZU5hbWUiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useShop.ts\n"));

/***/ })

});