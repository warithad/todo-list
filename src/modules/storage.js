import Todos from './todos'
import Task from './task'
import Project from './project'

import UI from './ui'



export default class Storage{

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
    
}