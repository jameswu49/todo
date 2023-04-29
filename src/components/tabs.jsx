import { useState, useEffect } from "react"

// This is the main component that renders all the other components
export default function Tabs() {
    // This component contains the list of all tabs
    function Categories() {
        return (
            <div className="flex">
                <div id="todo" onClick={(e) => handleTodo(e)} className="border-r-2 px-2 cursor-pointer">Todo</div>
                <div id="personal" onClick={(e) => handlePersonal(e)} className="border-r-2 px-2 cursor-pointer">Personal</div>
                <div id="reminders" onClick={(e) => handleReminders(e)} className="border-r-2 px-2 cursor-pointer">Reminders</div>
                <div id="completed" onClick={(e) => handleCompleted(e)} className="border-r-2 px-2 cursor-pointer">Completed</div>
            </div >
        )
    }

    function handleTodo(e) {
        const tab = document.querySelectorAll('.tab')
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].id !== "todo") {
                tab[i].className = tab[i].className.replace('block', 'hidden')
            }
            if (tab[i].id === "todo") {
                tab[i].className = tab[i].className.replace('hidden', 'block')
            }
        }
    }

    function handlePersonal(e) {
        const tab = document.querySelectorAll('.tab')
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].id !== "personal") {
                tab[i].className = tab[i].className.replace('block', 'hidden')
            }
            if (tab[i].id === "personal") {
                tab[i].className = tab[i].className.replace('hidden', 'block')
            }
        }
    }

    function handleReminders(e) {
        const tab = document.querySelectorAll('.tab')
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].id !== "reminders") {
                tab[i].className = tab[i].className.replace('block', 'hidden')
            }
            if (tab[i].id === "reminders") {
                tab[i].className = tab[i].className.replace('hidden', 'block')
            }
        }
    }

    function handleCompleted(e) {
        const tab = document.querySelectorAll('.tab')
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].id !== "completed") {
                tab[i].className = tab[i].className.replace('block', 'hidden')
            }
            if (tab[i].id === "completed") {
                tab[i].className = tab[i].className.replace('hidden', 'block')
            }
        }
    }

    // Renders the main component and the AddTab component
    return (
        <>
            <section className="border">
                <Categories />
            </section>
        </>
    )
}
