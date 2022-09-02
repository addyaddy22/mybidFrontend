
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AdminHome from './components/AdminHome';
import React from 'react';
// import profile from './images/a.png'
// import email from './images/email.jpg'
// import pass from './images/pass.png'

import Login from './components/Login'
import Navbar from './components/Navbar';
import ItemsDetailsPage from './components/ItemsDetailsPage';
import Productpage2 from './components/Productpage2';
import ConfigPage from './components/ConfigPage';
import AdminView from './components/AdminView';

function App() {
  return (

    <div className='App'>
      <Router>
        <Routes>
          <Route>
            <Route element={<Login />} path="/"></Route>
            <Route element={<AdminHome />} path="/adminhome"></Route>
            <Route element={<AdminView />} path="/adminview"></Route>
            <Route element={<ItemsDetailsPage />} path="/landingpage"></Route>
            <Route element={<Productpage2 />} path="/productpage2/">
            </Route>
            <Route element={<ConfigPage />} path="configpage"></Route>
          </Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
