import React from "react";
import Slider from "react-slick";
import "./mainSliderStyles.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MainSliderItem from "./MainSliderItem";

const IMAGE_URL = [
  "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/8/3/dedd391e4fd7bacba356b9fe76778783.jpg",
  "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/8/8/be6b97318ee2af54a6983e169a14d488.jpg",
  "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/4/6/fe00a8c4a445685118eca21598153c46.jpg",
  "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/8/4/a2962ebaba708e1c0d5da5ebffcc0e84.jpg",
  "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/c/e/55351664eabda215e4f2f2d6821679ce.jpg",
  "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/a/0/c5947c8aa0d22fbb235ce7ea1b78aca0.jpg"
];

class MainSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 3,
      centerMode: true,
      // focusOnSelect: true,
      variableWidth: true,
      // autoplay: true,
      // autoplaySpeed: 5000,
      pauseOnHover: true,
      nextArrow: <IoIosArrowForward />,
      prevArrow: <IoIosArrowBack />
    };
    return (
      <div class="main-slider">
        <Slider {...settings}>
          {IMAGE_URL.map(e => (
            <MainSliderItem src={e} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default MainSlider;
