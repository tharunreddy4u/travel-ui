import React, { Component } from 'react';
import 'babel-polyfill';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import '../App.css';
import Menu from '../SVGcomponents/Menu';
import MenuSmall from '../SVGcomponents/MenuSmall';
import media from "../mediaTemplate";
// import SearchForm from './SearchForm';

const MainHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f0f0f0;
  margin: 0;
  box-sizing: border-box;
  z-index: 100;
  ${media.giant`
    height: 170px;
    padding: 0 6.5%;
    button {
      margin: 60px 0 0 0;
  `}
  ${media.desktop`
    height: 85px;
    padding: 0 5%;
    button {
      margin: 30px 0 0 0;
  `}
  ${media.tablet`
    height: 80px;
    padding: 0 3%;
    button {
      margin: 24px 0 0 0;
    }
  `}
`;

const LogoWrapper = styled.div`
  position: absolute;
  display: inline-block;
  ${media.giant`
    margin: 64px 0 0 48px;
  `}
  ${media.desktop`
    margin: 32px 0 0 24px;
  `}
  ${media.tablet`
    margin: 29px 0 0 16px;
  `}
`;

const Logo = styled.img`
  ${media.giant`
    width: 332px;
    height: 45px;
  `}
  ${media.desktop`
    width: 166px;
    height: 22px;
  `}
  ${media.tablet`
    width: 160px;
    height: 22px;
  `}
`;

const Choices = styled.div`
  float: right;
  ${media.giant`
    width: 170px;
    height: 170px;
    margin: 44px 0 0 0;
    div {
      display: inline-block;
      width: 76px;
      height: 76px;
      line-height: 76px;
      border-radius: 50%;
      box-sizing: border-box;
      text-align: center;
      font: normal 1.8rem Karla, sans-serif;
      padding-top: 22px;
    }
  `}
  ${media.desktop`
    width: 100px;
    height: 85px;
    margin: 22px 0 0 0;
    div {
      display: inline-block;
      width: 38px;
      height: 38px;
      line-height: 38px;
      border-radius: 50%;
      text-align: center;
      font: normal 0.9rem Karla, sans-serif;
      padding-top: 11px;
    }
  `}
  ${media.tablet`
    width: 80px;
    height: 80px;
    margin: 24px 0 0 0;
    div {
      display: inline-block;
      width: 32px;
      height: 32px;
      line-height: 32px;
      border-radius: 50%;
      box-sizing: border-box;
      text-align: center;
      font: normal 0.8rem Karla, sans-serif;
      padding-top: 8px;
    }
  `};
`;

const CurrencyChoice = styled.div`
  background: #3ac8c4;
  color: #fff;
  ${media.giant`
    margin: 0 8px 0 0;
  `}
   ${media.giant`
    margin: 0 16px 0 0;
   `};
`;

const LanguageChoice = styled.div`
  background: #fff;
  border: 1px solid #666;
  color: #666;
`;

const MyReservation = styled.div`
  float: right;
  display: inline-block;
  ${media.giant`
    height: 170px;
    font: normal 2.125rem Karla, sans-serif;
    text-transform: uppercase;
    padding-right: 0;
    margin: 0 36px 0 0;
    span {
      line-height: 170px;
    }
   `}
   ${media.desktop`
     height: 85px;
     font: normal 1.625rem Karla, sans-serif;
     margin: 0 18px 0 0;
     span {
      line-height: 85px;
    }
   `}
   ${media.tablet`
     display: none;
   `}
`;


class Header extends Component {
  render() {
    return (
      <MainHeader>
        <button>
          <MediaQuery query="(min-width: 1920px)">
            <Menu />
          </MediaQuery>
          <MediaQuery query="(max-width: 1919px)">
            <MenuSmall />
          </MediaQuery>
        </button>
        <LogoWrapper>
            <Logo src="img/logo.png" />
        </LogoWrapper>
        <Choices>
          <CurrencyChoice>U$</CurrencyChoice>
          <LanguageChoice>EN</LanguageChoice>
        </Choices>
        <MyReservation><span>My Reservation</span></MyReservation>
      </MainHeader>
    );
  }
}

export default Header;


// TODO window.resize event hendler (forceUpdate() vs state)
