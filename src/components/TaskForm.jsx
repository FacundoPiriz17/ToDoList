import {TiTick} from 'react-icons/ti'
import {useState} from 'react'

export function TaskForm({addNewTask}) {
  const [taskName, setName] = useState('')
  const [taskDescription, setDescription] = useState('')
  const [taskPriority, setPriority] = useState('')

  const submitForm = () => {
    const newTask = {
      text: taskName,
      description: taskDescription,
      priority: taskPriority,
      isDone: false,
    }

    setName('')
    setDescription('')
    setPriority('')

    addNewTask(newTask)
  }

  return (
    <>
      <div className="flex flex-col justify-center mt-5">
        <div className="w-full text-center">
          <div className="gap-2 mb-4 flex flex-col justify-center items-center">
            <input
              type={'text'}
              value={taskName}
              placeholder={'Escriba el nombre de su tarea'}
              onChange={(e) => setName(e.target.value)}
              className={
                'flex-1 w-70 px-4 py-2 border-1 rounded-lg text-black focus:none focus:ring-2 focus:ring-teal-700'
              }
            />
            <input
              type={'text'}
              value={taskDescription}
              placeholder={'Escriba la descripción de su tarea'}
              onChange={(e) => setDescription(e.target.value)}
              className={
                'flex-1 w-70 px-4 py-2 border-1  rounded-lg text-black focus:none focus:ring-2 focus:ring-teal-700'
              }
            />
            <input
              type={'text'}
              value={taskPriority}
              placeholder={'Escriba la prioridad de su tarea'}
              onChange={(e) => setPriority(e.target.value)}
              className={
                'flex-1 w-70 px-4 py-2 border-1  rounded-lg text-black focus:none focus:ring-2 focus:ring-teal-700'
              }
            />
          </div>
          <section className="flex flex-row justify-center">
            <i className="text-white border-2 rounded-xl bg-green-400">
              <TiTick
                onClick={() => submitForm()}
                className={'hover:outline-green-700 size-10'}
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
