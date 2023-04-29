import { useState, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";
import List from './list';

export default function CompletedTab() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('completed')
        if (savedTodos) {
            return JSON.parse(savedTodos)
        } else {
            return [];
        }
    })
    const [todo, setTodo] = useState("");

    const [tag, setTag] = useState("")


    // useEffect(() => {
    //     localStorage.setItem('completed', JSON.stringify(todos));
    // }, [todos])

    // check if there is anything in localstorage with an Id for it to continue
    function checkID() {
        const id = localStorage.getItem('completed')
        if (id) {
            const parsed = JSON.parse(id)
            return parsed.length
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (todo !== "") {
            setTodos([...todos, { id: checkID(), item: todo, tag: tag, checked: false }])
        }
        setTodo("")
        setTag("")
    }

    function handleInputChange(e) {
        setTodo(e.target.value)
    }

    function handleTagChange(e) {
        setTag(e.target.value)
    }


    return (
        <>
            <section id='completed' className="flex-col border w-80 h-fit md:w-[40%] md:text-xl tab hidden">
                <form action="" onSubmit={handleSubmit}>
                    <div className="w-full border-b border-2 h-10 text-gray-300 flex items-center lg:h-[3.5rem]">
                        <span className="mx-2"><FaChevronDown /></span>
                        <input className="ml-3 focus:outline-none text-black w-2/4" type="text"
                            placeholder="Enter Item"
                            value={todo}
                            onChange={handleInputChange}
                        />
                        <input className='w-2/4 focus:outline-none' type="text"
                            placeholder='Add a tag'
                            value={tag}
                            onChange={handleTagChange}
                        />
                    </div>
                    <button className='hidden' type='submit'>submit</button>
                </form>
                <List value={todos} todos={todos} setTodos={setTodos} setTag={setTag} />
            </section>
        </>
    );
}
