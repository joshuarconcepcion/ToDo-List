import { Todo } from "./todo";

export function saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects))
}

export function loadProjects() {
    const data = localStorage.getItem('projects');
    return data ? JSON.parse(data) : [];
}

export function addTodoToProject(todoObject, projectID, projects) {
    const project = projects.find(p => String(p.id) === String(projectID));
    project.todos.push(todoObject);
    console.log("Pushed todo to project: " + projectID);
    saveProjects(projects);
}

export function loadTodos(projectID, projects) {
    const project = projects.find(p => String(p.id) === String(projectID));

    return (project.todos || []).map(t => {
        const todo = new Todo(t.title, t.dueDate, t.id);
        todo.title = t.title;
        todo.dueDate = t.dueDate;
        todo.completed = !!t.completed;
        todo.id = t.id
        return todo;
    });
}

