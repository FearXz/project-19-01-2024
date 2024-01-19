import React from "react";
import { Col, Row } from "react-bootstrap";
import MyCard from "./MyCard";

function Gallery(props) {
  return (
    <Row>
      <Col xs={10}>
        <div id="rock">
          <h2>{props.category}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
            {props.songsInfo.slice(0, 4).map((songInfo, index) => (
              <MyCard songInfo={songInfo} key={`${props.category}-${index}`} />
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Gallery;
