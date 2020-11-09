import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
    <div>
      <Header></Header>
      <div>
        <Route exact path="/signup" component={Signup} />
      </div>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
