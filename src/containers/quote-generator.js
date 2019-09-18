import React, {Component} from 'react';
import QuoteBox from '../components/quote-box';
import Header from '../components/header';
import Footer from '../components/footer';

export default class QuoteGenerator extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="quote-generator-container">
          <Header />
          <QuoteBox />
        </div>

        <div className="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}
