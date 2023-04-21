import Title from "./components/title"
import ToDo from "./components/todo"
export default function App() {
  return (
    <>
      <section className="flex-col flex h-screen justify-center items-center">
        <Title />
        <ToDo />
      </section>
    </>
  )
}