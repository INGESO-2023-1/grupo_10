import React from 'react';
// import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import Card from 'react-bootstrap/Card';  

function Contactos() {
    extraer_lista();
    return (
    <html>
    <head>
    </head>
    <body style={{margin: '50px'}}>
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
              <Card>
                <Card.Body>
                <Card.Title>Agregar contactos</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  <input style={{marginBottom: '10px', marginTop: '10px',borderRadius: '10px', paddingLeft: '7px', paddingBottom: '3px',paddingTop: '3px'}} type="text" id="telefono_agregar" placeholder="Usuario"/>
                  <p id = "incorrecto" style={{visibility: 'hidden'}}>Agregado con exito</p>
                  <p id = "correcto" style={{visibility: 'hidden'}}>Fallo al agregar</p>
                  <button style={{borderRadius: '10px'}} onClick={agregar_contacto}>Iniciar session</button>
                </Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
              <Card>
                <Card.Body>
                <Card.Title>Eliminar contacto</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  <input style={{marginBottom: '10px', marginTop: '10px',borderRadius: '10px', paddingLeft: '7px', paddingBottom: '3px',paddingTop: '3px'}} type="text" id="telefono_eliminar" placeholder="Usuario"/>
                  <p id = "incorrecto" style={{visibility: 'hidden'}}>Agregado con exito</p>
                  <p id = "correcto" style={{visibility: 'hidden'}}>Fallo al agregar</p>
                  <button style={{borderRadius: '10px'}} onClick={eliminar_contacto}>Iniciar session</button>
                </Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
          </div>
        </div>
    <div className='col-9'>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        /api/user/username/:username
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </div>
    </div>
    </body>
    </html>
    );
}
export default Contactos;

function extraer_lista() {
    axios.get('http://localhost:4000/api/sessionTest')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);

    }); 
}

function agregar_contacto() {
  axios.post('http://localhost:4000/api/contact/add', {phone:  document.getElementById("telefono_agregar").value})
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

function eliminar_contacto() {
  axios.post('http://localhost:4000/api/contact/remove', {phone:  document.getElementById("telefono_eliminar").value})
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