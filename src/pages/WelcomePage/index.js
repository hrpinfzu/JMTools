import React, { Component } from 'react';
import ExcellentHomePage from './components/ExcellentHomePage';

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="welcome-page-page">
        {/* 简洁大气首页 */}
        <ExcellentHomePage />
      </div>
    );
  }
}
