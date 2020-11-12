import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch'
import Profile from './pages/Profile'

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
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile/:username?" component={Profile} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer></Footer>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
