import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function TopicText(props) {
  return (
    <div class="text-hit-container">
      <a
        class="topic-link"
        href={props.url ? props.url : "https://www.joox.com/th/charts"}
      >
        {props.content}
        <FaAngleRight class="topic-arrow" />
      </a>
    </div>
  );
}
