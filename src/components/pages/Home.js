import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

const Home = (props) => {
  return (
    <>
      <HeroSection  showConfirmationPopup={props.showConfirmationPopup}/>
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;
