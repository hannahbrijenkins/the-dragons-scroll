import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <Router>
    <div>
      <Header></Header>
      <div>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </div>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
