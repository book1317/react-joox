import React from "react";
import "./hitArtistStyles.css";
import HitArtistItem from "./HitArtistItem";
import HIT_ARTIST from "../../../data/hitArtistList";

class HitArtistList extends React.Component {
  render() {
    console.log(HIT_ARTIST);
    return (
      <div class="hit-artist-container">
        {ARTIST.map(e => (
          <HitArtistItem src={e.src} artist={e.artist} />
        ))}
      </div>
    );
  }
}

export default HitArtistList;

const ARTIST = HIT_ARTIST;
