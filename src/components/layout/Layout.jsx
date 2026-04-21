import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import Cursor from '../ui/Cursor';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-nb-white text-nb-black">
      {/* <Cursor /> */}
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
