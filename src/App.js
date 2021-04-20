import logo from './logo.svg';
import './App.css';

import MainBanner from './componentes/MainBanner.js';
import Contact from './componentes/Contact.js';
import TechStack from './componentes/TechStack.js';
import Hobbies from './componentes/Hobbies.js';
import Projects from './componentes/Projects.js';
import Banner from './componentes/Banner.js';




function App() {
  return (<>
      <MainBanner/>

      <Contact size={50} text={"Have an idea for an App? Let's get in touch!"}/>

      <Banner img={'/images/code.jpg'}/>

      <TechStack />

      <Banner img={'/images/keyboard.jpg'}/>

      <Projects />

      <Banner img={'/images/guitar.jpg'}/>

      <Hobbies />

  </>);
}

export default App;
