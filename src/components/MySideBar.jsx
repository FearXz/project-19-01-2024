import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../redux/actions/actions";
import { setSearchResult } from "../redux/reducers/stateReducer";

function MySideBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchSearch(query));
  }

  return (
    <Col xs={2}>
      <Navbar expand="md" fixed="left" className="justify-content-between" id="sidebar">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="#" onClick={() => dispatch(setSearchResult(null))}>
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <ul>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <Form onSubmit={handleSubmit} className="input-group mt-3">
                    <Form.Control
                      type="text"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />

                    <Button variant="outline-secondary" className="h-100" type="submit">
                      GO
                    </Button>
                  </Form>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn mt-auto">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>

          <p>
            <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
          </p>
        </div>
      </Navbar>
    </Col>
  );
}

export default MySideBar;
