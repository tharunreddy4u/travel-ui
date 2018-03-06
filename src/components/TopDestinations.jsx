import React, { Component } from 'react';
import 'babel-polyfill';
import styled from 'styled-components';
import { Navbar, Jumbotron, Container,Row, Col } from 'react-bootstrap';

import media from '../mediaTemplate';
import { SectionTitle } from '../common';
import '../App.css';
import '../fonts/font-awesome.css';

import DiamondIcons from '../SVGcomponents/Diamond';
import DiamondIcon from '../SVGcomponents/DiamondMedium';



const TopDestSection = styled.section`
    width: auto;
    padding: 0% 6.5% 6.5% 6.5%;
    background-color: rgb(240, 240, 240);
`;

const TopDestSubHeader = styled.div`
    flex: 1;
    padding-top: 16px;
    font-family:  Karla, sans-serif;
    font-weight: normal;
    color: rgb(48,48,48);
    ${media.giant`font-size: 2.125rem; word-spacing:4px; letter-spacing:2px`}
    ${media.desktop`font-size: 1rem;letter-spacing:1px;word-spacing:1px;`}
    ${media.tablet`font-size: 1rem;`}
    ${media.phone`font-size: 1rem;`}
`;

const TopDestImage= styled.div`
flex:1;
    background-image: url(img/border.png);
    background-repeat: no-repeat;
    background-position: right top;
    background-color: white;
`;

const TopDestLastImage= styled.div`
flex:1;
    background-image: url(img/border.png);
    background-repeat: no-repeat;
    background-position: right top;
    background-color: white;
    margin-left: 30px;
`;

const ImageGrid= styled.div`
    padding-bottom: 50px;
    display: flex;
    ${media.desktop`padding-bottom: 30px;`}
    ${media.tablet`padding-bottom: 20px;`}
    ${media.phone`padding-bottom: 20px;`}
`;

const TopDestFilters= styled.div`
    display: inline;
    padding-right: 45px;
    padding-left: 25px;
    font: normal 1.875rem karla, sans-serif;
    ${media.desktop`font: normal 0.9rem karla, sans-serif;padding-left: 10px;padding-right: 20px;`}
    ${media.tablet`font-size: 1rem;padding-left: 5px;padding-right: 20px;`}
    ${media.phone`font-size: 1rem;padding-left: 5px;`}
`;

const TopDestFiltersGrid= styled.div`
    margin-left:20px;
    margin-bottom: 100px;
    ${media.desktop`margin-left:10px;margin-bottom: 50px;`}
    ${media.tablet`margin-left:10px;`}
    ${media.phone`margin-left:10px;`}
`;

const TopDestImageDescription= styled.div`
    display: inline-block;
    position: relative;
    
    
`;

const TopDestIText= styled.div`
    padding: 10px 10px 0px 30px;
    
`;

const TopDestName= styled.h1`
    display: block;
    font: normal 3rem NewsCycle, sans-serif;
    margin: 0px;
    color: rgb(48,48,48);
    ${media.desktop`font: normal 1.5rem NewsCycle, sans-serif;`}
    ${media.tablet`font: normal 1rem NewsCycle, sans-serif;`}
    ${media.phone`font: normal 1rem NewsCycle, sans-serif;`}
`;

const TopDestCity= styled.h2`
    display: block;
    font: normal 1.875rem Karla, sans-serif;
    margin: 0px;
    color: rgb(48,48,48);
    ${media.desktop`font: normal 0.9rem NewsCycle, sans-serif;padding-bottom: 10px;letter-spacing: 1px;`}
    ${media.tablet`font: normal 0.8rem NewsCycle, sans-serif;`}
    ${media.phone`font: normal 0.8rem NewsCycle, sans-serif;`}
`;

const Button = styled.button`
  width: auto;
  font: normal 1.375rem Karla, sans-serif;
  padding: 16px;
  background-color: rgb(253, 95, 0);
  border-radius: 8px;
  margin: 0 0 16px -16px;
  cursor: pointer;
  color: white;
  ${media.desktop`font: bold 0.9rem Karla, sans-serif;`}
    ${media.tablet`font: bold 0.7rem Karla, sans-serif;`}
    ${media.phone`font: bold 0.7rem Karla, sans-serif;width: 50%;`}
`;

const ButtonGrid = styled.div`
  padding-left: 10px;
  display: inline;
`;

const Image = styled.img`
  width:auto;
  vertical-align: top;
  display: inline-block;
  ${media.desktop`width:45%`}
    ${media.tablet`width:45%`}
    ${media.phone`width:45%`}
`;

const SubHeader = styled.div`
    padding-bottom: 160px;
    display: flex;
  ${media.desktop`padding-bottom: 85px;`}
    ${media.tablet`padding-bottom: 65px;`}
    ${media.phone`padding-bottom: 45px;`}
`;

const ExpandOptions = styled.button`
  font: 1.375rem Karla, sans-serif;
  padding: 16px;
  border-radius: 8px;
  margin: 0  16px;
  cursor: pointer;
  font-weight:normal;
  color: rgb(148,148,148);
  ${media.desktop`font-size: 1rem`}
    ${media.tablet`font-size: 1rem`}
    ${media.phone`font-size: 1rem`}
`;

