import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourite, setLoadedSong } from "../redux/reducers/stateReducer";
import { addFavourite } from "../redux/reducers/stateReducer";

function Card(props) {
  const favourite = useSelector((state) => state.global.favourite);
  const dispatch = useDispatch();

  return (
    <div className="col text-center " id={props.songInfo.id}>
      <div className="position-relative MyImgWrapper">
        <img className="img-fluid" src={props.songInfo.album.cover_medium} alt="track" />
        <i
          className="bi bi-play-circle-fill fs-3  text-success position-absolute"
          onClick={() => dispatch(setLoadedSong(props.songInfo))}
        ></i>
        {favourite.includes(props.songInfo.id) ? (
          <i
            className="bi bi-heart-fill heart fs-3 text-danger position-absolute"
            onClick={() => dispatch(removeFavourite(props.songInfo.id))}
          ></i>
        ) : (
          <i
            className="bi bi-heart heart fs-3 text-danger position-absolute"
            onClick={() => dispatch(addFavourite(props.songInfo.id))}
          ></i>
        )}

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
