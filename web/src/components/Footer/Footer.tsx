import classNames from 'classnames';
import React, { PureComponent } from 'react';

import FooterContent from './FooterContent';
import './Footer.scss';

export interface FooterProps {
  className?: string;
}

class Footer extends PureComponent<FooterProps> {
  public static Content = FooterContent;

  public static defaultProps = {
    className: ''
  };

  public render() {
    const { className, children } = this.props;

    return (
      <footer className={classNames('footer', className)}>
        <div className="container">{children}</div>
      </footer>
    );
  }
}

export default Footer;
