import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/loggin" className="navbar-brand">Mensajeria INF225</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/contactos" onClick={validar} className="nav-link" id='link1'>Contactos</Link>
          </li>
          <li className="navbar-item">
          <Link to="/chat" className="nav-link">Chat</Link>
          </li>
          <li className="navbar-item">
          <Link to="/operador" className="nav-link">Operador</Link>
          </li>
          <li className="navbar-item">
          <Link to="/loggin" onClick={cerrar_session} className="nav-link">Cerrar sesion</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

function validar(){
  axios.get('http://localhost:4000/api/sessionTest')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if(error.name === 'AxiosError'){
      var mostrar = document.getElementById("link1");
      mostrar.setAttribute('to', '/error');
    }
    console.error(error);
  }); 
}

function cerrar_session(){
   axios.post('http://localhost:4000/api/auth/logout')
  .then(response => {
    console.log("correcto");
    console.log(response.data);
  })
  .catch(error => {
    if(error.name === "AxiosError"){
      console.log("fallo");
    }
    console.error(error);
  });
}
  // axios.post('http://localhost:4000/api/auth/register', { username:  document.getElementById("usuario").value ,phone:  document.getElementById("telefono").value, password:  document.getElementById("contrasena").value})
  // .then(response => {
  //   var mostrar = document.getElementById("incorrecto");
  //   mostrar.style.visibility = "hidden"
  //   mostrar = document.getElementById("correcto");
  //   mostrar.style.visibility = "visible"
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   if(error.name === "AxiosError"){
  //     var mostrar = document.getElementById("incorrecto");
  //     mostrar.style.visibility = "visible"
  //     mostrar = document.getElementById("correcto");
  //     mostrar.style.visibility = "hidden"
  //   }
  //   console.error(error);
  // });
