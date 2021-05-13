import React from 'react';
import '../css/banner.css';

function Banner (props) {

  const gradient = props.main ? "rgba(0,0,0,0.4),rgba(0,0,0,0.4)" : 'rgba(0,0,0,.9)0%,rgba(0,0,0,0.4) 50%, rgba(0,0,0,.8) 100%'
  const style = {
    backgroundImage: `linear-gradient(${gradient}), url(${props.img})`,
    width: "100%",
  }

  return (
    <div class="banner" style={style}>
      <div class="container">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Banner
