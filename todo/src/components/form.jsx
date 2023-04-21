import { FaChevronDown } from "react-icons/fa";
import List from "./list";

export default function Form() {
    return (
        <>
            <section className="flex flex-col border w-80 h-64">
                <Title />
                <List />
            </section>
        </>
    )
}

function Title() {
    return (
        <div className="w-full border-b border-2 h-10 text-gray-300 flex items-center">
            <span className="mx-2"><FaChevronDown /></span>
            <span className="ml-3">What needs to be done?</span>
        </div>
    )
}
