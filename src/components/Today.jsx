import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Today.css";

    

const Today = () => {
  const [animalsToday, setAnimalsToday] = useState([]);
  const token = localStorage.getItem("token");
  const url = "https://acits-test-back.herokuapp.com/api/executions/today";
    const [dataName, setDataName] = useState();
    const [dataSpecName, setDataSpecName] = useState();
    const [dataAge, setDataAge] = useState();
    const [dataHeight, setDataHeight] = useState();
    const [dataWeight, setDataWeight] = useState();
  
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
  function callCardsAnimals(e, item){
    setDataName(item.animal.name)
    setDataSpecName(item.animal.spec.name)
    setDataAge(item.animal.age)
    setDataHeight(item.animal.height+item.animal.heightUnit)
    setDataWeight(item.animal.weight+item.animal.weightUnit)
  }
  return (
    <div>
      <p><h1>Сегодня</h1></p>
      {animalsToday.map((item) => (
        <div key={item.id} onClick={(e) => callCardsAnimals(e, item)}>
          {item.animal.name}-{item.animal.spec.name}{item.spec}-{item.type}-{item.time}
       </div>
       ))}
       <h2>Данные о животном</h2>
       {dataName}-{dataSpecName}-{dataAge}-{dataHeight}-{dataWeight}
    </div>
  );
};

export default Today;