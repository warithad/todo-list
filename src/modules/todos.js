import Project from './project';
import {compareAsc, format, isThisQuarter, isThisSecond} from 'date-fns'

export default class Todos {
    constructor(){
        this.projects = [];
    }

    containsProject(projectName){
        this.projects.forEach(project =>{
            if(project.getName() === projectName){
                return true;
            }
        })
        return false;
    }

    addProject(project){
        if(!this.containsProject(project.getName())){
            this.projects.push(project);
            return true;
        }
        else {
            alert('This project already exists');
            return false;
        }
    }

    deleteProject(projectName){
        this.projects = this.projects.filter(project => project.getName() !== projectName);
    }

    getProject(projectName){
        return this.projects.find(project => project.getName() === projectName);
    }

    getProjects(){
        return this.projects;
    }

    setProjects(projects){
        this.projects = projects;
    }

    addTask(projectName, taskTitle){
        this.projects.find(project => project.getName() === projectName).addTask(taskTitle);
    }

    deleteTaskByTaskTitle(taskTitle){
        this.projects.forEach(project => project.deleteTask(taskTitle));
    }

    deleteTask(projectName, taskTitle){
        this.projects.find(project => project.getName() === projectName).deleteTask(taskTitle);
    }

    setTaskDueDate(projectName, taskTitle, dueDate){
        this.projects.find(project => project.getName() === projectName).setTaskDueDate(taskTitle, dueDate);
    }

    getAllTasks(){
        const tasks =[];
        this.projects.forEach(project =>{
            project.getTasks().forEach(task => tasks.push(task));
        })
        return tasks;
    }

    getTasksToday(){
             
    }

    getTasksThisWeek(){

    }

    getProjectTasks(projectName){
        return this.getProject(projectName).getTasks();
    }

}