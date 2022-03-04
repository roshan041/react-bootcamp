import React from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';

import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserDetails from './components/UserDetails';
import Welcome from './components/Welcome';
import ThankYou from './components/ThankYou';

ReactDOM.render(
  <Router >
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/userdetails' element={<UserDetails/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/thankyou' element={<ThankYou/>}/>

    </Routes>
  </Router>
  ,document.getElementById('root')
)
