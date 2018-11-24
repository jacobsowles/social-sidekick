import * as React from 'react';
import classNames from 'classnames';
import FooterContent from '@components/FooterContent';
import IFooter from './IFooter';
import './Footer.scss';

class Footer extends React.Component<IFooter> {
  public static Content = FooterContent;

  public static defaultProps = {
    className: undefined
  };

  public render() {
    const { className, children, ...rest } = this.props;

    return (
      <footer className={classNames('footer', className)} {...rest}>
        <div className="container">{children}</div>
      </footer>
    );
  }
}

export default Footer;
