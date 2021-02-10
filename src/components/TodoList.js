import React from "react";

const TodoList = () => {
    const [todos, setTodos] = React.useState([]);
    const [completed, setCompleted] = React.useState([]);
    
    const handleAddTask = () => {
        const task = document.querySelector('#task').value;
        setTodos((prevTodos) => {
            return [...prevTodos, task];
        });
        document.querySelector('#task').value = "";
    };

    const handleDeleteTask = (index) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((task, i) => i !== index);
        });
    };

    const handleCompleteTask = (index) => {
        setCompleted((prevCompleted) => [...prevCompleted, todos[index]]);
        handleDeleteTask(index);
    };

    return (
        <div>
            <div>
                <h1>Tareas</h1>
                <input type="text" id="task" placeholder="Ingrese una tarea" />
                <button onClick={handleAddTask}>Agregar una tarea</button>
            </div>
            <div>
                <h2>Lista de tareas pendientes {todos.length}</h2>
                <table>
                    <tbody>
                        {
                            todos.map((task, index) => (
                                <tr key={index}>
                                    <td>{task}</td>
                                    <td>
                                        <button  onClick={ () => handleDeleteTask(index)}>Eliminar</button>
                                    </td>
                                    <td>
                                        <button  onClick={ () => handleCompleteTask(index)}>Completado</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div>
                    <h2>Lista de tareas completadas {completed.length}</h2>
                    <ul>
                        {
                            completed.map((completed, index) => {
                                return <li key={index}>
                                    {completed}
                                </li>;
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoList;