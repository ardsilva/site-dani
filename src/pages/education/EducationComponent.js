import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
// import Educations from "../../containers/education/Educations";
// import Certifications from "../../containers/certifications/Certifications";
// import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
// import EducationImg from "./EducationImg";
// import { competitiveSites, greeting } from "../../portfolio";
// import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              {/* <div className="heading-img-div"> */}
              {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
              {/* <EducationImg theme={theme} /> */}
              {/* </div> */}
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Quem sou eu
                </h1>
                <p
                  className="greeting-text-p subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {/* {greeting.subTitle} */}
                </p>
                {/* <SocialMedia theme={theme} /> */}
                <div className="address-btn-div">
                  <Button
                    text="Contato"
                    newTab={false}
                    href={"/contato"}
                    theme={theme}
                  />
                </div>
                {/* <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifcations
                </h3> */}
                {/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
              </div>
            </div>
          </Fade>
          {/* <Educations theme={this.props.theme} /> */}
          {/* {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null} */}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
