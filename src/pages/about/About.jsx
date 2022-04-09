import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Front-End Developer <span>HalitBargan </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Halit Bargan</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known HTML-CSS-JS, ReactJS,SQL, Python, NodeJS, Bootstrap, Mui, Linux, Git, Github...
        </h4>
        <h2>
          <a href="mailto:hltbrgn@gmail.com">Send email</a> :
          hltbrgn@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;