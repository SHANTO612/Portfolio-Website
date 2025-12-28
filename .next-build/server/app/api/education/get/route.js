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
exports.id = "app/api/education/get/route";
exports.ids = ["app/api/education/get/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Feducation%2Fget%2Froute&page=%2Fapi%2Feducation%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Feducation%2Fget%2Froute.js&appDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Feducation%2Fget%2Froute&page=%2Fapi%2Feducation%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Feducation%2Fget%2Froute.js&appDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_ALL_PROJECTS_Portfolio_Website_src_app_api_education_get_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/education/get/route.js */ \"(rsc)/./src/app/api/education/get/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/education/get/route\",\n        pathname: \"/api/education/get\",\n        filename: \"route\",\n        bundlePath: \"app/api/education/get/route\"\n    },\n    resolvedPagePath: \"D:\\\\ALL PROJECTS\\\\Portfolio-Website\\\\src\\\\app\\\\api\\\\education\\\\get\\\\route.js\",\n    nextConfigOutput,\n    userland: D_ALL_PROJECTS_Portfolio_Website_src_app_api_education_get_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZlZHVjYXRpb24lMkZnZXQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmVkdWNhdGlvbiUyRmdldCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmVkdWNhdGlvbiUyRmdldCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDQUxMJTIwUFJPSkVDVFMlNUNQb3J0Zm9saW8tV2Vic2l0ZSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q0FMTCUyMFBST0pFQ1RTJTVDUG9ydGZvbGlvLVdlYnNpdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzRCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxBTEwgUFJPSkVDVFNcXFxcUG9ydGZvbGlvLVdlYnNpdGVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZWR1Y2F0aW9uXFxcXGdldFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZWR1Y2F0aW9uL2dldC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2VkdWNhdGlvbi9nZXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2VkdWNhdGlvbi9nZXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxBTEwgUFJPSkVDVFNcXFxcUG9ydGZvbGlvLVdlYnNpdGVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZWR1Y2F0aW9uXFxcXGdldFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Feducation%2Fget%2Froute&page=%2Fapi%2Feducation%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Feducation%2Fget%2Froute.js&appDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/education/get/route.js":
/*!********************************************!*\
  !*** ./src/app/api/education/get/route.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database */ \"(rsc)/./src/database/index.js\");\n/* harmony import */ var _models_Education__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Education */ \"(rsc)/./src/models/Education.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET(req) {\n    try {\n        await (0,_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const extractData = await _models_Education__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        if (extractData) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                success: true,\n                data: extractData\n            });\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                success: false,\n                message: \"Something goes wrong Please try again\"\n            });\n        }\n    } catch (e) {\n        console.log(e);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: false,\n            message: \"Something goes wrong Please try again\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9lZHVjYXRpb24vZ2V0L3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFDO0FBQ007QUFDQTtBQUNwQyxNQUFNRyxVQUFVLGdCQUFlO0FBQy9CLGVBQWVDLElBQUlDLEdBQUc7SUFDekIsSUFBSTtRQUNBLE1BQU1MLHFEQUFXQTtRQUNqQixNQUFNTSxjQUFjLE1BQU1MLHlEQUFTQSxDQUFDTSxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJRCxhQUFhO1lBQ2IsT0FBT0oscURBQVlBLENBQUNNLElBQUksQ0FBQztnQkFDckJDLFNBQVM7Z0JBQ1RDLE1BQU1KO1lBQ1Y7UUFDSixPQUFPO1lBQ0gsT0FBT0oscURBQVlBLENBQUNNLElBQUksQ0FBQztnQkFDckJDLFNBQVM7Z0JBQ1RFLFNBQVM7WUFDYjtRQUNKO0lBQ0osRUFBRSxPQUFPQyxHQUFHO1FBQ1JDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFFWixPQUFPVixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQ3JCQyxTQUFTO1lBQ1RFLFNBQVM7UUFDYjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIkQ6XFxBTEwgUFJPSkVDVFNcXFBvcnRmb2xpby1XZWJzaXRlXFxzcmNcXGFwcFxcYXBpXFxlZHVjYXRpb25cXGdldFxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RUb0RCIGZyb20gXCJAL2RhdGFiYXNlXCI7IFxyXG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gXCJAL21vZGVscy9FZHVjYXRpb25cIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmV4cG9ydCBjb25zdCBkeW5hbWljID0gXCJmb3JjZS1keW5hbWljXCJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdFRvREIoKTtcclxuICAgICAgICBjb25zdCBleHRyYWN0RGF0YSA9IGF3YWl0IEVkdWNhdGlvbi5maW5kKHt9KTsgXHJcbiAgICAgICAgaWYgKGV4dHJhY3REYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZXh0cmFjdERhdGEsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU29tZXRoaW5nIGdvZXMgd3JvbmcgUGxlYXNlIHRyeSBhZ2FpblwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiU29tZXRoaW5nIGdvZXMgd3JvbmcgUGxlYXNlIHRyeSBhZ2FpblwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RCIiwiRWR1Y2F0aW9uIiwiTmV4dFJlc3BvbnNlIiwiZHluYW1pYyIsIkdFVCIsInJlcSIsImV4dHJhY3REYXRhIiwiZmluZCIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsIm1lc3NhZ2UiLCJlIiwiY29uc29sZSIsImxvZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/education/get/route.js\n");

