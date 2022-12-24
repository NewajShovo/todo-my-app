import React, { ChangeEvent, useState } from "react";

export const AddTodoForm:React.FC = () => {
    const [newTodo, setNewTodo] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: ChangeEvent<HTMLButtonElement>) =>{
        e.preventDefault();
    };



    return (
        <form>
            <input type="text" value={newTodo} onChange={handleChange}/>
            <button type="submit">Add Todo</button>
        </form>
    )
};
