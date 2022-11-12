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

    getTasks(){
        return this.tasks;
    }

    addTask(task){
        this.tasks.push(task);
    }

    deleteTask(taskTitle){
        this.tasks
        .filter(task => task.getTitle() !== taskTitle);
    }
    
}