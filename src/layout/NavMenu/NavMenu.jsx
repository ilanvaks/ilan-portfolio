import {Container, Navbar, Nav, Button} from "react-bootstrap"
import { HashLink } from "react-router-hash-link";
import resume from "../../resume.pdf"

export default function NavMenu () {

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={HashLink} to="/">Ilan Vaks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="#threethings">3 Things</Nav.Link>
            <Nav.Link as={HashLink} to="#portfolio">Portfolio</Nav.Link>
            <Nav.Link as={HashLink} to="#skills">Skills</Nav.Link>
            <Nav.Link as={HashLink} to="#about">About</Nav.Link>
            <Nav.Link as={HashLink} to="#contact">Contact</Nav.Link>
            <Button href={resume} rel="noreferrer" target="_blank" > Resume </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}