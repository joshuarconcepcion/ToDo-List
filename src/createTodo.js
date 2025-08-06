import { Todo } from "./todo";
import { renderSingleTodo } from "./dom";

const todoList = document.querySelector('.todo-list')

export function createTodo(title, dueDate, description) {
    renderSingleTodo(todoList);
}