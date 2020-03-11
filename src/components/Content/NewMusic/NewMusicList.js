import React from "react";
import img1 from "./newMusic1.png";
import "./newMusicListStyles.css";
import NewMusicItem from "./NewMusicItem";
import NEW_MUSIC from "../../../data/newMusic";

class NewMusicList extends React.Component {
  render() {
    return (
      <div class="new-music-list-container">
        {NEW_MUSIC.map(e => (
          <NewMusicItem src={e.src} title={e.title} hasArtist={false} />
        ))}
      </div>
    );
  }
}

export default NewMusicList;

const MUSIC = NEW_MUSIC;
