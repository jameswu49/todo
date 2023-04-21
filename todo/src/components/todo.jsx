import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import List from './list';


export default function ToDo() {
    const [value, setValue] = useState([]);
    const [input, setInput] = useState('');

    let nextId = 0;

    function handleKeypress(e) {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        setValue([...value, { id: nextId++, item: input, checked: false }])
        console.log(value)
        setInput('')
    }

    return (
        <>
            <section className="flex flex-col border w-80 h-64">
                <form action="" onSubmit={handleSubmit}>
                    <div className="w-full border-b border-2 h-10 text-gray-300 flex items-center">
                        <span className="mx-2"><FaChevronDown /></span>
                        <input className="ml-3 focus:outline-none text-black" type="text"
                            placeholder="Enter Item"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyPress={handleKeypress}
                        />
                    </div>
                </form>
                <List value={value} />
            </section>
        </>
    );
}
