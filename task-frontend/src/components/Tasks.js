import React, { useState, useEffect } from "react";
import  '../App.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    due: "",
  });

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
    if (editingTaskId) {
      // Update existing task
      fetch(
        `https://venus-backend-hhw4.onrender.com/tasks/${editingTaskId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        }
      )
        .then((response) => response.json())
        .then((data) =>
          setTasks((prevState) =>
            prevState.map((task) => (task.id === data.data.id ? data.data : task))
          )
        )
        .catch((error) => console.log(error));
      setEditingTaskId(null);
    } else {
      // Add new task
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
    }

    setNewTask({ name: "", description: "", due: "" });
  };

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setNewTask({
      name: task.name,
      description: task.description,
      due: task.due ? new Date(task.due).toISOString().substr(0, 10) : "",
    });
  };

  const handleDeleteClick = (taskId) => {
    fetch(`https://venus-backend-hhw4.onrender.com/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then(() => setTasks((prevState) => prevState.filter((task) => task.id !== taskId)))
      .catch((error) => console.log(error));
  };

  return (
    <div className="task-list">
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input
            type="text"
            name="name"
            value={newTask.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Task Description:
          <textarea
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            name="due"
            value={newTask.due}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">{editingTaskId ? "Update Task" : "Add Task"}</button>
</form>
<table>
<thead>
<tr>
<th>Task Name</th>
<th>Task Description</th>
<th>Due Date</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{tasks.map((task) => (
<tr key={task.id}>
<td>{task.name}</td>
<td>{task.description}</td>
<td>{task.due ? new Date(task.due).toLocaleDateString() : "-"}</td>
<td>
<button onClick={() => handleEditClick(task)}>Edit</button>
<button onClick={() => handleDeleteClick(task.id)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}

export default TaskList;