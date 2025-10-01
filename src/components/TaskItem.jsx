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
  title,
  description,
  id,
  deleteTask,
  markDone,
  isDone,
  priority,
}) => {
  return (
    <div
      className={
        isDone
          ? 'bg-green-600 w-full flex justify-between p-3 text-white rounded-3xl'
          : 'bg-yellow-300 w-full flex justify-between p-3 text-white rounded-3xl'
      }>
      <span> {title} </span>
      <span> {description} </span>
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
