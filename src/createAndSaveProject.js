import { saveProjects, loadProjects } from './projectStorage.js';

const projectList = document.querySelector('.project-list');

let projects = loadProjects();

export function createProject() {
    const projectInput = document.createElement('input');
    projectInput.id = 'project-input';
    projectInput.type = 'text';
    projectInput.placeholder = 'Project name...'
    projectInput.style.display = 'block';
    projectList.appendChild(projectInput);

    projectInput.focus();

    projectInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const projectName = projectInput.value;
            const newProjectContainer = document.createElement('div');
            newProjectContainer.classList.add('project-container');
            const newProject = document.createElement('button');
            newProject.textContent = projectName;
            newProject.classList.add('project-btn');
            const deleteProjectBtn = document.createElement('button');
            deleteProjectBtn.classList.add('delete-project-btn');
            deleteProjectBtn.textContent = 'Delete';
            newProjectContainer.appendChild(newProject);
            newProjectContainer.appendChild(deleteProjectBtn);
            projectList.appendChild(newProjectContainer);

            createAndSaveProject(projectName);

            projectInput.value = '';
            projectInput.style.display = 'none';
        }
    });
    
}

const createAndSaveProject = (projectName) => {
    const newProject = { name: projectName };
    projects.push(newProject);
    saveProjects(projects);
}