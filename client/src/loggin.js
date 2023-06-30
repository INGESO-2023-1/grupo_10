import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';  
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

function autenticar(){
  if( document.getElementById("contrasena").value !== "" && document.getElementById("usuario").value !== ""  ){
    axios.post('http://localhost:4000/api/auth/login', { username:  document.getElementById("usuario").value ,password:  document.getElementById("contrasena").value})
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
      }
      console.error(error);
    });
  }
  else{
    console.log("fallo");
  }
}

function Loggin() {
  return (
  <html>
    <head>
    </head>
    <body style={{margin: '50px'}}>
      <div className='container'>
        <div className="row">
          <div className="col-3">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Incio de session</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <input style={{marginBottom: '10px', marginTop: '10px',borderRadius: '10px', paddingLeft: '7px', paddingBottom: '3px',paddingTop: '3px'}} type="text" id="usuario" placeholder="Usuario"/>
                <input style={{marginBottom: '10px',borderRadius: '10px', paddingLeft: '7px',paddingBottom: '3px',paddingTop: '3px'}} type="text" id="contrasena" placeholder="Contraseña"/>
                <p id = "incorrecto" style={{visibility: 'hidden'}}>Datos incorrectos</p>
                <p id = "correcto" style={{visibility: 'hidden'}}>Inicio de sesion exitoso</p>
                <button style={{borderRadius: '10px'}} onClick= {autenticar}>Iniciar session</button>
              </Card.Text>
              <Link to="/registro" className="btn btn-primary">Crear cuenta</Link>
            </Card.Body>
          </Card>
          </div>
          <div className="col-9">
            <Card body>
              <h1>Mensajeria INF225</h1>
              <p>Mensajeria INF225 es una herramienta para chatear a traves de una simulacion de un sistema de telefonina<br></br>permite comunicarse a traves de mensajes, guardar contactos y brinda ...</p>
            </Card>
          </div>
        </div>
      </div>
    </body>
  </html>
  );
}

export default Loggin;

