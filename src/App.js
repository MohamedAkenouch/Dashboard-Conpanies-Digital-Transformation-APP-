import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import useStyles from './styles';

import Dashboard from './pages/Dashboard/Dashboard';
import Form from './components/addQuestionAuditStrategic/Form';




const App = () => {
  

  
  return (
    <Router>
      <Routes>     
        <Route path= "/"  element={<Dashboard />}  />
      </Routes>
    </Router>
    
    
  );
};

export default App;
