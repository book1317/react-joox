import React from "react";
import { Link } from "react-router-dom";
import "./headerStyles.css";
import SearchBar from "./SearchBar";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header class="header-container">
          <div class="sidebar-button-container">
            <button
              onClick={this.props.collapse}
              type="button"
              class="sidebar-button"
            >
              <span class="sidebar-button-line line-one" />
              <span class="sidebar-button-line line-two" />
              <span class="sidebar-button-line line-three" />
            </button>
            <Link to="/" class="joox-logo">
              <a href="https://www.joox.com/th" />
            </Link>
          </div>

          <SearchBar />

          <div style={{ whiteSpace: "pre" }}>
            <button type="button" class="header-button loading-button">
              โหลดแอป JOOX บนพีซี
            </button>
            <div class="register-button-container">
              <button type="button" class="header-button register-button">
                สมัครสมาชิก
              </button>
            </div>
            <small
              style={{ fontSize: "1em", margin: "0 10px", color: "white" }}
            >
              หรือ
            </small>
            <a
              href="https://www.joox.com/th#"
              style={{
                fontSize: "1em",
                color: "white",
                paddingRight: 20,
                textDecoration: "underline"
              }}
            >
              เข้าสู่ระบบ
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
