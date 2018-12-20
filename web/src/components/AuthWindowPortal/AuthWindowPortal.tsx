import axios from 'axios';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

// See https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202.
class AuthWindowPortal extends PureComponent {
  private container: HTMLDivElement;
  private externalWindow: Window;

  constructor(props: any) {
    super(props);

    // STEP 1: create a container <div>
    this.container = document.createElement('div');
    this.externalWindow = null;
  }

  public render() {
    // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
    return ReactDOM.createPortal(this.props.children, this.container);
  }

  public async componentDidMount() {
    // STEP 3: open a new browser window and store a reference to it
    this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');

    // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
    this.externalWindow.document.body.appendChild(this.container);

    const response = await axios.get('http://localhost:3000/api/connections/authorize');
    axios.get(response.data.url);
  }

  public componentWillUnmount() {
    // STEP 5: This will fire when this.state.showWindowPortal in the parent component becomes false
    // So we tidy up by closing the window
    this.externalWindow.close();
  }
}

export default AuthWindowPortal;
