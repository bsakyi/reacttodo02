import { useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () =>{
 
  const [tasks, setTasks] = useState([
    {
       id: 1,
       text: 'Appointment',
       day: 'Dec 3, 2021',
       reminder: true,
    },
   
    {
       id: 2,
       text: 'Meeting at School',
       day: 'Dec 3, 2021',
       reminder: true,
    },
    {
       id: 3,
       text: 'Shopping',
       day: 'Dec 3, 2021',
       reminder: false,
    }, 
   
   ])
 
   //Delete Task 
   const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !==id))
   }

   //Toggle reminder
   const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
   }
  return (
    <div className="container">
       <Header />
      {tasks.length >0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'}

    </div>
  );
}

export default App;
