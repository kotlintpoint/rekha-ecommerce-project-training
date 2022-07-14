import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const Header = () => {
  let { user, signout } = useAuth();
  const navigate = useNavigate();
  const links = [
    { title: "Products", to: "/" },
    { title: "About Us", to: "/about" },
    { title: "Cart", to: "/cart" }
  ];

  const handleLogout = () => {
    signout(() => {
      navigate("/");
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {links.map((theLink, position) => (
              <Link key={position} to={theLink.to} className="nav-link">
                {theLink.title}
              </Link>
            ))}
            {user ? (
              <Button
                onClick={handleLogout}
                variant="link"
                className="nav-link"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
