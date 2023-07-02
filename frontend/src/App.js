
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Homepage/HomePage"
import NavBar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import Categories from './components/Categories/CategoriesPage';
import SubCategories from './components/SubCategories/SubCategories';
import WhatWeDoPage from './components/whatwedo/WhatWeDoPage';
import WQ from './Admin/papa'
import Login from "./components/login/login"
import SignUP from "./components/login/signup"
import Productc from './Admin/Create-product';
import Subd from './Admin/SubCategory';
import WorkerSignup from './components/worker/worker';
import WorkerLogin from './components/worker/WorkerLogIn';
import Workerpro from './components/worker/workerrpro';
import Displayworker from './components/worker/displayworker';
import Workerlog from './components/worker/workersprofile';
import mama from './mama';

import Slider from "./Admin/Slider"
import Req from "./Admin/requi"
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from "./Admin/Dashboard"
import WorkerProfile from './components/worker/workersprofile';


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      setIsLoggedIn(true);
    };

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/" render={() => (
          <>
            <Home />
            <Categories />
          <WhatWeDoPage/>
       
          </>
        )} />
        <Route path="/category/:categoryId/subcategories" component={SubCategories} />
        <Route path="/whatwedo" component={WhatWeDoPage} />
        <Route path="/mama" component={mama} />
        <Route path="/www" component={WQ} />
        <Route path="/create-product" component={Productc} />
        <Route path="/create-subproduct" component={Subd} />
        <Route path="/Login" component={Login} onLogin={handleLogin}  />
        <Route path="/SignUP" component={SignUP} />
        <Route path="/WorkerSignup" component={WorkerSignup} />
        <Route path="/workerlog" component={Workerlog} />
        <Route path="/workerlogIN" component={WorkerLogin} />
        <Route path="/worker/:id" component={Workerpro} />
        <Route path="/work/:id" component={WorkerProfile} />
        <Route path="/req" component={Req} />
        <Route path="/subcategory/:subcategoryId/workers" component={Displayworker} />
        <Route exact path="/Adminpanel" render={() => (
          <>
          <Slider/>
            <Dashboard />
          </>
        )} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
