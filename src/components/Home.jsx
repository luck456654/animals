import axios from "axios";
import React, { useState } from "react";
import { Link } from 'react-router-dom';


function Home(props) {
    return <div>
  <Link to="/today">Cегодня</Link>
  <Link to="/animals">Животные</Link>
  </div>
  }
  export default Home;