import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Task from './components/Tasks';
import {useEffect, useState} from 'react';
import Single from './components/Single';


function App(){

let [loginDetails, setLoginDetails] = useState({
  name: "",
  password: ""
})
let [signupDetails, setSignupDetails] = useState({
  name: "",
  email: "",
  password: ""
})

let [userID, setUserID] = useState(null);

let [task, setTask] = useState({
  name: "",
  description: "",
  due: "",
  status: "NOT STARTED",
  userID: ""
});

let [allTasks, setAllTasks] = useState([])

useEffect(() => {
  fetch("http://localhost:9292/tasks", {
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



}, [userID])
let [currentTask, setcurrentTask] = useState()

// let [updatedStatus, setUpdatedStatus] = useState({
//   status: ""
// })


  return (
    <div className='container'>
      <div className='app-wrapper'>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/login' element={<Login loginDetails={loginDetails} setLoginDetails={setLoginDetails}  userID={userID} setUserID={setUserID}/>} />
        <Route exact path='/signup' element={<Signup signupDetails={signupDetails} setSignupDetails={setSignupDetails} />} />
        <Route exact path="/navbar" element={<Navbar/>}/>
        <Route exact path='/homepage' element={<Homepage/>}/>
        <Route exact path='/task' element={<Task userID={userID} task={task} setTask={setTask} allTasks={allTasks} setAllTasks={setAllTasks} currentTask={currentTask} setcurrentTask={setcurrentTask}/>}/>
        <Route path="/tasks/:id" element={<Single currentTask={currentTask}/>}/>
        
      </Routes>
      

    </div>
    </div>
  );
 
}

export default App;
