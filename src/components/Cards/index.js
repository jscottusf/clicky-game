import React from 'react';
import './style.css';

function Card(props) {
  return (
    <div
      className="img-container"
      onClick={() => props.handleClickEvent(props.id, props.clicked)}
    >
      <img alt={props.name} src={props.image} />
    </div>
  );
}

export default Card;
