import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWid from '../cardWidget/card';

function Naveg () {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#inicio">Adele Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <NavDropdown title="Categorías de Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#cds">CDs</NavDropdown.Item>
              <NavDropdown.Item href="#remeras">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#box">Box de productos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a className="carrito" href='#carrito'><CardWid/></a>
      </Container>
    </Navbar>
  );
}

export default Naveg;

    