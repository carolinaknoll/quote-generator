import React, {Component} from 'react';
import QuoteBox from '../components/quote-box';
import Header from '../components/header';
import Footer from '../components/footer';

export default class QuoteGenerator extends Component {
  render() {
    return (
      <div>
        <div className="content-container">
          <Header title="Lucky Quote Generator"/>

          <h2 className="subtitle">Feeling looped?
            <br/>
            Attract good luck to your life with those lucky quotes.
            <br/>Just click the button and choose your best!
          </h2>

          <QuoteBox />
        </div>
        <Footer />
      </div>
    );
  }
}
