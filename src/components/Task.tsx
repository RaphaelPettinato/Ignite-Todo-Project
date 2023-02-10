import { CheckCircle, Trash } from "phosphor-react"
import { ITask } from "../App"

import styles from "./Task.module.css"

interface TaskProps {
    task: ITask,
    onDeleteTask: (id: string) => void
    onCompleteTask: (id: string) => void
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
    const isChecked = task.isFinished;
    return (
        <div className={ task.isFinished ? styles.hasTaskDone : styles.hasTask }>
            <div className={styles.taskModel}>
                <button onClick={() => onCompleteTask(task.id)} className={ styles.finishedTask }>
                    {isChecked ? <CheckCircle /> : <div />}
                </button>
                
                <p>{task.content}</p>

                <button onClick={() => onDeleteTask(task.id)}>
                    <Trash size={18} />
                </button>
            </div>
        </div>
    )
}