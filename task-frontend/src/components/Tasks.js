import React, { useState, useEffect } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", description: "", due: "" });

  useEffect(() => {
    fetch("https://venus-backend-hhw4.onrender.com/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://venus-backend-hhw4.onrender.com/tasks/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => setTasks([...tasks, data.data]))
      .catch((error) => console.log(error));

    setNewTask({ name: "", description: "" , due: ""});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input
            type="text"
            name="name"
            value={newTask.name}
            onChange={handleInputChange}
          />
        </label> <br/>
        <label>
          Task Description:
          <textarea
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          />
        </label> <br/>
        
        <label>
          Due Date:
          <textarea
            name="due"
            value={newTask.due}
            onChange={handleInputChange}
          />
          <button type="submit"> Add Task</button> <br/>
      
        </label>
      </form>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>Task Name:{task.name}</h2>
          <p>Task Description {task.description}</p>
          <p>Due: {task.due}</p>
        </div>
      ))}
    </div>
  );
}

export default Tasks;