import { Todo } from "./todo";
import { renderSingleTodo, renderTodoInput } from "./dom";

const todoList = document.querySelector('.todo-list')

export function createTodo(title, dueDate, description) {
    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');
    todoList.append(todoItemContainer);
    
    renderTodoInput(todoItemContainer);
    //renderSingleTodo(todoList);
}