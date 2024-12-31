import React from 'react'
import Header from '../other/Header'
import TaskCount from '../other/TaskCount'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen w-screen'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskCount changeUser={props.changeUser} data={props.data}/>
      <TaskList changeUser={props.changeUser} data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
