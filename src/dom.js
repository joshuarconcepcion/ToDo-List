import todayLogo from './media/images/todayLogo3.png';
import { format } from 'date-fns';

const sidebarLogoContainer = document.querySelector('.sidebar-logo-container');
const dateDisplay = document.getElementById('date-display');

export function renderUI() {
    const sidebarLogo = new Image();
    sidebarLogo.classList.add('sidebar-logo');
    sidebarLogo.src = todayLogo;
    sidebarLogoContainer.appendChild(sidebarLogo);

    const today = new Date();
    const formattedDate = format(today, 'PPPP');
    dateDisplay.textContent = formattedDate;
}

export function renderProjectList(projects, container) {
    projects.forEach(project => {
        renderSingleProject(project, container);
    })
}

export function renderProjectInput(container) {
    const projectInput = document.createElement('input');
    projectInput.id = 'project-input';
    projectInput.type = 'text';
    projectInput.placeholder = 'Project name...'
    projectInput.style.display = 'block';
    container.appendChild(projectInput);

    projectInput.focus();
    return projectInput;
}

export function renderSingleProject(project, container) {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-btn');
    projectBtn.textContent = project.name;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-project-btn');
    deleteBtn.textContent = 'Delete';

    container.appendChild(projectContainer);
    projectContainer.appendChild(projectBtn);
    projectContainer.appendChild(deleteBtn);
}

export function renderTodoInput(container) {
    const todoCheckInput = document.createElement('input');
    todoCheckInput.type = 'checkbox';
    todoCheckInput.classList.add('todo-check-input');
    todoCheckInput.style.display = 'block';

    const todoTitleInput = document.createElement('input');
    todoTitleInput.type = 'text';
    todoTitleInput.classList.add('todo-title-input');
    todoTitleInput.placeholder = 'Todo name...';
    todoTitleInput.style.display = 'block';

    const todoDescriptionInput = document.createElement('input');
    todoDescriptionInput.type = 'text';
    todoDescriptionInput.classList.add('todo-description-input');
    todoDescriptionInput.placeholder = 'Description...';
    todoDescriptionInput.style.display = 'block';

    const todoDateInput = document.createElement('input');
    todoDateInput.type = 'date';
    todoDateInput.classList.add('todo-date-input');
    todoDateInput.valueAsDate = new Date();
    todoTitleInput.style.display = 'block';

    container.appendChild(todoCheckInput);
    container.appendChild(todoTitleInput);
    container.appendChild(todoDescriptionInput);
    container.appendChild(todoDateInput);

    todoTitleInput.focus();
    return todoTitleInput;
}

export function renderSingleTodo(container) {
    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');

    const todoBtn = document.createElement('button');
    todoBtn.classList.add('todo-btn');

    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.classList.add('delete-todo-btn');
    deleteTodoBtn.textContent = 'X'

    const todoBtnLeft = document.createElement('div');
    todoBtnLeft.classList.add('todo-btn-left');

    const todoBtnRight = document.createElement('div');
    todoBtnRight.classList.add('todo-btn-right');

    todoBtn.appendChild(todoBtnLeft);
    todoBtn.appendChild(todoBtnRight);
    todoItemContainer.appendChild(todoBtn);
    todoItemContainer.appendChild(deleteTodoBtn);
    container.appendChild(todoItemContainer);
}

