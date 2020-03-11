import React from "react";
import { Link } from "react-router-dom";

class NaveItem extends React.Component {
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
          class="highlight"
          to={this.props.src ? this.props.src : "/"}
        >
          <span class="prev-icon" />
          {this.props.icon}
          <span class="icon-sidebar-text">{this.props.text}</span>
        </Link>
      </div>
    ) : (
      <div
        onClick={() => this.props.onClick(this.props.src ? this.props.src : "")}
        class={
          this.props.active
            ? "icon-sidebar-container mini-sidebar sidebar-active-icon"
            : "icon-sidebar-container mini-sidebar"
        }
      >
        <Link class="highlight" to={this.props.src ? this.props.src : "/"}>
          <span class="prev-icon" />
          {this.props.icon}
          <div class="sidebar-detail-text">{this.props.text}</div>
        </Link>
      </div>
    );
  }
}

export default NaveItem;
