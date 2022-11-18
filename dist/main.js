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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui.js */ \"./src/modules/ui.js\");\n\n\nconst ui = new _modules_ui_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nui.activateDefaultProjectButtons();\n// ui.addProject('warith');\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\n\nclass Project{\n    constructor(name){\n        this.name = name;\n        this.tasks = [];\n    }\n\n    setName(name){\n        this.name = name;\n    }\n\n    getName(){\n        return this.name;\n    }\n\n    getTask(taskTitle){\n        return this.tasks.find(task => task.getTitle() === taskTitle);    \n    }\n\n    getTasks(){\n        return this.tasks;\n    }\n\n    addTask(task){\n        this.tasks.push(task);\n    }\n\n    deleteTask(taskTitle){\n        this.tasks\n        .filter(task => task.getTitle() !== taskTitle);\n    }\n    \n}\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n\nclass Task {\n    constructor(title, description, dueDate = 'none'){\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n    }\n\n    getTitle(){\n        return this.title;\n    }\n\n    getDescription(){\n        return this.description;\n    }\n\n    getDueDate(){\n        return this.dueDate;\n    }\n\n    setTitle(title){\n        this.title = title;\n    }\n\n    setDescription(description){\n        this.description = description;\n    }\n\n    setDueDate(dueDate){\n        this.dueDate = dueDate;\n    }\n\n    getFormattedDate(date){\n        const day = date.split('/')[0];\n        const month = date.split('/')[1];\n        const year = date.split('/')[2];\n\n        return `${day}/${month}/${year}`;\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todos)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\n\nclass Todos {\n    constructor(){\n        this.projects = [];\n    }\n\n    containsProject(projectName){\n        this.projects.forEach(project =>{\n            if(project.getName() === projectName){\n                return true;\n            }\n        })\n        return false;\n    }\n\n    addProject(project){\n        if(!this.containsProject(project.getName())){\n            this.projects.push(project);\n            return;\n        }\n        alert('This project already exists');\n    }\n\n    deleteProject(projectName){\n        this.projects.filter(project => project.getName() !== projectName);\n    }\n\n    getProject(projectName){\n        return this.projects.find(project => project.getName() === projectName);\n    }\n\n    getProjects(){\n        return this.projects;\n    }\n\n    getAllTasks(){\n        const tasks =[];\n        this.projects.forEach(project =>{\n            project.forEach(task => tasks.push(task));\n        })\n        return tasks;\n    }\n\n    getTasksToday(){\n        \n    }\n\n    getTasksThisWeek(){\n\n    }\n\n    getProjectTasks(projectName){\n        return this.getProject(projectName).getTasks();\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/todos.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\n\n\n\nclass UI{\n    constructor(){\n        this.todos = new _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n\n    activateDefaultProjectButtons(){\n        document.getElementById('button-all-tasks')\n        .addEventListener('click', ()=>{\n            console.log(this.createCancelButton())\n            alert('defaultProjecButtons clicked');\n        });\n\n        document.getElementById('button-tasks-today')\n        .addEventListener('click', ()=>{\n            alert('fuck u g');\n        });\n\n        document.getElementById('button-tasks-week')\n        .addEventListener('click', ()=>{\n            alert('helo');\n        });\n    }\n\n    addTask(){\n\n    }\n\n    deleteProject(name){\n        this.todos.deleteProject();\n    }\n\n    addProject(name){\n        this.todos.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name));\n\n        const createdProjects = document.getElementById('created-projects');\n        const button = this.createProjectButton(name);\n\n        console.log(button);\n        createdProjects.appendChild(button);\n    }\n/* dom isn't creating the elements in createProjectButton() method\n    and createCancelButton i think throwing \n*/\n    createProjectButton(name){\n        const button = document.createElement('button');\n        console.log(button);\n\n        button.classList.add('button-project');\n\n        const projectIcon = document.createElement('img');\n        projectIcon.classList.add('project-icon');\n        projectIcon.src = './icons/list-box.png';\n\n        const cancelButton = this.createCancelButton();\n        \n        button.appendChild(projectIcon);\n        button.textContent = name;\n        button.appendChild(cancelButton);\n        \n        cancelButton.addEventListener('click', ()=>{\n            this.todos.deleteProject(name);\n            button.remove();\n        })\n        \n        return button;\n    }\n\n    createCancelButton(){\n        const cancelIcon = document.createElement('img');\n        cancelIcon.classList.add('cancel-icon');\n        cancelIcon.src = '../../dist/assets/icons/close-circle-outline.png';\n\n        const cancelButton = document.createElement('button');\n        cancelButton.classList.add('project-cancel-button');\n        cancelButton.appendChild(cancelIcon);\n\n        console.log(canceButton);\n        return cancelButton;\n    }\n    \n    displayAllTasks(){\n\n    }\n\n    displayTasksToday(){\n\n    }\n\n    displayTasksThisWeek(){\n\n    }\n\n    createProjectButton(projectName){\n\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/ui.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;