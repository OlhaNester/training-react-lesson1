import React from 'react';
import './TodoList.js';
import './TodoList.css';
import classNames from 'classnames';


const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
    <ul className="TodoList">
        {todos.map(({ id, text, completed }) => (
        <li key={id} className={classNames('TodoList_item', { 'TodoList_item_completed': completed, })}>
            <input type="checkbox" className="TodoList_checkbox" checked={completed} onChange={() => onToggleCompleted (id)} />

            <p className="TodoList_text">{text}</p>
            <button onClick={() => onDeleteTodo(id)}>Удалить</button>
        </li>
    ))}</ul>
);

export default TodoList;