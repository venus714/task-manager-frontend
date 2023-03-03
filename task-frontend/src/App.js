import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Task from './components/Tasks';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path="/navbar" element={<Navbar/>}/>
        <Route exact path='/homepage' element={<Homepage/>}/>
        <Route exact path='/task' element={<Task/>} />
        
      </Routes>
      

    </div>
  );
 
}

export default App;
