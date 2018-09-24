import React from "react";
import "./css/HomePage.css";
import PropTypes from "prop-types";
import HomeHeader from "../Components/HomeHeader";
import Banner from "../Components/Banner";
import Image from "../Components/Image";
import homeBannerImage from "./images/Senses.jpg";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <HomeHeader {...this.props} />

        <div className="HomePage-banner">
          <Banner BannerImage={homeBannerImage} />
        </div>
      </div>
    );
  }
}
HomePage.propTypes = {
  HomePageImage: PropTypes.string
};
