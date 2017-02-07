import Card from '../scripts/card'
import Deck from '../scripts/deck'

class Guess {
  constructor ({response, card}) {
    this.response = response;
    this.card = card;
  }

  feedback(guess) {
    let userResponse = guess.response.toLowerCase()
    let answer = guess.card.answer.toLowerCase()
     return answer === userResponse ? 'correct' : 'wrong';
  }
}

export default Guess
