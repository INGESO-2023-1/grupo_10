import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Chat() {
  return (
  <html>
  <head>
  </head>
  <body style={{margin: '50px'}}>
  <div className="container" style={{padding: '20px', backgroundColor: '#00BFFF', borderRadius: '15px', marginBlockEnd: '15px'}}>
    <div className="row">
      <div className="col">
        <h1>Chat</h1>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col">
      <Tab.Container id="left-tabs-example" defaultActiveKey="primero">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column" style={{borderRadius: '8px', backgroundColor: 'rgba(0, 191, 255, 0.2)'}}>
            <Nav.Item>
              <Nav.Link eventKey="primero">Chat 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="segundo">Chat 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tercero">Chat 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cuarto">Chat 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="quinto">Chat 5</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sexto">Chat 6</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="primero">
              <Card style={{ width: '60rem', height: '430px', backgroundColor: 'rgba(0, 191, 255, 0.2)' }}>
                <Card.Body>
                  <Card.Title id='numero'>5555555555</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                  </Card.Text>
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <Card style={{ width: '55rem', height: '300px' }}>
                          <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>
                              <p id='chat1'></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                      <div class="w-100"></div>
                      <div class="col">
                        <input type="text" placeholder="Escribe aquí" id='mensaje' style={{ width: '55rem',borderRadius: '8px',marginTop: '7px' }}/>
                        <button style={{borderRadius: '10px', marginTop: '4px'}} onClick={eniar_mensaje}>Enviar</button>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Tab.Pane>
            <Tab.Pane eventKey="segundo">
            <Card style={{ width: '60rem', height: '430px', backgroundColor: 'rgba(0, 191, 255, 0.2)' }}>
                <Card.Body>
                  <Card.Title>Numero receptor</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                  </Card.Text>
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <Card style={{ width: '55rem', height: '300px' }}>
                          <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                      <div class="w-100"></div>
                      <div class="col">
                        <input type="text" placeholder="Escribe aquí" id= 'mensaje' style={{ width: '55rem',borderRadius: '8px',marginTop: '7px' }}/>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      </Tab.Container>
      </div>
    </div>
  </div>
  </body>
  </html>
  );
}


export default Chat;

function eniar_mensaje() {
  if(document.getElementById("numero") !== null){
  axios.post('http://localhost:4000/api/message/send', {phone:  document.getElementById("numero").textContent, message: document.getElementById("mensaje").value})
  .then(response => {
    // var mostrar = document.getElementById("incorrecto");
    // mostrar.style.visibility = "hidden";
    // mostrar = document.getElementById("correcto");
    // mostrar.style.visibility = "visible"
    console.log(response.data);
    mensajeria();
  })
  .catch(error => {
    if(error.name === "AxiosError"){
      // var mostrar = document.getElementById("incorrecto");
      // mostrar.style.visibility = "visible";
      // mostrar = document.getElementById("correcto");
      // mostrar.style.visibility = "hidden"
    }
    console.error(error);
  });
}
}

function mensajeria(){
  let variable = "";
  if(document.getElementById("numero") !== null){
  let texto ='http://localhost:4000/api/message/list/'+document.getElementById("numero").textContent;
  axios.get(texto)
  .then(response => {
    var largo_lista = response.data.length;
    var contador = 0;
    var dato1;
    var dato2;
    
    // console.log(JSON.stringify(response.data));
    while(contador<largo_lista){
      dato1 = response.data[contador].fromPhone.toString();
      console.log(dato1);
      dato2 = response.data[contador].message.toString();
      console.log(dato2);
      variable = "<div>"+variable+"<p>"+dato1+":"+ dato2+"</p></div>";
      contador = contador +1;
    }
    var chat = document.getElementById("chat1");
    chat.innerHTML = variable;
    console.log("%c" + variable, "color: blue;");
  })
  .catch(error => {
    console.error(error);

  }); 
  }
}
