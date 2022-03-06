import axios from "axios";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authorization from "./components/Authorization.jsx";
import Home from "./components/Home.jsx";
import Animals from "./components/Animals.jsx";
import Today from "./components/Today.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/auth" element={<Authorization />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/today" element={<Today />}></Route>
          <Route exact path="/animals" element={<Animals />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;