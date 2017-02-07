import { expect } from 'chai';
import { assert } from 'chai';
import Card from '../scripts/card'
import Guess from '../scripts/guess'
import Deck from '../scripts/deck'



describe('Card', () => {

  it('Card should be a function', () => {
    assert.isFunction(Card);
  });

  it('should take a question', () => {
    let card = new Card({question: 'What is the capital of Alaska?'});
    assert.equal(card.question, 'What is the capital of Alaska?');
  });

  it('should take an answer', () => {
    let card = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'});
    assert.equal(card.answer, 'Juneau');
  });




});
