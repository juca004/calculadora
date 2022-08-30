import { Container } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"

function NavBar() {
    return(
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JCarlos</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Acerca de mi</Nav.Link>
            <Nav.Link href="#features">Conocimientos</Nav.Link>
            <Nav.Link href="#features">Servicios</Nav.Link>
            <Nav.Link href="#features">Proyectos</Nav.Link>
            <Nav.Link href="#pricing">Contactame</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    )
}

export default NavBar