import Title from "./components/title"
import ToDo from "./components/todo"
import Tabs from "./components/tabs"
import PersonalTab from "./components/personal"
import RemindersTab from "./components/reminders"
import CompletedTab from "./components/completed"

export default function App() {
  return (
    <div>
      <section className="flex-col flex h-screen justify-center items-center">
        <Title />
        <div className="overflow-auto w-full flex flex-col items-center">
          <Tabs />
          <ToDo />
          <PersonalTab />
          <RemindersTab />
          <CompletedTab />
        </div>
      </section>
    </div>
  )
}