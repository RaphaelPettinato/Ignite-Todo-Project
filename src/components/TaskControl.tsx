import styles from "./TaskControl.module.css"
import Clipboard from "../assets/Clipboard.svg"
import { Task } from "./Task";
import { PlusCircle } from "phosphor-react";

import { v4 as uuid } from 'uuid';
import { ChangeEvent, FormEvent, useState } from "react";

export function TaskControl() {
    const [tasks, setTasks] = useState<string[]>([])

    const id = '1'

    const [newTaskComment, setNewTaskComment] = useState('')

    function handleCreateTask(event: FormEvent){
        event.preventDefault();

        setTasks([...tasks, newTaskComment])
        setNewTaskComment('');
    }

    function handleNewTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("")
        setNewTaskComment(event.target.value)
    }

    function deleteTask(taskToDelete: string){
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete;
        })

        setTasks(tasksWithoutDeletedOne)
    }

    const isNewTaskInputEmpty = newTaskComment.length === 0

    return (
        <div>
            <form onSubmit={handleCreateTask} className={styles.formCreateTask}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleNewTaskInputChange}
                    value={newTaskComment}
                    required
                />
                <button
                    type="submit"
                    disabled={isNewTaskInputEmpty}
                    className={styles.createTaskButton}
                >
                    Criar <PlusCircle />
                </button>
            </form>
            <div className={styles.taskMade}>
                <div className={styles.taskCreated}>
                    <p>Tarefas Criadas</p>
                    <span> {tasks.length} </span>
                </div>

                <div className={styles.taskCompleted}>
                    <p>Concluídas</p>
                    <span>  de {tasks.length} </span>
                </div>
            </div>

            <div className={styles.tasksView}>
                    {tasks.map(task => {
                        return (
                            <Task
                                key={id}
                                id={id}
                                content={task}
                                isFinished={true}
                                onDeleteTask={deleteTask}
                            />
                        )
                    })}
                <div className={tasks.length === 0 ? styles.taskIsNoneTrue : styles.taskIsNone}>
                    <img src={Clipboard} />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}