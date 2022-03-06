import axios from "axios";
import React, { useState, useEffect } from "react";

const Animals = () => {
  const [animalsToday, setAnimalsTodayanimalsToday] = useState([]);
  const token = localStorage.getItem("token");
  const url = "https://acits-test-back.herokuapp.com/api/animals";
  
  useEffect(() => {
    axios
      .get(url, {
        params:{
          limit:5,
          offset:0
        },
        headers: {
          Authorization: "Bearer " + token,
          dataType: "json",
          "Access-Control-Allow-Origin": url,
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        },
      })
      .then((res) => setAnimalsTodayanimalsToday(res.data.results));
      console.log(animalsToday)
  },[]);
 
 
 
  const [animalsLimited, setAnimalsLimited] = useState([]);
  function offsetAnimals(){
  const url = "https://acits-test-back.herokuapp.com/api/animals";
  axios
  .get(url, {
    params:{
      limit:5,
      offset:2,
    },
    headers: {
      Authorization: "Bearer " + token,
      dataType: "json",
      "Access-Control-Allow-Origin": url,
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    },
  })
  .then((res) => setAnimalsLimited(res.data.results));
  }
  
  return (
    <div>
      <div></div>
      Животные
      {animalsToday.map((item) => (
        <div key={item.id}>
          {item.name}
         </div>
      ))}
     </div>
  );
};

export default Animals;
