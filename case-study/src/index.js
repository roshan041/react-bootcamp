import React from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Stocks from "./components/Stocks";
import Users from "./components/Users";

import {firebaseApp, auth} from './firebase';


auth.onAuthStateChanged(user=>{
  if(user){
    console.log('user signed in',user);
  }
  else{
    console.log('user not signed in');
  }
})

ReactDOM.render(
  <Router >
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/stocks' element={<Stocks/>}/>
      <Route path='/users' element={<Users/>}/>
    </Routes>
  </Router>
  ,document.getElementById('root')
)
