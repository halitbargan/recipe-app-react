import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const homeName = "<Emin/>";
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <NavLink to="/">
          <span>{homeName}</span>Recipe
        </NavLink>
      </div>

      <div className={styles.right}>
        <NavLink to="/about">About</NavLink>
        <a
          href="https://github.com/eminbulbul"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
        <NavLink to="/login"
        >Logout</NavLink>
      </div>
    </div>
  );
};

export default Navbar;