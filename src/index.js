import './style.css';
import { renderUI, renderProjectList } from './dom.js';
import { createProject } from './createProjects.js';
import { loadProjects } from './projectStorage.js'

const addProjectBtn = document.getElementById('add-project-btn');
const deleteProjectBtn = document.querySelectorAll('.delete-project-btn');
const projectList = document.querySelector('.project-list');
let projects = loadProjects();

renderUI();
renderProjectList(projects, projectList);

addProjectBtn.addEventListener('click', () => {
    createProject(projects, projectList);
});

document.querySelector('.project-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-project-btn')) {
        const container = e.target.closest('.project-container');
        const projectBtn = container.querySelector('.project-btn');

        const projectName = projectBtn.textContent;

        projects = projects.filter(project => project.name !== projectName);

        localStorage.setItem('projects', JSON.stringify(projects));

        if (container) {
            container.remove();
        }
    }
});