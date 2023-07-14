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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '.style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '.functions.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\nconst clearButton = document.querySelector('.btnComplete');\r\n\r\nconst input = document.getElementById('input');\r\n\r\nconst target = document.getElementById('list');\r\n\r\nlet tasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\n\r\nfunction saveToLocalStorage(data) {\r\n  tasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\n  tasks.push(data);\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n}\r\n\r\ninput.addEventListener('keyup', (event) => {\r\n  if (event.key === 'Enter') {\r\n    const inputValue = input.value;\r\n    const newObj = {\r\n      description: inputValue,\r\n      completed: false,\r\n      index: tasks.length + 1,\r\n    };\r\n    saveToLocalStorage(newObj);\r\n    window.location.reload();\r\n    input.value = '';\r\n  }\r\n});\r\n\r\nfor (let i = 0; i < tasks.length; i += 1) {\r\n  const { index, description, completed } = tasks[i];\r\n  target.innerHTML += `\r\n      <li id=\"L${index}\" class =\"common\">\r\n      <input for =\"P${index}\" id=\"${index}\" type=\"checkbox\" ${\r\n    completed && 'checked'\r\n  }  class =\"checkbox\">\r\n      <p id =\"P${index}\" class=\"li-p\">${description}</p>\r\n      <button id=\"edit-remove${index}\"  class=\"btn dots list-item\">\r\n       <i class=\"fa fa-ellipsis-v\"></i>\r\n      </button>\r\n      </li>\r\n    `;\r\n}\r\n\r\nconst deleteBtn = document.querySelectorAll('.list-item');\r\ndeleteBtn.forEach((button) => {\r\n  button.addEventListener('click', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '.functions.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n});\r\n\r\nconst checkboxs = document.querySelectorAll('.checkbox');\r\ncheckboxs.forEach((el) => {\r\n  el.addEventListener('click', () => {\r\n    const list = JSON.parse(localStorage.getItem('tasks'));\r\n    const findIndex = list.findIndex(\r\n      (listEl) => listEl.index.toString() === el.id.toString()\r\n    );\r\n\r\n    list[findIndex].completed = !list[findIndex].completed;\r\n    localStorage.setItem('tasks', JSON.stringify(list));\r\n    tasks = JSON.parse(localStorage.getItem('tasks'));\r\n  });\r\n});\r\n\r\nclearButton.addEventListener('click', () => {\r\n  const list = JSON.parse(localStorage.getItem('tasks'));\r\n  const filteredItems = list.filter((el) => el.completed === false);\r\n\r\n  localStorage.setItem('tasks', JSON.stringify(filteredItems));\r\n  window.location.reload();\r\n});\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;