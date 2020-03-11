import React from "react";
import Slider from "react-slick";
import "./topChartStyles.css";
import TopChartContent from "./TopChartContent";
import TOPCHART_DATA from "../../../data/topChart";

export default class TopChartSlider extends React.Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div class="top-chart-slider">
        <Slider {...settings}>
          {TOPCHART_MUSIC.map(e => (
            <div>
              <TopChartContent
                style={{ backgroundColor: e.backgroundColor }}
                src={e.src}
                title={e.title}
                musicList={e.musicList}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const TOPCHART_MUSIC = TOPCHART_DATA;
