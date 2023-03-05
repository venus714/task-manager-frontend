import {React} from "react";
import Tasksul from "./Taskul"

function Tasks({userID, task, setTask, allTasks, setAllTasks, currTask, setcurrTask}){
    // console.log(userID)



    let tasksShown = allTasks.map((taskd) => {

   return <Tasksul key={taskd.id} taskd={taskd} currTask={currTask} setcurrTask={setcurrTask}/>
          })


    return (
        <div>
            <h1>Task Manager</h1>
            <h1>NEW TASK</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                // console.log(typeof(document.getElementById('taskDue').value))
                // console.log(!!(task.userID))

                fetch("https://task-manager-back-end.onrender.com//tasks/create", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        name: task.name,
                        description: task.description,
                        due: task.due,
                        status: task.status,
                        user_id: userID
                    })

                }).then(resp => resp.json())
                .then(data => {
                    console.log(data)
                })



                fetch("http://127.0.0.1:9292/tasks", {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        user_id: userID
                    })
                }).then(resp => resp.json())
                  .then(data => {
                    console.log(data)

                        setAllTasks(data)
                    
                  })
            






            }}>
        <label htmlFor="taskName">TASK NAME:</label>
        <input type="text" id="taskName" required onChange={(e) =>  setTask({...task, name: e.target.value})} value={task.name} /><br />

        <label htmlFor="taskDescription">DESCRIPTION:</label>
        <input type="text" id="taskDescription" required onChange={(e) =>  setTask({...task, description: e.target.value})} value={task.description} /><br />

        <label htmlFor="taskStatus">STATUS:</label>
        <select id="taskStatus" required onChange={(e) =>  setTask({...task, status: e.target.value})} value={task.status}>
            <option value="NOT STARTED">NOT STARTED</option>
            <option value="ONGOING">ONGOING</option>
            <option value="COMPLETED">COMPLETED</option>
        </select>
        <br />

        <label htmlFor="taskDue">DUE DATE:</label>
        <input type="datetime-local" id="taskDue" required onChange={(e) =>  setTask({...task, due: e.target.value})} value={task.due} />
        <br />
<input type="submit" value="CREATE"/>
            </form>

            {tasksShown.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>{task.due}</p>
          <p>{task.status}</p>
        </div>
      ))}

           
        </div>
        )
}

export default Tasks;