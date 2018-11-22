import * as React from 'react';
import classNames from 'classnames';
import FooterContent from '@components/FooterContent';
import './Footer.scss';

type FooterProps = {
  className?: string;
};

class Footer extends React.Component<FooterProps> {
  render() {
    return (
      <footer className={classNames('footer', this.props.className)} {...this.props}>
        <div className="container">{this.props.children}</div>
      </footer>
    );
  }

  static Content = FooterContent;

  static defaultProps = {
    className: undefined
  };
}

export default Footer;
