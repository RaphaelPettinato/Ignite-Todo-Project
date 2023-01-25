import styles from "./TaskControl.module.css"

import Clipboard from "../assets/Clipboard.svg"

import { ChangeEvent, FormEvent, useState } from "react"
import { Task } from "./Task";
import { PlusCircle } from "phosphor-react";

import { v4 as uuidv4 } from 'uuid';

interface Content {
    descricao: string
}

interface TaskProps {
    content: Content[];
    isComplete: boolean;
    id: string
}

export function TaskControl({ id }: TaskProps) {

    const [tasks, setTasks] = useState<string[]>([]);

    const [finished, setFinished] = useState(0)

    const [newDescriptionTask, setNewDescriptionTask] = useState('');

    function handleChangeDescriptionTask(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewDescriptionTask(event.target.value)
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, newDescriptionTask]);
        setNewDescriptionTask('');

        console.log(tasks)
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete;
        })

        setTasks(tasksWithoutDeletedOne);
    }

    function completeTask(completed:boolean){
        
    }

    const isInputTextEmpty = newDescriptionTask.length === 0;

    return (
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.formCreateTask}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={newDescriptionTask}
                    onChange={handleChangeDescriptionTask}
                />
                <button
                    type="submit"
                    disabled={isInputTextEmpty}
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
                    <span> {finished} de {tasks.length} </span>
                </div>
            </div>

            <div className={styles.tasksView}>
                {
                    tasks.map(task => {
                        return (
                            <Task
                                id={uuidv4.toString()}
                                description={task}
                                onDeleteTask={deleteTask}
                                isComplete
                            />
                        )
                    })
                }
                <div className={tasks.length === 0 ? styles.taskIsNoneTrue : styles.taskIsNone}>
                    <img src={Clipboard} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}