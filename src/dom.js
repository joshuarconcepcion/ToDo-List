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
    const todoTitleInput = document.createElement('input');
    todoTitleInput.type = 'text';
    todoTitleInput.classList.add('todo-title-input');
    todoTitleInput.placeholder = 'Todo name...';
    todoTitleInput.style.display = 'block';

    const todoDateInput = document.createElement('input');
    todoDateInput.type = 'date';
    todoDateInput.classList.add('todo-date-input');
    todoDateInput.valueAsDate = new Date();
    todoTitleInput.style.display = 'block';

    container.appendChild(todoTitleInput);
    container.appendChild(todoDateInput);

    todoTitleInput.focus();
    return {
        title: todoTitleInput, 
        date: todoDateInput
    }
}

export function renderSingleTodo(todo, container) {
    const todoCheckbox = document.createElement('input');
    todoCheckbox.type = 'checkbox';
    todoCheckbox.classList.add('todo-checkbox');
    todoCheckbox.style.display = 'block';

    todoCheckbox.addEventListener('change', () => {
        todo.toggleComplete();
        //console.log('Checkbox toggled');
    })

    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');

    const todoBtn = document.createElement('button');
    todoBtn.classList.add('todo-btn');

    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.classList.add('delete-todo-btn');
    deleteTodoBtn.textContent = 'X'

    const todoBtnTitle = document.createElement('p');
    todoBtnTitle.classList.add('todo-btn-title');
    todoBtnTitle.textContent = todo.title;

    const todoBtnDate = document.createElement('p');
    todoBtnDate.classList.add('todo-btn-date')
    todoBtnDate.textContent = todo.dueDate;

    todoBtn.appendChild(todoBtnTitle);
    todoBtn.appendChild(todoBtnDate);

    todoItemContainer.appendChild(todoCheckbox)
    todoItemContainer.appendChild(todoBtn);
    todoItemContainer.appendChild(deleteTodoBtn);

    container.appendChild(todoItemContainer);
}

