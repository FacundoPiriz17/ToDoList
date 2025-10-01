import React from 'react'
import {useState} from 'react'
import TaskForm from './TaskForm'

function TaskList() {
  const [tasks, setTasks] = useState([])

  function addNewTask(newTask) {
    setTasks(...tasks, {newTask, id: tasks.length * newTask.title.length})
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  function markDone(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isDone = !task.isDone
        }
      })
    )
  }

  return (
    <div>
      <h1 className="flex font-bold justify-center text-2xl p-10">
        GESTOR DE TAREAS
      </h1>

      <div className="grid grid-cols-2 justify-center px-5">
        <div className="bg-gray-100 rounded-xl mx-1 border-1">
          <div className="m-5">
            <h1 className="mb-1 text-2xl">Lista de Tareas</h1>
            <form action="" className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <p>Filtrar por alta prioridad</p>
            </form>
            <ul>
              {tasks &&
                tasks
                  .filter((task) => task.isRealiced === false)
                  .map((task) => (
                    <li key={task.id}>
                      {' '}
                      <TaskItem
                        title={task.title}
                        description={task.description}
                        id={task.id}
                        isDone={task.isDone}
                        priority={task.priority}
                        markDone={markDone(task.id, task.isDone)}
                        deleteTask={deleteTask(task.id)}
                      />
                    </li>
                  ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl mx-1 border-1">
          <div className="m-5">
            <h1 className="mb-1 text-2xl">
              Lista de Tareas <span className="font-bold">COMPLETADAS</span>
            </h1>
            <ul>
              {tasks &&
                tasks
                  .filter((task) => task.isRealiced === true)
                  .map((task) => (
                    <li key={task.id}>
                      {' '}
                      <TaskItem
                        title={task.title}
                        description={task.description}
                        id={task.id}
                        isDone={task.isDone}
                        priority={task.priority}
                        markDone={markDone(task.id, task.isDone)}
                        deleteTask={deleteTask(task.id)}
                      />
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
      <TaskForm />
    </div>
  )
}

export default TaskList
