import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-300">
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
