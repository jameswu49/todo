import { FcCheckmark } from "react-icons/fc";
import { useState } from "react";

export default function List({ value }) {
    const [checked, setChecked] = useState(false)

    function showCheckMark(value, index) {
        if (value.id === index) {
            value.checked = true
            setChecked(!checked)
        }
    }


    function Input() {
        return (
            <ul>
                {value.map((value, index) => (
                    <div className="w-full border-b border-2 h-10 text-gray-300 flex items-center">
                        <span className={`w-6 h-6 border rounded-full mx-1 cursor-pointer flex justify-center items-center ${value.checked ? "bg-green-500" : ""}`} onClick={() => showCheckMark(value, index)}>
                            {value.checked && <FcCheckmark />}
                        </span>
                        <li key={index} className={`focus:outline-none ml-4 text-black input ${value.checked ? "line-through" : ""}`}>{value.item}</li>
                    </div>
                ))}
            </ul>
        )
    }

    return (
        <Input />
    )
}




