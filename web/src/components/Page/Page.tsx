import classNames from 'classnames';
import React, { PureComponent } from 'react';

import ContentBox from './ContentBox';
import PageHeader from './PageHeader';
import './Page.scss';

export interface PageProps {
  className?: string;
  subtitle?: string;
  title: string;
}

class Page extends PureComponent<PageProps> {
  public static ContentBox = ContentBox;
  public static Header = PageHeader;

  public static defaultProps = {
    className: '',
    subtitle: ''
  };

  public render() {
    const { children, className, subtitle, title } = this.props;

    return (
      <main className={classNames('page', className)}>
        <ContentBox>
          <PageHeader subtitle={subtitle} title={title} />
          {children}
        </ContentBox>
      </main>
    );
  }
}

export default Page;
