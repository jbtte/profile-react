import React from 'react';
// import '../css/banner.css';

function Card (props) {

  const style = {
    backgroundColor: "#2d2d2d00",
    color: "white",
    padding: "130px"
  }

  return (
    <div className="card" style={style}>
      <div className="card-body">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Card
