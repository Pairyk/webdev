import React, { useState, useEffect } from 'react';

function ToDoList(){

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("myTodoItems");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [input, setInput] = useState("");

    useEffect(() => {
        localStorage.setItem("myTodoItems", JSON.stringify(todos));
    }, [todos]);

    function handleInputChange(event){
        setInput(event.target.value);
    }

    function addTask(){
        if (input.trim() !== "") {
            setTodos([...todos, input]);
            setInput("");
        }
    }

    function deleteTask(index){
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }

    function moveTaskUp(index){
        if (index > 0) {
            const updatedTodos = [...todos];
            
            [updatedTodos[index], updatedTodos[index-1]] = [updatedTodos[index-1], updatedTodos[index]];

            setTodos(updatedTodos);
        }
    }

    function moveTaskDown(index){
        if (index < todos.length -1) {
            const updatedTodos = [...todos];
            
            [updatedTodos[index], updatedTodos[index+1]] = [updatedTodos[index+1], updatedTodos[index]];

            setTodos(updatedTodos);
        }
    }

    return(
        <div className='min-h-screen flex items-center justify-center flex-col bg-gradient-to-r from-blue-950 to-emerald-800'>
            <div className='bg-cyan-100 p-10 flex flex-col items-center justify-center rounded-3xl shadow-2xs'>
                <h1 className='text-2xl font-bold text-center text-grey-900 mb-6'>To-Do-List</h1>
                <div>
                    <input
                        className='grow border rounded-l-2xl px-3 py-1 text-lg mb-3'
                        type='text'
                        placeholder='Add new task...'
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button 
                    className='bg-blue-400 border text-lg px-3 py-1 rounded-r-2xl'    
                    onClick={addTask}>
                        Add
                    </button>
                </div>

                <ol>
                    {todos.map((todo, index) =>
                        <li 
                        className='my-3 text-lg'
                        key={index}>
                            <span>{todo}</span>
                            <button 
                                className='border mx-1 text-sm rounded-2xl px-1.5'
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>

                            <button
                                className='border mx-1 text-sm rounded-2xl px-1.5' 
                                onClick={() => moveTaskUp(index)}>
                                Up
                            </button>

                            <button 
                                className='border mx-1 text-sm rounded-2xl px-1.5'
                                onClick={() => moveTaskDown(index)}>
                                Down
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList
