import React from "react";
import Card from "../Card/Card";
import classes from './TestimonialCard.module.css'

const TestimonialCard = (props) => {
  return (
    <Card className={classes.testimonialCard}>
        <div>
        <img src={props.img}  />
        </div>
      <div className={classes.testimony}>
      <h4>{props.name}</h4>
      <p>{props.message}</p>
      </div>
    </Card>
  );
};

export default TestimonialCard;
