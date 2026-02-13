import {Routes , Route} from "react-router-dom";
import React from 'react'
import Home from '../Pages/Home'
import Header from "../Components/Header";
import Footer from "../Components/Footor";




export default function Rout() {
  return (
    <Routes>
          <Route path="/" element={<Home/>}/>
    </Routes>
  );
}
