
export default class Task {
    constructor(title, dueDate = 'none'){
        this.title = title;
        this.dueDate = dueDate;
    }

    getTitle(){
        return this.title;
    }

    getDueDate(){
        return this.dueDate;
    }

    setTitle(title){
        this.title = title;
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
