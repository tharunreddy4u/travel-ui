import React, { Component } from 'react';
import 'babel-polyfill';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import '../App.css';
// import Preferences from '../Preferences';
import media from '../mediaTemplate';
import SearchForm from './SearchForm';
import SmallCircleIcon from '../SVGcomponents/SmallCircle';
import SmallDiskIcon from '../SVGcomponents/SmallDisk';
import TinyCircleIcon from '../SVGcomponents/TinyCircle';
import TinyDiskIcon from '../SVGcomponents/TinyDisk';
import ArrowSlimRightDashedIcon from '../SVGcomponents/ArrowSlimRightDashed';


const SliderSectionWrapper = styled.div`
  ${media.giant`
    margin-top: 170px;
  `};
  ${media.desktop`
    margin-top: 85px;
  `};
  ${media.laptop`
    margin-top: 60px;
  `};
  ${media.small`
    margin-top:0;
  `};
  ${media.tablet`
    margin-top: 30px;
  `};
`;

const SliderWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  z-index: 10;
  ${media.giant`
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 170px;
    margin: 0;
    padding: 80px 6.25%  0 6.25%;
  `}
  ${media.desktop`
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 100px;
    margin: 0;
    padding: 48px 5%  0 5%;
  `}
  ${media.laptop`
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 85px;
    margin: 60px 0 0 0;
    padding: 28px 5%  0 5%;
  `}
   ${media.small`
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 40px;
    margin: 60px 0 0 0;
    padding: 0 5%
  `}
  ${media.tablet`
    display: block;
    height: 640px;
    margin: 0 auto;
    margin: 80px 0 0 0;
    padding: 0 3%;
  `}
  ${media.phone`
    display: block;
    text-align: center;
    padding: 0 2%;
  `};
`;

const Left = styled.div`
  h1,
   h3 {
    color: #fff;
  }
  ${media.giant`
    width: 45%;
    margin: 0;
    h1 {
      font: normal 6rem NewsCycle, sans-serif;
      padding: 0;
      margin: 0;
    }
    h3 {
      font: normal 2.125rem Karla, sans-serif;
      margin: 0 0 30px 0;
    }
  `};
  ${media.desktop`
    width: 45%;
    margin: 0;
    h1 {
      font: normal 3rem NewsCycle, sans-serif;
      padding: 0;
      margin: 140 px 0 0 0;
    }
    h3 {
      font: normal 1.4rem Karla, sans-serif;
      margin: 0 0 30px 0;
    }
  `};
  ${media.laptop`
    width: 45%;
    margin: 0;
    h1 {
      font: normal 2.4rem NewsCycle, sans-serif;
      padding: 0;
      margin: 100 px 0 0 0;
    }
    h3 {
      font: normal 1rem Karla, sans-serif;
      margin: 0 0 20px 0;
    }
  `};
  ${media.tablet`
    display: block;
    width: 80%;
    margin: 100px auto 0 auto;
    h1 {
      font: normal 2.1rem NewsCycle, sans-serif;
      line-height: 2.1rem;
      text-align: center;
      padding: 80px 0 20px 0;
      margin: 0;
    }
    h3 {
      font: normal 1rem Karla, sans-serif;
      text-align: center;
      margin: 0 0 20px 0;
    }
  `};
  ${media.phone`
    display: block;
    width: 90%;
    margin: 80px auto 0 auto;
    h1 {
      font: normal 2rem NewsCycle, sans-serif;
      line-height: 2rem;
      padding: 80px 0 20px 0;
      margin: 0;
    }
    h3 {
      font: normal 1rem Karla, sans-serif;
      margin: 0 0 20px 0;
    }
  `};
