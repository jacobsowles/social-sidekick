import React from 'react';
import PropTypes from 'prop-types';
import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './Page.scss';

const Page = ({ children, className, subtitle, title, ...rest }) => {
  return (
    <main className={`page ${className}`} {...rest}>
      <ContentBox>
        <PageHeader title={title} subtitle={subtitle} />
        {children}
      </ContentBox>
    </main>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  className: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

Page.defaultProps = {
  className: '',
  subtitle: null
};

Page.ContentBox = ContentBox;
Page.Header = PageHeader;

export default Page;
