import React from 'react';
import Card from '../components/Cards';
import friends from '../friends.json';
import Header from '../components/Header';
import GridContainer from '../components/GridContainer';

class Clicky extends React.Component {
  state = {
    score: 0,
    friends: friends,
  };

  componentDidMount() {
    this.state.friends.map(friends => (friends.clicked = false));
    this.shuffle(this.state.friends);
    this.setState({ friends: this.state.friends });
  }

  //Durstenfeld optimized fisher-yates shuffle algorithm
  shuffle = arr => {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  handleClickEvent = (id, clicked) => {
    if (clicked === true) {
      alert('you already clicked me');
      this.state.score = 0;
      this.componentDidMount();
    } else if (this.state.score === 11) {
      alert('WINNER');
      this.state.score = 0;
      this.componentDidMount();
    } else {
      const updatedFriends = this.state.friends.map(friend => {
        if (friend.id === id && friend.clicked === false) {
          friend.clicked = true;
          return friend;
        } else {
          return friend;
        }
      });
      this.shuffle(updatedFriends);
      let score = this.state.score;
      score++;
      this.setState({ friends: updatedFriends, score: score });
    }
  };

  render() {
    return (
      <div>
        <Header score={this.state.score} />
        <GridContainer>
          {this.state.friends.map(friend => (
            <Card
              key={friend.id}
              id={friend.id}
              image={friend.image}
              handleClickEvent={this.handleClickEvent}
              clicked={friend.clicked}
            />
          ))}
        </GridContainer>
      </div>
    );
  }
}

export default Clicky;
