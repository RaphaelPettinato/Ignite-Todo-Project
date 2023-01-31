import { useState } from "react"
import { Trash } from "phosphor-react"
import * as Checkbox from '@radix-ui/react-checkbox';

import styles from "./Task.module.css"

interface TaskProps {
    id: string,
    content: string,
    isFinished: boolean,
    onDeleteTask: (id: string) => void
}

export function Task({content, isFinished, onDeleteTask, id}: TaskProps) {

    function handleDeleteComment(){
        onDeleteTask(id)

        console.log(id)
    }



    return (
        <div className={styles.hasTask}>
            <div className={styles.taskModel}>
                <input type="checkbox" checked={isFinished} />
                <p>{content}</p>

                <button onClick={handleDeleteComment}>
                    <Trash size={18} />
                </button>
            </div>
        </div>
    )
}