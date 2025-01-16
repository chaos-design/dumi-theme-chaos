/* .dumi/pages/index.tsx */
import React from 'react';
import HomeBaseLayout from '../../theme/layouts/HomePageLayout';
import WhoAreUsing from './WhoAreUsing';

const CustomHomePage = () => {
  return (
    <div className="home-page">
      <HomeBaseLayout />
      <WhoAreUsing />
    </div>
  );
};

export default CustomHomePage;
