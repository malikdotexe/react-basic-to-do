import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks,setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks,{text:newTask,completed:false}]);
    setNewTask("");
  };
  const toggleTask = (index) =>{
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated)
  };
  const deleteTask = (index) =>{
    const updated = tasks.filter((_,i)=>i!==index);
    setTasks(updated)
  };

  return (
    <div className="App">
  ``    <h1>My To-Do List</h1>
      <input
      type = "text"
      value = {newTask}
      onKeyDown={(e)=>{if (e.key === 'Enter') addTask()}}
      onChange = {(e) => setNewTask(e.target.value)}
      placeholder="Add a task..."
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task,index) => (
        <li key={index} style={{textDecoration:task.completed?"line-through":"none"}}> <span>{task.text}</span>
         <div className="task-buttons">
          <button id="toggle" onClick = {() =>toggleTask(index)}>✔</button>
          <button id ="delete" onClick = {() =>deleteTask(index)}>❌</button>
          </div>
          </li>)
)
      }
      
      </ul>
      </div>


        
  );
}

export default App;