export class Todo {
    constructor(title, dueDate, description) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.completed = false
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}
