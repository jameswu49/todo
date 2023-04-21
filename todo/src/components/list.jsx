import { FcCheckmark } from "react-icons/fc";
import { useState } from "react";

export default function List({ value }) {
    const [checked, setChecked] = useState(false)

    function showCheckMark() {
        setChecked(!checked)
    }

    function Input() {
        return (
            <ul>
                {value.map(value => (
                    <div className="w-full border-b border-2 h-10 text-gray-300 flex items-center">
                        <span className={`w-6 h-6 border rounded-full mx-1 cursor-pointer flex justify-center items-center ${checked ? "bg-green-500" : ""}`} onClick={showCheckMark}>
                            {checked && <FcCheckmark />}
                        </span>
                        <input className="focus:outline-none ml-4 text-black input line-through" type="text"
                            value={value.item} />
                    </div>
                ))}
            </ul>
        )
    }

    return (
        <Input />
    )
}




