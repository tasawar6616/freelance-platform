import React from 'react'
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import { useLocation } from 'react-router-dom';
const Layout = ({ children } : { children : React.ReactNode}) => {
  const location = useLocation();
//  const isHome = location.pathname === '/';
 return (
    <>
    <div className="header-hero-wrapper">
       <Header />
       </div>
      <div>{children}</div>
    
      
      <Footer />
    </>
  );
}

export default Layout