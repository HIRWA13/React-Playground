import { useState } from "react";
import Task from "./Task";
import Form from "./Form";

const TASKS = [
    {id:1, title:"Going to the market"},
    {id:2, title:"fetching data"},
    {id:3, title:"designing a todo app"},
    {id:4, title:"learning react"}
]

export default function TaskList() {
    const [tasks, setTasks] = useState(TASKS)

    const addTask = (task) => {
        setTasks(prevTask => {
            return [
                task,
                ...prevTask
            ]
        })
    }
        return (
            <>
                <Form onAddTasks={addTask}/>
                {tasks.map((task, index) => {
                    return <Task key={index} title={task.title}/>
                })}
            </>
        );
}