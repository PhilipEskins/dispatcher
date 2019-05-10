import React from 'react';
import './scss/App.scss';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Employee from './components/Employee';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/employee' component={Employee} />
      </Switch>
    </div>
  );
}

export default App;
