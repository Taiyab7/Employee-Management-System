import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen '>


      <div className=' rounded-xl w-[45%] px-9 py-6 bg-red-400'>
      <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
      <h3 className='text-3xl font-medium'>New Task</h3>
    </div>
    <div className=' rounded-xl w-[45%] px-9 py-6 bg-blue-400'>
      <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
      <h3 className='text-3xl font-medium'>Completed</h3>
    </div>
    <div className=' rounded-xl w-[45%] px-9 py-6 bg-green-400'>
      <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
      <h3 className='text-3xl font-medium'>Active Task</h3>
    </div>
    <div className=' rounded-xl w-[45%] px-9 py-6 bg-yellow-300'>
      <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
      <h3 className='text-3xl font-medium'>Failed Task</h3>
    </div>
    </div>
  )
}

export default TaskListNumbers
