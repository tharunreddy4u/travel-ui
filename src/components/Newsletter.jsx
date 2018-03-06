import React, { Component } from 'react';
import 'babel-polyfill';
import styled from 'styled-components';

import '../App.css';
import media from '../mediaTemplate';
// import Preferences from '../Preferences';
import AtSignIcon from '../SVGcomponents/AtSign';
import EnvelopeOpenIcon from '../SVGcomponents/EnvelopeOpen';

const NewsletterWrapper = styled.div`
  width: 100%;
  text-align: center;
  ${media.giant`
    height: 1000px;
  `} ${media.desktop`
    height: 1000px;
  `};
`;

const NewsletterContainer = styled.div`
  border-radius: 50%;
  margin: 40px auto;
  z-index: 1;
  ${media.giant`
      width: 900px;
      height: 900px;
      h1 {
      font: 4.5rem NewsCycle, sans-serif;
      color: #fff;
      padding: 260px 0 0 0;
    }
    h3 {
      font: 2.125rem Karla, sans-serif;
      color: #fff;
      text-transform: uppercase;
      margin: 48px 0 0 0;
    }
    h4 {
      font: 2.125rem Karla, sans-serif;
      color: #fff;
      letter-spacing: -25%;
      text-decoration: underline;
      margin: 48px 0 0 0;
    }
  `} ${media.desktop`
    width: 800px;
    height: 800px;
    h1 {
      font: 4rem NewsCycle, sans-serif;
      padding: 200px 0 0 0;
    }
    h3 {
      font: 2rem Karla, sans-serif;
      text-transform: uppercase;
      margin: 40px 0 0 0;
    }
    h4 {
      font: 2em Karla, sans-serif;
      letter-spacing: -25%;
      text-decoration: underline;
      margin: 40px 0 0 0;
    }
  `};
  ${media.tablet`
    width: 600px;
    height: 600px;
    h1 {
      font: 3rem NewsCycle, sans-serif;
      padding: 160px 0 0 0;
    }
    h3 {
      font: 1.6rem Karla, sans-serif;
      text-transform: uppercase;
      margin: 36px 0 0 0;
    }
    h4 {
      font: 1.6em Karla, sans-serif;
      letter-spacing: -25%;
      text-decoration: underline;
      margin: 36px 0 0 0;
    }
  `};
`;

const InputContainer = styled.div`
  position: relative;
  height: 80px;
  padding: 0;
  span {
    position: absolute;
    width: 140px;
    left: 32px;
    top: 6px;
  }
  input {
      display: inline;
      padding 0 20px 0 96px;
      font: normal 1.875em Karla, sans-serif;
      letter-spacing: -2px;
      color: #999;
    }
`;

const NewsletterInput = styled(InputContainer)`
  display: block;
  width: 70%;
  left: 0;
  top: 0;
  margin: 60px auto;
  span {
    left: -32px;
    top: 24px;
  }
  input {
    width: calc(100% - 117px);
  }
`;

const Separator = styled.div`
  position: absolute;
  display: inline-block;
  width: 1px;
  height: 60px;
  left: 78px;
  top: 10px;
  background-color: #ccc;
`;

const RightIconWrapper = styled.div`
  position: absolute;
  width: 130px;
  height: 80px;
  background: #4d0d0d;
  top: 0;
  left: 500px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 100;
  span {
    margin: -4px 0 0 28px;
  }
  ${media.tablet`
    left: 290px;
    top: 0;
    border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  `}
`;

class Newsletter extends Component {
  render() {
    return (
      <NewsletterWrapper>
        <NewsletterContainer style={{ background: '#fe4700' }}>
          <h1>Never Settle. Never Rest.</h1>
          <h3>Sign up for our newsletter.</h3>
          <NewsletterInput>
            <span>
              <AtSignIcon />
            </span>
            <Separator />
            <input type="email" placeholder="Enter your email" required />
            <RightIconWrapper>
              <span>
                <EnvelopeOpenIcon />
              </span>
            </RightIconWrapper>
          </NewsletterInput>
          <h4>No thanks.</h4>
        </NewsletterContainer>
      </NewsletterWrapper>
    );
  }
}

export default Newsletter;
