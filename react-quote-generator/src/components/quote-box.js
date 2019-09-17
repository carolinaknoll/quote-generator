import React, {Component}  from 'react';
import quotes from '../common/quotes';

export default class SearchComponent extends Component {
  getNewQuote = () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    let quoteAuthor = randomQuote.split("#");
    document.getElementById('text').textContent = quoteAuthor[0];
    document.getElementById('author').textContent = quoteAuthor[1];
  }

  componentDidMount() {
    this.getNewQuote();
  }

	render() {
    return (
      <div className="quote-box-container">
        <button className="quote-button" id="new-quote" title="Get new quote!" onClick={this.getNewQuote}>
          Try my luck!
        </button>

        <div className="quote-box" id="quote-box">
          <span className="quote" id="text"></span>
          <span className="author" id="author"></span>

          <a id="tweet-quote" title="Tweet quote!" href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer">
            <button className="quote-button" id="new-quote"><i className="fa fa-twitter"></i></button>
          </a>
        </div>
      </div>
    );
	}
};