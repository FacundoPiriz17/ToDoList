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

const TaskItem = ({text, id, deleteTask, markDone, isRealiced, priority}) => {
  return (
    <div
      className={
        isRealiced
          ? 'bg-green-600 w-full flex justify-between p-3 text-white'
          : 'bg-yellow-300 w-full flex justify-between p-3 text-white'
      }>
      <span> {text} </span>
      <span> {mostrarPrioridad(priority)} </span>
      <section className="flex gap-3">
        <button onClick={() => deleteTask(id)}>
          {' '}
          <i className="cursor-pointer">
            <MdDelete color="red" size={20} />{' '}
          </i>
        </button>
        <button onClick={() => markDone(id, isRealiced)}>
          {' '}
          {isRealiced ? (
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
