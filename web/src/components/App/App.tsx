import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

import Layout from '@components/Layout';

library.add(faCube, faGithub, faQuestionCircle);

class App extends Component<any, any> {
  public render() {
    return <Layout />;
  }
}

export default App;
