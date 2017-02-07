import Card from '../scripts/card'
import Guess from '../scripts/guess'

class Deck {
  constructor() {
    this.cards = [];
    // or do as an object that holds answer and question?
  }
  place(card) {
    this.cards.push(card)
    return this.cards
  }
  count() {
    return this.cards.length
  }
}


export default Deck
