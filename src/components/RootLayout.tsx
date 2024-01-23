import React from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from './main-navigation';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
