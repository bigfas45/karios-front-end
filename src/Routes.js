import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './core/Home';
import About from './core/About';
import Contact from './core/Contact';
import Services from './core/Services';
import Trainings from './core/Trainings';
import Training_Details from './core/Training-details';
import Billing from './core/Billing';
import Paystack from './core/Paystack';

import AdminRoute from './auth/AdminRoute';
import Signin from './core/Signin';
import Signup from './core/Signup';
import UserDashboard from './user/UserDashboard';
import AddCategory from './user/AddCategory';
import AddTraining from './user/AddTraining';



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contactus" exact component={Contact}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/services" exact component={Services}></Route>
        <Route path="/trainings" exact component={Trainings}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/signup" exact component={Signup}></Route>

        <Route
          path="/training-details/:trainId"
          exact
          component={Training_Details}
        ></Route>

        <Route path="/billing/:trainId" exact component={Billing}></Route>

        <Route path="/paystack/:referenceId" exact component={Paystack}></Route>

        <AdminRoute
          path="/dashbaord"
          exact
          component={UserDashboard}
        ></AdminRoute>
        <AdminRoute
          path="/create/category"
          exact
          component={AddCategory}
        ></AdminRoute>
        <AdminRoute
          path="/create/trainings"
          exact
          component={AddTraining}
        ></AdminRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;