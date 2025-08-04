export function saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects))
}

export function loadProjects() {
    const data = localStorage.getItem('projects');
    return data ? JSON.parse(data) : [];
}

export const createAndSaveProject = (name) => {
    const newProject = { name };
    projects.push(newProject);
    saveProjects(projects);
}