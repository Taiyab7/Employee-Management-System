import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import WorkList from '../../TaskList/WorkList'

const EmployeeDashboard = (props) => {
 
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
      
      <Header changeUser={props.changeUser} data ={props.data}/>
      <TaskListNumbers  data ={props.data}/>
      <WorkList  data ={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
