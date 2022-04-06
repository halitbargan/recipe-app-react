import React from 'react'
import styles from "./About.module.css"
import {ReactComponent as About1 } from "../../assets/coding.svg"
const About = () => {
  return (
    <div className="">
      <About1/>
      <p>About Software Developer <strong>Halit BARGAN</strong></p>
      <div className={styles.pbottom}>
        <h2>I'm Murat</h2>
        <p>I'm currently learning Full-Stack Development Languages.</p>
        <p>I've already known JS, ReactJS, Python, HTML5, CSS3, SQL.</p>
        <p><span>Send email</span> : hltbrgn@gmail.com</p>
      </div>
    </div>
  )
}
export default About