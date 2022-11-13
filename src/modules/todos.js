import Project from './project';
import {compareAsc, format} from 'date-fns'

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
            this.projects.add(project);
            return;
        }
        alert('This project already exists');
    }

    getProject(projectName){
        return this.projects.find(project => project.getName() === projectName);
    }

    getProjects(){
        return this.projects;
    }

    getAllTasks(){
        const tasks =[];
        this.projects.forEach(project =>{
            project.forEach(task => tasks.push(task));
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