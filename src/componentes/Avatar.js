import React from 'react';
import '../css/avatar.css';

function Avatar (props) {

  return (
    <img class="avatar-large" alt="avatar-large" src={props.img} />
  );
}

export default Avatar
