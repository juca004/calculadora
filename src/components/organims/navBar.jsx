import { Container } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import Links from "../atoms/enlaces"

function NavBar() {
  const routes = [
    {name : 'Inicio', path : '/home'},
    {name : 'Acerca de mi', path : '/acercaDeMi'},
    {name : 'Conocimientos', path : '/conocimientos'},
    {name : 'Servicios', path : '/servicios'},
    {name : 'Proyectos', path : '/proyectos'},
    {name : 'Contactame', path : '/contactame'}
  ];
    return(
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JCarlos</Navbar.Brand>
          <Nav className="me-auto">
            <Links routes = {routes}></Links>
          </Nav>
        </Container>
    </Navbar>
    )
}

export default NavBar