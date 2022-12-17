import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'
import Login from './pages/Login'
import WatchList from './components/WatchList';
function App() {
    return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/watchlist' element={<WatchList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
