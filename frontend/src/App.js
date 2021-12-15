import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