`;

const Right = styled.div`
  width: 40%;
  text-align: left;
  box-sizing: border-box;
  padding-left: 5%;
 
  h2 {
    color: #fff;
    padding: 0;
  }
  h4 {
    font: 2.125rem Karla, sans-serif;
    letter-spacing: 1.75%;
    color: #fff;
    padding: 0;
    margin: 0 0 70px 0;
  }
  div {
    display: inline-block;
    position: relative;
  }
  ${media.giant`
    display: inline-block;
    width: 40%;
     margin-top: 280px;
    h2 {
      position: relative;
      display: inline-block;
      font: 3.4375rem NewsCycle, sans-serif;
      line-height: 3.5rem;
      margin: 0 40px 20px 0;
    }
  `};
  ${media.desktop`
    display: inline-block;
    width: 40%;
     margin-top: 150px;
    h2 {
      position: relative;
      display: inline-block;
      font: 3rem NewsCycle, sans-serif;
      margin: 0 40px 16px 0;
    }
  `};
  ${media.laptop`
    display: inline-block;
    width: 40%;
     margin-top: 100px;
    h2 {
      position: relative;
      display: inline-block;
      font: 1.71875rem NewsCycle, sans-serif;
      margin: 0 40px 8px 0;
    }
    h4 {
      font: 1.2rem Karla, sans-serif;
      color: #fff;
      padding: 0;
      margin: 0 0 36px 0;
  }
  `};
    ${media.small`
    display: inline-block;
    width: 40%;
     margin-top: 100px;
    h2 {
      position: relative;
      display: inline-block;
      font: 1.5rem NewsCycle, sans-serif;
      margin: 0 30px 8px 0;
    }
    h4 {
      font: 1.2rem Karla, sans-serif;
      color: #fff;
      padding: 0;
      margin: 0 0 40px 0;
  }
  `};
  ${media.tablet`
    display: block;
    width: 80%;
    margin: 80px auto 0 auto;
    text-align: center;
    h2 {
      position: relative;
      display: block;
      font: 1rem NewsCycle, sans-serif;
      line-height: 2.5rem;
      padding: 0;
      margin: 0 auto 20px auto;
    }
    h4 {
      font: 1.2rem Karla, sans-serif;
      letter-spacing: 1.75%;
      line-height: 1.2rem;
      color: #fff;
      padding: 0;
      margin: 0 0 20px 0;
  }
  `};
  ${media.phone`
    display: block;
    width: 90%;
    margin: 80px auto 0 auto;
    h2 {
      position: relative;
      display: block;
      font: 1.4rem NewsCycle, sans-serif;
      line-height: 1.4rem;
      padding: 0;
      margin: 0 auto 20px auto;
    }
  `};
`;

const PopularDesinations = styled.button`
  background: transparent;
  color: #fff;
  letter-spacing: -1px;
  text-decoration: underline;
  ${media.giant`
    font: normal 2.25rem Karla, sans-serif;
     margin: 20px 0 0 0;
  `}
  ${media.desktop`
     font: normal 1.125rem Karla, sans-serif;
      margin: 20px 0 0 0;
  `};
  ${media.small`
     font: normal 1rem Karla, sans-serif;
     margin: 0;
  `};
  ${media.tablet`
     font: normal 1rem Karla, sans-serif;
      margin: 20px 0 0 0;
  `};
`;

const Sliding = styled.div`
    margin: 0;
   ${media.desktop`
     font: normal 2rem Karla, sans-serif;
  `}
  ${media.laptop`
     font: normal 2rem Karla, sans-serif;
  `}
  ${media.small`
     font: normal 2rem Karla, sans-serif;
  `}
  ${media.tablet`
     font: normal 1rem Karla, sans-serif;
  `};
`;

const ArrowSlimRightWrapper = styled.div`
  ${media.giant`
    top: 14px;
  `}
  ${media.desktop`
    top: 14px;
  `}
  ${media.tablet`
    top: 14px;
  `}
`;


class Slider extends Component {

  render() {
    return (
      <SliderSectionWrapper>
        <img src = 'img/slide1.jpg' alt =''/>
        <SliderWrapper>
          <Left>
            <h1>Go.Travel. Discover.</h1>
            <h3>FIND AN ADVENTURE. BOOK A TRIP.</h3>
            <SearchForm />
            <PopularDesinations>Popular destinations</PopularDesinations>
          </Left>
          <Right>
            <h2>Maldives</h2>
            <MediaQuery query="(min-width: 769px)">
              <ArrowSlimRightWrapper>
                <ArrowSlimRightDashedIcon />
              </ArrowSlimRightWrapper>
            </MediaQuery>
            <h4>CONRAD HOTEL MALDIVES</h4>
            <MediaQuery query="(min-width: 1366px)">
              <Sliding>
                <button>
                  <SmallDiskIcon />
                </button>
                <button>
                  <SmallCircleIcon />
                </button>
                <button>
                  <SmallCircleIcon />
                </button>
                <button>
                  <SmallCircleIcon />
                </button>
                <button>
                  <SmallCircleIcon />
                </button>
              </Sliding>
            </MediaQuery>
            
            <MediaQuery query="(max-width: 1365px)">
              <Sliding>
                <button>
                  <TinyDiskIcon />
                </button>
                <button>
                  <TinyCircleIcon />
                </button>
                <button>
                  <TinyCircleIcon />
                </button>
                <button>
                  <TinyCircleIcon />
                </button>
                <button>
                  <TinyCircleIcon />
                </button>
              </Sliding>
            </MediaQuery>
          </Right>
      </SliderWrapper>
      </SliderSectionWrapper>
    );
  }
}

export default Slider;
