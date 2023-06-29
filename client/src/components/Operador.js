import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Operador() {
  // let d = new Date();
  var variable =  <h1>hoal</h1>
  // var largo_lista = 2;
  // var contador = 0;
  // while(contador<largo_lista){
  //   variable = <div>{variable}<p>hola</p></div>;
  //   contador = contador +1;
  // }
  // console.log(d);
  return (
  <html>
  <head>
  </head>
  <body style={{margin: '50px'}}>
  <div className="container" style={{padding: '20px', backgroundColor: '#00BFFF', borderRadius: '15px', marginBlockEnd: '15px'}}>
    <div className="row">
      <div className="col">
        <h1>Configuración</h1>
      </div>
    </div>
  </div>
  <div className="container">
    <div className='row'>
      <div className='col-2' style={{marginTop: '70px'}}>
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" >
          <div className="btn-group-vertical me-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-outline-secondary">Crear MSC</button>
            <button type="button" className="btn btn-outline-secondary">Crear antena</button>
            <button type="button" className="btn btn-outline-secondary">Crear celular</button>
          </div>
        </div>
      </div>
      <div className='col-3'>
        <div className="card">
          <div className="card-body">
            Antenas
          </div>
        </div>
      </div> 
      <div className='col-3'>
        <div className="card">
          <div className="card-body">
            Celulares
          </div>
        </div>
      </div> 
      <div className='col-3'>
        <div className="card">
          <div className="card-body">
            MSC
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
  </html>
  );
}

export default Operador;