const IconGrid = styled.div`
    span
        {
            padding-left: 5px;
        }
    display: inline;
  ${media.desktop`padding-left: 20px;`}
    ${media.tablet`padding-bottom: 65px;`}
    ${media.phone`padding-bottom: 45px;`}
`;

class TopDestinations extends Component {
    render() {
        return (
            <TopDestSection>
                <SectionTitle>Top Destinations</SectionTitle>
                <SubHeader>
                    <TopDestSubHeader>INSPIRE YOURSELF , TRAVEL THE WORLD</TopDestSubHeader>
                    
                </SubHeader>
                <TopDestFiltersGrid>
                    <DiamondIcon/><TopDestFilters>LUXURY</TopDestFilters>
                    <DiamondIcon/><TopDestFilters>FAMILY</TopDestFilters>
                    <DiamondIcon/><TopDestFilters>NATURE</TopDestFilters>
                    <DiamondIcon/><TopDestFilters>ROMANTIC</TopDestFilters>
                    <DiamondIcon/><TopDestFilters>BEACH</TopDestFilters>
                    <DiamondIcon/><TopDestFilters>SKI</TopDestFilters>
                    <DiamondIcon/><TopDestFilters>VINEYARD</TopDestFilters>
                    <DiamondIcon/><TopDestFilters>SAFARI</TopDestFilters>
                    <DiamondIcon/><TopDestFilters>DESERT</TopDestFilters>
                    <DiamondIcon/><TopDestFilters>ACCESSIBLE</TopDestFilters>
                    <DiamondIcon/><TopDestFilters>COUNTRYSIDE</TopDestFilters>

                </TopDestFiltersGrid>
                <ImageGrid>
                    <TopDestImage>
                    <Image src="img/elephant.png" alt = ""></Image>
                    <TopDestImageDescription>
                        <TopDestIText>
                            <TopDestName>Makumu Lodge</TopDestName>
                            <TopDestCity>HOEDSPRUIT , SOUTH AFRICA</TopDestCity>
                            <ButtonGrid>
                                <Button title="text">Book Now</Button>
                            </ButtonGrid>
                            
                            <IconGrid>
                               <span> <DiamondIcon/></span>
                               <span> <DiamondIcon/></span>
                               <span> <DiamondIcon/></span>
                               <span> <DiamondIcon/></span>
                               <span> <DiamondIcon/></span>
                            </IconGrid>   
                    
                        </TopDestIText>
                    </TopDestImageDescription>
                    </TopDestImage>
                    <TopDestLastImage>
                    <Image src="img/elephant.png" alt = ""></Image>
                    <TopDestImageDescription>
                        <TopDestIText>
                            <TopDestName>MAKUMU LODGE</TopDestName>
                            <TopDestCity>HOEDSPRUIT , SOUTH AFRICA</TopDestCity>
                            <ButtonGrid>
                                <Button title="text">Book Now</Button>
                            </ButtonGrid>
                    
                        </TopDestIText>
                    </TopDestImageDescription>
                    </TopDestLastImage>
                </ImageGrid>

                <ImageGrid>
                    <TopDestImage>
                    <Image src="img/elephant.png" alt = ""></Image>
                    <TopDestImageDescription>
                        <TopDestIText>
                            <TopDestName>MAKUMU LODGE</TopDestName>
                            <TopDestCity>HOEDSPRUIT , SOUTH AFRICA</TopDestCity>
                            <ButtonGrid>
                                <Button title="text">Book Now</Button>
                            </ButtonGrid>
                    
                        </TopDestIText>
                    </TopDestImageDescription>
                    </TopDestImage>
                    <TopDestLastImage>
                    <Image src="img/elephant.png" alt = ""></Image>
                    <TopDestImageDescription>
                        <TopDestIText>
                            <TopDestName>MAKUMU LODGE</TopDestName>
                            <TopDestCity>HOEDSPRUIT , SOUTH AFRICA</TopDestCity>
                            <ButtonGrid>
                                <Button title="text">Book Now</Button>
                            </ButtonGrid>
                    
                        </TopDestIText>
                    </TopDestImageDescription>
                    </TopDestLastImage>
                </ImageGrid>

                <ImageGrid>
                    <TopDestImage>
                    <Image src="img/elephant.png" alt = ""></Image>
                    <TopDestImageDescription>
                        <TopDestIText>
                            <TopDestName>MAKUMU LODGE</TopDestName>
                            <TopDestCity>HOEDSPRUIT , SOUTH AFRICA</TopDestCity>
                            <ButtonGrid>
                                <Button title="text">Book Now</Button>
                            </ButtonGrid>
                    
                        </TopDestIText>
                    </TopDestImageDescription>
                    </TopDestImage>
                    <TopDestLastImage>
                    <Image src="img/elephant.png" alt = ""></Image>
                    <TopDestImageDescription>
                        <TopDestIText>
                            <TopDestName>MAKUMU LODGE</TopDestName>
                            <TopDestCity>HOEDSPRUIT , SOUTH AFRICA</TopDestCity>
                            <ButtonGrid>
                                <Button title="text">Book Now</Button>
                            </ButtonGrid>
                    
                        </TopDestIText>
                    </TopDestImageDescription>
                    </TopDestLastImage>
                </ImageGrid>
                <div className="ad"><ExpandOptions>LOAD MORE TOP DESTINATIONS</ExpandOptions></div>
               <div>
                </div>
        
      
            </TopDestSection>
           
        )
    }
}

export default TopDestinations;