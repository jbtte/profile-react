import React from 'react';

export default function Contact ({size, text}) {

  return (
  <div style={{marginTop: "100px", marginBottom: "60px"}}>
    <h3 className="text-center text-white mb-5">{text}</h3>
    <div className="d-flex justify-content-center">
      <a className="mx-5" href="https://github.com/jbtte">
        <img className= "text-white"
            src="/images/github-icon.png"
            alt="github icon"
            style={{width: `${size}px` }} />
      </a>
      <a className="mx-5" href="https://www.linkedin.com/in/jbtte/">
        <img src="https://cdn.svgporn.com/logos/linkedin-icon.svg"
            alt="linkedin icon"
            style={{width: `${size}px` }}/>
      </a>
    </div>
  </div>

  );
}
