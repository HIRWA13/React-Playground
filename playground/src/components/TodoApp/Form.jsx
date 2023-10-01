import { useState } from "react";

export default function Form(props) {
    const [taskInput, setTaskInput] = useState(props)    
   
    const taskInputHandler = (event) => {
        setTaskInput(event.target.value)
    }
    
    const submitTaskHandler = (event) => {
        event.preventDefault()
        setTaskInput(prevTask => {
            return [event.target.value, ...prevTask]
        })
        props.onAddTasks(taskInput)
        setTaskInput([])
    }
    return (
        <>
            <form onSubmit={submitTaskHandler} className="flex items-center gap-4 mt-3">
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter your tasks here"
                        className="w-72 p-3 rounded-md outline-none"
                        onChange={taskInputHandler}
                        value={taskInput}
                        />
                </div>
                <div>
                    <button className="text-white font-medium rounded-lg text-sm text-center bg-memeColor py-4 px-3 cursor-pointer">Add</button>
                </div>
            </form>
        </>
    );
}