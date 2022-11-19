import Todos from './todos'
import Task from './task'
import Project from './project'

import UI from './ui'



export default class Storage{
    static saveTodos(data){
        localStorage.setItem('todos', JSON.stringify(data))
    }

    static getTodos(){
        const todos = Object.assign(
            new Todos(), JSON.parse(localStorage.getItem('todos'))
        );
        
        todos.setProjects(
            todos.getProjects()
            .map(project => Object.assign(new Project(), project))
        )

        todos.getProjects()
            .forEach((project) =>
                project.setTasks(
                project.getTasks().map(task => Object.assign(new Task, task)))  
        )

        return todos;
    }

    static addProject(project){
        const todos = Storage.getTodos();

        todos.addProject(project);
        Storage.saveTodos(todos);
    }
    
    static deleteProject(projectName){
        const todos = Storage.getTodos();
        todos.deleteProject(projectName);
        Storage.saveTodos(todos);
    }

    static addTask(projectName, taskTitle){
        const todos = Storage.getTodos();
        todos.addTask(projectName, taskTitle);
        Storage.saveTodos(todos);
    }

    static deleteTask(projectName, taskTitle){
        
    }
}