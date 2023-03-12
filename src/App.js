import React from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route, } from "react-router-dom";
import Add from "./components/shipment/Add"
import Edit from './components/shipment/Edit';
import Shipments from "./components/shipment/Shipments";


export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/add-shipment" element={<Add />} />
        <Route path="/edit-shipment/:id" element={<Edit/>} />
        <Route path="/shipment/:orderNo" element={<Shipments/>} />
      </Routes>
    </div>
  );
};

export default App;
