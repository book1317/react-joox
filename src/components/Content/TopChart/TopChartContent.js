import React from "react";
import MusicItem from "./MusicItem";
import { FaRegPlayCircle } from "react-icons/fa";

const DEFAULT_SRC =
  "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/c/7/673b2ab1c3c6775c625f4c360cb974c7.jpg";

export default function TopChartContent(props) {
  return (
    <div class="top-chart-container">
      <div class="new-music-item-container">
        <div class="new-music-item-image-container top-chart-img">
          <img
            class="top-chart-img"
            src={props.src ? props.src : DEFAULT_SRC}
            alt="img1"
          />
          <div class="new-music-item-background" />
          <FaRegPlayCircle class="new-music-player-icon" />
        </div>
      </div>

      <div style={props.style} class="top-chart-text-container">
        <span class="top-chart-title">
          {props.title ? props.title : "No Title"}
        </span>
        <div class="music-list-container">
          {props.musicList ? (
            props.musicList.map((e, count) => (
              <MusicItem number={count + 1} name={e.name} id={e.id} />
            ))
          ) : (
            <div>
              <MusicItem number={1} name="" />
              <MusicItem number={2} name="" />
              <MusicItem number={3} name="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
