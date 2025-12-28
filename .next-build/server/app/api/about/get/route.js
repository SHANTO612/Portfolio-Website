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
exports.id = "app/api/about/get/route";
exports.ids = ["app/api/about/get/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fabout%2Fget%2Froute&page=%2Fapi%2Fabout%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fabout%2Fget%2Froute.js&appDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fabout%2Fget%2Froute&page=%2Fapi%2Fabout%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fabout%2Fget%2Froute.js&appDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_ALL_PROJECTS_Portfolio_Website_src_app_api_about_get_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/about/get/route.js */ \"(rsc)/./src/app/api/about/get/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/about/get/route\",\n        pathname: \"/api/about/get\",\n        filename: \"route\",\n        bundlePath: \"app/api/about/get/route\"\n    },\n    resolvedPagePath: \"D:\\\\ALL PROJECTS\\\\Portfolio-Website\\\\src\\\\app\\\\api\\\\about\\\\get\\\\route.js\",\n    nextConfigOutput,\n    userland: D_ALL_PROJECTS_Portfolio_Website_src_app_api_about_get_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhYm91dCUyRmdldCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYWJvdXQlMkZnZXQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhYm91dCUyRmdldCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDQUxMJTIwUFJPSkVDVFMlNUNQb3J0Zm9saW8tV2Vic2l0ZSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q0FMTCUyMFBST0pFQ1RTJTVDUG9ydGZvbGlvLVdlYnNpdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3dCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxBTEwgUFJPSkVDVFNcXFxcUG9ydGZvbGlvLVdlYnNpdGVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYWJvdXRcXFxcZ2V0XFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hYm91dC9nZXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hYm91dC9nZXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2Fib3V0L2dldC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXEFMTCBQUk9KRUNUU1xcXFxQb3J0Zm9saW8tV2Vic2l0ZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhYm91dFxcXFxnZXRcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fabout%2Fget%2Froute&page=%2Fapi%2Fabout%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fabout%2Fget%2Froute.js&appDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/about/get/route.js":
/*!****************************************!*\
  !*** ./src/app/api/about/get/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database */ \"(rsc)/./src/database/index.js\");\n/* harmony import */ var _models_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/About */ \"(rsc)/./src/models/About.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET(req) {\n    try {\n        await (0,_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const extractData = await _models_About__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        if (extractData) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                success: true,\n                data: extractData\n            });\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                success: false,\n                message: \"Something goes wrong Please try again\"\n            });\n        }\n    } catch (e) {\n        console.log(e);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: false,\n            message: \"Something goes wrong Please try again\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hYm91dC9nZXQvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFDRjtBQUNRO0FBQ3BDLE1BQU1HLFVBQVUsZ0JBQWU7QUFDL0IsZUFBZUMsSUFBSUMsR0FBRztJQUN6QixJQUFJO1FBQ0EsTUFBTUwscURBQVdBO1FBQ2pCLE1BQU1NLGNBQWMsTUFBTUwscURBQUtBLENBQUNNLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUlELGFBQWE7WUFDYixPQUFPSixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUNyQkMsU0FBUztnQkFDVEMsTUFBTUo7WUFDVjtRQUNKLE9BQU87WUFDSCxPQUFPSixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUNyQkMsU0FBUztnQkFDVEUsU0FBUztZQUNiO1FBQ0o7SUFDSixFQUFFLE9BQU9DLEdBQUc7UUFDUkMsUUFBUUMsR0FBRyxDQUFDRjtRQUVaLE9BQU9WLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFDckJDLFNBQVM7WUFDVEUsU0FBUztRQUNiO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsiRDpcXEFMTCBQUk9KRUNUU1xcUG9ydGZvbGlvLVdlYnNpdGVcXHNyY1xcYXBwXFxhcGlcXGFib3V0XFxnZXRcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0VG9EQiBmcm9tIFwiQC9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIkAvbW9kZWxzL0Fib3V0XCI7IFxyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSBcImZvcmNlLWR5bmFtaWNcIlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjb25uZWN0VG9EQigpO1xyXG4gICAgICAgIGNvbnN0IGV4dHJhY3REYXRhID0gYXdhaXQgQWJvdXQuZmluZCh7fSk7IFxyXG4gICAgICAgIGlmIChleHRyYWN0RGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGV4dHJhY3REYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlNvbWV0aGluZyBnb2VzIHdyb25nIFBsZWFzZSB0cnkgYWdhaW5cIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlNvbWV0aGluZyBnb2VzIHdyb25nIFBsZWFzZSB0cnkgYWdhaW5cIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNvbm5lY3RUb0RCIiwiQWJvdXQiLCJOZXh0UmVzcG9uc2UiLCJkeW5hbWljIiwiR0VUIiwicmVxIiwiZXh0cmFjdERhdGEiLCJmaW5kIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwibWVzc2FnZSIsImUiLCJjb25zb2xlIiwibG9nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/about/get/route.js\n");

