import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis'

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);
    //const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo = {}, isLoading } = useGetTodoByIdQuery(todoId);

    const next = () => {
        setTodoId(todoId + 1);
    }

    const previous = () => {
        if (todoId === 1) return;
        setTodoId((id) => id - 1);
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            <button
                onClick={previous}
            >
                Previous Todo
            </button>
            <button
                onClick={next}
            >
                Next Todo
            </button>

            {/* <ul>
                {todos.map(({ completed, id, title }) => (
                    <li
                        key={id}
                    >
                        <strong>{completed ? 'Done ' : 'Pending '}</strong>
                        {title}</li>
                ))}
            </ul> */}

        </>
    )
}
