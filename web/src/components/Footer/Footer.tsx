import * as React from 'react';
import classNames from 'classnames';
import FooterContent from '@components/FooterContent';
import './Footer.scss';

type FooterProps = {
  className?: string;
};

class Footer extends React.Component<FooterProps> {
  render() {
    const { className, children, ...rest } = this.props;

    return (
      <footer className={classNames('footer', className)} {...rest}>
        <div className="container">{children}</div>
      </footer>
    );
  }

  static Content = FooterContent;

  static defaultProps = {
    className: undefined
  };
}

export default Footer;
