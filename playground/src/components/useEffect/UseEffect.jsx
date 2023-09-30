import { useState, useEffect } from "react";

export default function UseEffect() {
    const [resourceType, setResourceType] = useState("")
    const [items, setItems] = useState([])
    // const [todosData, setTodosData] = useState({})

    // console.log("Heellooow am rendered")    
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(res => res.json())
    //     .then(data => setTodosData(data))

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [resourceType])
    
    return (
        <>
            <section className="bg-memeColor py-10 px-4 w-3/4  mt-10 mx-auto">
                <div className="bg-white w-2/4 p-4 mx-auto flex justify-center items-center gap-3 rounded-md">
                    <button className="text-white font-medium rounded-lg text-sm text-center bg-memeColor py-4 px-3 w-full mt-3 cursor-pointer" onClick={()=> setResourceType("Posts")}>Posts</button>
                    <button className="text-white font-medium rounded-lg text-sm text-center bg-memeColor py-4 px-3 w-full mt-3 cursor-pointer" onClick={()=> setResourceType("Users")}>Users</button>
                    <button className="text-white font-medium rounded-lg text-sm text-center bg-memeColor py-4 px-3 w-full mt-3 cursor-pointer" onClick={()=> setResourceType("Comments")}>Comments</button>
                </div>
            <div className="text-white">
               <h1 className="text-2xl text-white text-center mt-3">{resourceType}</h1>
               {items.map(item => {
                return <pre className="w-3/4 bg-black">{JSON.stringify(item)}</pre>
               })}
            </div>
            </section>
        </>
    );
}