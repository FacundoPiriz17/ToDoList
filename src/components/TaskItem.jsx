import React from 'react'
import {MdDelete} from 'react-icons/md'
import {MdOutlineDone} from 'react-icons/md'
import {RxCross1} from 'react-icons/rx'

const mostrarPrioridad = (priority) => {
  if (priority >= 10) {
    return 'high'
  }
  if (priority >= 5) {
    return 'medium'
  }
  return 'low'
}

const TaskItem = ({
  text,
  description,
  id,
  deleteTask,
  markDone,
  isDone,
  priority,
  checked,
}) => {
  return (
    <div
      className={
        isDone
          ? 'border-2 text-black border-green-600 w-full flex justify-between p-3  rounded-3xl'
          : 'border-2 text-black border-yellow-300 w-full flex justify-between p-3  rounded-3xl'
      }>
      <span> {text} </span>
      {checked == 'Detallado' && <span> {description} </span>}
      <span> {mostrarPrioridad(priority)} </span>
      <section className="flex gap-3">
        <button onClick={() => deleteTask(id)}>
          {' '}
          <i className="cursor-pointer">
            <MdDelete color="red" size={20} />{' '}
          </i>
        </button>
        <button onClick={() => markDone(id, isDone)}>
          {' '}
          {isDone ? (
            <i className="cursor-pointer">
              <RxCross1 color="red" size={20} />
            </i>
          ) : (
            <i className="cursor-pointer">
              <MdOutlineDone color="green" size={20} />
            </i>
          )}
        </button>
      </section>
    </div>
  )
}

export default TaskItem
