import React from "react";
import "./css/SignIn.css";
import PropTypes from "prop-types";
import HomeHeader from "../Components/HomeHeader";
import Banner from "../Components/Banner";
import Image from "../Components/Image";
import homeBannerImage from "./images/banner.jpg";

export default class SignIn extends React.Component {
  render() {
    return (
      <div className="SignIn">
        <HomeHeader {...this.props} />

        <div className="SignIn-banner">
          <Banner BannerImage={homeBannerImage} />
        </div>
      </div>
    );
  }
}
SignIn.propTypes = {
  SignInImage: PropTypes.string
};
