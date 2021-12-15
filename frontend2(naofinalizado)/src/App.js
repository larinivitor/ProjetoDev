import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import { Create } from './Create';
import { Edit } from './Edit';
import { Read } from './Read';

function App() {
  return (
    <div>
      <nav className="navbar bg-primary navbar-expand-lg navbar-dark">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">ONGs</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Criar ONGs</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Read}/>
        <Route exact path="/edit/:id" component={Edit}/>
        <Route exact path="/create" component={Create}/>
      </Switch>
    </div>
  );
}

export default App;
