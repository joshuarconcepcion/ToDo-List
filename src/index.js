import './style.css';
import { renderUI, renderProjectList } from './dom.js';
import { createProject } from './project.js';
import { loadProjects } from './projectStorage.js'

const addProjectBtn = document.getElementById('add-project-btn');
const projectList = document.querySelector('.project-list');
const projects = loadProjects();

renderUI();
renderProjectList(projects, projectList);

addProjectBtn.addEventListener('click', () => {
    createProject();
});

