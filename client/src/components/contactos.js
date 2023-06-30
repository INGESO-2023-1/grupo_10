import React from 'react';
// import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import Card from 'react-bootstrap/Card';  

axios.defaults.withCredentials = true;

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
        <Accordion.Header>Contacto 1</Accordion.Header>
        <Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Contacto 2</Accordion.Header>
        <Accordion.Body>
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