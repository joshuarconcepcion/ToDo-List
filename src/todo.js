export class Todo {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
        this.completed = false
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}
