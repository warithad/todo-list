import Todos from './todos'
import Project from './project'
import Task from './task'
import { formatRFC3339WithOptions } from 'date-fns/fp';

export default class UI{
    constructor(){
        this.todos = new Todos();
    }

    activateDefaultProjectButtons(){
        document.getElementById('button-all-tasks')
        .addEventListener('click', ()=>{
            console.log(this.createCancelButton())
            alert('defaultProjecButtons clicked');
        });

        document.getElementById('button-tasks-today')
        .addEventListener('click', ()=>{
            alert('fuck u g');
        });

        document.getElementById('button-tasks-week')
        .addEventListener('click', ()=>{
            alert('helo');
        });
    }

    addTask(){

    }

    deleteProject(name){
        this.todos.deleteProject();
    }

    addProject(name){
        this.todos.addProject(new Project(name));

        const createdProjects = document.getElementById('created-projects');
        const button = createProjectButton(name);

        console.log('logging button');
        console.log(button);
        createdProjects.appendChild(button);
    }

    createProjectButton(name){
        const button = document.createElement('button');
        console.log(button);

        button.classList.add('button-project');

        const projectIcon = document.createElement('img');
        projectIcon.classList.add('project-icon');
        projectIcon.src = `./assets/icons/list-box.png`;

        const cancelButton = createCancelButton();
        
        button.appendChild(projectIcon);
        button.textContent = name;
        button.appendChild(cancelButton);
        
        cancelButton.addEventListener('click', ()=>{
            this.todos.deleteProject(name);
            button.remove();
        })
        
        return button;
    }

    createCancelButton(){
        const cancelIcon = document.createElement('img');
        cancelIcon.classList.add('cancel-icon');
        cancelIcon.src = `./assets/icons/close-circle-outline.png`;

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('project-cancel-button');
        cancelButton.appendChild(cancelIcon);

        console.log(cancelButton);
        return cancelButton;
    }
    
    displayAllTasks(){

    }

    displayTasksToday(){

    }

    displayTasksThisWeek(){

    }

    createProjectButton(projectName){

    }
}