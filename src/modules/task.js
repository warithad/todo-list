
export default class Task {
    constructor(title, description, dueDate = 'none'){
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

    getFormattedDate(date){
        const day = date.split('/')[0];
        const month = date.split('/')[1];
        const year = date.split('/')[2];

        return `${day}/${month}/${year}`;
    }
}
