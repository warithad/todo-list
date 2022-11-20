import Task from './task'
import {compareAsc, format} from 'date-fns'

export default class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    getTask(taskTitle){
        return this.tasks.find(task => task.getTitle() === taskTitle);    
    }

    // containsTask(taskTitle){
    //     this.tasks.forEach(task => ()=>{
    //         if(task.getTitle() === taskTitle){
    //             return true;
    //         }
    //     })
    //     return false;
    // }

    getTasks(){
        return this.tasks;
    }

    setTasks(tasks){
        this.tasks = tasks;
    }

    addTask(task){
        this.tasks.push(new Task(task));
    }
    
    setTaskDueDate(taskTitle, dueDate){
        this.tasks.find(task => task.getTitle() === taskTitle).setDueDate(dueDate);
    }

    deleteTask(taskTitle){
       this.tasks = this.tasks
        .filter(task => task.getTitle() !== taskTitle);
    }
    
}