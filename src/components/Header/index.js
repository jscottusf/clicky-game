import React from 'react';

function Header(props) {
  return <h1 className="title">Clicky Game Score: {props.score}</h1>;
}

export default Header;
