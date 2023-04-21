import Form from "./form"

export default function Title() {
    return (
        <section className="flex-col flex h-screen justify-center items-center">
            <h1 className="flex justify-center items-center">todos</h1>
            <Form />
        </section>
    )
}