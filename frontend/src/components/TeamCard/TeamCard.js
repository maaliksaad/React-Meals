import React from "react";
import Card from "../Card/Card";
import classes from './TeamCard.module.css'

const TeamCard = (props) => {
  return (
    <Card className={classes.teamCard}>
      <div>
        <img src={props.img} />
      </div>
      <div className={classes.member}>
        <h4>{props.name}</h4>
        <p>{props.message}</p>
      </div>
    </Card>
  );
};

export default TeamCard;
