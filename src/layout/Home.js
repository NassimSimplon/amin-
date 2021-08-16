import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink ,Redirect} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../actions/authactions";
 
const Home = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout())

  };

  const jareb = () =>{
    window.location.reload(logout())
  }
  const renderLoggedInLinks = () => {
    return (
      <Nav className="mx-auto text-white">
        <li className='nav-item'>
          <span  className="nav-link" onClick={jareb}>signout</span >
        </li>
      </Nav>
    );
  };
  const renderNonLoggedInLinks = () => {
    return (
      <Nav className="me-auto">
        <li>
          <NavLink to="/signin">signin</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </Nav>
    );
  };

  return (
    <div>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
       
            {auth.authenticate
              ? renderLoggedInLinks()
              : renderNonLoggedInLinks()}
       
        </Navbar>
      </Container>
    </div>
  );
};

export default Home;
