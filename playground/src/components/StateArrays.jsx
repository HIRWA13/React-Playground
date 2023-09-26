// working with arrays when using states:

import { useState } from "react";

export default function StateVsArrays() {
    const [items, setItem] = useState(["item 1", "item 2"])
    const addItem = () => {
        setItem(prev => {
            return [...prev, `new item ${prev.length + 1}`]
        })
    }
    const ourItems = items.map(item => <h1 key={item}>{item}</h1>) 

    return (
        <>
            <section className="w-2/4 bg-white p-4 flex flex-col items-center justify-center gap-3 mx-auto mt-10">
                <button className="bg-memeColor text-white py-2 px-4" onClick={addItem}>Click to add Item</button>
                <div className="p-2">
                    {ourItems}
                </div>
            </section>
        </>
    );
}