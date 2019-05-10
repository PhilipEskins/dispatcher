import React from 'react';
import './scss/App.scss';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Employee from './components/Employee';
import WorkOrders from './components/WorkOrders';
import Customers from './components/Customers';
import Error404 from './components/Error404';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/employee' component={Employee} />
        <Route path='/workorders' component={WorkOrders} />
        <Route path='/customers' component={Customers} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
