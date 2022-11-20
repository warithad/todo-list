import Todos from './todos'
import Project from './project'
import Task from './task'
import format from 'date-fns'
import Storage from './storage'

export default class UI{


    static initLoadPage(){
        this.activateDefaultButtons();
    }

    static activateDefaultButtons(){
        const getAllTasksButton = document.getElementById('button-all-tasks'); 
        getAllTasksButton.addEventListener('click', ()=>{
            // const p = new Project('proj');
            // Storage.addProject(p);
            // Storage.addTask('proj', 'Taker');
            UI.appendAllTasks();
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

    static createProjectCancelButton(){
        const cancelButton  = document.createElement('button');
        const cancelIcon = document.createElement('img');
        cancelIcon.src = './assets/icons/close-circle-outline.png';

        cancelButton.classList.add('project-cancel-button');
        cancelIcon.classList.add('project-cancel-icon');

        cancelButton.appendChild(cancelIcon);
        return cancelButton;
    }

    // static createProjectButton(projectName){
    //     const projectButton = document.createElement('button');
    // }
    

}

