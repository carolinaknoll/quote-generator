import React, {Component} from 'react';
import QuoteBox from '../components/quote-box';
import Header from '../components/header';
import Footer from '../components/footer';

export default class QuoteGenerator extends Component {
  render() {
    return (
      <div>
        <div className="content-container">
          <Header/>

          <QuoteBox />
        </div>
        <Footer />
      </div>
    );
  }
}
