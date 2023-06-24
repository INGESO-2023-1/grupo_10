import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Contactos from "./components/contactos";
import Chat from "./components/chat";



function App() {
  return (
    <Router>      
      <Navbar />
      <br/>
      <Routes>
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
