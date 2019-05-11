import React from 'react';
import './scss/App.scss';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/dispatchboard/Main';
import Employee from './components/employee/Employee';
import NewEmployee from './components/employee/NewEmployee';
import WorkOrders from './components/workorders/WorkOrders';
import Customers from './components/customers/Customers';
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
        <Route path='/newemployee' component={NewEmployee} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
