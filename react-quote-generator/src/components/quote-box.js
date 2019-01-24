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

  componentDidMount() {
    this.generateQuote();
  }

	render() {
    return (
      <div className="quote-box-container">
        <button className="quote-button" id="new-quote" title="Get new quote!" onClick={this.generateQuote}>Try my luck!</button>
        <div className="quote-box" id="quote-box">
          <span className="saying" id="text"></span>
          <span className="author" id="author"></span>
          <a id="tweet-quote" title="Tweet quote!" href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer">
            <button className="quote-button" id="new-quote"><i className="fa fa-twitter"></i></button>
          </a>
        </div>
      </div>
    );
	}
};