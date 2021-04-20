import React from 'react';
import '../css/banner.css';
import Banner from './Banner.js';

export default function MainBanner () {

  return (
    <div>
    <Banner img={"/images/cpu.jpg"}
            title={"Hi! I'm JP"}
            text={"And these are the web apps I developed"}
            main={true}
            />
    </div>
  );
}
