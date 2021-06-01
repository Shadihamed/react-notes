import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
const App = () => {
  const[tasks,setTasks]= useState([
    {
    id: 1,
    text: 'doc Appt',
    day: 'today',
    reminder: true,
    }
])
//add task
const addTask =(task)=>{
  console.log(task);
}
//delete task
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}
//toggle Reminder
const toggleReminder = (id)=>{
 setTasks(
   tasks.map((task)=> task.id===id
 ? { ...task,reminder:
  !task.reminder}:task))
}

  return (
    <div className="container">
   <Header />
   <AddTask onAdd={addTask}/>
   {tasks.length >0 ? (
    <Tasks tasks={tasks} onDelete=
   {deleteTask} onToggle={toggleReminder}/>
    ):( 
      "No task to show"
    )}
    </div>
  );
}

export default App;
