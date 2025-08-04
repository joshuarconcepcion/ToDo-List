import { saveProjects, loadProjects, createAndSaveProject } from './projectStorage.js';

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
            const newProject = document.createElement('button');
            newProject.textContent = projectName;
            newProject.classList.add('project-btn');
            projectList.appendChild(newProject);

            createAndSaveProject(projectName);

            projectInput.value = '';
            projectInput.style.display = 'none';
        }
    });
    
}