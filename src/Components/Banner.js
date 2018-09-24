import React from "react";
import "./css/Banner.css";
import PropTypes from "prop-types";
import Image from "../Components/Image";
export default class Banner extends React.Component {
  render() {
    return (
      <div className="Banner">
        <Image fit="cover" image={this.props.BannerImage} />
      </div>
    );
  }
}
Banner.propTypes = {
  BannerImage: PropTypes.string
};
