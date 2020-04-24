import React from 'react';
import './style.css';

function FriendCard(props) {
  return (
    <div className="img-container">
      <img alt={props.name} src={props.image} />
      <span className="remove" onClick={() => props.removeFriend(props.id)}>
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
