import React from 'react';
import './style.css';

function Card(props) {
  return (
    <div
      className="img-container"
      onClick={() => props.handleClickEvent(props.id, props.clicked)}
    >
      <img alt={props.name} src={process.env.PUBLIC_URL + props.image} />
      <div class="bottom-right">{props.name}</div>
    </div>
  );
}

export default Card;
