import React from "react";
import "./searchBarStyless.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div class="header-search-bar-container">
      <input
        type="text"
        class="header-search-bar-input"
        placeholder="ค้นหาเพลง ศิลปิน อัลบัม และเพลย์ลิสต์"
      />
      <FaSearch class="header-search-bar-icon" />
    </div>
  );
}
