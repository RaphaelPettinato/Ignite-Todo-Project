import { useState } from 'react'

import { Header } from './components/Header'
import { PlusCircle } from 'phosphor-react'

import "./global.css"

import styles from './App.module.css'
import { TaskControl } from './components/TaskControl'
import { v4 as uuidv4 } from 'uuid'

export interface ITask {
  id: string,
  content: string,
  isFinished: boolean
}

function App() {

  const [tasks, setTasks] = useState<ITask[]>([])

  function handleCreateTask(taskContent: string){
    setTasks([
      ...tasks, 
      {
        id: uuidv4(),
        content: taskContent,
        isFinished: false
      }
    ]);
  }

  function handleDeleteTask(taskId: string){
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskId
    });

    setTasks(tasksWithoutDeletedOne)
  }

  function handleCompletedTask(taskId: string){
    const withTaskFinish = tasks.map((task) => {
      if(task.id === taskId) {
        return {
          ...task,
          isFinished: !task.isFinished
        };
      }
      return task
    })
    setTasks(withTaskFinish)
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskControl 
          tasks = {tasks} 
          onHandleCreateTask = {handleCreateTask} 
          onDeleteTask = {handleDeleteTask}
          onCompleteTask = {handleCompletedTask}
        />
      </div>
    </div>
  )
}

export default App
