import { Todo } from "./todo";
import { renderSingleTodo, renderTodoInput } from "./dom";
import { addTodoToProject } from "./projectStorage";

const todoList = document.querySelector('.todo-list')

export function createTodo(currProject, projects) {
    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');
    todoList.append(todoItemContainer);

    const todoInput = renderTodoInput(todoItemContainer);

    const confirmTodo = document.createElement('button');
    confirmTodo.classList.add('confirm-todo-btn');
    confirmTodo.textContent = '✓'
    todoItemContainer.appendChild(confirmTodo);

    confirmTodo.addEventListener('click', () => {
        const todoTitle = todoInput.title.value.trim();
        const todoDate = todoInput.date.value;
        if (todoTitle === '') return;

        const todoObject = new Todo(todoTitle, todoDate);

        addTodoToProject(todoObject, currProject, projects);
        renderSingleTodo(todoObject, todoList);

        todoInput.title.value = '';
        todoInput.date.value = '';

        todoItemContainer.remove();
    });

}