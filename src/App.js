import React from 'react';
import './App.css'
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
