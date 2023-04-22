import { useState, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";
import List from './list';

let nextId = 0;

export default function ToDo() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos')
        console.log(savedTodos)
        if (savedTodos) {
            return JSON.parse(savedTodos)
        } else {
            return [];
        }
    })
    const [todo, setTodo] = useState("");


    console.log(todos)

    function handleSubmit(e) {
        e.preventDefault()
        if (todo !== "") {
            setTodos([...todos, { id: nextId++, item: todo, checked: false }])
        }
        setTodo("")
    }

    function handleInputChange(e) {
        setTodo(e.target.value)
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <>
            <section className="flex flex-col border w-80 h-64">
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
                <List value={todos} />
            </section>
        </>
    );
}
