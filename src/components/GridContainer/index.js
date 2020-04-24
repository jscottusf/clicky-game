import React from 'react';
import './style.css';

function GridContainer(props) {
  return <div className="grid-container">{props.children}</div>;
}

export default GridContainer;
