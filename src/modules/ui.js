import Todos from './todos'
import Project from './project'
import Task from './task'
import format from 'date-fns'
import Storage from './storage'

export default class UI{


    static initLoadPage(){
        UI.activateDefaultButtons();
        UI.activateAddProjectButton();
        UI.displayCreatedProjects();
    }

    static activateDefaultButtons(){
        const getAllTasksButton = document.getElementById('button-all-tasks'); 
        getAllTasksButton.addEventListener('click', ()=>{
            UI.appendAllTasks();
            // const p = new Project('proj');
            // Storage.addProject(p);
            // Storage.addTask('proj', 'Taker');
            // Storage.addTask('proj', 'shabalaba');
        })

        const getTasksTodayButton = document.getElementById('button-tasks-today');
        getTasksTodayButton.addEventListener('click', ()=>{
            alert('hell');
        })

        const getTasksThisWeekButton = document.getElementById('button-tasks-week');
        getTasksThisWeekButton.addEventListener('click', ()=>{
            alert('afs')
        })
        
    }
    //TASKS
    static clearTasksContainer(){
        const tasksContainer = document.getElementById('tasks-container');

        const child = tasksContainer.lastElementChild;
        while(child){
            child.remove();
            child = tasksContainer.lastElementChild;
        }
    }

    static appendAllTasks(){
       UI.clearTasksContainer();
       
       const tasksContainer = document.getElementById('tasks-container');
        
       const tasks = Storage.getTodos().getAllTasks();
        console.log(tasks);
        tasks.forEach(task =>{
            const div = UI.createTaskCard(task);
            tasksContainer.appendChild(div);
        })
    }

    static appendTasksToday(){
        UI.clearTasksContainer();

        const tasksContainer = document.getElementById('task-container');

        const tasks = Storage.getTodos().getTasksToday();
    }

    static createTaskCard(task){
        const title = task.getTitle();
        const dueDate = task.getDueDate();

        const taskCard = document.createElement('div');
        taskCard.classList.add('task');

        const h2Tasktitle = document.createElement('h2');
        h2Tasktitle.classList.add('task-title');
        h2Tasktitle.textContent = title;

        const h3TaskDueDate = document.createElement('h3');
        h3TaskDueDate.classList.add('task-date');
        h3TaskDueDate.textContent = dueDate;

        const cancelButton = UI.createTaskCancelButton();
        taskCard.append(h2Tasktitle, h3TaskDueDate, cancelButton);
        
        cancelButton.addEventListener('click', ()=>{
            Storage.deleteTaskByTaskTitle(title);
            taskCard.remove();
        })
        
        return taskCard;
    }

    static createTaskCancelButton(){
        const cancelButton  = document.createElement('button');
        const cancelIcon = document.createElement('img');
        cancelIcon.src = './assets/icons/close-circle-black.png';

        cancelButton.classList.add('task-cancel-button');
        cancelIcon.classList.add('task-cancel-icon');

        cancelButton.appendChild(cancelIcon);
        return cancelButton;
    }

    /*PROJECTS*/
    static createProjectCancelButton(){
        const cancelButton  = document.createElement('button');
        const cancelIcon = document.createElement('img');
        cancelIcon.src = './assets/icons/close-circle-outline.png';

        cancelButton.classList.add('cancel-button');
        cancelIcon.classList.add('cancel-icon');

        cancelButton.appendChild(cancelIcon);
        return cancelButton;
    }

    static createProjectButton(projectName){
        const name = projectName;
        const projectButton = document.createElement('button');
        projectButton.classList.add('created-project');

        const cancelButton = UI.createProjectCancelButton();
        const h2projectName = document.createElement('h2');
        h2projectName.textContent = name;
        h2projectName.classList.add('project-name-text');

        const projectIcon = UI.getProjectIcon();

        const createdProjectsDiv = document.getElementById('projects-list');
        
        projectButton.append(projectIcon, h2projectName, cancelButton);
        
        projectButton.addEventListener('click', ()=>{
            UI.appendTasksOfProject(name);
        })

        cancelButton.addEventListener('click', ()=>{
            Storage.deleteProject(name);
            projectButton.remove();
        });

        createdProjectsDiv.appendChild(projectButton);
    }

    static displayCreatedProjects(){
        const projects = Storage.getTodos().getProjects();

        projects.forEach(project => {
            UI.createProjectButton(project.getName());
        })
        
    }

    static getProjectIcon(){
        const icon = document.createElement('img');
        icon.src = './assets/icons/list-box.png';
        icon.classList.add('project-icon');
        return icon;
    }

    static appendTasksOfProject(projectName){
        const projects = Storage.getTodos().getProjects();  
        const project = Object.assign(new Project(), projects.find(p => p.getName() === projectName));
        const tasks = project.getTasks();
        UI.clearTasksContainer();

        tasks.forEach(task =>{
            const div = UI.createTaskCard(task);
            tasksContainer.appendChild(div);
        })
    }

    static activateAddProjectButton(){
        const submitButton = document.getElementById('button-submit-project');

        submitButton.addEventListener('click', (e)=>{
            e.preventDefault();
            const projectName = document.getElementById('input-add-project').value;   
            const value =  Storage.addProject(new Project(projectName));
            if(value){
                UI.createProjectButton(projectName);
            }
            document.getElementById('input-add-project').value = '';
        })
    }

}

