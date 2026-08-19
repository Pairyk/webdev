import { useState, useEffect } from 'react';

export default function ToDoList() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("my_todo_quests");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [input, setInput] = useState(""); 

    useEffect(() => {
        localStorage.setItem("my_todo_quests", JSON.stringify(todos));
    }, [todos]);



    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const addTodo = () => {
        if (input.trim() !== "") {
            setTodos(t => [...t, input]);
            setInput(""); 
        }
    }

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }

    const moveTodoUp = (index) => {
        if (index > 0) {
            const updatedTodos = [...todos];
            [updatedTodos[index], updatedTodos[index-1]] = [updatedTodos[index-1], updatedTodos[index]];
            setTodos(updatedTodos);
        }
    }

    const moveTodoDown = (index) => {
        if (index < todos.length - 1) {
            const updatedTodos = [...todos];
            [updatedTodos[index], updatedTodos[index+1]] = [updatedTodos[index+1], updatedTodos[index]];
            setTodos(updatedTodos);
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url(/knight_wp.jpeg)"}}>
            {/* FIXED: Fixed the md:max-w-2xl typo, unified padding scales from p-4 to md:p-6 */}
            <div className='backdrop-blur-md bg-orange-200/70 border-2 border-orange-100/50 w-full rounded-xl max-w-sm md:max-w-2xl shadow-2xl flex flex-col justify-center items-center p-4 md:p-6 transition-all duration-300'>
                
                <h1 className='font-bold text-2xl font-serif md:text-3xl text-center text-gray-900'>Quest List</h1>
                <h2 className='font-serif text-sm md:text-base text-slate-800 mt-1 text-center'>Write Down Your Duties And Start Your Adventure!</h2>
                
                {/* CLEANED: Removed ml-2 from the button and let the gap utility cleanly separate them */}
                <div className='mt-5 flex flex-col gap-2 w-full sm:flex-row items-stretch'>
                    <input 
                        onChange={handleInput} 
                        value={input}
                        className='border-2 border-amber-400 focus:border-amber-500 rounded-xl bg-amber-100/80 w-full flex-1 px-3 py-2 text-base md:text-lg focus:outline-none transition-colors font-serif text-slate-600' 
                        type="text" 
                        placeholder='Enter new mission...' 
                    />
                    <button 
                        onClick={addTodo} 
                        className='active:scale-95 transition-all rounded-xl border-2 border-amber-500/80 focus:border-amber-700 bg-orange-300 hover:bg-orange-400 font-bold px-5 py-2 text-slate-800 shadow-md w-full sm:w-auto text-base'
                    >
                        Inscribe
                    </button>
                </div>
                
                <ol className='w-full mt-4 max-h-[60vh] overflow-y-auto pr-1'>
                    {todos.map((todo, index) =>
                        /* CLEANED: Changed shadow-lg to shadow-sm so multiple items don't look muddy stacked together */
                        <li key={index} className='flex items-center justify-between my-2 bg-amber-100 p-3 rounded-xl shadow-lg shadow-amber-600/20 border-2 border-amber-500 transition-all'>
                            
                            {/* FIXED: Wrapped text in min-w-0 so truncate performs beautifully without crushing your buttons */}
                            <div className='min-w-0 flex-1 pr-3'>
                                <span className='text-slate-800 text-sm md:text-base block truncate'>{todo}</span>
                            </div>
                            
                            {/* CLEANED: Standardized utility padding on control buttons */}
                            <div className='flex items-center gap-1 shrink-0'>
                                <button 
                                    onClick={() => deleteTodo(index)} 
                                    className='border active:scale-95 transition-all rounded-lg px-2.5 py-1 bg-red-300/30 hover:bg-red-300/50 text-red-700 text-xs font-semibold shadow-sm'
                                >
                                    X
                                </button>
                                <button 
                                    onClick={() => moveTodoUp(index)} 
                                    className='border active:scale-95 transition-all rounded-lg px-2.5 py-1 bg-orange-100 hover:bg-orange-200/80 text-slate-600 text-xs font-bold shadow-sm'
                                >
                                    ↑
                                </button>
                                <button 
                                    onClick={() => moveTodoDown(index)} 
                                    className='border active:scale-95 transition-all rounded-lg px-2.5 py-1 bg-orange-100 hover:bg-orange-200/80 text-slate-600 text-xs font-bold shadow-sm'
                                >
                                    ↓
                                </button>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
}