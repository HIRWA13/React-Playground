import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)
    const incrementHandler = () =>{
        setCount(nextCount => count + 1)
    }

    const decrementHandler = () => {
        setCount(prevCount => count - 1)
    }
    return (
        <>
            <section className="bg-white w-2/5 mx-auto p-4 flex items-center justify-center mt-10 gap-3">
                <button className="p-3 text-white bg-memeColor" onClick={decrementHandler}>-</button>
                <div className="text-2xl">{count}</div>
                <button className="p-3 text-white bg-memeColor" onClick={incrementHandler}>+</button>
            </section>
        </>
    );
}