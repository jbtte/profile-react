import React from 'react';
import '../css/banner.css';
import Banner from './Banner.js';

export default function MainBanner () {

  return (
    <div>
    <Banner img={"https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
            title={"Hi! I'm JP"}
            text={"And these are the web apps I developed"}
            />
    </div>
  );
}
