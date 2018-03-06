import React, { Component } from 'react';
import 'babel-polyfill';
import styled from 'styled-components';

import GroupWork from '../SVGcomponents/GroupWork';


const SiteFooter = styled.div`
 width: 100%;
 text-align: center;
`;

const Motto = styled.div`
  width: 50%;
  vertical-align: middle;
  padding: 30px 60px;
  font: normal 1.75rem Karla, sans-serif;
  color: #303030;
  letter-spacing: 2px;
  background: #8fe4e2;
  margin: 0 auto;
`;

const FooterNav = styled.div`
  display: block;
  width: 100%;
  padding: 0;
  margin: 100px 0;
  border-width: 0;
  div {
      font: normal 2.5rem Karla, sans-serif;
      color: #303030;
      text-transform: uppercase;
      padding-bottom: 40px;
      margin-bottom: 32px;
    }
  ul {
      list-style: none;
      padding-left: 0;
      li {
        text-align: left;
        margin: 8px 0;
        button {
          font: normal 1.75rem Karla, sans-serif;
          color: #303030;
          text-align: left;
          cursor: pointer;
        }
      }
    }
`;

const NavItemWrapper = styled.div`
    width: 15%;
    display: inline-block;
    margin: 0 3%;
    padding: 0;
    vertical-align: top;
    text-align: left;
    border-bottom-width: 0;
     div {
      font: normal 2.5rem Karla, sans-serif;
      color: #303030;
      text-transform: uppercase;
      padding-bottom: 40px;
      border-bottom: 1px solid #8fe4e2;
      margin-bottom: 32px;
    }
    p {
      font: normal 2.5rem Karla, sans-serif;
      color: #303030;
      text-transform: uppercase;
      padding: 0;
      margin: 0 0 40px 0;
    }
`;

const Logo = styled.img`
  width: 332px;
  height: 45px;
  margin: 128px auto 96px auto;
`;

const Button = styled.button`
  width: 100%;
  font: normal 1.375rem Karla, sans-serif;
  padding: 16px;
  border: 1px solid #8fe4e2;
  border-radius: 8px;
  margin: 0 0 16px -16px;
  cursor: pointer;
`;

const SocialMediaLinks = styled.div`
  margin: 112px 0 200px 0;
`;


class Footer extends Component {
  render() {
    return (
      <SiteFooter>
        <div><Logo src="img/logo.png" /></div>
        <Motto>
          <span>TRAVEL EXPERIENCES AS UNIQUE AS YOU ARE.</span>
        </Motto>
        <SocialMediaLinks>
           <span className="socicon socicon-facebook"></span>
           <span className="socicon socicon-twitter"></span>
           <span className="socicon socicon-instagram"></span>
        </SocialMediaLinks>
        <FooterNav>
        <NavItemWrapper>
          <div>Company</div>
          <ul>
            <li>
              <button>About Us</button>
            </li>
            <li>
              <button>Magazine</button>
            </li>
            <li>
              <button>Newsletter</button>
            </li>
            <li>
              <button>Contact Us</button>
            </li>
            <li>
              <button>FAQ</button>
            </li>
          </ul>
        </NavItemWrapper>
        <NavItemWrapper>
          <div>Travel</div>
          <ul>
            <li>
              <button>Destinations</button>
            </li>
            <li>
              <button>Tours & Activities</button>
            </li>
            <li>
              <button>Hotels</button>
            </li>
            <li>
              <button>My Reservation</button>
            </li>
          </ul>
        </NavItemWrapper>
        <NavItemWrapper>
          <div>LEGAL</div>
          <ul>
            <li>
              <button>Travelscape LLC. Terms</button>
            </li>
            <li>
              <button>Terms of Use</button>
            </li>
            <li>
              <button>General Terms & Conditions</button>
            </li>
            <li>
              <button>Privacy</button>
            </li>
            <li>
              <button>Legal Disclosures</button>
            </li>
          </ul>
        </NavItemWrapper>
        <NavItemWrapper>
          <p>COLLABORATION <GroupWork /></p>
              <Button>Partner & Supplier Extranet</Button>
              <Button>Become a Partner</Button>
        </NavItemWrapper>
        </FooterNav>
      </SiteFooter>
    );
  }
}

export default Footer;
