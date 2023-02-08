/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".material-symbols-outlined {\\r\\n  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Roboto Mono', Arial, Helvetica, sans-serif;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: powderblue;\\r\\n}\\r\\n\\r\\nul {\\r\\n  display: flex;\\r\\n  gap: 30px;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n  font-size: 20px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\nform li {\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\nli:first-child {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  margin-top: 20px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 5rem;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 70px;\\r\\n  height: 70px;\\r\\n  border-radius: 50%;\\r\\n  text-align: center;\\r\\n  background-color: rgba(244, 172, 38, 0.737);\\r\\n  padding: 5px;\\r\\n  border: 1px solid;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  gap: 3rem;\\r\\n}\\r\\n\\r\\n/* LIST ITEM SECTION */\\r\\nimg {\\r\\n  width: 300px;\\r\\n  height: 330px;\\r\\n  object-fit: fill;\\r\\n}\\r\\n\\r\\n.list-items {\\r\\n  height: 80vh;\\r\\n  margin-top: 30px;\\r\\n  margin-bottom: 10px;\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  gap: 30px;\\r\\n  padding: 20px;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  cursor: pointer;\\r\\n  padding: 10px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.item:hover {\\r\\n  transform: scale(1.05);\\r\\n}\\r\\n\\r\\n/* Hide scrollbar for Chrome, Safari and Opera */\\r\\n.list-items::-webkit-scrollbar {\\r\\n  display: none;\\r\\n  -ms-overflow-style: none; /* IE and Edge */\\r\\n  scrollbar-width: none; /* Firefox */\\r\\n}\\r\\n\\r\\n/* creating css loader */\\r\\n\\r\\n#loader {\\r\\n  width: 5rem;\\r\\n  height: 5rem;\\r\\n  border: 5px solid #f3f3f3;\\r\\n  border-top: 6px solid orange;\\r\\n  border-radius: 100%;\\r\\n  margin: auto;\\r\\n  display: none;\\r\\n  animation: spin 1s infinite linear;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n#loader.display {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n@keyframes spin {\\r\\n  from {\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n.film {\\r\\n  width: 200px;\\r\\n  font-size: 18px;\\r\\n  white-space: nowrap;\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 5px;\\r\\n  font-size: 14px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n  transform: scale(0.8);\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  cursor: pointer;\\r\\n  width: 200px;\\r\\n  align-self: center;\\r\\n  padding: 10px;\\r\\n  border: none;\\r\\n  background: white;\\r\\n  border-radius: 10px;\\r\\n  font-size: 18px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n  border: none;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* FOOTER */\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  height: 60px;\\r\\n  display: flex;\\r\\n  padding: 10px 0 10px 50px;\\r\\n  border-top: 2px solid black;\\r\\n  font-size: 16px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n/* INVOLVEMENT */\\r\\n.liked {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: rgb(43, 42, 42);\\r\\n  align-items: stretch;\\r\\n  padding: 60px 20px 0 20px;\\r\\n  position: fixed;\\r\\n  overflow: scroll;\\r\\n  width: 60%;\\r\\n  height: 100%;\\r\\n  top: 0;\\r\\n  border: 1px solid #dfe1e6;\\r\\n  box-sizing: border-box;\\r\\n  color: #eee;\\r\\n}\\r\\n\\r\\n.blur {\\r\\n  filter: blur(8px);\\r\\n}\\r\\n\\r\\n.comment-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.popup-header {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: flex-start;\\r\\n  gap: 5rem;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  margin: 0 40px;\\r\\n  background-color: #8a97a0;\\r\\n  padding: 10px 20px;\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n  color: rgb(42, 38, 38);\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.comment-section {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.previous-comments {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.previous-comments h3 {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.previous-comments p {\\r\\n  border: 1px solid #c0c3c5;\\r\\n  background-color: #262728;\\r\\n  border-radius: 10px;\\r\\n  padding: 10px;\\r\\n  margin: 5px;\\r\\n  color: #eee;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.form-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.form-container h3 {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\nform input {\\r\\n  font-family: Georgia, \\\"Times New Roman\\\", Times, serif;\\r\\n  background: rgba(255, 255, 255, 0.1);\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  font-size: 15px;\\r\\n  margin: 0;\\r\\n  outline: 0;\\r\\n  padding: 10px;\\r\\n  width: 100%;\\r\\n  box-sizing: border-box;\\r\\n  -webkit-box-sizing: border-box;\\r\\n  -moz-box-sizing: border-box;\\r\\n  background-color: #e8eeef;\\r\\n  color: #2f3031;\\r\\n  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\\r\\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\\r\\n}\\r\\n\\r\\nform textarea {\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  background-color: #e8eeef;\\r\\n  color: #2f3031;\\r\\n  font-size: 15px;\\r\\n  margin: 0;\\r\\n  outline: 0;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#comment-button {\\r\\n  color: #eee;\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  background-color: #186952;\\r\\n  padding: 5px;\\r\\n  border-radius: 5px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n#movie-image {\\r\\n  width: 500px;\\r\\n  height: 450px;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  align-self: flex-end;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.close:hover {\\r\\n  background-color: #f00;\\r\\n}\\r\\n\\r\\n.movie-title {\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.status {\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui.js */ \"./src/modules/ui.js\");\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Api)\n/* harmony export */ });\nconst baseURLInvolvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ER2rFBidmmnXOpDOOVHm';\nconst baseURL = 'https://api.tvmaze.com/shows';\nclass Api {\n  static async getSeries() {\n    const req = await fetch(`${baseURL}?page=1`);\n    const response = await req.json();\n    return response;\n  }\n\n  static async addNewLike(itemId) {\n    const response = await fetch(`${baseURLInvolvement}/likes`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({ item_id: itemId }),\n    });\n    return response.status;\n  }\n\n  static async likesCounter(itemId) {\n    const req = await fetch(`${baseURLInvolvement}/likes`);\n    const data = await req.json();\n    let nbLikes = 0;\n    for (let i = 0; i < data.length; i += 1) {\n      const serie = data[i];\n      if (serie.item_id === itemId) {\n        nbLikes = serie.likes;\n        break;\n      }\n    }\n    return nbLikes;\n  }\n\n  static async getMovie(id) {\n    const req = await fetch(`${baseURL}/${id}`);\n    const movie = await req.json();\n    return movie;\n  }\n\n  static addComment = async (id, name, comment) => {\n    const response = await fetch(`${baseURLInvolvement}/comments`, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n        username: name,\n        comment,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const status = await response.text();\n    return status;\n  }\n\n  static getComments = async (id) => {\n    const response = await fetch(`${baseURLInvolvement}/comments?item_id=${id}`);\n    const comments = await response.json();\n    return comments;\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\nconst comment = async (id) => {\n  const movie = await _api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMovie(id);\n  const commentPopup = document.createElement('section');\n  const main = document.querySelector('main');\n  main.classList.toggle('blur');\n  document.body.appendChild(commentPopup);\n  commentPopup.classList.toggle('popup');\n  commentPopup.innerHTML = `\n    <div class=\"comment-container\">\n    <button class=\"close\">\n    <span class=\"material-symbols-outlined\">close</span>\n    </button>\n    <div class=\"popup-header\">\n      <div class=\"header\">\n        <img id=\"movie-image\" src=\"${movie.image.original}\" alt=\"movie image\" />\n        <h2 class=\"title movie-title\">${movie.name}</h2>\n      </div>\n    </div>\n    <div class=\"details\">\n      ${movie.summary}\n    </div>\n    <div class=\"comment-section\">\n        <div class=\"previous-comments\">\n          <h3>Comments (2)</h3>\n          <p>03/11/2021 Alex: I'd love to buy it</p>\n          <p>03/12/2021 Mia: I love</p>\n        </div>  \n        <div class=\"form-container\">\n        <h3>Add Comment</h3>\n        <p class=\"status\"></p>\n        <form action=\"\" class=\"comment-form\">\n          <li><input type=\"text\" id=\"name\" placeholder=\"Your name\" required/></li>\n          <li>\n            <textarea\n              name=\"comment\"\n              id=\"comment\"\n              cols=\"30\"\n              rows=\"10\"\n              placeholder=\"Give us your comments...\"\n              required\n            ></textarea>\n          </li>\n          <button type=\"submit\" class=\"comment-btn\" id=\"comment-button\">Comment</button>\n        </form>\n      </div>\n    </div>\n    \n  </div>\n   `;\n\n  const form = document.querySelector('.comment-form');\n  form.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    const name = document.getElementById('name').value;\n    const comment = document.getElementById('comment').value;\n    const status = await _api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addComment(id, name, comment);\n    document.getElementById('name').value = '';\n    document.getElementById('comment').value = '';\n\n    const statusUpdate = document.querySelector('.status');\n    statusUpdate.innerHTML = `Comment ${status} Successfully!`;\n    statusUpdate.style.display = 'block';\n    statusUpdate.style.backgroundColor = '#39d42e';\n    setTimeout(() => {\n      statusUpdate.style.display = 'none';\n    }, 3000);\n  });\n  const closeButton = document.querySelector('.close');\n  closeButton.addEventListener('click', () => {\n    commentPopup.remove();\n    main.classList.toggle('blur');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comment);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/functionalities.js":
/*!****************************************!*\
  !*** ./src/modules/functionalities.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemsCounter\": () => (/* binding */ itemsCounter),\n/* harmony export */   \"likesCounter\": () => (/* binding */ likesCounter)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\nconst itemsCounter = (items) => items?.length || 0;\nconst likesCounter = (itemId) => _api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].likesCounter(itemId);\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/functionalities.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _functionalities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionalities.js */ \"./src/modules/functionalities.js\");\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.js */ \"./src/modules/comment.js\");\n\n\n\n\nconst listItems = document.querySelector('#list-items');\nconst homeLink = document.querySelector('#home');\n\nconst displaySeries = async () => {\n  const loader = document.querySelector('#loader');\n  loader.classList.add('display');\n  // Get the series from the API\n  const data = await _api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSeries();\n  loader.classList.remove('display');\n  // Count the series\n  const seriesCount = (0,_functionalities_js__WEBPACK_IMPORTED_MODULE_1__.itemsCounter)(data);\n  // Update the home link accordingly\n  homeLink.innerHTML = `TV Series (${seriesCount})`;\n\n  let items = '';\n  data.forEach(async (film) => {\n    const nbLikes = await (0,_functionalities_js__WEBPACK_IMPORTED_MODULE_1__.likesCounter)(film.id);\n    items += `\n    <article class=\"item\">\n        <img src=\"${film.image.original}\" alt=\"\">\n          <div class=\"title\">\n            <span class=\"film\">${film.name}</span>\n            <button class=\"like-btn\" type=\"button\">\n            <span data-id=\"${film.id}\" class=\"material-symbols-outlined\">favorite</span>\n            </button>\n            <span class=\"like\"> ${nbLikes} likes</span>\n          </div>\n          <button data-id=\"${film.id}\" class=\"comment-btn\" type=\"button\">Comment</button>\n    </article>\n    `;\n    listItems.innerHTML = items;\n  });\n};\n\n// Event on the list items\nlistItems.addEventListener('click', async (event) => {\n  const { target } = event;\n  if (\n    target.classList.contains('material-symbols-outlined')\n    && !target.classList.contains('liked')\n  ) {\n    const { id: itemId } = target.dataset;\n    const response = await _api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addNewLike(+itemId);\n    if (response === 201) {\n      const nbLikes = await (0,_functionalities_js__WEBPACK_IMPORTED_MODULE_1__.likesCounter)(+itemId);\n      // Update the likes\n      const parent = target.parentElement;\n      target.classList.add('liked');\n      const likes = parent.nextElementSibling;\n      likes.innerHTML = nbLikes === 1 ? `${nbLikes} like` : `${nbLikes} likes`;\n    }\n  }\n\n  if (target.classList.contains('comment-btn')) {\n    const { id: itemId } = target.dataset;\n    (0,_comment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(itemId);\n  }\n});\n\ndisplaySeries();\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;