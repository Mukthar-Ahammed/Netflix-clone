import React from "react";
import Navbar from "./components/navbar/navbar";
import "./components/navbar/Navbar.css";
import Banner from "./components/Banner/Banner";
import "./components/Banner/Banner.css"
import Cards from "./components/Cards/Cards"
import "./components/Cards/Cards.css"
import { Originals,Horror, Action } from "./url";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Cards url={Originals} title="Originals" isSmall />
      <Cards  url={Horror} title="Horror"/>
      <Cards  url={Action} title="Action" />
    </div>
  );
}

export default App;
