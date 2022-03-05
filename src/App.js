import axios from 'axios'
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Authorization from './components/Authorization.jsx';
import Home from './components/Home.jsx';  

function App() {
  let[token,setToken]=useState()
  let[login,setLogin]=useState()
  let[password,setPassword]=useState()
  let[formAuth,setFormAuth]=useState(
  
  )
  function auth(){
    const url = 'https://acits-test-back.herokuapp.com/api/login/'
    axios.post(url, {login:login,password:password}, {
      dataType: 'json',
      'Access-Control-Allow-Origin': url,
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
    .then( res => setToken(res.data.accessToken))
  }
  function handleChangeLogin(event) {
		setLogin(event.target.value);
	}
  function handleChangePassword(event) {
		setPassword(event.target.value);
	}
  
  return (
    <BrowserRouter>
      <div className="App">
         <Route exact path='/auth' component={Authorization}>
            <Authorization 
            login={login} 
            handleChangeLogin={handleChangeLogin} 
            password={password}
            handleChangePassword={handleChangePassword}
            auth={auth}
            />
          </Route>
          <Route exact path='/home' component={Home}>
            <Home />
          </Route>
      </div>
    </BrowserRouter>
  );
}
export default App;
