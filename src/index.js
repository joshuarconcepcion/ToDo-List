import './style.css';
import { renderUI, renderProjectList, renderTodoList } from './dom.js';
import { createProject } from './createProjects.js';
import { loadProjects, saveProjects } from './projectStorage.js'
import { createTodo } from './createTodo.js';
import { Project } from './project.js';

const addProjectBtn = document.getElementById('add-project-btn');
const projectList = document.querySelector('.project-list');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.querySelector('.todo-list');
let projects = loadProjects();
console.log(projects);


if (projects.length === 0) {
    const defaultInbox = new Project('Inbox');
    projects.push(defaultInbox);
    saveProjects(projects);
}


let currProjectID = projects[0].id;
console.log('Current project :', currProjectID);


renderUI(projectList);
renderProjectList(projects, projectList);
renderTodoList(currProjectID, projects, todoList);

document.querySelector('.project-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('project-btn') || e.target.classList.contains('default-project')) {
        const projectID = e.target.dataset.projectID;
        if (projectID) {
            currProjectID = projectID;
            console.log('Current project changed to:', currProjectID);
        }
        renderTodoList(currProjectID, projects, todoList);
    }
});


addProjectBtn.addEventListener('click', () => {
    createProject(projects, projectList);
});

addTodoBtn.addEventListener('click', () => {
    createTodo(currProjectID, projects);
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

document.querySelector('.todo-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-todo-btn')) {
        const container = e.target.closest('.todo-item-container');
        const todoBtn = container.querySelector('.todo-btn');

        const todoID = container.dataset.todoID;

        const project = projects.find(p => String(p.id) === String(currProjectID));
        project.todos = project.todos.filter(todo => String(todo.id) !== String(todoID));

        localStorage.setItem('projects', JSON.stringify(projects));

        if (container) {
            container.remove();
        }
    }
});