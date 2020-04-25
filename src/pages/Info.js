import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => (
  <div>
    <h1>Clicky Game</h1>
    <p>
      Clicky game is a memory based game. Challenge yourself to click on every
      character once.
    </p>
    <Link to="/clicky" className={window.location.pathname === '/clicky'}>
      <button type="button" className="btn btn-primary btn-lg btn-block">
        Play Clicky Game
      </button>
    </Link>
  </div>
);

export default Info;
