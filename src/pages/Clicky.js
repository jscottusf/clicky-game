import React from 'react';
import Card from '../components/Cards';
import cards from '../cards.json';
import Header from '../components/Header';
import GridContainer from '../components/GridContainer';

class Clicky extends React.Component {
  state = {
    score: 0,
    cards: cards,
    //status: 'active',
  };

  componentDidMount() {
    this.state.cards.map(cards => (cards.clicked = false));
    this.shuffle(this.state.cards);
    this.setState({ cards: this.state.cards });
  }

  //Durstenfeld optimized fisher-yates shuffle algorithm
  shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
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
      const updatedcards = this.state.cards.map(friend => {
        if (friend.id === id && friend.clicked === false) {
          friend.clicked = true;
          return friend;
        } else {
          return friend;
        }
      });
      this.shuffle(updatedcards);
      let score = this.state.score;
      score++;
      this.setState({ cards: updatedcards, score: score });
    }
  };

  render() {
    return (
      <div>
        <Header score={this.state.score} />
        <GridContainer>
          {this.state.cards.map(friend => (
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
