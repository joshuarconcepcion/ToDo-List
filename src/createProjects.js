import { saveProjects } from './projectStorage.js';
import { renderSingleProject } from './dom.js';
import { renderProjectInput } from './dom.js';

export function createProject(projects, projectList) {
    const projectInput = renderProjectInput(projectList);

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
