export function saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects))
}

export function loadProjects() {
    const data = localStorage.getItem('projects');
    return data ? JSON.parse(data) : [];
}

export const createAndSaveProject = (projectName) => {
    const newProject = { name: projectName };
    projects.push(newProject);
    saveProjects(projects);
}