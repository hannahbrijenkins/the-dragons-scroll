import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
        <Header></Header>
        <div>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </div>
        <Footer></Footer>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
