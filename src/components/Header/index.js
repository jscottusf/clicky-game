import React from 'react';
import './style.css';

function Header(props) {
  return (
    <div className="header-grid">
      <h4 className="title">Score: {props.score}</h4>
      <h4 className="status" style={{ color: props.style }}>
        {props.status}
      </h4>
      <h4>High Score: {props.highScore}</h4>
    </div>
  );
}

export default Header;
