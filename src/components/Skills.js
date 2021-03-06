import React, { Component } from "react";

import cyberFooter from "../assets/footerFooter.png";
import cyberFooterUD from "../assets/footerFooterUD.png";

import "../scss/cybr-btn.scss";

class Skills extends Component {
  render() {
    // Obviously there's a better way to do this, but time is gold
    // Refactorize mapping sharedSkills
    // Actually, refactorize entire project with Hooks
    // And connect to a real DB
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var basics = this.props.sharedSkills.basic.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3 skills-lists" key={i}>
            <span>
              <div className="text-center skills-tile">
                <div className="cybr-btn">
                  <i className={skills.class} style={{ fontSize: "300%" }}>
                    {" "}
                    <p
                      className="text-center"
                      style={{
                        marginTop: "4px",
                        color: "white",
                        font: "22px/24px 'opensans-bold', sans-serif",
                      }}
                    ></p>{" "}
                  </i>
                  <span className="cybr-btn__glitch">
                    <i className={skills.class} style={{ fontSize: "300%" }}>
                      {" "}
                      <p
                        className="text-center"
                        style={{
                          marginTop: "4px",
                          color: "white",
                          font: "22px/24px 'opensans-bold', sans-serif",
                        }}
                      ></p>{" "}
                    </i>
                  </span>
                </div>
              </div>
              {/* {skills.stack ? <div>{' ___  '}</div> : null} */}
            </span>
          </li>
        );
      });

      var mern = this.props.sharedSkills.mern.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3 skills-lists" key={i}>
            <span>
              <div className="text-center skills-tile">
                <div className="cybr-btn">
                  <i className={skills.class} style={{ fontSize: "300%" }}>
                    {" "}
                    <p
                      className="text-center"
                      style={{
                        marginTop: "4px",
                        color: "white",
                        font: "22px/24px 'opensans-bold', sans-serif",
                      }}
                    ></p>{" "}
                  </i>
                  <span className="cybr-btn__glitch">
                    <i className={skills.class} style={{ fontSize: "300%" }}>
                      {" "}
                      <p
                        className="text-center"
                        style={{
                          marginTop: "4px",
                          color: "white",
                          font: "22px/24px 'opensans-bold', sans-serif",
                        }}
                      ></p>{" "}
                    </i>
                  </span>
                </div>
                <p>{skills.name}</p>
              </div>
            </span>
          </li>
        );
      });

      var version = this.props.sharedSkills.version.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3 skills-lists" key={i}>
            <span>
              <div className="text-center skills-tile">
                <div className="cybr-btn">
                  <i className={skills.class} style={{ fontSize: "300%" }}>
                    {" "}
                    <p
                      className="text-center"
                      style={{
                        marginTop: "4px",
                        color: "white",
                        font: "22px/24px 'opensans-bold', sans-serif",
                      }}
                    ></p>{" "}
                  </i>
                  <span className="cybr-btn__glitch">
                    <i className={skills.class} style={{ fontSize: "300%" }}>
                      {" "}
                      <p
                        className="text-center"
                        style={{
                          marginTop: "4px",
                          color: "white",
                          font: "22px/24px 'opensans-bold', sans-serif",
                        }}
                      ></p>{" "}
                    </i>
                  </span>
                </div>
              </div>
            </span>
          </li>
        );
      });

      var deploy = this.props.sharedSkills.deploy.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3 skills-lists" key={i}>
            <span>
              <div className="text-center skills-tile">
                <div className="cybr-btn">
                  <i className={skills.class} style={{ fontSize: "300%" }}>
                    {" "}
                    <p
                      className="text-center"
                      style={{
                        marginTop: "4px",
                        color: "white",
                        font: "22px/24px 'opensans-bold', sans-serif",
                      }}
                    ></p>{" "}
                  </i>
                  <span className="cybr-btn__glitch">
                    <i className={skills.class} style={{ fontSize: "300%" }}>
                      {" "}
                      <p
                        className="text-center"
                        style={{
                          marginTop: "4px",
                          color: "white",
                          font: "22px/24px 'opensans-bold', sans-serif",
                        }}
                      ></p>{" "}
                    </i>
                  </span>
                </div>
                <p>{skills.name}</p>
              </div>
            </span>
          </li>
        );
      });

      var others = this.props.sharedSkills.others.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3 skills-lists" key={i}>
            <span>
              <div className="text-center skills-tile">
                <div className="cybr-btn">
                  <i className={skills.class} style={{ fontSize: "120%" }}>
                    {" "}
                    <p
                      className="text-center"
                      style={{
                        marginTop: "4px",
                        color: "white",
                        font: "22px/24px 'opensans-bold', sans-serif",
                      }}
                    ></p>{" "}
                  </i>
                  <span className="cybr-btn__glitch">
                    <i className={skills.class} style={{ fontSize: "120%" }}>
                      {" "}
                      <p
                        className="text-center"
                        style={{
                          marginTop: "4px",
                          color: "white",
                          font: "22px/24px 'opensans-bold', sans-serif",
                        }}
                      ></p>{" "}
                    </i>
                  </span>
                </div>
              </div>
            </span>
          </li>
        );
      });

      var plus = this.props.sharedSkills.plus.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3 skills-lists" key={i}>
            <span>
              <div className="text-center skills-tile">
                <div className="cybr-btn">
                  <i className={skills.class} style={{ fontSize: "120%" }}>
                    {" "}
                    <p
                      className="text-center"
                      style={{
                        marginTop: "4px",
                        color: "white",
                        font: "22px/24px 'opensans-bold', sans-serif",
                      }}
                    ></p>{" "}
                  </i>
                  <span className="cybr-btn__glitch">
                    <i className={skills.class} style={{ fontSize: "120%" }}>
                      {" "}
                      <p
                        className="text-center"
                        style={{
                          marginTop: "4px",
                          color: "white",
                          font: "22px/24px 'opensans-bold', sans-serif",
                        }}
                      ></p>{" "}
                    </i>
                  </span>
                </div>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <>
        <section id="skills">
          <img
            src={cyberFooterUD}
            alt="Cyber Header"
            className="Cyber"
            style={{
              top: "0",
              bottom: "0",
              width: "100%",
              height: "17px",
              // objectFit: "cover",
            }}
          />
          <div className="col-md-12">
            <div className="col-md-12">
              <div className="cybr-btn">
                <h1 className="section-title"><span>{sectionName}</span></h1>
                <span className="cybr-btn__glitch"><h1 className="section-title"><span>{sectionName}</span></h1></span>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <h1>Essentials</h1>
              <ul className="list-inline mx-auto skill-icon skillsEssentials">
                {basics}
              </ul>

              <h1>MERN</h1>
              <ul className="list-inline mx-auto skill-icon skillsMern">
                {mern}
              </ul>

              <h1>Version Control</h1>
              <ul className="list-inline mx-auto skill-icon skillsVersion">
                {version}
              </ul>

              <h1>Deploy & CI Services</h1>
              <ul className="list-inline mx-auto skill-icon skillsDeploy">
                {deploy}
              </ul>

              <h1>Plus</h1>
              <ul className="list-inline mx-auto skill-icon skillsOthers">
                {others}
              </ul>
              <ul className="list-inline mx-auto skill-icon skillsPlus">
                {plus}
              </ul>
            </div>
          </div>
          <img
            src={cyberFooter}
            alt="Cyber Header"
            className="Cyber"
            style={{
              top: "0",
              bottom: "0",
              width: "100%",
              height: "30px",
              objectFit: "cover",
            }}
          />
        </section>
      </>
    );
  }
}

export default Skills;
