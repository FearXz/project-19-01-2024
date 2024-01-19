import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import next from "../assets/playerbuttons/next.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import repeat from "../assets/playerbuttons/repeat.png";
import shuffle from "../assets/playerbuttons/shuffle.png";

function Player() {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={12} className=" mb-3">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col sm={6} md={4} className="playerControls">
              <div className="d-flex">
                <Button variant="link" href="#">
                  <img src={shuffle} alt="shuffle" />
                </Button>
                <Button variant="link" href="#">
                  <img src={prev} alt="prev" />
                </Button>
                <Button variant="link" href="#">
                  <img src={play} alt="play" />
                </Button>
                <Button variant="link" href="#">
                  <img src={next} alt="next" />
                </Button>
                <Button variant="link" href="#">
                  <img src={repeat} alt="repeat" />
                </Button>
              </div>
              <div className="progress mt-3">
                <div className="progress-bar" role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Player;
