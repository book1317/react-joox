import React from "react";
import NewMusicItem from "../NewMusic/NewMusicItem";

export default function PlaylistItem(props) {
  return <NewMusicItem src={props.src} title={props.title} hasArtist={true} />;
}
