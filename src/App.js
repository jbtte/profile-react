import logo from './logo.svg';
import './App.css';

import Banner from './componentes/Banner.js';
import Avatar from './componentes/Avatar.js';
import Card from './componentes/Card.js';

import photo from "./assets/rostosembg.png"

function App() {
  return (<>
    <div>
      <Banner
      img="https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      title="Hi! I'm JP. I develop & build web applications"
      text="Take a look at some of my work"
      button="Let's get in touch"/>
    </div>

    <div className="d-flex" style={{marginTop: "60px", marginLeft: "25px"}}>
      <div><Avatar img={photo}/></div>
      <Card text="I am Full-Stack developer who concluded Le Wagon coding Bootcamp in 2020,
                  I also have a law degree . I did the Bootcamp at Le Wagon to gain technical
                  skills as a way to improve my abilities and found something I really like to
                  do. I spend my time on personal projects and learning more about Ruby, Ruby on
                  Rails, HTML, CSS and JavaScript. I have 10+ years of experience practicing law in
                  several capacities and I am used to working under stress, with deadlines, and
                  where the smallest details matter. Right now I am eager to find a position in
                  the tech industry where I could use all my skills and experience and I am open to
                  learning new technologies." />
    </div>

    <div>
    </div>
  </>);
}

export default App;
