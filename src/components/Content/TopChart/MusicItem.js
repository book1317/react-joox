import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { inject } from "mobx-react";

@inject("myMusicStore")
class MusicItem extends React.Component {
  addMusic = (id, name) => {
    this.props.myMusicStore.addMusic(id, name);
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        <Link
          onClick={() =>
            this.props.name
              ? this.addMusic(this.props.id, this.props.name)
              : this.addMusic(0, "No Title")
          }
          to={"/music/" + this.props.id}
          class="music-item-container"
        >
          <span class="music-number-text">{this.props.number}</span>
          <FaRegPlayCircle class="topchart-play-icon" />
          <span class="music-item-white-link">
            {this.props.name ? this.props.name : "Music - Artist"}
          </span>
        </Link>
      </div>
    );
  }
}

export default MusicItem;
