import React from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import ExceptionalDentalCare from '../ExceptionalDentalCare/ExceptionalDentalCare';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <ExceptionalDentalCare></ExceptionalDentalCare>
      <AppoinmentBanner></AppoinmentBanner>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;
