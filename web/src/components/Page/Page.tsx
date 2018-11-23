import * as React from 'react';
import classNames from 'classnames';
import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './Page.scss';

type PageProps = {
  className?: string;
  subtitle?: string;
  title: string;
};

class Page extends React.Component<PageProps> {
  render() {
    const { children, className, subtitle, title, ...rest } = this.props;

    return (
      <main className={classNames('page', className)} {...rest}>
        <ContentBox>
          <PageHeader subtitle={subtitle} title={title} />
          {children}
        </ContentBox>
      </main>
    );
  }

  static ContentBox = ContentBox;
  static Header = PageHeader;

  static defaultProps = {
    className: undefined,
    subtitle: undefined
  };
}

export default Page;
