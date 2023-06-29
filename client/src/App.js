import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Contactos from "./components/contactos";
import Chat from "./components/chat";
import Operador from "./components/Operador";
import Loggin from './loggin';
import Registro from './registro'
import Error from './components/error';

function App() {
  return (
    <Router>      
      <Navbar />
      <br/>
      <Routes>
        <Route path="/loggin" element={<Loggin />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/operador" element={<Operador />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
