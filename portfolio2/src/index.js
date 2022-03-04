import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';

import './index.css';


import {Router, Switch,Route} from 'react-router-dom';
//import ("history").createBrowserHistory;
//import { createBrowserHistory } from 'history';
import { createBrowserHistory } from "history"


import Jokes from './components/Jokes';
import App from './components/App';


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


ReactDOM.render(
  <Router history={createBrowserHistory()} >
    <Switch>
      <Route exact={true} path='/' component={App}/>
      <Route  path='/jokes' component={Jokes}/>
    </Switch >
  </Router>,
  document.getElementById('root')
);

//without promise
/*
setTimeout(
  ()=>{
    console.log('hiii');
  },2000
);
console.log('how');
console.log('are you');
*/

/*
//promises
new Promise((resolve, reject)=>{
  return reject(new Error('unable to fetch from api'));

  setTimeout(
    ()=>{
      console.log('hiii,how,are you');
    },2000
  );
})
.then(quote=>{
  console.log(quote);
})
.catch(error=>console.log('error',error));
*/

