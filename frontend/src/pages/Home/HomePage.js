import React from "react";
import classes from "./HomePage.module.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import Card from "../../components/Card/Card";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";

const HomePage = () => {
  const HeroTitle = (
    <h3>
      fresh <span>food in the </span>morning
    </h3>
  );
  return (
    <>
      <HeroSection
        Title={HeroTitle}
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis."
        btnText="get yours now"
      />
      <section className={classes.container}>
        <Card className={classes.featureCard}>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis.
          </h4>
        </Card>
        <Card className={classes.featureCard}>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis.
          </h4>
        </Card>
        <Card className={classes.featureCard}>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis.
          </h4>
        </Card>
      </section>

      <Card className={classes.promotion}>
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
      </Card>

      <section className={classes.mainContainer}>
        <h3>
          Costumer's<span> Review</span>
        </h3>
        <div className={classes.container}>
          <TestimonialCard
            img="./Home/person-1.jpeg"
            name="Angela Yu"
            message="Best Food I ever had......"
          />
          <TestimonialCard
            img="./Home/person-2.jpg"
            name="Jhonny Do"
            message="There pasta is best in town"
          />
          <TestimonialCard
            img="./Home/person-3.jpg"
            name="The Rock"
            message="Totally Ordering Again !!"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
