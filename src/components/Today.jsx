import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Today.css";

const Today = () => {
  const [animalsToday, setAnimalsToday] = useState([]);
  const token = localStorage.getItem("token");
  const url = "https://acits-test-back.herokuapp.com/api/executions/today";
  
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + token,
          dataType: "json",
          "Access-Control-Allow-Origin": url,
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        },
      })
      .then((res) => setAnimalsToday(res.data.results));
  },[]);

  return (
    <div>
    <button>Предыдущая</button>
    <button >Следующая</button>
      <p><h1>Сегодня</h1></p>
      {animalsToday.map((item) => (
        <div key={item.id}>
          {item.animal.name}-{item.type}-{item.time}
          
        </div>
      ))}
    </div>
  );
};

export default Today;