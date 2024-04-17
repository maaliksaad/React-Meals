import React from "react";
import { Link } from "react-router-dom";
import classes from "./HeroSection.module.css";

export default function HeroSection(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.mainContent}>
        <>{props.Title}</>
        <p>{props.subTitle}</p>
        <Link to="/Menu" className={classes.btn}>
          {props.btnText}
        </Link>
      </div>
    </section>
  );
}
