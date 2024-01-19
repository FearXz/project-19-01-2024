import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "./MyCard";

function MyPlaylist() {
  const songsInfo = useSelector((state) => state.global.playlist);

  return (
    <Container fluid>
      {songsInfo && (
        <Row className="">
          <Col xs={0} md={3}></Col>
          <Col xs={12} md={9}>
            <div id="rock">
              <h2 className=" text-center">My Playlist</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                {songsInfo.map((songInfo, index) => (
                  <MyCard songInfo={songInfo} key={`playlist-${index}`} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default MyPlaylist;
