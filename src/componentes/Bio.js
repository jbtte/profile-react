import React from 'react';
import Card from './Card.js'
import Avatar from './Avatar.js'
import photo from "../assets/rostosembg.png"

export default function Bio () {

  return (
  <div className="d-flex" style={{marginTop: "60px", marginLeft: "25px"}}>
    <div><Avatar img={photo}/></div>
    <Card text='I am Full-Stack developer who concluded Le Wagon coding Bootcamp in 2020,
              I also have a law degree . I did the Bootcamp at Le Wagon to gain technical
              skills as a way to improve my abilities and found something I really like to
              do. I spend my time on personal projects and learning more about Ruby, Ruby on
              Rails, HTML, CSS and JavaScript. I have 10+ years of experience practicing law in
              several capacities and I am used to working under stress, with deadlines, and
              where the smallest details matter. Right now I am eager to find a position in
              the tech industry where I could use all my skills and experience and I am open to
              learning new technologies.'
              />
  </div>

  );
}
