import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Task from './components/Tasks';
import {useEffect, useState} from 'react';


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

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/login' element={<Login loginDetails={loginDetails} setLoginDetails={setLoginDetails}  userID={userID} setUserID={setUserID}/>} />
        <Route exact path='/signup' element={<Signup signupDetails={signupDetails} setSignupDetails={setSignupDetails} />} />
        <Route exact path="/navbar" element={<Navbar/>}/>
        <Route exact path='/homepage' element={<Homepage/>}/>
        <Route exact path='/task' element={<Task/>} />
        
      </Routes>
      

    </div>
  );
 
}

export default App;
