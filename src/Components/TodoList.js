import React from 'react'
import Buttons from './Buttons';

function TodoList({ todos, handleDel, handleEdit }) {
    return (
        <ul className="todoList">
            {todos.map((t) => {
                return (
                    <li className="listItems" key={t.id}>
                        <span className="todoText"> {t.todo} </span>
                        <Buttons onClick={() => handleEdit(t.id)} label="Edit" />
                        <Buttons onClick={() => handleDel(t.id)} label="Delete" />
                    </li>
                );
            })}
        </ul>
    )
}

export default TodoList