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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useShop; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nfunction useShop() {\n    var apiKey = \"yHFcBOA0TL94BmUYPCdZ49zbOS0LVFBC2qxQT33V\";\n    var apiEndP = \"https://09zlx4b2rl.execute-api.us-west-2.amazonaws.com/Listings/ListingQuery\";\n    var getProducts = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n                // setup the api call to get products\n                // exicute call to get products\n                // await \n                // await fetch()\n                // get the data from the responce\n                // return that data(records)\n                return [\n                    2,\n                    []\n                ];\n            });\n        });\n        return function getProducts() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createProduct = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n            var response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        //TODO abstract this response into next api folder for additional security\n                        params = {\n                            Item: {\n                                listing: \"productKey\",\n                                productImage: null,\n                                productName: \"Kai's Kitchen\",\n                                contactHereToPurchase: \"Contact Kai to purchase\",\n                                shippingOnline: \"Shipping/Online(boolean)\",\n                                productDescription: \"Tasty\",\n                                price: 35\n                            },\n                            ReturnConsumedCapacity: \"TOTAL\",\n                            TableName: \"Listings\"\n                        };\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(apiEndP, params, {\n                                // method: 'POST', \n                                headers: {\n                                    \"Content-Type\": \"application/json\",\n                                    \"x-api-key\": apiKey,\n                                    \"Access-Control-Allow-Origin\": \"*\",\n                                    \"Access-Control-Allow-Credentials\": true\n                                }\n                            }).then(function(response) {\n                                console.log(response);\n                            }).catch(function(error) {\n                                console.log(error);\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        console.log(\"response\", response);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function createProduct() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        // getProducts,\n        createProduct: createProduct\n    };\n}\n// this is for another part, you know ;p\nvar param = {\n    Item: {\n        \"AlbumTitle\": \"Somewhat Famous\",\n        \"Artist\": \"No One You Know\",\n        \"SongTitle\": \"Call Me Today\"\n    },\n    ReturnConsumedCapacity: \"TOTAL\",\n    TableName: \"Music\"\n};\n // productID: {\n //   S:' productKey'},\n // key: {\n // S: 'productKey'}\n // ,\n // productName:{ \"CopyMeme\"},\n // contactHereToPurchase:{S: `Contact shael to purchase`},\n // shippingOnline: {S: \"Shipping/Online(boolean)\"},//stateful,\n // productDescription:{S: \"Copywriting/MemeMaking\"},\n // price:{N: 25} ,  //\"₥25\"\n // },\n // ReturnConsumedCapacity: \"TOTAL\", \n // TableName: \"Listings\"}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VTaG9wLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFTWCxTQUFTQyxPQUFPLEdBQWU7SUFHM0MsSUFBTUMsTUFBTSxHQUFHLDBDQUEwQztJQUN4RCxJQUFNQyxPQUFPLEdBQUksOEVBQTRFO0lBRy9GLElBQU1DLFdBQVc7bUJBQUcsK0ZBQVk7O2dCQUU5QixxQ0FBcUM7Z0JBQ3JDLCtCQUErQjtnQkFDL0IsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLGlDQUFpQztnQkFHakMsNEJBQTRCO2dCQUM1Qjs7O2tCQUFVOztRQUNaLENBQUM7d0JBWEtBLFdBQVc7OztPQVdoQjtJQUVELElBQU1DLGFBQWE7bUJBQUcsK0ZBQVk7Z0JBeUIxQkMsUUFBUTs7Ozt3QkF4QlYsMEVBQTBFO3dCQUUxRUMsTUFBTSxHQUFHOzRCQUNQQyxJQUFJLEVBQ0o7Z0NBQ0dDLE9BQU8sRUFBRyxZQUFVO2dDQUVyQkMsWUFBWSxFQUNULElBQUk7Z0NBRVBDLFdBQVcsRUFDUixlQUFlO2dDQUNkQyxxQkFBcUIsRUFFcEIseUJBQXVCO2dDQUN4QkMsY0FBYyxFQUFFLDBCQUEwQjtnQ0FDMUNDLGtCQUFrQixFQUFFLE9BQU87Z0NBQzNCQyxLQUFLLEVBQUUsRUFBRTs2QkFDZDs0QkFDREMsc0JBQXNCLEVBQUUsT0FBTzs0QkFDL0JDLFNBQVMsRUFBRSxVQUFVO3lCQUNyQixDQUFDO3dCQUdVOzs0QkFBTWpCLGtEQUFVLENBQUNHLE9BQU8sRUFBRUksTUFBTSxFQUNqRDtnQ0FDRSxtQkFBbUI7Z0NBQ25CWSxPQUFPLEVBQUU7b0NBQ1AsY0FBYyxFQUFFLGtCQUFrQjtvQ0FFbEMsV0FBVyxFQUFHakIsTUFBTTtvQ0FFbkIsNkJBQTZCLEVBQUUsR0FBRztvQ0FDbkMsa0NBQWtDLEVBQUcsSUFBSTtpQ0FPMUM7NkJBRUYsQ0FBQyxDQUFDa0IsSUFBSSxDQUFDLFNBQVVkLFFBQVEsRUFBRTtnQ0FDMUJlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaEIsUUFBUSxDQUFDLENBQUM7NEJBQ3hCLENBQUMsQ0FBQyxDQUNEaUIsS0FBSyxDQUFDLFNBQVVDLEtBQUssRUFBRTtnQ0FDdEJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxLQUFLLENBQUMsQ0FBQzs0QkFDckIsQ0FBQyxDQUFDOzBCQUFBOzt3QkF2QklsQixRQUFRLEdBQUcsYUF1QmY7d0JBRUZlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRWhCLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7UUFDcEMsQ0FBQzt3QkFuREtELGFBQWE7OztPQW1EbEI7SUFFRCxPQUFPO1FBQ0wsZUFBZTtRQUNmQSxhQUFhLEVBQWJBLGFBQWE7S0FDZDtBQUNILENBQUM7QUFHRCx3Q0FBd0M7QUFFeEMsSUFBSW9CLEtBQUssR0FBRztJQUNWakIsSUFBSSxFQUFFO1FBQ0wsWUFBWSxFQUFFLGlCQUFpQjtRQUMvQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRyxlQUFlO0tBRTdCO0lBQ0RRLHNCQUFzQixFQUFFLE9BQU87SUFDL0JDLFNBQVMsRUFBRSxPQUFPO0NBQ2xCO0FBY3lCLENBRzNCLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULG1CQUFtQjtDQUNuQixJQUFJO0NBQ0osNkJBQTZCO0NBQzdCLDBEQUEwRDtDQUMxRCw4REFBOEQ7Q0FDOUQsb0RBQW9EO0NBQ3BELDJCQUEyQjtDQUMzQixLQUFLO0NBQ0wsb0NBQW9DO0NBQ3BDLHlCQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VTaG9wLnRzP2YyYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwicHJvY2Vzc1wiO1xyXG5cclxuXHJcbnR5cGUgUmV0dXJuVHlwZSA9IHtcclxuICAvLyBnZXRQcm9kdWN0czogKCkgPT4gYW55W107XHJcbiAgY3JlYXRlUHJvZHVjdDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2hvcCgpOiBSZXR1cm5UeXBlIHtcclxuICBcclxuIFxyXG4gICBjb25zdCBhcGlLZXkgPSAneUhGY0JPQTBUTDk0Qm1VWVBDZFo0OXpiT1MwTFZGQkMycXhRVDMzVicgO1xyXG4gICAgY29uc3QgYXBpRW5kUCA9IGBodHRwczovLzA5emx4NGIycmwuZXhlY3V0ZS1hcGkudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vTGlzdGluZ3MvTGlzdGluZ1F1ZXJ5YFxyXG4gIFxyXG5cclxuICBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAvLyBzZXR1cCB0aGUgYXBpIGNhbGwgdG8gZ2V0IHByb2R1Y3RzXHJcbiAgICAvLyBleGljdXRlIGNhbGwgdG8gZ2V0IHByb2R1Y3RzXHJcbiAgICAvLyBhd2FpdCBcclxuICAgIC8vIGF3YWl0IGZldGNoKClcclxuICAgIC8vIGdldCB0aGUgZGF0YSBmcm9tIHRoZSByZXNwb25jZVxyXG5cclxuXHJcbiAgICAvLyByZXR1cm4gdGhhdCBkYXRhKHJlY29yZHMpXHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gXHJcbiAgY29uc3QgY3JlYXRlUHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvL1RPRE8gYWJzdHJhY3QgdGhpcyByZXNwb25zZSBpbnRvIG5leHQgYXBpIGZvbGRlciBmb3IgYWRkaXRpb25hbCBzZWN1cml0eVxyXG5cclxuICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICBJdGVtOiBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgIGxpc3Rpbmc6IGBwcm9kdWN0S2V5YCwgLy8gbXVzdCBiZSBhIHN0cmluZyB3aXRoIHBhcnRpdGlvbiBrZXkgb2YgbGlzdGluZyAvL3JlcXVpcmVkXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2R1Y3RJbWFnZTogXHJcbiAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICBwcm9kdWN0TmFtZTpcclxuICAgICAgICAgICAgICAgXCJLYWkncyBLaXRjaGVuXCIsXHJcbiAgICAgICAgICAgICAgICBjb250YWN0SGVyZVRvUHVyY2hhc2U6XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYENvbnRhY3QgS2FpIHRvIHB1cmNoYXNlYCxcclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nT25saW5lOiBcIlNoaXBwaW5nL09ubGluZShib29sZWFuKVwiLC8vc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGVzY3JpcHRpb246IFwiVGFzdHlcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiAzNSwgICAgLy9cIuKCpTM1XCIgLy9hbGwgQVdTIGR5bmFtbyBEQiBuZWVkcyBzdHJpbmdzXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgUmV0dXJuQ29uc3VtZWRDYXBhY2l0eTogXCJUT1RBTFwiLCBcclxuICAgICAgICAgIFRhYmxlTmFtZTogXCJMaXN0aW5nc1wiXHJcbiAgICAgICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChhcGlFbmRQLCBwYXJhbXMsXHJcbiAgICB7IFxyXG4gICAgICAvLyBtZXRob2Q6ICdQT1NUJywgXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIFxyXG4gICAgICAgICd4LWFwaS1rZXknIDogYXBpS2V5LFxyXG4gICAgICAgXHJcbiAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJyA6IHRydWUgLFxyXG4gICAgICAgIC8vRGVwcmljYXRlZCBIZWFkZXJzXHJcbiAgICAgICAgLy8nQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1NZXRob2RzJzogJ1BPU1QsIEFOWSwgT1BUSU9OUycgICxcclxuICAgICAgICAvLydPcmlnaW4nOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gJ0FjY2Vzcy1Db250cm9sLVJlcXVlc3QtSGVhZGVycyc6ICdDb250ZW50LVR5cGUsWC1BbXotRGF0ZSxBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4sQXV0aG9yaXphdGlvbixYLUFwaS1LZXksWC1BbXotU2VjdXJpdHktVG9rZW4nICwgXHJcblxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvLyBnZXRQcm9kdWN0cyxcclxuICAgIGNyZWF0ZVByb2R1Y3RcclxuICB9XHJcbn07XHJcblxyXG5cclxuLy8gdGhpcyBpcyBmb3IgYW5vdGhlciBwYXJ0LCB5b3Uga25vdyA7cFxyXG5cclxudmFyIHBhcmFtID0ge1xyXG4gIEl0ZW06IHtcclxuICAgXCJBbGJ1bVRpdGxlXCI6IFwiU29tZXdoYXQgRmFtb3VzXCIsIFxyXG4gICBcIkFydGlzdFwiOiBcIk5vIE9uZSBZb3UgS25vd1wiLCBcclxuICAgXCJTb25nVGl0bGVcIjogIFwiQ2FsbCBNZSBUb2RheVwiXHJcbiAgICBcclxuICB9LCBcclxuICBSZXR1cm5Db25zdW1lZENhcGFjaXR5OiBcIlRPVEFMXCIsIFxyXG4gIFRhYmxlTmFtZTogXCJNdXNpY1wiXHJcbiB9O1xyXG5cclxuIHR5cGUgQ3JlYXRlUHJvZHVjdEJvZHkgPSB7XHJcbiAgSXRlbTogSXRlbTtcclxuICBSZXR1cm5Db25zdW1lZENhcGFjaXR5OiBzdHJpbmc7XHJcbiAgVGFibGVOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgSXRlbSA9IHtcclxuICBBbGJ1bVRpdGxlOiBBbGJ1bVRpdGxlO1xyXG4gIEFydGlzdDogQWxidW1UaXRsZTtcclxuICBTb25nVGl0bGU6IEFsYnVtVGl0bGU7XHJcbn1cclxuXHJcbnR5cGUgQWxidW1UaXRsZSA9ICAgc3RyaW5nO1xyXG5cclxuXHJcbi8vIHByb2R1Y3RJRDoge1xyXG4vLyAgIFM6JyBwcm9kdWN0S2V5J30sXHJcbi8vIGtleToge1xyXG4vLyBTOiAncHJvZHVjdEtleSd9XHJcbi8vICxcclxuLy8gcHJvZHVjdE5hbWU6eyBcIkNvcHlNZW1lXCJ9LFxyXG4vLyBjb250YWN0SGVyZVRvUHVyY2hhc2U6e1M6IGBDb250YWN0IHNoYWVsIHRvIHB1cmNoYXNlYH0sXHJcbi8vIHNoaXBwaW5nT25saW5lOiB7UzogXCJTaGlwcGluZy9PbmxpbmUoYm9vbGVhbilcIn0sLy9zdGF0ZWZ1bCxcclxuLy8gcHJvZHVjdERlc2NyaXB0aW9uOntTOiBcIkNvcHl3cml0aW5nL01lbWVNYWtpbmdcIn0sXHJcbi8vIHByaWNlOntOOiAyNX0gLCAgLy9cIuKCpTI1XCJcclxuLy8gfSxcclxuLy8gUmV0dXJuQ29uc3VtZWRDYXBhY2l0eTogXCJUT1RBTFwiLCBcclxuLy8gVGFibGVOYW1lOiBcIkxpc3RpbmdzXCJ9Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU2hvcCIsImFwaUtleSIsImFwaUVuZFAiLCJnZXRQcm9kdWN0cyIsImNyZWF0ZVByb2R1Y3QiLCJyZXNwb25zZSIsInBhcmFtcyIsIkl0ZW0iLCJsaXN0aW5nIiwicHJvZHVjdEltYWdlIiwicHJvZHVjdE5hbWUiLCJjb250YWN0SGVyZVRvUHVyY2hhc2UiLCJzaGlwcGluZ09ubGluZSIsInByb2R1Y3REZXNjcmlwdGlvbiIsInByaWNlIiwiUmV0dXJuQ29uc3VtZWRDYXBhY2l0eSIsIlRhYmxlTmFtZSIsInBvc3QiLCJoZWFkZXJzIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwicGFyYW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useShop.ts\n"));

/***/ })

});