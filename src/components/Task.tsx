import { useState } from "react"
import { Trash, Check } from "phosphor-react"
import * as Checkbox from '@radix-ui/react-checkbox';

import styles from "./Task.module.css"

interface newTaskProps {
    id: string,
    description: string
    isComplete: boolean
    onDeleteTask: (task: string) => void
}

export function Task({ description, onDeleteTask, isComplete, id }: newTaskProps) {

    function handleDeleteTask() {
        onDeleteTask(id);
    }

    function handleTaskComplete(){
        isComplete = !isComplete;
    }

    return (
        <div className={isComplete ? styles.hasTask : styles.hasTaskDone}>
            <div className={styles.taskModel}>
                <div className={styles.isComplete} onClick={handleTaskComplete}>
                    <Check size={30} />
                </div>

                <p>{description}</p>

                <button onClick={handleDeleteTask}>
                    <Trash size={18} />
                </button>
            </div>
        </div>
    )
}