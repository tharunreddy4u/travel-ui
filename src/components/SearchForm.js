import React, { Component } from 'react';
import 'babel-polyfill';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import '../App.css';
import Preferences from '../Preferences';
import media from '../mediaTemplate';
// import CheckmarkCircleIcon from '../SVGcomponents/CheckmarkCircle';
import CheckmarkCircleWhiteIcon from '../SVGcomponents/CheckmarkCircleWhite';
import CheckmarkCircleWhiteSmallIcon from '../SVGcomponents/CheckmarkCircleWhiteSmall';
// import CircleIcon from '../SVGcomponents/Circle';
import CircleWhiteIcon from '../SVGcomponents/CircleWhite';
import CircleWhiteSmallIcon from '../SVGcomponents/CircleWhiteSmall';
import EarthIcon from '../SVGcomponents/Earth';
import CalendarEmptyIcon from '../SVGcomponents/CalendarEmpty';
import CalendarCrossIcon from '../SVGcomponents/CalendarCross';


const SearchFormWrapper = styled.div`
  ${media.giant`
    width: 100%;
    display: block;
  `}
  ${media.desktop`
    width: 100%;
    display: block;
    margin: 0;
    padding-right: 0;
  `};
`;

/*
${media.giant`
    display: inline-block;
    padding: 0;
    margin: 0;
    button {
      position: relative;
      margin-right: 30px;
      div {
        position: absolute;
        width: 28px;
        height: 28px;
        top: 2px;
      }
      span {
        font: normal 1.875rem Karla, sans-serif;
        color: #fff;
        letter-spacing: -25%;
        margin-left: 48px;
      }
    }
  `}
 */

const SearchTypeWrapper = styled.div`
  ${media.giant`
    display: block;
    width: 100%;
    padding: 0;
    margin: 0 0 20px 0;
    button {
      position: relative;
      margin-right: 20px;
      div {
        position: absolute;
        width: 28px;
        height: 28px;
        top: 2px;
      }
      span {
        font: normal 2.25rem Karla, sans-serif;
        color: #fff;
        margin-left: 42px;
      }
    }
  `}
  ${media.desktop`
    display: block;
    width: 100%;
    padding: 0;
    margin: 0 0 20px 0;
    button {
      position: relative;
      margin-right: 20px;
      div {
        position: absolute;
        width: 28px;
        height: 28px;
        top: 2px;
      }
      span {
        font: normal 1.125rem Karla, sans-serif;
        color: #fff;
        margin-left: 36px;
      }
    }
  `}
  ${media.laptop`
    display: block;
    width: 100%;
    padding: 0;
    margin: 0 0 15px 0;
    button {
      position: relative;
      margin-right: 20px;
      div {
        position: absolute;
        width: 28px;
        height: 28px;
        top: 2px;
      }
      span {
        font: normal 1rem Karla, sans-serif;
        color: #fff;
        margin-left: 36px;
      }
    }
  `}
  ${media.tablet`
    display: inline-block;
    text-align: center;
      margin: 0 0 20px 0;
      button {
        margin-right: 20px;
        div {
          position: absolute;
          width: 20px;
          height: 20px;
          top: -2px;
        }
        span {
          font: normal 0.9rem Karla, sans-serif;
          color: #fff;
          margin-left: 32px;
        }
      }
    `};
`;


const InputContainer = styled.div`
  position: relative;
  padding: 0;
  span {
    position: absolute;
    width: 140px;
    left: 32px;
    top: 6px;
  }
  div {
    position: absolute;
    display: inline-block;
    width: 1px;
    height: 60px;
    left: 78px;
    top: 50px;
    background-color: #ccc;
  }
  input {
      display: inline;
      padding 0 20px 0 96px;
      font: normal 1.875em Karla, sans-serif;
      letter-spacing: -2px;
      color: #999;
      border: 1px solid #ccc;
      border-radius: 4px;
      ${media.giant`
        height: 80px;
        font: normal 2.25rem Karla, sans-serif;
      `}
      ${media.desktop`
        height: 60px;
        font: normal 1.125rem Karla, sans-serif;
      `}
      ${media.laptop`
        height: 40px;
        padding 0 4px;
        font: normal 1rem Karla, sans-serif;
      `}
      ${media.small`
        height: 40px;
        padding 0 4px;
        font: normal 1rem Karla, sans-serif;
      `}
    }
    
    
`;

const Destination = styled(InputContainer)`
  ${media.giant`
    display: block;
    width: 100%;
    margin: 0 0 20px 0;
    span {
      left: 26px;
      top: 26px;
    }
    div {
      height: 60px;
      top: 10px;
    }
    input {
      width: calc(100% - 117px);
    }
  `}
  
  ${media.laptop`
    display: block;
    width: 100%;
    left: 0;
    top: 0;
    margin: 0 0 10px 0;
    span {
      left: 26px;
      top: 6px;
    }
    div {
      height: 20px;
      top: 10px;
    }
    input {
      width: calc(100% - 117px);
      padding: 0 0 0 117px;
    }
  `}
  ${media.tablet`
    height: 40px;
    margin-bottom: 10px;
    span {
      display: none;
    }
    div {
      display: none;
    }
    input {
      width: calc(100% - 8px);
    }
  `};
`;

