import React from "react";
import { FaMusic, FaUserAlt, FaGem, FaUserCircle } from "react-icons/fa";
import "./sidebarStyles.css";
import NaveItem from "./NaveItem";
import BrowseItem from "./BrowseItem";
import DownloadItem from "./DownloadItem";
import { withRouter } from "react-router-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: {
        discover: false,
        music: false,
        vip: false,
        artist: false,
        album: false,
        playlist: false,
        topchart: false,
        radio: false
      }
    };
  }

  onRoutChange = e => {
    switch (e) {
      case "/":
        this.setState({ currentPage: { discover: true } });
        break;
      case "/music":
        this.setState({ currentPage: { music: true } });
        break;
      case "/vip":
        this.setState({ currentPage: { vip: true } });
        break;
      case "/artist":
        this.setState({ currentPage: { artist: true } });
        break;
      case "/album":
        this.setState({ currentPage: { album: true } });
        break;
      case "/playlist":
        this.setState({ currentPage: { playlist: true } });
        break;
      case "/topchart":
        this.setState({ currentPage: { topchart: true } });
        break;
      case "/radio":
        this.setState({ currentPage: { radio: true } });
        break;
      default:
        this.setState({ currentPage: { discover: true } });
        break;
    }
  };

  componentWillMount() {
    // this.onRoutChange(this.props.location.pathname);
  }

  render() {
    return (
      <div
        class={
          this.props.collpase
            ? "large-sidebar sidebar-container"
            : "mini-sidebar sidebar-container"
        }
      >
        <div class="sidebar-icon-group above-group">
          <NaveItem
            icon={<FaMusic />}
            src="/"
            text="DISCOVER"
            collpase={this.props.collpase}
            onClick={e => this.onRoutChange(e)}
            active={this.state.currentPage.discover}
          />
          <NaveItem
            icon={<FaUserAlt />}
            src="/music"
            text="เพลงของฉัน"
            collpase={this.props.collpase}
            onClick={e => this.onRoutChange(e)}
            active={this.state.currentPage.music}
          />
          <NaveItem
            icon={<FaGem />}
            src="/vip"
            text="VIP"
            collpase={this.props.collpase}
            onClick={e => this.onRoutChange(e)}
            active={this.state.currentPage.vip}
          />
        </div>
        {this.props.collpase ? <DownloadItem /> : ""}
        <div class="sidebar-icon-group down-group">
          {this.props.collpase ? <div class="browse-text">Browse</div> : ""}
          <BrowseItem
            icon={<FaUserCircle style={{ color: "#BA99FF" }} />}
            text="ศิลปิน"
            collpase={this.props.collpase}
            src="/artist"
            onClick={e => this.onRoutChange(e)}
            active={this.state.currentPage.artist}
          />
          <BrowseItem
            icon={<FaUserCircle style={{ color: "#FF8690" }} />}
            text="อัลบั้ม"
            collpase={this.props.collpase}
            src="/album"
            onClick={e => this.onRoutChange(e)}
            active={this.state.currentPage.album}
          />
          <BrowseItem
            icon={<FaUserCircle style={{ color: "#59CDF6" }} />}
            text="เพลย์ลิสต์"
            collpase={this.props.collpase}
            src="/playlist"
            onClick={e => this.onRoutChange(e)}
            active={this.state.currentPage.playlist}
          />
          <BrowseItem
            icon={<FaUserCircle style={{ color: "#69D49C" }} />}
            text="ชาร์ตเพลง"
            collpase={this.props.collpase}
            src="/topchart"
            onClick={e => this.onRoutChange(e)}
            active={this.state.currentPage.topchart}
          />
          <BrowseItem
            icon={<FaUserCircle style={{ color: "#FFA33D" }} />}
            text="เรดิโอ"
            collpase={this.props.collpase}
            src="/radio"
            onClick={e => this.onRoutChange(e)}
            active={this.state.currentPage.radio}
          />
          <div
            style={{ borderBottom: "1px solid #2b2b2b", width: "100%" }}
          ></div>
          <div style={{ height: 500, marginTop: 200 }}>Test</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
