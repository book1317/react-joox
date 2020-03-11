import React from "react";
import { Link } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";

const DEFAULT_SRC =
  "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/c/7/673b2ab1c3c6775c625f4c360cb974c7.jpg";

export default function NewMusicItem(props) {
  return (
    <div class="new-music-item-container">
      <div class="new-music-item-image-container">
        <Link to="./music">
          <img
            class="new-music-img"
            src={props.src ? props.src : DEFAULT_SRC}
            alt="img1"
          />
          <div class="new-music-item-background" />
          <FaRegPlayCircle class="new-music-player-icon" />
        </Link>
      </div>
      <div style={{ marginTop: 10 }}>
        <a
          class="white-link"
          href="https://www.joox.com/th/playlist/M42VSYSK9PDhSb_Yo2J9Og=="
        >
          {props.title ? props.title : " Title"}
        </a>
        {props.hasArtist ? (
          <div>
            <a class="white-link" style={{ fontSize: 12 }}>
              Artist Name
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
