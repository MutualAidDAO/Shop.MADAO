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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_listing_view_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/listing-view-background */ \"./components/listing-view-background.tsx\");\n/* harmony import */ var _hooks_useShop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useShop */ \"./hooks/useShop.ts\");\nvar _this = undefined;\n\n\n\n//----------------------------------------------------------------------\n// const productKey =    'something'               //\"productID\" + (Math.random() * 10000).toFixed(0) + Math.random().toString()\n// const testingArray = [\n//   {\n//     productID: productKey,\n//    key:  productKey\n//     ,\n//     productName:\"Kai's Kitchen\",\n//         contactHereToPurchase:`Contact Kai to purchase`,\n//         shippingOnline:\"Shipping/Online(boolean)\",//state,\n//         productDescription:\"Tasty\",\n//         price:\"₥35\",\n//   }, {\n//     productID: productKey,\n//     key: productKey\n//     ,\n//     productName:\"FlowerBouqets\",\n//         contactHereToPurchase:`Contact Sheridan to purchase`,\n//         shippingOnline:\"Shipping/Online(boolean)\",//state,\n//         productDescription:\"Smells Great\",\n//         price:\"₥70\",\n//   },\n//   {productID: productKey,\n//     key:  productKey\n//     , \n//     productName:\"CopyMeme\",\n//         contactHereToPurchase:`Contact shael to purchase`,\n//         shippingOnline:\"Shipping/Online(boolean)\",//stateful,\n//         productDescription:\"Copywriting/MemeMaking\",\n//         price:\"₥25\",\n//   }\n// ]\n//-------------------------------------------------------------------------------\n// props: {\n//   productID: string;\n//   key: string;\n//   productName: string;\n//   contactHereToPurchase: string;\n//   shipping: string;\n//   Online: boolean;\n//   productDescription: string;\n//   price: string;\n// }[]\n//---------------------------------AI Gen Code below------------------------------\nvar loading = false; // flag to prevent multiple load requests\nvar lastEvaluatedKey; // variable to store the last evaluated key for pagination\nvar getProducts = (0,_hooks_useShop__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().getProducts;\nfunction loadMoreItems() {\n    if (loading) {\n        return;\n    }\n    loading = true;\n    // Set up the parameters for the DynamoDB Query operation\n    var params = {\n        TableName: \"Listings\",\n        ExclusiveStartKey: lastEvaluatedKey,\n        Limit: 20 // number of items to load per request\n    };\n    var data = getProducts(params);\n    // Append the new items to the page\n    // data.Items.forEach(item => {\n    //   // const element = document.createElement('div');\n    //   // element.innerHTML = `<p>${item.name}</p><p>${item.description}</p>`;\n    //   // document.getElementById('items').appendChild(element);\n    // });\n    // Update the last evaluated key and loading flag\n    lastEvaluatedKey = data.LastEvaluatedKey;\n    loading = false;\n}\n// Attach the loadMoreItems function to the scroll event of the window\nif (true) {\n    window.addEventListener(\"scroll\", function() {\n        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {\n            loadMoreItems();\n        }\n    });\n}\n// Load the first set of items\nloadMoreItems();\n//-------------------------AI Gen Code above------------------------\nvar Index = function(props) {\n    // const [loadedListings,setLoadedListings] = useState(String[]);\n    // useEffect(() =>{\n    //   //send GET request with this\n    //     setLoadedListings(testingArray);\n    // },[]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative bg-blue w-screen h-screen flex flex-col items-start justify-start gap-[0px] md:h-screen md:w-screen md:min-h-[950]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_listing_view_background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\15054\\\\Documents\\\\GitHub\\\\Shop.MADAO\\\\pages\\\\index.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\15054\\\\Documents\\\\GitHub\\\\Shop.MADAO\\\\pages\\\\index.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, _this);\n};\n_c = Index;\n// export async function getStaticProps() {\n// const GEThandle = async () => {\n//   let listingsGET:\n//   await fetch('/api/GEThandle', {\n//     method:'GET',\n//     body: JSON.stringify(listingsGET),\n//     headers: {\n//       'Content-Type':\"application/json\"\n//     }\n//   })\n//   return \n// }\n//   const listingsArray = await listingsGET.find().toArray();\n//   console.log(result);\n//   return {\n//     props: {\n//       ListingsContent: listingsArray.map( (Listings) =>({\n//         price: Listings.price,\n//         productID: Listings.productID,\n//         productName: Listings.productName,\n//         // contactHereToPurchase: Listings.contactHereToPurchase,\n//         // shipping: Listings.shipping,\n//         // Online: Listings.Online,\n//         // productDescription: Listings.productDescription,\n//         image: Listings.image\n//     } ))\n// }, // will be passed to the page component as props\n// revalidate: 300\n// }};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7QUFJTiw4REFBOEQ7QUFFOUQseUJBQXlCO0FBRXpCLGFBQWE7QUFDYixlQUFlO0FBQ2YsNERBQTREO0FBQzVELGlDQUFpQztBQUNqQyx5Q0FBeUM7QUFFekMsNkNBQTZDO0FBQzdDLG9FQUFvRTtBQUNwRSwwQ0FBMEM7QUFDMUMsc0NBQXNDO0FBQ3RDLDhEQUE4RDtBQUM5RCxnQ0FBZ0M7QUFDaEMsV0FBVztBQUNYLHNEQUFzRDtBQUN0RCxrQkFBa0I7QUFDbEIsTUFBTTtBQUdOLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGlzdGluZ1ZpZXdCYWNrZ3JvdW5kIGZyb20gXCIuLi9jb21wb25lbnRzL2xpc3Rpbmctdmlldy1iYWNrZ3JvdW5kXCI7XG5cbmltcG9ydCB1c2VTaG9wIGZyb20gJy4uL2hvb2tzL3VzZVNob3AnXG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBjb25zdCBwcm9kdWN0S2V5ID0gICAgJ3NvbWV0aGluZycgICAgICAgICAgICAgICAvL1wicHJvZHVjdElEXCIgKyAoTWF0aC5yYW5kb20oKSAqIDEwMDAwKS50b0ZpeGVkKDApICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygpXG4vLyBjb25zdCB0ZXN0aW5nQXJyYXkgPSBbXG4vLyAgIHtcbi8vICAgICBwcm9kdWN0SUQ6IHByb2R1Y3RLZXksXG4vLyAgICBrZXk6ICBwcm9kdWN0S2V5XG4vLyAgICAgLFxuLy8gICAgIHByb2R1Y3ROYW1lOlwiS2FpJ3MgS2l0Y2hlblwiLFxuLy8gICAgICAgICBjb250YWN0SGVyZVRvUHVyY2hhc2U6YENvbnRhY3QgS2FpIHRvIHB1cmNoYXNlYCxcbi8vICAgICAgICAgc2hpcHBpbmdPbmxpbmU6XCJTaGlwcGluZy9PbmxpbmUoYm9vbGVhbilcIiwvL3N0YXRlLFxuLy8gICAgICAgICBwcm9kdWN0RGVzY3JpcHRpb246XCJUYXN0eVwiLFxuLy8gICAgICAgICBwcmljZTpcIuKCpTM1XCIsXG4vLyAgIH0sIHtcbi8vICAgICBwcm9kdWN0SUQ6IHByb2R1Y3RLZXksXG4vLyAgICAga2V5OiBwcm9kdWN0S2V5XG4vLyAgICAgLFxuLy8gICAgIHByb2R1Y3ROYW1lOlwiRmxvd2VyQm91cWV0c1wiLFxuLy8gICAgICAgICBjb250YWN0SGVyZVRvUHVyY2hhc2U6YENvbnRhY3QgU2hlcmlkYW4gdG8gcHVyY2hhc2VgLFxuLy8gICAgICAgICBzaGlwcGluZ09ubGluZTpcIlNoaXBwaW5nL09ubGluZShib29sZWFuKVwiLC8vc3RhdGUsXG4vLyAgICAgICAgIHByb2R1Y3REZXNjcmlwdGlvbjpcIlNtZWxscyBHcmVhdFwiLFxuLy8gICAgICAgICBwcmljZTpcIuKCpTcwXCIsXG4vLyAgIH0sXG4vLyAgIHtwcm9kdWN0SUQ6IHByb2R1Y3RLZXksXG4vLyAgICAga2V5OiAgcHJvZHVjdEtleVxuLy8gICAgICwgXG4vLyAgICAgcHJvZHVjdE5hbWU6XCJDb3B5TWVtZVwiLFxuLy8gICAgICAgICBjb250YWN0SGVyZVRvUHVyY2hhc2U6YENvbnRhY3Qgc2hhZWwgdG8gcHVyY2hhc2VgLFxuLy8gICAgICAgICBzaGlwcGluZ09ubGluZTpcIlNoaXBwaW5nL09ubGluZShib29sZWFuKVwiLC8vc3RhdGVmdWwsXG4vLyAgICAgICAgIHByb2R1Y3REZXNjcmlwdGlvbjpcIkNvcHl3cml0aW5nL01lbWVNYWtpbmdcIixcbi8vICAgICAgICAgcHJpY2U6XCLigqUyNVwiLFxuLy8gICB9XG4vLyBdXG5cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBwcm9wczoge1xuLy8gICBwcm9kdWN0SUQ6IHN0cmluZztcbi8vICAga2V5OiBzdHJpbmc7XG4vLyAgIHByb2R1Y3ROYW1lOiBzdHJpbmc7XG4vLyAgIGNvbnRhY3RIZXJlVG9QdXJjaGFzZTogc3RyaW5nO1xuLy8gICBzaGlwcGluZzogc3RyaW5nO1xuLy8gICBPbmxpbmU6IGJvb2xlYW47XG4vLyAgIHByb2R1Y3REZXNjcmlwdGlvbjogc3RyaW5nO1xuLy8gICBwcmljZTogc3RyaW5nO1xuLy8gfVtdXG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQUkgR2VuIENvZGUgYmVsb3ctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmxldCBsb2FkaW5nID0gZmFsc2U7IC8vIGZsYWcgdG8gcHJldmVudCBtdWx0aXBsZSBsb2FkIHJlcXVlc3RzXG5sZXQgbGFzdEV2YWx1YXRlZEtleTsgLy8gdmFyaWFibGUgdG8gc3RvcmUgdGhlIGxhc3QgZXZhbHVhdGVkIGtleSBmb3IgcGFnaW5hdGlvblxuY29uc3Qge2dldFByb2R1Y3RzfSA9IHVzZVNob3AoKTtcblxuXG5mdW5jdGlvbiBsb2FkTW9yZUl0ZW1zKCkge1xuIFxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxvYWRpbmcgPSB0cnVlO1xuXG4gIC8vIFNldCB1cCB0aGUgcGFyYW1ldGVycyBmb3IgdGhlIER5bmFtb0RCIFF1ZXJ5IG9wZXJhdGlvblxuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgXG4gICAgVGFibGVOYW1lOiAnTGlzdGluZ3MnLFxuICAgIEV4Y2x1c2l2ZVN0YXJ0S2V5OiBsYXN0RXZhbHVhdGVkS2V5LCAvLyB1c2UgdGhlIGxhc3QgZXZhbHVhdGVkIGtleSBmb3IgcGFnaW5hdGlvblxuICAgIExpbWl0OiAyMCAvLyBudW1iZXIgb2YgaXRlbXMgdG8gbG9hZCBwZXIgcmVxdWVzdFxuICB9O1xuXG4gICAgY29uc3QgZGF0YSA9IGdldFByb2R1Y3RzKHBhcmFtcylcblxuICAgIC8vIEFwcGVuZCB0aGUgbmV3IGl0ZW1zIHRvIHRoZSBwYWdlXG4gICAgLy8gZGF0YS5JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIC8vICAgLy8gY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgLy8gZWxlbWVudC5pbm5lckhUTUwgPSBgPHA+JHtpdGVtLm5hbWV9PC9wPjxwPiR7aXRlbS5kZXNjcmlwdGlvbn08L3A+YDtcbiAgICAvLyAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtcycpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBsYXN0IGV2YWx1YXRlZCBrZXkgYW5kIGxvYWRpbmcgZmxhZ1xuICAgIGxhc3RFdmFsdWF0ZWRLZXkgPSBkYXRhLkxhc3RFdmFsdWF0ZWRLZXk7XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICB9O1xuXG5cbi8vIEF0dGFjaCB0aGUgbG9hZE1vcmVJdGVtcyBmdW5jdGlvbiB0byB0aGUgc2Nyb2xsIGV2ZW50IG9mIHRoZSB3aW5kb3dcbmlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgPj0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQpIHtcbiAgICAgIGxvYWRNb3JlSXRlbXMoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbi8vIExvYWQgdGhlIGZpcnN0IHNldCBvZiBpdGVtc1xubG9hZE1vcmVJdGVtcygpO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQUkgR2VuIENvZGUgYWJvdmUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgSW5kZXg6IE5leHRQYWdlID0gKHByb3BzKSA9PiB7XG4gICAgLy8gY29uc3QgW2xvYWRlZExpc3RpbmdzLHNldExvYWRlZExpc3RpbmdzXSA9IHVzZVN0YXRlKFN0cmluZ1tdKTtcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT57XG4gICAgLy8gICAvL3NlbmQgR0VUIHJlcXVlc3Qgd2l0aCB0aGlzXG4gICAgLy8gICAgIHNldExvYWRlZExpc3RpbmdzKHRlc3RpbmdBcnJheSk7XG4gICAgLy8gfSxbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLWJsdWUgdy1zY3JlZW4gaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0IGdhcC1bMHB4XSBtZDpoLXNjcmVlbiBtZDp3LXNjcmVlbiBtZDptaW4taC1bOTUwXVwiPlxuICAgICAgXG4gICAgICB7LyogPExpc3RpbmdWaWV3QmFja2dyb3VuZCBMaXN0aW5nc0NvbnRlbnQ9e3Byb3BzLkxpc3RpbmdzQ29udGVudH0gLz4gKi99XG4gICAgICA8TGlzdGluZ1ZpZXdCYWNrZ3JvdW5kIC8+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuICAvLyBjb25zdCBHRVRoYW5kbGUgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgbGV0IGxpc3RpbmdzR0VUOlxuICAvLyAgIGF3YWl0IGZldGNoKCcvYXBpL0dFVGhhbmRsZScsIHtcbiAgLy8gICAgIG1ldGhvZDonR0VUJyxcbiAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxpc3RpbmdzR0VUKSxcbiAgLy8gICAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuXG4gIC8vICAgcmV0dXJuIFxuICAvLyB9XG5cblxuIFxuLy8gICBjb25zdCBsaXN0aW5nc0FycmF5ID0gYXdhaXQgbGlzdGluZ3NHRVQuZmluZCgpLnRvQXJyYXkoKTtcblxuLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIExpc3RpbmdzQ29udGVudDogbGlzdGluZ3NBcnJheS5tYXAoIChMaXN0aW5ncykgPT4oe1xuLy8gICAgICAgICBwcmljZTogTGlzdGluZ3MucHJpY2UsXG4vLyAgICAgICAgIHByb2R1Y3RJRDogTGlzdGluZ3MucHJvZHVjdElELFxuICAgICAgXG4vLyAgICAgICAgIHByb2R1Y3ROYW1lOiBMaXN0aW5ncy5wcm9kdWN0TmFtZSxcbi8vICAgICAgICAgLy8gY29udGFjdEhlcmVUb1B1cmNoYXNlOiBMaXN0aW5ncy5jb250YWN0SGVyZVRvUHVyY2hhc2UsXG4vLyAgICAgICAgIC8vIHNoaXBwaW5nOiBMaXN0aW5ncy5zaGlwcGluZyxcbi8vICAgICAgICAgLy8gT25saW5lOiBMaXN0aW5ncy5PbmxpbmUsXG4vLyAgICAgICAgIC8vIHByb2R1Y3REZXNjcmlwdGlvbjogTGlzdGluZ3MucHJvZHVjdERlc2NyaXB0aW9uLFxuLy8gICAgICAgICBpbWFnZTogTGlzdGluZ3MuaW1hZ2Vcbi8vICAgICB9ICkpXG4vLyB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbi8vIHJldmFsaWRhdGU6IDMwMFxuLy8gfX07XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiTGlzdGluZ1ZpZXdCYWNrZ3JvdW5kIiwidXNlU2hvcCIsImxvYWRpbmciLCJsYXN0RXZhbHVhdGVkS2V5IiwiZ2V0UHJvZHVjdHMiLCJsb2FkTW9yZUl0ZW1zIiwicGFyYW1zIiwiVGFibGVOYW1lIiwiRXhjbHVzaXZlU3RhcnRLZXkiLCJMaW1pdCIsImRhdGEiLCJMYXN0RXZhbHVhdGVkS2V5IiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJib2R5Iiwib2Zmc2V0SGVpZ2h0IiwiSW5kZXgiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});