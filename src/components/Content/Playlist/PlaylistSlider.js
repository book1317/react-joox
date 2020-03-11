import React from "react";
import Slider from "react-slick";
import "./PlaylistStyles.css";
import PlaylistItem from "./PlaylistItem";
import PLAYLIST_DATA from "../../../data/playList";

class PlaylistSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6
    };
    return (
      <div class="playlist-slider-container">
        <Slider {...settings}>
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/361dfb84d4ac3efd/300" />
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/daf76f94b4e48c05/300" />
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/389d8790d15e1397/300" />
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/8af43e712099d2bf/300" />
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/1f466ce23de149ed/300" />
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/72c402bef4141df7/300" />
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/8cbc84313c296c79/300" />
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/72c402bef4141df7/300" />
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/5dfa2178324484c8/300" />
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/e7843e40556c9e75/300" />
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/c13acfc63bbad3d0/300" />
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/0c50131924983d80/300" />
          <PlaylistItem src="https://image.joox.com/JOOXcover/0/0c50131924983d80/300" />
          <PlaylistItem src="" />
          <PlaylistItem src="" />
          <PlaylistItem src="" />
        </Slider>
      </div>
    );
  }
}

export default PlaylistSlider;

const PLAYLIST = PLAYLIST_DATA;
