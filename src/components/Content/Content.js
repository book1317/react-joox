import React from "react";
import MainSlider from "./MainSlider/MainSlider";
import TopChartSlider from "./TopChart/TopChartSlider";
import NewMusicList from "./NewMusic/NewMusicList";
import PlaylistSlider from "./Playlist/PlaylistSlider";
import TopicText from "./TopicText";
import HitArtistList from "./HitArtist/HitArtistList";
import "./contentStyles.css";

class Content extends React.Component {
  render() {
    return (
      <div class="content-container">
        <div class="slider-container">
          <MainSlider />
          <TopicText content="ชาร์ตเพลงฮิต" url="" />
          <TopChartSlider />
          <TopicText content="เพลงใหม่ล่าสุด" url="" />
          <NewMusicList />
          <TopicText content="อัลบั้ม | ซิงเกิล" url="" />
          <PlaylistSlider />
          <TopicText content="เพลงอัพเดต" url="" />
          <PlaylistSlider />
          <TopicText content="ศิลปินยอดฮิต" url="" />
          <HitArtistList />
          <TopicText content="คอลัมน์เพลง" url="" />
          <TopicText content="แนวเพลง" url="" />
          <TopicText content="ลิสต์เพลง" url="" />
        </div>
      </div>
    );
  }
}

export default Content;
