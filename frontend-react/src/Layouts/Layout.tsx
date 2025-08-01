import React from 'react'
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
const Layout = ({ children } : { children : React.ReactNode}) => {
 return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout