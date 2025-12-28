/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/project/get/route";
exports.ids = ["app/api/project/get/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproject%2Fget%2Froute&page=%2Fapi%2Fproject%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproject%2Fget%2Froute.js&appDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproject%2Fget%2Froute&page=%2Fapi%2Fproject%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproject%2Fget%2Froute.js&appDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_ALL_PROJECTS_Portfolio_Website_src_app_api_project_get_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/project/get/route.js */ \"(rsc)/./src/app/api/project/get/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/project/get/route\",\n        pathname: \"/api/project/get\",\n        filename: \"route\",\n        bundlePath: \"app/api/project/get/route\"\n    },\n    resolvedPagePath: \"D:\\\\ALL PROJECTS\\\\Portfolio-Website\\\\src\\\\app\\\\api\\\\project\\\\get\\\\route.js\",\n    nextConfigOutput,\n    userland: D_ALL_PROJECTS_Portfolio_Website_src_app_api_project_get_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9qZWN0JTJGZ2V0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9qZWN0JTJGZ2V0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvamVjdCUyRmdldCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDQUxMJTIwUFJPSkVDVFMlNUNQb3J0Zm9saW8tV2Vic2l0ZSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q0FMTCUyMFBST0pFQ1RTJTVDUG9ydGZvbGlvLVdlYnNpdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzBCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxBTEwgUFJPSkVDVFNcXFxcUG9ydGZvbGlvLVdlYnNpdGVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccHJvamVjdFxcXFxnZXRcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2plY3QvZ2V0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvamVjdC9nZXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2plY3QvZ2V0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcQUxMIFBST0pFQ1RTXFxcXFBvcnRmb2xpby1XZWJzaXRlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHByb2plY3RcXFxcZ2V0XFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproject%2Fget%2Froute&page=%2Fapi%2Fproject%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproject%2Fget%2Froute.js&appDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/project/get/route.js":
/*!******************************************!*\
  !*** ./src/app/api/project/get/route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database */ \"(rsc)/./src/database/index.js\");\n/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Project */ \"(rsc)/./src/models/Project.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET(req) {\n    try {\n        await (0,_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const extractData = await _models_Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        if (extractData) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                success: true,\n                data: extractData\n            });\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                success: false,\n                message: \"Something goes wrong Please try again\"\n            });\n        }\n    } catch (e) {\n        console.log(e);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: false,\n            message: \"Something goes wrong Please try again\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9qZWN0L2dldC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxQztBQUNFO0FBQ0k7QUFDcEMsTUFBTUcsVUFBVSxnQkFBZTtBQUMvQixlQUFlQyxJQUFJQyxHQUFHO0lBQ3pCLElBQUk7UUFDQSxNQUFNTCxxREFBV0E7UUFDakIsTUFBTU0sY0FBYyxNQUFNTCx1REFBT0EsQ0FBQ00sSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSUQsYUFBYTtZQUNiLE9BQU9KLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQ3JCQyxTQUFTO2dCQUNUQyxNQUFNSjtZQUNWO1FBQ0osT0FBTztZQUNILE9BQU9KLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQ3JCQyxTQUFTO2dCQUNURSxTQUFTO1lBQ2I7UUFDSjtJQUNKLEVBQUUsT0FBT0MsR0FBRztRQUNSQyxRQUFRQyxHQUFHLENBQUNGO1FBRVosT0FBT1YscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUNyQkMsU0FBUztZQUNURSxTQUFTO1FBQ2I7SUFDSjtBQUNKIiwic291cmNlcyI6WyJEOlxcQUxMIFBST0pFQ1RTXFxQb3J0Zm9saW8tV2Vic2l0ZVxcc3JjXFxhcHBcXGFwaVxccHJvamVjdFxcZ2V0XFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdFRvREIgZnJvbSBcIkAvZGF0YWJhc2VcIjsgIFxyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiQC9tb2RlbHMvUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSBcImZvcmNlLWR5bmFtaWNcIlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjb25uZWN0VG9EQigpO1xyXG4gICAgICAgIGNvbnN0IGV4dHJhY3REYXRhID0gYXdhaXQgUHJvamVjdC5maW5kKHt9KTsgXHJcbiAgICAgICAgaWYgKGV4dHJhY3REYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZXh0cmFjdERhdGEsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU29tZXRoaW5nIGdvZXMgd3JvbmcgUGxlYXNlIHRyeSBhZ2FpblwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiU29tZXRoaW5nIGdvZXMgd3JvbmcgUGxlYXNlIHRyeSBhZ2FpblwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY29ubmVjdFRvREIiLCJQcm9qZWN0IiwiTmV4dFJlc3BvbnNlIiwiZHluYW1pYyIsIkdFVCIsInJlcSIsImV4dHJhY3REYXRhIiwiZmluZCIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsIm1lc3NhZ2UiLCJlIiwiY29uc29sZSIsImxvZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/project/get/route.js\n");

