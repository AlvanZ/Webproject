import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./App.scss";
import { useEffect } from "react";





async function handleCallbackResponse(res) {
  console.log(res.credential);

 
  let payload = await fetch(`http://localhost:3000/verify?token=${res.credential}`, {mode:"cors"} )
  payload = await payload.json()
  console.log(payload)

}
export default function App() {
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "609586316990-g2an35pn3meqkm7dnf4op7csjbll9cq9.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large"
    });
  }, []);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="signInDiv"/>
    </div>
  );
}
