import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Login from './pages/Login';
import Register from './pages/Register';
import AddExerciseTypePage from './pages/AddExerciseTypePage';
import { useState } from 'react';
import RouteGuard from "./components/RouteGuard"
import LoggedInRouteGuard from './components/LoggedInRouteGuard';
import About from './pages/About';

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <header>
            <h1>My Exercise Journal</h1>
          </header>
        </div>
        <div className="App-navbar">
          <div className="nav-item"><Link to="/"> Homepage </Link></div>
          <div className="nav-item"><Link to="/add-exercise"> Add Journal Entry </Link></div>
          <div className="nav-item"><Link to="/add-exercise-type"> Add New Exercise Type </Link></div>
          <div className="nav-item"><Link to="/login"> Login </Link></div>
          <div className="nav-item"><Link to="/register"> Register </Link></div>
          <div className="nav-item"><Link to="/about"> About </Link></div>
        </div>
        <div className="App-content">
          <Routes>
            <Route path="/" exact element={
              <RouteGuard>
                <HomePage setExerciseToEdit={ setExerciseToEdit } />
              </RouteGuard>
              }
            />
            <Route path="/add-exercise" element={
              <RouteGuard>
                <AddExercisePage />
              </RouteGuard>
              }
            />
            <Route path="/edit-exercise" element={
              <RouteGuard>
                <EditExercisePage exerciseToEdit={exerciseToEdit} />
              </RouteGuard>
              }
            />
            <Route path="/add-exercise-type" element={
              <RouteGuard>
                <AddExerciseTypePage />
              </RouteGuard>
              }
            />
            <Route path="/login" element={
              <LoggedInRouteGuard>
                <Login />
              </LoggedInRouteGuard>
              }
            />
            <Route path="/register" element={
            <LoggedInRouteGuard>
              <Register />
            </LoggedInRouteGuard>
              }
            />
            <Route path="/about" element={<About />}
            />
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