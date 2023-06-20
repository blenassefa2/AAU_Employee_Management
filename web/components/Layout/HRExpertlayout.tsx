import React, { ReactNode } from 'react';
// import { useClient } from 'blitz';
// import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type HRExpertLayoutProps = {
  children: ReactNode;
};

const HRExpertLayout: React.FC<HRExpertLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default HRExpertLayout;
