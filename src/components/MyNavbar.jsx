import React from "react";
import { Col, Row } from "react-bootstrap";

function MyNavbar() {
  return (
    <Row>
      <Col xs={9} lg={{ span: 11 }} className="mainLinks d-none d-md-flex">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </Col>
    </Row>
  );
}

export default MyNavbar;
