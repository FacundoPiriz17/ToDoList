import React, {useCallback, useMemo, useState} from 'react'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'
import {useContext} from 'react'
import {ThemeContext} from '../contexts/DisplayModeContext'

function TaskList() {
  const [tasks, setTasks] = useState([])
  const [check, setCheck] = useState(false)
  const themeSettings = useContext(ThemeContext)

  const pendingTask = useMemo(
    () => tasks.filter((task) => !task.isDone).length,
    [tasks]
  )

  const filteredTasks = useMemo(() => {
    const pending = tasks.filter((task) => !task.isDone)
    return check
      ? [...pending].sort((a, b) => a.priority - b.priority)
      : pending
  }, [tasks, check])

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }, [])

  const markDone = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? {...task, isDone: !task.isDone} : task
      )
    )
  }, [])

  return (
    <div>
      <h1 className="flex font-bold justify-center text-2xl p-10">
        GESTOR DE TAREAS
      </h1>

      <div className="w-full flex justify-center mb-5">
        <div
          className={
            themeSettings.mode !== 'Detallado'
              ? 'w-16 p-1 flex items-start border border-blue-500 rounded-4xl bg-blue-200'
              : 'w-16 p-1 flex items-start border border-blue-500 rounded-4xl bg-white'
          }>
          <input
            type="checkbox"
            id="toggle"
            className="peer hidden"
            onChange={() => {
              themeSettings.switchMode()
            }}
          />
          <label
            htmlFor="toggle"
            className="w-6 h-6 bg-blue-500 rounded-full transition-all duration-300 peer-checked:translate-x-7"></label>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center px-5">
        <div className="bg-gray-100 rounded-xl mx-1 border-1">
          <div className="m-5">
            <h1 className="mb-1 text-2xl">Lista de Tareas</h1>
            <form className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={check}
                onChange={() => setCheck(!check)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
              />
              <p>Filtrar por alta prioridad</p>
            </form>
            <p>Tareas pendientes: {pendingTask}</p>

            <ul className="flex gap-5 flex-col">
              {filteredTasks.map((task) => (
                <li key={task.id}>
                  <TaskItem
                    text={task.text}
                    description={task.description}
                    id={task.id}
                    isDone={task.isDone}
                    priority={task.priority}
                    markDone={() => markDone(task.id)}
                    deleteTask={() => deleteTask(task.id)}
                    checked={themeSettings.mode}
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
            <ul className="flex gap-5 flex-col">
              {tasks
                .filter((task) => task.isDone)
                .map((task) => (
                  <li key={task.id}>
                    <TaskItem
                      text={task.text}
                      description={task.description}
                      id={task.id}
                      isDone={task.isDone}
                      priority={task.priority}
                      markDone={() => markDone(task.id)}
                      deleteTask={() => deleteTask(task.id)}
                      checked={themeSettings.mode}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <TaskForm setTasks={setTasks} tasks={tasks} />
    </div>
  )
}

export default TaskList
