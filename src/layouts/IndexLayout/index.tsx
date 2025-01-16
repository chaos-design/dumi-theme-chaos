import type { PropsWithChildren } from 'react';
import React from 'react';
import { Helmet } from 'dumi';
import DumiHero from 'dumi/theme-default/slots/Hero';
import DumiFeatures from 'dumi/theme-default/slots/Features';

import Footer from '../../slots/Footer';

interface IndexLayoutProps {
  title?: string;
  desc?: string;
  children?: React.ReactNode;
}

const IndexLayout: React.FC<PropsWithChildren<IndexLayoutProps>> = (props) => {
  const { children, title, desc } = props;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        {desc && <meta name="description" content={desc} />}
      </Helmet>
      <DumiHero />
      <DumiFeatures />
      <div style={{ minHeight: '200px' }}>{children}</div>
      <Footer />
    </>
  );
};

export default IndexLayout;
