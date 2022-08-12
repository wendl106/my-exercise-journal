import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-navbar">
          <nav>
            <ol>
              <li><Link to="/">Homepage</Link></li>
              <li><Link to="/add-exercise">Create Exercise</Link></li>
            </ol>
          </nav>
        </div>
        <div className="App-header">
          <header>
            <h1>
              Welcome to my Exercise Tracking Application
            </h1>
            <p>
              Hello there! This is a Single Page Application (SPA) utilizing the powerful MERN stack.
            </p>
            <ol>
              <li><b>M</b>ongoDB is used as the database.</li>
              <li><b>E</b>xpress is used as the web application framework.</li>
              <li><b>R</b>est is used as the frontend client-side Javascript framework</li>
              <li><b>N</b>ode is used as the Javascript web server.</li>
            </ol>
          </header>
        </div>
        <div className="App-content">
          <Routes>
            <Route path="/" exact element={<HomePage setExerciseToEdit={ setExerciseToEdit } />}>
            </Route>
            <Route path="/add-exercise" element={<AddExercisePage />}>
            </Route>
            <Route path="/edit-exercise" element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}>
            </Route>
          </Routes>
        </div>
      
        <div className="App-footer">
          <footer>
            ©2022 Michael Wendland
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;