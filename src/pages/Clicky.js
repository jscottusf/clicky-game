import React from 'react';
import Card from '../components/Cards';
import cards from '../cards.json';
import Header from '../components/Header';
import GridContainer from '../components/GridContainer';

class Clicky extends React.Component {
  state = {
    score: 0,
    cards: cards,
    status: 'Rick and Morty Clicky Game',
    highScore: 0,
    style: '#ccff15',
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
      const status = 'oooooooooowweeee better luck next time';
      const style = '#ff0dbf';
      if (this.state.highScore < this.state.score) {
        const highScore = this.state.score;
        this.setState({ highScore: highScore });
      }
      const score = 0;
      this.shuffle(this.state.cards);
      this.state.cards.map(cards => (cards.clicked = false));
      this.setState({
        cards: this.state.cards,
        status: status,
        style: style,
        score: score,
      });
    } else if (this.state.score === 11) {
      const style = '#15f4ee';
      const status = 'winner winner chicken dinner! Try again?';
      const highScore = 12;
      const score = 0;
      this.shuffle(this.state.cards);
      this.state.cards.map(cards => (cards.clicked = false));
      this.setState({
        cards: this.state.cards,
        status: status,
        style: style,
        score: score,
        highScore: highScore,
      });
    } else {
      const rickPhrases = [
        'Wubbalubbadubdub!',
        'Rikitikitavi, bitch!',
        'Rikitikitavi, bitch!',
        'Hit the sack, Jack!',
        'Uh ohhhh! Somersoult jump!',
        'AIDS!',
        "And that's why I always say, 'Shumshumschilpiddydah!'",
        'GRASSSSS... tastes bad!',
        'Lick lick lick my balls!',
        'Rubber baby burger bumpers!',
      ];
      const style = '#39FF14';
      const status = rickPhrases[Math.floor(Math.random() * 10)];
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
      if (this.state.highScore <= score) {
        const highScore = score;
        this.setState({ highScore: highScore });
      }
      this.setState({
        cards: updatedcards,
        score: score,
        style: style,
        status: status,
      });
    }
  };

  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          status={this.state.status}
          highScore={this.state.highScore}
          style={this.state.style}
        />
        <GridContainer wrong={this.state.wrong}>
          {this.state.cards.map(friend => (
            <Card
              key={friend.id}
              id={friend.id}
              name={friend.name}
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
