import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">{this.props.title}</h1>
      </header>
    );
  }
}
