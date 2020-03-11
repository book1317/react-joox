import React from "react";
import { Link, withRouter } from "react-router-dom";

class BrowseItem extends React.Component {
  render() {
    return this.props.collpase ? (
      <div
        class={
          this.props.active
            ? "icon-sidebar-container large-sidebar sidebar-active-icon"
            : "icon-sidebar-container large-sidebar"
        }
      >
        <Link
          onClick={() =>
            this.props.onClick(this.props.src ? this.props.src : "")
          }
          class="highlight-only-text"
          to={this.props.src ? this.props.src : "/"}
        >
          <span class="prev-icon browse-icon" />
          <span class="browse-icon">{this.props.icon}</span>
          <span class="icon-sidebar-text">{this.props.text}</span>
        </Link>
      </div>
    ) : (
      <div
        class={
          this.props.active
            ? "icon-sidebar-container mini-sidebar sidebar-active-icon"
            : "icon-sidebar-container mini-sidebar"
        }
      >
        <Link
          onClick={() =>
            this.props.onClick(this.props.src ? this.props.src : "")
          }
          class="highlight-only-text"
          to={this.props.src ? this.props.src : "/"}
        >
          <span class="prev-icon" />
          <span class="browse-icon">{this.props.icon}</span>
          <div class="sidebar-detail-text">{this.props.text}</div>
        </Link>
      </div>
    );
  }
}

export default BrowseItem;
