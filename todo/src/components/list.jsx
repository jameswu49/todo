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


    function Input() {
        return (
            <ul>
                {value.map((value, index) => (
                    <div className="w-full border-b border-2 h-10 text-gray-300 flex items-center">
                        <span key={index} className={`w-6 h-6 border rounded-full mx-1 cursor-pointer flex justify-center items-center ${index} ${value.checked ? "bg-green-500" : ""}`} onClick={(e) => handleDeleteClick(todos, setTodos, index, value, e)}>
                            {value.checked && <FcCheckmark />}
                        </span>
                        <li className={`focus:outline-none ml-4 text-black input ${value.checked ? "line-through" : ""}`}>{value.item} {index}</li>
                    </div>
                ))}
            </ul>
        )
    }

    return (
        <Input />
    )
}




