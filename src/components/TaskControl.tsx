import styles from "./TaskControl.module.css"
import Clipboard from "../assets/Clipboard.svg"
import { Task } from "./Task";
import { PlusCircle } from "phosphor-react";
import { v4 as uuid } from 'uuid';
import { ChangeEvent, FormEvent, useState } from "react";
import { ITask } from "../App";

interface TaskProps {
    tasks: ITask[],
    onHandleCreateTask: (content: string) => void 
    onDeleteTask: (id: string) => void
    onCompleteTask: (id: string) => void
}

export function TaskControl({ tasks, onHandleCreateTask, onDeleteTask, onCompleteTask } : TaskProps) {
    const [newTaskComment, setNewTaskComment] = useState('')

    const tasksToDoYet = tasks.length;
    const tasksDone = tasks.filter((task) => task.isFinished).length

    function handleCreateTask(event: FormEvent){
        event.preventDefault();

        setNewTaskComment('');

        onHandleCreateTask(newTaskComment)
    }

    function handleNewTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("")
        setNewTaskComment(event.target.value)
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
                    <span> {tasksToDoYet} </span>
                </div>

                <div className={styles.taskCompleted}>
                    <p>Concluídas</p>
                    <span> {tasksDone} de {tasksToDoYet} </span>
                </div>
            </div>

            <div className={styles.tasksView}>
                    {tasks.map(task => {
                        return (
                            <Task 
                                key={task.id} 
                                task={task} 
                                onDeleteTask={onDeleteTask}
                                onCompleteTask={onCompleteTask}
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