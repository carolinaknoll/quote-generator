import React, {Component}  from 'react';
import quotes from '../common/quotes';
import $ from 'jquery';

export default class SearchComponent extends Component {
  generateQuote = () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    let quoteAuthor = randomQuote.split("#");
    $('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
  }

	render() {
    return (
      <div className="quote-box-container">
        <button className="quote-button" onClick={this.generateQuote}>Try my luck!</button>
        <div className="quote-box">
          <span className="saying"></span>
          <span className="author"></span>
        </div>
      </div>
    );
	}
};