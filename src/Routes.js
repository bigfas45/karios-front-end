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
import Business from './core/Business';
import Sme from './core/Sme';
import Technology from './core/Technology';
import Leadership from './core/Leadership';
import Shop from './core/Shop';
import ShopDetails from './core/shop-details';
import Cart from './core/Cart';
import Thankyou from './core/Thankyou';
import ThankyouShop from './core/ThankyouShop';

import AdminRoute from './auth/AdminRoute';
import Signin from './core/Signin';
import Signup from './core/Signup';
import UserDashboard from './user/UserDashboard';
import AddCategory from './user/AddCategory';
import AddTraining from './user/AddTraining';
import Products from './user/Products';
import ProductUpdate from './user/Products-update';
import Gallery from './user/Gallery';
import Orders from './user/Orders';

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
        <Route path="/business-advisory" exact component={Business}></Route>
        <Route path="/sme-incubation" exact component={Sme}></Route>
        <Route path="/shop" exact component={Shop}></Route>
        <Route path="/thankyou/:orderId" exact component={Thankyou}></Route>
       
        <Route
          path="/thankyou/shop/:productId/:refId"
          exact
          component={ThankyouShop}
        ></Route>
        <Route
          path="/leadership-development"
          exact
          component={Leadership}
        ></Route>
        <Route
          path="/technology-and-telecom-solution-sales"
          exact
          component={Technology}
        ></Route>
        <Route
          path="/shop-details/:shopId"
          exact
          component={ShopDetails}
        ></Route>
        <Route
          path="/training-details/:trainId"
          exact
          component={Training_Details}
        ></Route>
        <Route path="/cart" exact component={Cart} />
        <Route path="/billing/:trainId" exact component={Billing}></Route>

        <Route
          path="/paystack/:referenceId/:productId"
          exact
          component={Paystack}
        ></Route>

        <AdminRoute
          path="/dashboard"
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
        <AdminRoute path="/products" exact component={Products}></AdminRoute>
        <AdminRoute
          path="/products/:productId"
          exact
          component={ProductUpdate}
        ></AdminRoute>
        <AdminRoute
          path="/gallery/:productId"
          exact
          component={Gallery}
        ></AdminRoute>
        <AdminRoute
          path="/orders/:productId"
          exact
          component={Orders}
        ></AdminRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
