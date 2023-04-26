import { FcCheckmark } from "react-icons/fc";
import { useState } from "react";

export default function List({ value, todos, setTodos }) {
    const [checked, setChecked] = useState(false)

    function handleDeleteClick(todos, setTodos, index, value, e) {
        if (e.target.className.includes(index)) {
            value.checked = true
            setChecked(!checked)
        }

        setTimeout(() => {
            const removeToDo = todos.filter((todo) => {
                return todo.checked === false
            })
            setTodos(removeToDo)
        }, 1000);
    }

    function handleClick(e) {
        const userInput = prompt('Edit Item')
        if (userInput === null || userInput === "") {
            return
        }
        const updatedTodos = todos.map(todo => {
            if (todo.id === parseInt(e.target.id)) {
                return { ...todo, item: userInput }
            }
            return todo
        })
        setTodos(updatedTodos)
    }


    function Input() {
        return (
            <ul>
                {value.map((value, index) => (
                    <div className="w-full border-b border-2 h-10 text-gray-300 flex items-center md:h-[3.5rem] md:text-xl">
                        <span key={index} className={`w-6 h-6 border rounded-full mx-1 cursor-pointer flex justify-center items-center ${index} ${value.checked ? "bg-green-500" : ""}`} onClick={(e) => handleDeleteClick(todos, setTodos, index, value, e)}>
                            {value.checked && <FcCheckmark />}
                        </span>
                        <li id={value.id} onClick={handleClick} className={`focus:outline-none ml-4 text-black input cursor-pointer ${value.checked ? "line-through" : ""}`}>{value.item}</li>
                    </div>
                ))}
            </ul>
        )
    }

    return (
        <>
            <Input />
        </>
    )
}




