import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './Page.scss';

type PageProps = {
  className?: string;
  subtitle?: string;
  title: string;
};

const Page: FunctionComponent<PageProps> = ({ children, className, subtitle, title, ...rest }) => {
  return (
    <main className={classNames('page', className)} {...rest}>
      <ContentBox>
        <PageHeader subtitle={subtitle} title={title} />
        {children}
      </ContentBox>
    </main>
  );
};

Page.defaultProps = {
  className: undefined,
  subtitle: undefined
};

Page.ContentBox = ContentBox;
Page.Header = PageHeader;

export default Page;
