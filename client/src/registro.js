import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';  
import { Link } from 'react-router-dom';
import axios from 'axios';

function registrar(){
  axios.post('http://localhost:4000/api/auth/register', { username:  document.getElementById("usuario").value ,phone:  document.getElementById("telefono").value, password:  document.getElementById("contrasena").value})
  .then(response => {
    var mostrar = document.getElementById("incorrecto");
    mostrar.style.visibility = "hidden"
    mostrar = document.getElementById("correcto");
    mostrar.style.visibility = "visible"
    console.log(response.data);
  })
  .catch(error => {
    if(error.name === "AxiosError"){
      var mostrar = document.getElementById("incorrecto");
      mostrar.style.visibility = "visible"
      mostrar = document.getElementById("correcto");
      mostrar.style.visibility = "hidden"
    }
    console.error(error);
  });
}

function Registro() {
  return (
  <html>
    <head>
    </head>
    <body style={{margin: '50px'}}>
      <div className='container'>
        <div className="row">
          <div className="col-10">
          <Card>
            <Card.Body>
              <Card.Title><h1>Registro</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <div className='container'>
                  <div className='row'>
                    <div className='col'>
                    <input style={{width: '30%', marginBottom: '10px', marginTop: '10px',borderRadius: '10px', paddingLeft: '7px', paddingBottom: '3px',paddingTop: '3px'}} type="text" id="usuario" placeholder="Nombre con el que se identificara"/>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                    <input style={{width: '30%', marginBottom: '10px',borderRadius: '10px', paddingLeft: '7px',paddingBottom: '3px',paddingTop: '3px'}} type="text" id="contrasena" placeholder="Palabra clave que requerira para ingresar"/>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                    <input style={{width: '30%', marginBottom: '10px',borderRadius: '10px', paddingLeft: '7px',paddingBottom: '3px',paddingTop: '3px'}} type="text" id="telefono" placeholder="Numero de teléfono"/>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <button style={{borderRadius: '10px'}} onClick={registrar}>Registrarse</button>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <p id = "correcto" style={{visibility: 'hidden'}}>Registro exitoso</p>
                      <p id = "incorrecto" style={{visibility: 'hidden'}}>Fallo al registrar</p>
                    </div>
                  </div>
                </div>
              </Card.Text>
              <Link to="/loggin" className="btn btn-primary">Volver al loggin</Link>
            </Card.Body>
          </Card>
          </div>
        </div>
      </div>
    </body>
  </html>
  );
}

export default Registro;
