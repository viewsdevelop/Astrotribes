import React from 'react';
import './App.css'
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Merch from './components/pages/Merch';
import User from './components/pages/User';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/merch' component={Merch} />
          <Route path='/about' component={About} />
          <Route path='/user' component={User} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
