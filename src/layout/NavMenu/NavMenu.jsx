import {Container, Navbar, Nav} from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavMenu () {

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">Ilan Vaks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-avbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav clasName="ms-auto">
            <Nav.Link as={Link} to="/3things">3 Things</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}