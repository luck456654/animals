import axios from "axios";
import React, { useState, useEffect } from "react";

let limit=5;
let offset=1;
const Animals = () => {
  const [animalsToday, setAnimalsToday] = useState([]);
    const token = localStorage.getItem("token");
  const url = "https://acits-test-back.herokuapp.com/api/animals";
  
  useEffect(() => {
    loadAnimals()
  },[]);

  useEffect(() => {
    loadAnimals()
  },[offset]);
 
 
function loadAnimals(){
  axios
      .get(url, {
        params:{
          limit:limit,
          offset:Number(offset)
        },
        headers: {
          Authorization: "Bearer " + token,
          dataType: "json",
          "Access-Control-Allow-Origin": url,
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        },
      })
      .then((res) => setAnimalsToday(res.data.results));
      console.log(animalsToday)
    }
  
  
  return (
    <div>
    <h1>Животные</h1>
    <button onClick={offset=offset-1}>Предыдущая</button>
    <button onClick={offset=offset+1}>Следующая</button>
      
      {animalsToday.map((item) => (
        <div key={item.id}>
          {item.name}
         </div>
      ))}
     </div>
  );
};

export default Animals;
