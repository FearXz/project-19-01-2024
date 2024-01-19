import React from "react";
import { useDispatch } from "react-redux";
import { setLoadedSong } from "../redux/reducers/stateReducer";

function Card(props) {
  const dispatch = useDispatch();

  return (
    <div className="col text-center " id={props.songInfo.id}>
      <div className="position-relative MyImgWrapper">
        <img className="img-fluid" src={props.songInfo.album.cover_medium} alt="track" />
        <i
          className="bi bi-play-circle-fill fs-3  text-success position-absolute"
          onClick={() => dispatch(setLoadedSong(props.songInfo))}
        ></i>

        <p>
          Track:{" "}
          {props.songInfo.title.length < 16 ? `${props.songInfo.title}` : `${props.songInfo.title.substring(0, 16)}...`}
          <br />
          Artist: {props.songInfo.artist.name}
        </p>
      </div>
    </div>
  );
}

export default Card;
