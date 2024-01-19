import React from "react";
import { Col, Row } from "react-bootstrap";

function SearchResult(props) {
  return (
    <Row>
      <Col xs={10}>
        <div id="rock">
          <h2>{props.category}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
            {props.songsInfo.map((songInfo, index) => (
              <div key={`${props.category}-${index}`} className="col text-center" id={songInfo.id}>
                <img className="img-fluid" src={songInfo.album.cover_medium} alt="track" />
                <p>
                  Track: {songInfo.title.length < 16 ? `${songInfo.title}` : `${songInfo.title.substring(0, 16)}...`}
                  <br />
                  Artist: {songInfo.artist.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default SearchResult;