/***/ }),

/***/ "(rsc)/./src/database/index.js":
/*!*******************************!*\
  !*** ./src/database/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ connectToDb)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDb() {\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://alfahadshanto:shanto612@cluster0.achyd.mongodb.net/\");\n        console.log(\"Database is connected successfully\");\n    } catch (error) {\n        console.log(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGF0YWJhc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2pCLGVBQWVDO0lBQzVCLElBQUk7UUFDRixNQUFNRCx1REFBZ0IsQ0FDcEI7UUFFRkcsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RGLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDZDtBQUNGIiwic291cmNlcyI6WyJEOlxcQUxMIFBST0pFQ1RTXFxQb3J0Zm9saW8tV2Vic2l0ZVxcc3JjXFxkYXRhYmFzZVxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYigpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcclxuICAgICAgXCJtb25nb2RiK3NydjovL2FsZmFoYWRzaGFudG86c2hhbnRvNjEyQGNsdXN0ZXIwLmFjaHlkLm1vbmdvZGIubmV0L1wiXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBpcyBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RUb0RiIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/database/index.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Education.js":
/*!*********************************!*\
  !*** ./src/models/Education.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst EducationSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    degree: String,\n    year: String,\n    college: String\n}, {\n    timestamps: true\n});\nconst Education = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Education || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Education\", EducationSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Education);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0VkdWNhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTUMsa0JBQWtCLElBQUlELHdEQUFlLENBQ3ZDO0lBQ0lHLFFBQVFDO0lBQ1JDLE1BQU1EO0lBQ05FLFNBQVNGO0FBQ2IsR0FDQTtJQUFFRyxZQUFZO0FBQUs7QUFFdkIsTUFBTUMsWUFBWVIsd0RBQWUsQ0FBQ1EsU0FBUyxJQUFJUixxREFBYyxDQUFDLGFBQVlDO0FBQzFFLGlFQUFlTyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJEOlxcQUxMIFBST0pFQ1RTXFxQb3J0Zm9saW8tV2Vic2l0ZVxcc3JjXFxtb2RlbHNcXEVkdWNhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmNvbnN0IEVkdWNhdGlvblNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAgICB7XHJcbiAgICAgICAgZGVncmVlOiBTdHJpbmcsXHJcbiAgICAgICAgeWVhcjogU3RyaW5nLFxyXG4gICAgICAgIGNvbGxlZ2U6IFN0cmluZywgXHJcbiAgICB9LFxyXG4gICAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuY29uc3QgRWR1Y2F0aW9uID0gbW9uZ29vc2UubW9kZWxzLkVkdWNhdGlvbiB8fCBtb25nb29zZS5tb2RlbChcIkVkdWNhdGlvblwiLEVkdWNhdGlvblNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvbjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJFZHVjYXRpb25TY2hlbWEiLCJTY2hlbWEiLCJkZWdyZWUiLCJTdHJpbmciLCJ5ZWFyIiwiY29sbGVnZSIsInRpbWVzdGFtcHMiLCJFZHVjYXRpb24iLCJtb2RlbHMiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Education.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Feducation%2Fget%2Froute&page=%2Fapi%2Feducation%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Feducation%2Fget%2Froute.js&appDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();