/***/ }),

/***/ "(rsc)/./src/database/index.js":
/*!*******************************!*\
  !*** ./src/database/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ connectToDb)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDb() {\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://alfahadshanto:shanto612@cluster0.achyd.mongodb.net/\");\n        console.log(\"Database is connected successfully\");\n    } catch (error) {\n        console.log(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGF0YWJhc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2pCLGVBQWVDO0lBQzVCLElBQUk7UUFDRixNQUFNRCx1REFBZ0IsQ0FDcEI7UUFFRkcsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RGLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDZDtBQUNGIiwic291cmNlcyI6WyJEOlxcQUxMIFBST0pFQ1RTXFxQb3J0Zm9saW8tV2Vic2l0ZVxcc3JjXFxkYXRhYmFzZVxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYigpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcclxuICAgICAgXCJtb25nb2RiK3NydjovL2FsZmFoYWRzaGFudG86c2hhbnRvNjEyQGNsdXN0ZXIwLmFjaHlkLm1vbmdvZGIubmV0L1wiXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBpcyBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RUb0RiIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/database/index.js\n");

/***/ }),

/***/ "(rsc)/./src/models/About.js":
/*!*****************************!*\
  !*** ./src/models/About.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AboutSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    about_me: String,\n    no_of_projects: String,\n    year_of_experience: String,\n    no_of_clients: String,\n    skills: String\n}, {\n    timestamps: true\n});\nconst About = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).About || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"About\", AboutSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0Fib3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUNoQyxNQUFNQyxjQUFjLElBQUlELHdEQUFlLENBQ25DO0lBQ0lHLFVBQVVDO0lBQ1ZDLGdCQUFnQkQ7SUFDaEJFLG9CQUFvQkY7SUFDcEJHLGVBQWVIO0lBQ2ZJLFFBQVFKO0FBQ1osR0FDQTtJQUFFSyxZQUFZO0FBQUs7QUFFdkIsTUFBTUMsUUFBUVYsd0RBQWUsQ0FBQ1UsS0FBSyxJQUFJVixxREFBYyxDQUFDLFNBQVFDO0FBQzlELGlFQUFlUyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJEOlxcQUxMIFBST0pFQ1RTXFxQb3J0Zm9saW8tV2Vic2l0ZVxcc3JjXFxtb2RlbHNcXEFib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgQWJvdXRTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gICAge1xyXG4gICAgICAgIGFib3V0X21lOiBTdHJpbmcsXHJcbiAgICAgICAgbm9fb2ZfcHJvamVjdHM6IFN0cmluZyxcclxuICAgICAgICB5ZWFyX29mX2V4cGVyaWVuY2U6IFN0cmluZyxcclxuICAgICAgICBub19vZl9jbGllbnRzOiBTdHJpbmcsXHJcbiAgICAgICAgc2tpbGxzOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuY29uc3QgQWJvdXQgPSBtb25nb29zZS5tb2RlbHMuQWJvdXQgfHwgbW9uZ29vc2UubW9kZWwoXCJBYm91dFwiLEFib3V0U2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiQWJvdXRTY2hlbWEiLCJTY2hlbWEiLCJhYm91dF9tZSIsIlN0cmluZyIsIm5vX29mX3Byb2plY3RzIiwieWVhcl9vZl9leHBlcmllbmNlIiwibm9fb2ZfY2xpZW50cyIsInNraWxscyIsInRpbWVzdGFtcHMiLCJBYm91dCIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/About.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fabout%2Fget%2Froute&page=%2Fapi%2Fabout%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fabout%2Fget%2Froute.js&appDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CALL%20PROJECTS%5CPortfolio-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();