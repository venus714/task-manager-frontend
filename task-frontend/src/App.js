import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>

    </div>
  );
 
}

export default App;
