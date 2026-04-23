import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-screen"
      style={{ background: '#F4EFE6', color: '#1E140A' }}
    >
      <Header />
      <main className="pt-[52px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
