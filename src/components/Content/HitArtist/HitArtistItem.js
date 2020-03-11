import React from "react";
import { Link } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";

class HitArtistList extends React.Component {
  render() {
    return (
      <div class="hit-artist-item-container">
        <div class="hit-artist-image-container">
          <Link class="hit-artist-text" to="/music">
            <img
              class="hit-artist-image"
              src={
                this.props.src
                  ? this.props.src
                  : "https://imgcache.joox.com/music/joox/photo_th_th/mid_singer_300/6/b/0446a562cff220c832ba0a861df0546b.jpg"
              }
            />
            <div class="hit-artist-background"></div>
            <FaRegPlayCircle class="hit-artist-player-icon" />
          </Link>
        </div>
        <div class="hit-artist-text-container">
          <Link class="hit-artist-text" to="/music">
            {this.props.artist ? this.props.artist : "Artish Name"}
          </Link>
        </div>
      </div>
    );
  }
}

export default HitArtistList;
