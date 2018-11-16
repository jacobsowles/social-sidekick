import React, { Component } from 'react';
import ContentBox from '@components/ContentBox';
import './LandingPage.scss';

class LandingPage extends Component {
  render() {
    return (
      <main className="landing-page">
        <ContentBox>
          <h1>Landing Page</h1>
          <p className="lead">Page subtitle</p>

          <hr />

          <p>Page content</p>
        </ContentBox>
      </main>
    );
  }
}

export default LandingPage;
