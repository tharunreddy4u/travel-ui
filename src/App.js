import React, { Component } from 'react';

import Header from './components/Header';
import Slider from './components/Slider';
import ToursAndActivities from './components/ToursAndActivities';
import Hotels from './components/Hotels';
import TopDestinations from './components/TopDestinations';
import Newsletter from './components/Newsletter';


import TravelcoupMagazine from './components/TravelcoupMagazine';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Slider/>
        <ToursAndActivities/>
        <Hotels/>
        <TravelcoupMagazine/>
        <TopDestinations/>
        <Newsletter/>
         <Footer/>
      </div>
    );
  }
}

export default App;
