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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n\n\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initLoadPage();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\n\nclass Project{\n    constructor(name){\n        this.name = name;\n        this.tasks = [];\n    }\n\n    setName(name){\n        this.name = name;\n    }\n\n    getName(){\n        return this.name;\n    }\n\n    getTask(taskTitle){\n        return this.tasks.find(task => task.getTitle() === taskTitle);    \n    }\n\n    // containsTask(taskTitle){\n    //     this.tasks.forEach(task => ()=>{\n    //         if(task.getTitle() === taskTitle){\n    //             return true;\n    //         }\n    //     })\n    //     return false;\n    // }\n\n    getTasks(){\n        return this.tasks;\n    }\n\n    setTasks(tasks){\n        this.tasks = tasks;\n    }\n\n    addTask(task){\n        this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task));\n    }\n    \n    setTaskDueDate(taskTitle, dueDate){\n        this.tasks.find(task => task.getTitle() === taskTitle).setDueDate(dueDate);\n    }\n\n    deleteTask(taskTitle){\n       this.tasks = this.tasks\n        .filter(task => task.getTitle() !== taskTitle);\n    }\n    \n}\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\n\n\n\nclass Storage {\n    static saveTodos(data){\n        localStorage.setItem('todos', JSON.stringify(data))\n    }\n\n    static getTodos(){\n        const todos = Object.assign(\n            new _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), JSON.parse(localStorage.getItem('todos'))\n        );\n        \n        todos.setProjects(\n            todos.getProjects()\n            .map(project => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), project))\n        )\n\n        todos.getProjects()\n            .forEach((project) =>\n                project.setTasks(\n                project.getTasks().map(task => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], task)))  \n        )\n\n        return todos;\n    }\n\n    static addProject(project){\n        const todos = Storage.getTodos();\n\n        const value = todos.addProject(project);\n        Storage.saveTodos(todos);\n        return value;\n    }\n    \n    static deleteProject(projectName){\n        const todos = Storage.getTodos();\n        todos.deleteProject(projectName);\n        Storage.saveTodos(todos);\n    }\n\n    static addTask(projectName, taskTitle){\n        const todos = Storage.getTodos();\n        todos.addTask(projectName, taskTitle);\n        Storage.saveTodos(todos);\n    }\n\n    static deleteTask(projectName, taskTitle){\n        const todos = Storage.getTodos();\n        todos.deleteTask(projectName, taskTitle);\n        Storage.saveTodos(todos);\n    }\n\n    static deleteTaskByTaskTitle(taskTitle){\n        const todos = Storage.getTodos();\n        todos.deleteTaskByTaskTitle(taskTitle);\n        Storage.saveTodos(todos);\n    }\n\n    static setTaskDueDate(projectName, taskTitle, dueDate){\n        const todos = Storage.getTodos();\n        todos.setTaskDueDate(projectName, taskTitle, dueDate);\n        Storage.saveTodos(todos);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n\nclass Task {\n    constructor(title, dueDate = 'No Date'){\n        this.title = title;\n        this.dueDate = dueDate;\n    }\n\n    getTitle(){\n        return this.title;\n    }\n\n    getDueDate(){\n        return this.dueDate;\n    }\n\n    setTitle(title){\n        this.title = title;\n    }\n    \n    setDueDate(dueDate){\n        this.dueDate = dueDate;\n    }\n\n    getFormattedDate(date){\n        const day = date.split('/')[0];\n        const month = date.split('/')[1];\n        const year = date.split('/')[2];\n\n        return `${day}/${month}/${year}`;\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todos)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\n\nclass Todos {\n    constructor(){\n        this.projects = [];\n    }\n\n    containsProject(projectName){\n        this.projects.forEach(project =>{\n            if(project.getName() === projectName){\n                return true;\n            }\n        })\n        return false;\n    }\n\n    addProject(project){\n        if(!this.containsProject(project.getName())){\n            this.projects.push(project);\n            return true;\n        }\n        else {\n            alert('This project already exists');\n            return false;\n        }\n    }\n\n    deleteProject(projectName){\n        this.projects = this.projects.filter(project => project.getName() !== projectName);\n    }\n\n    getProject(projectName){\n        return this.projects.find(project => project.getName() === projectName);\n    }\n\n    getProjects(){\n        return this.projects;\n    }\n\n    setProjects(projects){\n        this.projects = projects;\n    }\n\n    addTask(projectName, taskTitle){\n        this.projects.find(project => project.getName() === projectName).addTask(taskTitle);\n    }\n\n    deleteTaskByTaskTitle(taskTitle){\n        this.projects.forEach(project => project.deleteTask(taskTitle));\n    }\n\n    deleteTask(projectName, taskTitle){\n        this.projects.find(project => project.getName() === projectName).deleteTask(taskTitle);\n    }\n\n    setTaskDueDate(projectName, taskTitle, dueDate){\n        this.projects.find(project => project.getName() === projectName).setTaskDueDate(taskTitle, dueDate);\n    }\n\n    getAllTasks(){\n        const tasks =[];\n        this.projects.forEach(project =>{\n            project.getTasks().forEach(task => tasks.push(task));\n        })\n        return tasks;\n    }\n\n    getTasksToday(){\n             \n    }\n\n    getTasksThisWeek(){\n\n    }\n\n    getProjectTasks(projectName){\n        return this.getProject(projectName).getTasks();\n    }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/todos.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\n\n\n\n\n\nclass UI{\n\n\n    static initLoadPage(){\n        UI.activateDefaultButtons();\n        UI.activateAddProjectButton();\n        UI.displayCreatedProjects();\n    }\n\n    static activateDefaultButtons(){\n        const getAllTasksButton = document.getElementById('button-all-tasks'); \n        getAllTasksButton.addEventListener('click', ()=>{\n            UI.appendAllTasks();\n            // const p = new Project('proj');\n            // Storage.addProject(p);\n            // Storage.addTask('proj', 'Taker');\n            // Storage.addTask('proj', 'shabalaba');\n        })\n\n        const getTasksTodayButton = document.getElementById('button-tasks-today');\n        getTasksTodayButton.addEventListener('click', ()=>{\n            alert('hell');\n        })\n\n        const getTasksThisWeekButton = document.getElementById('button-tasks-week');\n        getTasksThisWeekButton.addEventListener('click', ()=>{\n            alert('afs')\n        })\n        \n    }\n    //TASKS\n    static clearTasksContainer(){\n        const tasksContainer = document.getElementById('tasks-container');\n\n        const child = tasksContainer.lastElementChild;\n        while(child){\n            child.remove();\n            child = tasksContainer.lastElementChild;\n        }\n    }\n\n    static appendAllTasks(){\n       UI.clearTasksContainer();\n       \n       const tasksContainer = document.getElementById('tasks-container');\n        \n       const tasks = _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTodos().getAllTasks();\n        console.log(tasks);\n        tasks.forEach(task =>{\n            const div = UI.createTaskCard(task);\n            tasksContainer.appendChild(div);\n        })\n    }\n\n    static appendTasksToday(){\n        UI.clearTasksContainer();\n\n        const tasksContainer = document.getElementById('task-container');\n\n        const tasks = _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTodos().getTasksToday();\n    }\n\n    static createTaskCard(task){\n        const title = task.getTitle();\n        const dueDate = task.getDueDate();\n\n        const taskCard = document.createElement('div');\n        taskCard.classList.add('task');\n\n        const h2Tasktitle = document.createElement('h2');\n        h2Tasktitle.classList.add('task-title');\n        h2Tasktitle.textContent = title;\n\n        const h3TaskDueDate = document.createElement('h3');\n        h3TaskDueDate.classList.add('task-date');\n        h3TaskDueDate.textContent = dueDate;\n\n        const cancelButton = UI.createTaskCancelButton();\n        taskCard.append(h2Tasktitle, h3TaskDueDate, cancelButton);\n        \n        cancelButton.addEventListener('click', ()=>{\n            _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteTaskByTaskTitle(title);\n            taskCard.remove();\n        })\n        \n        return taskCard;\n    }\n\n    static createTaskCancelButton(){\n        const cancelButton  = document.createElement('button');\n        const cancelIcon = document.createElement('img');\n        cancelIcon.src = './assets/icons/close-circle-black.png';\n\n        cancelButton.classList.add('task-cancel-button');\n        cancelIcon.classList.add('task-cancel-icon');\n\n        cancelButton.appendChild(cancelIcon);\n        return cancelButton;\n    }\n\n    /*PROJECTS*/\n    static createProjectCancelButton(){\n        const cancelButton  = document.createElement('button');\n        const cancelIcon = document.createElement('img');\n        cancelIcon.src = './assets/icons/close-circle-outline.png';\n\n        cancelButton.classList.add('cancel-button');\n        cancelIcon.classList.add('cancel-icon');\n\n        cancelButton.appendChild(cancelIcon);\n        return cancelButton;\n    }\n\n    static createProjectButton(projectName){\n        const name = projectName;\n        const projectButton = document.createElement('button');\n        projectButton.classList.add('created-project');\n\n        const cancelButton = UI.createProjectCancelButton();\n        const h2projectName = document.createElement('h2');\n        h2projectName.textContent = name;\n        h2projectName.classList.add('project-name-text');\n\n        const projectIcon = UI.getProjectIcon();\n\n        const createdProjectsDiv = document.getElementById('projects-list');\n        \n        projectButton.append(projectIcon, h2projectName, cancelButton);\n        \n        projectButton.addEventListener('click', ()=>{\n            UI.appendTasksOfProject(name);\n        })\n\n        cancelButton.addEventListener('click', ()=>{\n            _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteProject(name);\n            projectButton.remove();\n        });\n\n        createdProjectsDiv.appendChild(projectButton);\n    }\n\n    static displayCreatedProjects(){\n        const projects = _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTodos().getProjects();\n\n        projects.forEach(project => {\n            UI.createProjectButton(project.getName());\n        })\n        \n    }\n\n    static getProjectIcon(){\n        const icon = document.createElement('img');\n        icon.src = './assets/icons/list-box.png';\n        icon.classList.add('project-icon');\n        return icon;\n    }\n\n    static appendTasksOfProject(projectName){\n        const projects = _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTodos().getProjects();  \n        const project = Object.assign(new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), projects.find(p => p.getName() === projectName));\n        const tasks = project.getTasks();\n        UI.clearTasksContainer();\n\n        tasks.forEach(task =>{\n            const div = UI.createTaskCard(task);\n            tasksContainer.appendChild(div);\n        })\n    }\n\n    static activateAddProjectButton(){\n        const submitButton = document.getElementById('button-submit-project');\n\n        submitButton.addEventListener('click', (e)=>{\n            e.preventDefault();\n            const projectName = document.getElementById('input-add-project').value;   \n            const value =  _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject(new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName));\n            if(value){\n                UI.createProjectButton(projectName);\n            }\n            document.getElementById('input-add-project').value = '';\n        })\n    }\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/ui.js?");

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