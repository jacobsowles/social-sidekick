import React, { Component } from 'react';
import ContentBox from '@components/ContentBox';
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <main className="home-page">
        <ContentBox>
          <h1>Home</h1>
          <p className="lead">Page subtitle</p>

          <hr />

          <p>Page content</p>
        </ContentBox>
      </main>
    );
  }
}

export default HomePage;
