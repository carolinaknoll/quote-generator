import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <ul>
            <li className="contact"><a href="mailto:carolinasknoll@gmail.com"><i className="fa fa-envelope"></i></a></li>
            <li className="linkedin"><a href="https://www.linkedin.com/in/carolinaknoll"><i className="fa fa-linkedin"></i></a></li>
            <li className="github"><a href="https://github.com/carolinaknoll"><i className="fa fa-github"></i></a></li>
            <li className="twitter"><a href="https://twitter.com/carolina_knoll"><i className="fa fa-twitter"></i></a></li>
            <li className="codepen"><a href="http://codepen.io/carolinaknoll/"><i className="fa fa-codepen"></i></a></li>
            <li className="freecodecamp"><a href="http://www.freecodecamp.com/carolinaknoll"><i className="fa fa-fire"></i></a></li>

            <p>Made with <span> &hearts; </span> by Carolina Knoll / 2019</p>
          </ul>
        </div>
      </footer>
    );
  }
}
