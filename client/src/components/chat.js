import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';


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
                        <input type="text" placeholder="Escribe aquí" style={{ width: '55rem',borderRadius: '8px',marginTop: '7px' }}/>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Tab.Pane>
            <Tab.Pane eventKey="segundo">Second tab content</Tab.Pane>
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
