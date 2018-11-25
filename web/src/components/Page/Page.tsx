import * as React from 'react';
import classNames from 'classnames';
import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import IPage from './IPage';
import './Page.scss';

class Page extends React.Component<IPage> {
  public static ContentBox = ContentBox;
  public static Header = PageHeader;

  public static defaultProps = {
    className: undefined,
    subtitle: undefined
  };

  public render() {
    const { children, className, subtitle, title, ...rest } = this.props;

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
