import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import User from './User';
import Timeout from './Timeout';

function App() {
  return (
    <BrowserRouter>
      <div className='center-login'>
        <Timeout/>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/user" element={<User/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;