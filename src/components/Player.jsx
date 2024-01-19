import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import next from "../assets/playerbuttons/next.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import repeat from "../assets/playerbuttons/repeat.png";
import shuffle from "../assets/playerbuttons/shuffle.png";
import { useSelector } from "react-redux";

function Player() {
  const loadedSong = useSelector((state) => state.global.loadedSong);
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={3}></Col>
        <Col lg={6} className=" mb-3">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col sm={6} md={6} className="playerControls">
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
        {loadedSong && (
          <Col lg={3} className=" d-flex justify-content-center align-items-start">
            <img className="player-image mb-3 me-3" src={loadedSong.album.cover_medium} alt="track" />
            <p className=" text-white">
              Track: {loadedSong.title.length < 16 ? `${loadedSong.title}` : `${loadedSong.title.substring(0, 16)}...`}
              <br />
              Artist: {loadedSong.artist.name}
            </p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Player;
