export function saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects))
}

export function loadProjects() {
    const data = localStorage.getItem('projects');
    return data ? JSON.parse(data) : [];
}

export function addTodoToProject(todoObject, projectID, projects) {
    const project = projects.find(p => p.id === projectID);
    project.todos.push(todoObject);
}

