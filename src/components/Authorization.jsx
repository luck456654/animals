import axios from "axios";
import React, { useState, useEffect } from "react";
import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router-dom';

function Authorization() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [formAuth, setFormAuth] = useState();
  const [token, setToken] = useState(null);

  const history = createBrowserHistory();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      localStorage.setItem('token',token)
      history.push("/home");
      navigate('/home');
      }
    else{
        
    }
  }, [token]);

  function auth() {
    const url = "https://acits-test-back.herokuapp.com/api/login/";
    axios
      .post(
        url,
        { login: login, password: password },
        {
          dataType: "json",
          "Access-Control-Allow-Origin": url,
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        }
      )
      .then((res) => setToken(res.data.accessToken));
  }

  function handleChangeLogin(event) {
    setLogin(event.target.value);
  }
  function handleChangePassword(event) {
    setPassword(event.target.value);
  }
  return (
    <div>
      <input
        type="text"
        value={login}
        onChange={handleChangeLogin}
        placeholder="Введите логин"
      ></input>
      <input
        type="text"
        value={password}
        onChange={handleChangePassword}
        placeholder="Введите пароль"
      ></input>
      <input type="button" value="Авторизоваться" onClick={auth}></input>
      {token}
    </div>
  );
}
export default Authorization;