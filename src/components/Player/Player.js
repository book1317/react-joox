import React from "react";
import "./playerStyles.css";
import {
  FaRetweet,
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaPauseCircle,
  FaPlayCircle,
  FaVolumeDown,
  FaVolumeMute,
  FaVolumeUp,
  FaStar,
  FaExternalLinkAlt,
  FaListUl,
  FaMusic
} from "react-icons/fa";
import { inject, observer } from "mobx-react";

@inject("myMusicStore")
@observer
class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      showSharing: false,
      isCopyLink: false
    };
    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    this.audio = new Audio(this.url);
  }

  play = () => {
    if (!this.state.play) this.audio.play();
    else this.audio.pause();
    this.setState({ play: !this.state.play });
  };

  toggleSharingScreen = () => {
    if (!this.state.showSharing) this.refs.sharingScreen.focus();
    this.setState({ showSharing: !this.state.showSharing, isCopyLink: false });
  };

  copyCodeToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    this.setState({ isCopyLink: true, showSharing: true });
  };

  render() {
    return (
      <div
        class="player-container"
      // onClick={() => this.setState({ isCopyLink: false })}
      >
        <div style={{ alignItems: "center", display: "flex" }}>
          <div class="player-vinyl"></div>
          <FaRandom class="grey-link" />
          <FaStepBackward class="grey-link" />
          {this.state.play ? (
            <FaPauseCircle class="play-icon white-link" onClick={this.play} />
          ) : (
              <FaPlayCircle class="play-icon white-link" onClick={this.play} />
            )}
          <FaStepForward class="grey-link" />
          <FaRetweet class="grey-link" />
        </div>
        <div class="player-text-container">
          <div style={{ position: "relative" }}>
            <span>{this.props.myMusicStore.currentMusic.name}</span>
            <span style={{ marginLeft: 10 }}>BLACK PINK</span>
            <FaStar class="grey-link" style={{ marginLeft: 20 }} />
            <FaExternalLinkAlt
              class="grey-link"
              onClick={this.toggleSharingScreen}
            />
            <div
              class="sharing-screen"
              style={
                this.state.showSharing
                  ? { display: "block" }
                  : { display: "none" }
              }
              onBlur={this.toggleSharingScreen}
              tabindex="1"
              ref="sharingScreen"
            >
              <div>แชร์ไป Facebook</div>
              <div>แชร์ไป Twitter</div>
              <a
                onClick={this.copyCodeToClipboard}
                style={{ cursor: "pointer" }}
              >
                {this.state.isCopyLink ? "คัดลอกลิงค์แล้ว" : "คัดลอกลิงค์"}
              </a>
            </div>
          </div>
          <div>
            <span>
              02:54 --------------------------------------------------- 03:09
            </span>
          </div>
        </div>
        <div style={{ alignItems: "center", display: "flex" }}>
          <FaVolumeUp style={{ marginLeft: 20 }} />
          <span>--------</span>
          <FaMusic style={{ marginLeft: 20 }} />
          <FaListUl style={{ marginLeft: 20, marginRight: 30 }} />
        </div>
      </div>
    );
  }
}

export default Player;
