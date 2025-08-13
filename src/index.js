import './style.css';
import { renderUI, renderProjectList } from './dom.js';
import { createProject } from './createProjects.js';
import { loadProjects, saveProjects } from './projectStorage.js'
import { createTodo } from './createTodo.js';
import { Project } from './project.js';

const addProjectBtn = document.getElementById('add-project-btn');
const projectList = document.querySelector('.project-list');
const addTodoBtn = document.getElementById('add-todo-btn');
let projects = loadProjects();


if (projects.length === 0) {
    const defaultInbox = new Project('Inbox');
    projects.push(defaultInbox);
    saveProjects(projects);
}


let currProject = projects[0].id;
console.log('Current project :', currProject);

document.querySelector('.project-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('project-btn') || e.target.classList.contains('default-project')) {
        const projectID = e.target.dataset.projectID;
        if (projectID) {
            currProject = projectID;
            console.log('Current project changed to:', currProject);
        }
    }
});

renderUI(projectList);
renderProjectList(projects, projectList);

addProjectBtn.addEventListener('click', () => {
    createProject(projects, projectList);
});

addTodoBtn.addEventListener('click', () => {
    createTodo(currProject, projects);
});

document.querySelector('.todo-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-todo-btn')) {
        const container = e.target.closest('.todo-item-container');

        if (container) {
            container.remove(); 
        }
    }
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