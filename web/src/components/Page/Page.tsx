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
    return (
      <main className={classNames('page', this.props.className)} {...this.props}>
        <ContentBox>
          <PageHeader subtitle={this.props.subtitle} title={this.props.title} />
          {this.props.children}
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
