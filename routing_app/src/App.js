import React from 'react';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Landingpage from './components/landingpage';
import Postviewpage from './components/Postviewpage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Landing Page</Link>
        <Link to="/postview">PostView page</Link>
      </div>

      <Routes>
        <Route exact path="/" element={<Landingpage/>}/>
        <Route exact path="/postview" element={<Postviewpage/>}/>
      </Routes>

    </Router>
    
  );
}

export default App;
