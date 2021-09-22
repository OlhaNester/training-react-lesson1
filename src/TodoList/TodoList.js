import React from 'react';
import './TodoList.js';
import './TodoList.css';


const TodoList = ({ todos, onDeleteTodo }) => (
    <ul className="TodoList"> {todos.map(({ id, text }) => (
        <li key={id} className="TodoList_item">
            <p className="TodoList_text">{text}</p>
            <button onClick={() => onDeleteTodo(id)}>Удалить</button>
        </li>
    ))}</ul>
);

export default TodoList;