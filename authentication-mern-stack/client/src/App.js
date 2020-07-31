import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SideBar from './components/SideBar';
import Home from './scenes/Home';
import Login from './scenes/Sign/scenes/Login';
import Register from './scenes/Sign/scenes/Register';

import './style/app.scss';

function App() {
  return (
    <Router>
        <SideBar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;