import React from "react";
import Buttons from "./Buttons";

function TodoForm({ handleSubmit, todo, editId, setTodo }) {
    return (
        <form className="todoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <Buttons className="go" type="submit" label={editId ? "Edit" : "Go"} />
        </form>
    );
}

export default TodoForm;
