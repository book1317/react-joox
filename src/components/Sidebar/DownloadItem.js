import React from "react";

class BrowseItem extends React.Component {
  render() {
    return (
      <div class="icon-sidebar-download-group above-group">
        <img
          style={{ width: "80%", margin: "0px auto", display: "block" }}
          src="//cdn2-joox.isanook.com/static/di/download/joox-desktop02.png"
        />
        <button type="button" class="sidebar-download-button">
          ดาวน์โหลดแอป JOOX
        </button>
      </div>
    );
  }
}

export default BrowseItem;
