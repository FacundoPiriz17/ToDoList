import {TiTick} from 'react-icons/ti'
import {useRef, useState} from 'react'

export function TaskForm({setTasks, tasks}) {
  const [taskName, setName] = useState('')
  const [taskDescription, setDescription] = useState('')
  const [taskPriority, setPriority] = useState('')
  const inputRef = useRef(null)

  const submitForm = () => {
    const newTask = {
      text: taskName,
      description: taskDescription,
      priority: taskPriority,
      isDone: false,
      id: taskName.length * tasks.length,
    }
    inputRef.current.focus()
    setName('')
    setDescription('')
    setPriority('')

    addNewTask(newTask)
  }

  function addNewTask(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <div className="flex flex-col justify-center mt-5">
        <div className="w-full text-center">
          <div className="gap-2 mb-4 flex flex-col justify-center items-center">
            <input
              ref={inputRef}
              type={'text'}
              value={taskName}
              placeholder={'Escriba el nombre de su tarea'}
              onChange={(e) => setName(e.target.value)}
              className={
                'flex-1 w-70 px-4 py-2 border border-black rounded-lg text-black focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700'
              }
            />
            <input
              type={'text'}
              value={taskDescription}
              placeholder={'Escriba la descripción de su tarea'}
              onChange={(e) => setDescription(e.target.value)}
              className={
                'flex-1 w-70 px-4 py-2 border border-black rounded-lg text-black focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700'
              }
            />
            <input
              type={'text'}
              value={taskPriority}
              placeholder={'Escriba la prioridad de su tarea'}
              onChange={(e) => setPriority(e.target.value)}
              className={
                'flex-1 w-70 px-4 py-2 border border-black rounded-lg text-black focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700'
              }
            />
          </div>
          <section className="flex flex-row justify-center">
            <i className="text-white border-2 rounded-xl bg-green-400 hover:outline-2 hover:outline-green-700">
              <TiTick
                onClick={() => submitForm()}
                className={'size-10 '}
                cursor={'pointer'}
              />
            </i>
          </section>
        </div>
      </div>
    </>
  )
}

export default TaskForm
