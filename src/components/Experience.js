import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

import cyberHeader from "../assets/header.png";
import cyberHeaderUD from "../assets/headerUD.png";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;
        const icon = work.ico;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{
              background: "#F20544",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className={icon}></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <div style={{ fontSize: "15px"}}>
              {work.years}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left", fontSize: "24px"}}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <>
        <img
          src={cyberHeader}
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

        <section id="resume" className="pb-5">
          <div className="col-md-12 mx-auto">
            <div className="col-md-12">
              <div className="cybr-btn">
                <h1 className="section-title" style={{ color: "black", fontSize: "35px" }}><span>{sectionName}</span></h1>
                <span className="cybr-btn__glitch"><h1 className="section-title"><span>{sectionName}</span></h1></span>
              </div>
            </div>
          </div>
          <div className="col-md-8 mx-auto">
            <VerticalTimeline>
              {work}
              <VerticalTimelineElement
                iconStyle={{
                  background: "#F20544",
                  color: "#fff",
                  textAlign: "center",
                }}
                icon={
                  <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                }
              />
            </VerticalTimeline>
          </div>
        </section>

        <img
          src={cyberHeaderUD}
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
      </>
    );
  }
}

export default Experience;
