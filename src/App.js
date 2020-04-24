import React from 'react';
import FriendCard from './components/FriendCard';
import Header from './components/Header';
import friends from './friends.json';
import GridContainer from './components/GridContainer';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = { friends };

  removeFriend = id => {
    const updatedFriends = this.state.friends.filter(
      friend => friend.id !== id
    );
    this.setState({ friends: updatedFriends });
  };

  render() {
    return (
      <div class="main-container">
        <Header />
        <GridContainer>
          {this.state.friends.map(friend => (
            <FriendCard
              key={friend.id}
              id={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
              removeFriend={this.removeFriend}
            />
          ))}
        </GridContainer>
      </div>
    );
  }
}

export default App;
