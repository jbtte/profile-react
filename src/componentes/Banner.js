import React from 'react';
import '../css/banner.css';

function Banner (props) {

  // const img = "https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"

  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),
                      url(${props.img})`
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
