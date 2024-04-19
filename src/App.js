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

<Container className='mt-5 mb-5'>
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

<Container className='mt-5 pt-5'>
  <Row>
    <Col md={4}>
      <img src='/img/6-home.jpg' className='img-fluid'/>
      <center>
      <h3>Dragos Andrei Atudorei</h3>
      <h6>WordPress Content Creator</h6>
      <h6>Certified Web Designer</h6>
      <h6>Incurable Perfectionist</h6>
      </center>
    </Col>
    <Col md={8}>
      <Container>
        <Col>
        <h6 className='pt-3 pb-3'>Welcome</h6>
          <h1>My name is Andrei and I am the creator of this template.</h1>
          <h4 className='pt-3'>I gave it my all to make this the best design to start from. I named it Hope, in honor of my client who inspired me to make it – her middle name is Hope.</h4>
          <h4 className='pt-3'>For the first section at the top of the page, I recommend writing something that will pique the interest of your target audience. Make them curious to read more!</h4>
          <h4 className='pt-3'>These middle sections are the perfect place to introduce yourself, and to perhaps start introducing your services.</h4>
          <h4 className='pt-3'>The last section below is great for a call to action.</h4>
          <button className='btn2 mt-3'>
            See My services
          </button>
          <button className='btn1 ms-3 mt-3'>
          More About Me
          </button>
        </Col>
      </Container>
    </Col>
  </Row>
</Container>

<Col className='bgimg1'>
  <Container className='mt-5 pt-4'>
  <center>
    <h1 className='text-light display-2 pt-5'>Insert a call to action</h1>
    <h3 className='text-light pt-3'>Think of what you want your visitor to do next.<br/> Maybe they should contact you?</h3>
    <button className='btn3 mt-2'>
      Get in Touch
    </button>
  </center>
  </Container>
</Col>

<Container>
<Row>
  <Col md={4} className='p-5'>
    <span className='p-2'>Home</span>
    <span className='p-2'>About</span>
    <span className='p-2'>Contact</span>
    <span className='p-2'>Service</span>
  </Col>
  <Col md={4}>
    <center>
      <br/>
      <img src='/img/logo-black-1.png' style={{height:"50px"}} className='mt-2'/>
    </center>
  </Col>
  <Col md={4} className='p-5'>
    <center>
      <p>© 2024 Hope Starter Design</p>
    </center>
  </Col>
</Row>
</Container>
    
    </>
  );
}

export default App;
