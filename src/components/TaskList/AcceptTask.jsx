import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='bg-red-400 h-full w-[350px] rounded-xl p-5 flex-shrink-0'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm rounded px-3 py-1'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
    </div>
    <h2 className='text-2xl mt-5 font-semibold'>
        {data.taskTitle}
    </h2>
    <p className='text-sm mt-2'>
        {data.taskDescription}
    </p>
    <div className='flex justify-between mt-20'>
        <button className='bg-green-500 py-1 px-2 text-sm rounded'>
            Mark As Completed
        </button>
        <button className='bg-red-500 py-1 px-2 text-sm rounded'>
            Mark As Failed
        </button>
    </div>
  </div>
  )
}

export default AcceptTask
