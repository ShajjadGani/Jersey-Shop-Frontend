import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../img/logo1.png";
import Auth from "../../config/Auth";
const Navigation = () => {
  const auth = Auth();
  const handleLogout = () => {
    const confirm = window.confirm("Äre you sure?");
    if (!confirm) return;
    localStorage.removeItem("isLogged");
    window.location.href = "/";
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" style={{ width: "72px" }}></img>Jersey
            Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/bannar">Bannar</Nav.Link>
              <Nav.Link href="/Access">Accesories</Nav.Link>
              {auth ? (
                <>
                  <Nav.Link href="/addService">Add service</Nav.Link>
                  <Nav.Link href="/AddAccess">Add Accesories</Nav.Link>
                  <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
                </>
              ) : (
                <Nav.Link href="/login">Log in</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
