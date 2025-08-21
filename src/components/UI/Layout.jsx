import React from 'react';
import Navbar2 from './navigation.jsx';
import Footer from './footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navbar2 />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 