const DateContainer = styled.div`
  ${media.giant`
    display: block;
    width: 100%;
    height: 80px;
    padding: 0;
    margin: 0;
  `}
  ${media.desktop`
    display: block;
    width: 100%;
    height: 60px;
    margin: 0;
    overflow: hidden;
  `};
  ${media.laptop`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    margin: 0;
    overflow: hidden;
  `};
  ${media.tablet`
    height: 40px;
    margin: 0;
    overflow: hidden;
  `};
`;

const DateInputContainer = styled(InputContainer)`
  display: inline-block;
  ${media.giant`
   left: 0;
    width: 49%;
    margin: 0 0 16px 0;
    :first-child {
      float: left;
    }
    :last-child {
      float: right;
    }
    span {
      width: 140px;
      left: 26px;
      top: 6px;
    }
    input {
      width: calc(100% - 117px);
      height: 80px;
      font: normal 2.25rem Karla, sans-serif;
    }
  `} ${media.desktop`
    left: 0;
    width: 49%;
    margin: 0;
    :first-child {
      float: left;
    }
    :last-child {
      float: right;
    }
    span {
      left: 26px;
      top: 16px;
    }
    div {
      height: 40px;
      top: 10px;
    }
    input {
      width: calc(100% - 117px);
      height: 60px;
      font: normal 1.125rem Karla, sans-serif;
    }
  `}
  ${media.laptop`
    left: 0;
    margin: 0;
    span {
      left: 26px;
      top: 6px;
    }
    div {
      height: 40px;
      top: 10px;
    }
    input {
      width: calc(100% - 2px);
      height: 40px;
      font: normal 1rem Karla, sans-serif;
      padding: 0;
    }
  `}
  
  ${media.small`
    left: 0;
    width: 49%;
    margin: 0;
    span {
      left: 26px;
      top: 6px;
    }
    div {
      height: 40px;
      top: 10px;
    }
    input {
      width: calc(100% - 2px);
      height: 40px;
      font: normal 1rem Karla, sans-serif;
    }
  `}
  
  
  ${media.tablet`
    span {
      display: none;
    }
    div {
      display: none;
    }
    input {
      width: calc(100% - 8px);
      padding: 0 4px;
      height: 40px;
      font: normal 1rem Karla, sans-serif;
      letter-spacing: 100%;
    }
  `};
`;

const PrimaryButton = styled.button`
  font: normal 2em Karla, sans-serif;
  color: #fff;
  background-color: #fd5f00;
  border-width: 0;
  border-radius: 4px;
  ${media.giant`
    display: block;
    width: 100%;
    height: 80px;
    margin: 20px 0 40px 0;
    font: normal 2.25rem Karla, sans-serif;
  `}
  ${media.desktop`
    display: block;
    width: 100%;
    height: 60px;
     margin: 16px 0 ;
    font: normal 1.125rem Karla, sans-serif;
  `}
  ${media.laptop`
    display: block;
    width: 100%;
    height: 40px;
    margin: 10px 0 ;
    font: normal 1rem Karla, sans-serif;
  `}
  ${media.small`
    display: block;
    width: 100%;
    height: 40px;
    margin: 10px 0 ;
    font: normal 1rem Karla, sans-serif;
  `}
  ${media.tablet`
    display: block;
    width: 100%;
    height: 40px;
    margin: 10px 0 20px 0;
    font: normal 1rem Karla, sans-serif;
  `};
`;

/*
display: inline-block;
    width: 180px;
    margin: auto 0 auto 16px;

 */

class SearchForm extends Component {
  
  renderCheckedIcon = () => {
    return window.innerWidth > Preferences.MEDIA.tablet ? <CheckmarkCircleWhiteIcon /> : <CheckmarkCircleWhiteSmallIcon />;
  };

  renderUncheckedIcon = () => {
    return window.innerWidth > Preferences.MEDIA.tablet ? <CircleWhiteIcon /> : <CircleWhiteSmallIcon />;
  };

  render() {
    return (
      <SearchFormWrapper>
        <SearchTypeWrapper>
          <button>
            <div>
  
              <MediaQuery query="(min-width: 1024px)">
                <CheckmarkCircleWhiteIcon />
              </MediaQuery>
              <MediaQuery query="(max-width: 1023px)">
                <CheckmarkCircleWhiteSmallIcon />
              </MediaQuery>
              
            </div>
            <span>Tours & Activities</span>
          </button>
          <button>
            <div>
  
              <MediaQuery query="(min-width: 1024px)">
                <CircleWhiteIcon />
              </MediaQuery>
              <MediaQuery query="(max-width: 1023px)">
                <CircleWhiteSmallIcon />
              </MediaQuery>
            </div>
            <span>Hotels</span>
          </button>
        </SearchTypeWrapper>

        <Destination>
          <span>
            <EarthIcon />
          </span>
          <div />
          <input type="text" placeholder="Destination" required />
        </Destination>

        <DateContainer>
          <DateInputContainer>
            <MediaQuery query="(min-width: 1024px)">
              <span>
                <CalendarEmptyIcon />
              </span>
              <div />
            </MediaQuery>
            <input type="date" required aria-required="true" />
          </DateInputContainer>
          <DateInputContainer>
            <MediaQuery query="(min-width: 1024px)">
              <span>
                <CalendarCrossIcon />
              </span>
              <div />
            </MediaQuery>
            <input type="date" required aria-required="true" />
          </DateInputContainer>
        </DateContainer>

        <PrimaryButton>Search</PrimaryButton>
      </SearchFormWrapper>
    );
  }
}

export default SearchForm;

// TODO: update icon names for orange icons to have descriptive names
