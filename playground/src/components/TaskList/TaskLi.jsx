import TaskItem from "./TaskItem";
import styles from './TaskList.module.css'

export default function TaskLi (props) {
    return (
        <>
            <ul>
                {
                    props.tasks.map(task => {
                       return <TaskItem
                            key={task.id}
                            task={task}
                            deleteTask={props.deleteTask}
                        />
                    })
                }
            </ul>
        </>
    );
}