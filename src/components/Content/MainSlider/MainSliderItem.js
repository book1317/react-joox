import React from "react";
import { Link } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";

class MainSliderItem extends React.Component {
  render() {
    return (
      <div class="main-slider-img-container">
        <Link to="/music">
          <img src={this.props.src} alt="img1" />
          <div class="player-background-icon-container">
            <div class="player-icon-container">
              <FaRegPlayCircle class="player-icon" />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default MainSliderItem;
