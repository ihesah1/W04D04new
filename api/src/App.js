import logo from './logo.svg';
import './App.css';
import React from "react";
import React, { useState, useEffect } from 'react';
import {Route} from "react-router-dom";

import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Nav from "./components/Nav"
import Cards from "./components/Cards"
import Card from './components/Card';
const App = () =>{
  return <>
  <Nav />
  <Route exact path="/home" component={Home}/>
  <Route exact path="/about" component={About}/>
  <Route path="/contact" component={Contact}/>
  <Route path="/cards" component={Cards}/>
  <Route path="/card/:id" component={Card}/>
</>;
}
useEffect(() => {
  axios.get("https://api.pokemontcg.io/v2/cards?pageSize=10")
  .then((response)=> setPokemon(response.data.data));
  }, []);
  useEffect(async() => {
    const response=await axios.get("https://api.pokemontcg.io/v2/cards?pageSize=10");
    console.log(response)}
  , [])


export default App;
