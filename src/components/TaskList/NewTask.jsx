import React from 'react'

const NewTask = ({data}) => {  return (
    <div className='bg-green-400 h-full w-[350px] rounded-xl p-5 flex-shrink-0'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm rounded px-3 py-1'>{data.category}</h3>
        <h4 assName='text-sm'>{data.taskDate}</h4>
    </div>
    <div>
    <h2 className='text-2xl mt-5 font-semibold'>
        {data.taskTitle}
    </h2>
    <p className='text-sm mt-2'>
    {data.taskDescription}
    </p>
    </div>
    <div className='mt-20'>
        <button className='py-1 px-2 text-sm rounded bg-green-500'>Accept Task</button>
    </div>
  </div>
  )
}

export default NewTask
