import React from "react";

function Card(props) {
  return (
    <div className="col text-center" id={props.songInfo.id}>
      <img className="img-fluid" src={props.songInfo.album.cover_medium} alt="track" />
      <p>
        Track:{" "}
        {props.songInfo.title.length < 16 ? `${props.songInfo.title}` : `${props.songInfo.title.substring(0, 16)}...`}
        <br />
        Artist: {props.songInfo.artist.name}
      </p>
    </div>
  );
}

export default Card;
