import { useState, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";
import List from './list';

export default function ToDo() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos')
        if (savedTodos) {
            return JSON.parse(savedTodos)
        } else {
            return [];
        }
    })
    const [todo, setTodo] = useState("");


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    // check if there is anything in localstorage with an Id for it to continue
    function checkID() {
        const id = localStorage.getItem('todos')
        if (id) {
            const parsed = JSON.parse(id)
            return parsed.length
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (todo !== "") {
            setTodos([...todos, { id: checkID(), item: todo, checked: false }])
        }
        setTodo("")
    }

    function handleInputChange(e) {
        setTodo(e.target.value)
    }

    return (
        <>
            <section className="flex flex-col border w-80 h-fit">
                <form action="" onSubmit={handleSubmit}>
                    <div className="w-full border-b border-2 h-10 text-gray-300 flex items-center">
                        <span className="mx-2"><FaChevronDown /></span>
                        <input className="ml-3 focus:outline-none text-black" type="text"
                            placeholder="Enter Item"
                            value={todo}
                            onChange={handleInputChange}
                        />
                    </div>
                </form>
                <List value={todos} todos={todos} setTodos={setTodos} />
            </section>
        </>
    );
}
