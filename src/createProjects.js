import { saveProjects } from './projectStorage.js';
import { renderSingleProject } from './dom.js';

export function createProject(projects, projectList) {
    const projectInput = document.createElement('input');
    projectInput.id = 'project-input';
    projectInput.type = 'text';
    projectInput.placeholder = 'Project name...'
    projectInput.style.display = 'block';
    projectList.appendChild(projectInput);

    projectInput.focus();

    projectInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const projectName = projectInput.value.trim();
            if (projectName === '') return;

            const projectObject = { name: projectName };
            projects.push(projectObject);
            saveProjects(projects);

            renderSingleProject(projectObject, projectList);

            projectInput.value = '';
            projectInput.style.display = 'none';
        }
    });
    
}
