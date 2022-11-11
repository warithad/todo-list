
export default class Task {
    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    getDueDate(){
        return this.dueDate;
    }

    setTitle(title){
        this.title = title;
    }

    setDescription(description){
        this.description = description;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }
}