/***/ }),

/***/ "(rsc)/./src/database/index.js":
/*!*******************************!*\
  !*** ./src/database/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ connectToDb)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDb() {\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://alfahadshanto:shanto612@cluster0.achyd.mongodb.net/\");\n        console.log(\"Database is connected successfully\");\n    } catch (error) {\n        console.log(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGF0YWJhc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2pCLGVBQWVDO0lBQzVCLElBQUk7UUFDRixNQUFNRCx1REFBZ0IsQ0FDcEI7UUFFRkcsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RGLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDZDtBQUNGIiwic291cmNlcyI6WyJEOlxcQUxMIFBST0pFQ1RTXFxQb3J0Zm9saW8tV2Vic2l0ZVxcc3JjXFxkYXRhYmFzZVxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYigpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcclxuICAgICAgXCJtb25nb2RiK3NydjovL2FsZmFoYWRzaGFudG86c2hhbnRvNjEyQGNsdXN0ZXIwLmFjaHlkLm1vbmdvZGIubmV0L1wiXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBpcyBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RUb0RiIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/database/index.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Project.js":
/*!*******************************!*\
  !*** ./src/models/Project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProjectSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: String,\n    featured: {\n        type: String,\n        default: \"\"\n    },\n    website: String,\n    technologies: String,\n    github: String,\n    links: [\n        {\n            label: String,\n            url: String\n        }\n    ]\n}, {\n    timestamps: true\n});\nconst Project = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Project || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Project\", ProjectSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1Byb2plY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2hDLE1BQU1DLGdCQUFnQixJQUFJRCx3REFBZSxDQUNyQztJQUNJRyxNQUFNQztJQUNOQyxVQUFVO1FBQUVDLE1BQU1GO1FBQVFHLFNBQVM7SUFBRztJQUN0Q0MsU0FBU0o7SUFDVEssY0FBY0w7SUFDZE0sUUFBUU47SUFDUk8sT0FBTztRQUNIO1lBQ0lDLE9BQU9SO1lBQ1BTLEtBQUtUO1FBQ1Q7S0FDSDtBQUNMLEdBQ0E7SUFBRVUsWUFBWTtBQUFLO0FBRXZCLE1BQU1DLFVBQVVmLHdEQUFlLENBQUNlLE9BQU8sSUFBSWYscURBQWMsQ0FBQyxXQUFVQztBQUNwRSxpRUFBZWMsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiRDpcXEFMTCBQUk9KRUNUU1xcUG9ydGZvbGlvLVdlYnNpdGVcXHNyY1xcbW9kZWxzXFxQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgUHJvamVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogU3RyaW5nLFxyXG4gICAgICAgIGZlYXR1cmVkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxyXG4gICAgICAgIHdlYnNpdGU6IFN0cmluZyxcclxuICAgICAgICB0ZWNobm9sb2dpZXM6IFN0cmluZyxcclxuICAgICAgICBnaXRodWI6IFN0cmluZyxcclxuICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuY29uc3QgUHJvamVjdCA9IG1vbmdvb3NlLm1vZGVscy5Qcm9qZWN0IHx8IG1vbmdvb3NlLm1vZGVsKFwiUHJvamVjdFwiLFByb2plY3RTY2hlbWEpO1xyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlByb2plY3RTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwiZmVhdHVyZWQiLCJ0eXBlIiwiZGVmYXVsdCIsIndlYnNpdGUiLCJ0ZWNobm9sb2dpZXMiLCJnaXRodWIiLCJsaW5rcyIsImxhYmVsIiwidXJsIiwidGltZXN0YW1wcyIsIlByb2plY3QiLCJtb2RlbHMiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Project.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproject%2Fget%2Froute&page=%2Fapi%2Fproject%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproject%2Fget%2Froute.js&appDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();