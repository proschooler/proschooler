import React from "react";
import "./css/HomeHeader.css";
import PropTypes from "prop-types";
export default class HomeHeader extends React.Component {
  render() {
    const optionsForEmployer = [
      {
        label: "Overview"
        // Onclick: () => this.onClickEmployerButton(),
      },
      {
        label: "How it works"
        // Onclick: () => this.onClickEmployerHowItWorks(),
      },
      {
        label: "Advice"
        // Onclick: () => this.onClickEmployerAdviceButton(),
      }
    ];
    const optionsForJobseeker = [
      {
        label: "Overview"
        // Onclick: () => this.onClickJobSeekerButton(),
      },
      {
        label: "Advice"
        // Onclick: () => this.onClickJobseekerAdviceButton(),
      }
    ];
    return (
      <div className={"HomeHeader"}>
        <div className="HomeHeader-Container">
          <div className="HomeHeader-leftChild">
            <div className="HomeHeader-leftChildContainer">
              <div
                className="HomeHeader-logoHolder"
                // onClick={() => {
                //   this.onClickHomeLogo();
                // }}
              />
            </div>
          </div>
          <div className="HomeHeader-rightChild">
            <div
              className="HomeHeader-rightContainerTextholder"
              style={{ ...this.props.textStyle }}
            >
              <div
                className="HomeHeader-headingTextHolder"
                // onClick={() => {
                //   this.onClickJHomeButton();
                // }}
              >
                <div
                  className={
                    // pathName === "HOME_PAGE"
                    //   ? "HomeHeader-headingTextActive"
                    //   : "HomeHeader-headingText"
                    "HomeHeader-headingText"
                  }
                >
                  STUDENT/PARENT
                </div>
              </div>
              <div
                className="HomeHeader-headingTextHolder"
                // onClick={() => {
                //   this.onClickJobsButton();
                // }}
              >
                <div
                  className={
                    // pathName === FEATURED_JOBS_LIST
                    //   ? "HomeHeader-headingTextActive"
                    //   : "HomeHeader-headingText"
                    "HomeHeader-headingText"
                  }
                >
                  COLLEGE
                </div>
              </div>
              <div className="HomeHeader-headingTextHolder">
                <div
                  className="HomeHeader-headingText"
                  //   onClick={() => {
                  //     this.onClickEmployerButton();
                  //   }}
                >
                  TEACHER
                </div>
              </div>

              <div
                className="HomeHeader-headingTextHolder"
                // onClick={() => {
                //   this.onClickAboutUsButton();
                // }}
              >
                <div
                  className={
                    // pathName === MEET_OUR_TEAM
                    //   ? "HomeHeader-headingTextActive"
                    //   : "HomeHeader-headingText"
                    "HomeHeader-headingText"
                  }
                >
                  SCHOOL
                </div>
              </div>
              <div
                className="HomeHeader-headingTextHolder"
                // onClick={() => {
                //   this.onClickJHomeButton();
                // }}
              >
                <div
                  className={
                    // pathName === "HOME_PAGE"
                    //   ? "HomeHeader-headingTextActive"
                    //   : "HomeHeader-headingText"
                    "HomeHeader-headingText"
                  }
                >
                  BUSINESS
                </div>
              </div>
              <div
                className="HomeHeader-headingTextHolder"
                // onClick={() => this.props.showModal(LOGIN_FLOW)}
              >
                <div className="HomeHeader-headingText ">SIGN IN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
HomeHeader.propTypes = {
  onClick: PropTypes.func,
  textStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    fontFamily: PropTypes.string
  })
};
HomeHeader.defaultProps = {
  textStyle: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "bolder"
  }
};
