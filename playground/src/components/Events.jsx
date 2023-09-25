import {useState} from 'react'

export default function Events() {
    let word = "WTF is a State!??"
    const [title, setTitle] = useState(word)

    const clickHandler = () => {
        setTitle("Change Manager")
        console.log(title)
    }

    return (
        <>
            <section className="w-2/4 bg-white p-4 flex flex-col items-center justify-center gap-3 mx-auto mt-10">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <button className="bg-memeColor text-white py-2 px-4" onClick={clickHandler}>Change Title</button>
            </section>
        </>
    );
}