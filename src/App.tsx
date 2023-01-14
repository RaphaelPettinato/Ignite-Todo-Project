import { useState } from 'react'

import { Header } from './components/Header'
import { PlusCircle } from 'phosphor-react'

import "./global.css"

import styles from './App.module.css'
import { TaskControl } from './components/TaskControl'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskControl />
      </div>

    </div>
  )
}

export default App
