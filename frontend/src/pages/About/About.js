import React from "react";
import classes from "./About.module.css";
import Card from "../../components/Card/Card";
import TeamCard from "../../components/TeamCard/TeamCard";

const About = () => {
  return (
    <>
      <div className={classes.banner}>
        <h3>
          About<span>Us</span>
        </h3>
      </div>
      <Card className={classes.mainContainer}>
        <div className={classes.row}>
          <div className={classes.content}>
            <h3>what makes our food special?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
              ratione a officiis id temporibus autem? Quod nemo facilis
              cupiditate. Ex, vel?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              amet enim quod veritatis, nihil voluptas culpa! Neque consectetur
              obcaecati sapiente?
            </p>
          </div>
          <div className={classes.img}></div>
        </div>
        <div className={classes.row2}>
          <div className={classes.img}></div>
          <div className={classes.content}>
            <h3>what makes our food special?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
              ratione a officiis id temporibus autem? Quod nemo facilis
              cupiditate. Ex, vel?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              amet enim quod veritatis, nihil voluptas culpa! Neque consectetur
              obcaecati sapiente?
            </p>
          </div>
        </div>
      </Card>

      <section className={classes.team}>
        <h3>
          Our<span> Team</span>
        </h3>
        <div className={classes.container}>
          <TeamCard
            img="./Home/person-1.jpeg"
            name="Muhammad Saad Aziz"
          />
          <TeamCard
            img="./Home/person-2.jpg"
            name="Muhammad Uzair Basharat"
          />
          <TeamCard
            img="./Home/person-3.jpg"
            name="Ali Iftikhar"
          />
          <TeamCard
            img="./Home/person-3.jpg"
            name="Fahad Rehman"
          />
        </div>
      </section>
    </>
  );
};

export default About;
