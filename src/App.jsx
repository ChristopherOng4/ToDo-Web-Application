import React, {useState, useEffect} from 'react'

import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/ToDoEmoji.png'
import workingIcon from './assets/WorkingEmoji.png'
import finishIcon from './assets/CheckEmoji.png'

const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}></TaskForm>
      <header className='app_header'></header>
      <main className='app_main'>
        <TaskColumn 
          title="To Do" 
          icon={todoIcon} 
          tasks={tasks} 
          status="todo"
          handleDelete={handleDelete}>
        </TaskColumn>
        
        <TaskColumn 
          title="In Progress" 
          icon={workingIcon} 
          tasks={tasks} 
          status="doing"
          handleDelete={handleDelete}>
        </TaskColumn>
        
        <TaskColumn 
          title="Complete" 
          icon={finishIcon} 
          tasks={tasks} 
          status="done"
          handleDelete={handleDelete}>
        </TaskColumn>
      </main>
    </div>
  )
}

export default App