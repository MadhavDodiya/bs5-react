import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import { Row }from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function App() {
  return (
    <>
    <Col className='bgimg'>
    {[false, ].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 bgd">
          <Container fluid>
            <Navbar.Brand href="#"><img src='/img/logo-white-1-60x60.png' style={{height:"50px",width:"100%"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">HOME</Nav.Link>
                  <Nav.Link href="#action2">ABOUT</Nav.Link>
                  <Nav.Link href="#action2">SERVICES</Nav.Link>
                  <Nav.Link href="#action2">CONTACT</Nav.Link>
                  <Nav.Link href="#action2"> <Button variant="success" className='bgd text-dark'>202-555-7890</Button>{' '}</Nav.Link>

                 
                   
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

<Container>
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <center>
            <h1 className='display-2 text-light'>Once you choose hope, anything is possible...</h1>
            <Button variant="success" className='mt-4 ps-4 pe-4 pt-2 pb-2'>GET STARTED</Button>{' '}
          </center>
        </Col>
        <Col md="2"></Col>
      </Row>
    </Container>
    </Col>

<Container>
  <Row>
    <p className='text-center mt-5'>CERTIFIED WEB DESIGNER BASED IN OAKLAND, CALIFORNIA</p>
    <h1 className='text-center mt-2 display-4'>Problems I can help with</h1>
  </Row>
</Container>

<Container className='mt-4 mb-5'>
  <Row>
    <Col md={4}>
      <img src='/img/2-home.jpg' className='img-fluid rounded-1'/>
      <h3 className='pt-3'>Web Design</h3>
      <h4 className='pt-2'>Focus on how you can help and benefit your user. Use simple words to avoid confusion.</h4>
    </Col>
    <Col md={4}>
    <img src='/img/3-home.jpg' className='img-fluid rounded-1'/>
      <h3 className='pt-3'>Graphic Design</h3>
      <h4 className='pt-2'>Focus on how you can help and benefit your user. Use simple words to avoid confusion.</h4>
    </Col>
    <Col md={4}>
    <img src='/img/4-home.jpg' className='img-fluid rounded-1'/>
      <h3 className='pt-3'>Content Creation</h3>
      <h4 className='pt-2'>Focus on how you can help and benefit your user. Use simple words to avoid confusion.</h4>
    </Col>
  </Row>
</Container>

<Container className='mt-5'>
  <Row>
  <Col>
      <center>
        <img src='/img/5-home.jpg' style={{height:"70px"}} className='mt-5'/>
        <p>Ruth A. Flora</p>
        <h3>You can showcase a client review here. Make it nice<br/> and short, then use this button to send them to <br/>
        your reviews or services page.</h3>

        <button className='btn1'>What My Clients Say</button>
      </center>
  </Col>
  </Row>
</Container>
    
    </>
  );
}

export default App;
