import React, { Component } from 'react';
import 'babel-polyfill';
import styled from 'styled-components';


import '../App.css';
import media from '../mediaTemplate';
import '../fonts/font-awesome.css';
import { SectionTitle } from '../common';
import arrows_slim_down_dashed from '../SVGcomponents/arrows_slim_down_dashed_black.svg';
import arrows_circle_plus from '../SVGcomponents/arrows_circle_plus_orange.svg';


const ToursSection = styled.section`
    width: auto;
    padding: 10.15% 6.5% 6.5% 6.5%;
    background-color: rgb(240, 240, 240);
`;

const ToursSubHeader = styled.div`
    flex: 1;
    padding-top: 16px;
    font-family: Karla, sans-serif;
    font-weight: normal;
    color: rgb(48,48,48);
    ${media.giant`font-size: 2.125rem;word-spacing: 2px;letter-spacing: 1px;`}
     ${media.desktop`font-size: 1rem;`}
     ${media.tablet`font-size: 1rem;`}
     ${media.phone`font-size: 1rem;`}
`;

const ToursOptions = styled.div`
    flex: 1;
    text-align: right;
    
`;

const ToursFilters = styled.ul`
li {
    display: inline;
    padding-right: 35px;
    font-family: karla;
    font-size: 32px;
    color: rgb(102,102,102);
    span {
        padding-left: 20px;
    }

   }
   ${media.desktop`
   li {font-size: 1rem;
    padding-right: 15px;
        span {
            padding-left: 10px;
            }
        }`
    }
     ${media.tablet`li {font-size: 1rem;}`}
     ${media.phone`li {font-size: 1rem;}`}
`;

const ToursGrid = styled.div`
    display: flex;
  flex-wrap: wrap;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding-top: 15px;
    padding-bottom: 100px;
    ${media.desktop`padding-bottom: 0px;`}
     ${media.tablet`padding-bottom: 0px;`}
     ${media.phone`padding-bottom: 0px;`}
`;

const ToursImageWrapper = styled.div`
     ${media.giant`width: 30%`}
     ${media.desktop`width: 29%`}
     ${media.tablet`width: 48%`}
     ${media.phone`width: 100%`}
`;

const ToursImageShadow = styled.img`
   ${media.giant`
    box-shadow: white 50px 50px;
    margin: 0;
  `}
  ${media.desktop`
    box-shadow: white 25px 25px;
  `}
  ${media.tablet`
    box-shadow: white 20px 20px;
  `}
   ${media.phone`
    box-shadow: white 20px 20px;
  `};
`;


const ToursImageDescription = styled.div`
    color: orange;
    text-align: left;
    font-size: 28px;
    font-family: Karla;
    padding: 25px 0 0 50px;
    div{
        img {
            height: 56px;
            width: auto;
        }
    }
   ${media.desktop`
        padding: 10px 0 0 25px;
        div{
            img {
                height: 32px;
            }
        }
     `}
     ${media.tablet`padding: 15px 0 0 30px;
        div{
            img {
                height: 26px;
            }
        }
     `}
     ${media.phone`padding: 10px 0 0 20px;
     div{
        img {
            height: 26px;
        }
    }
     `}
`;

const TourDescription = styled.h3`
    text-align: left;
    font-family: Karla, sans-serif;
    color: rgb(253,95,0);
    font-weight: normal;
    ${media.giant`font-size: 2rem`}
     ${media.desktop`font-size: 1rem; margin:0.5rem 0`}
     ${media.tablet`font-size: 1rem`}
     ${media.phone`font-size: 1rem`}
`;

const TourName = styled.h2`
    font-family: NewsCycle, sans-serif;
    color: #303030;
    font-weight: normal;
     ${media.giant`font-size: 3rem`}
     ${media.desktop`font-size: 1.5rem; margin:0.5rem 0`}
     ${media.tablet`font-size: 1.5rem`}
     ${media.phone`font-size: 1.5rem`}
`;

const TourCity = styled.h4`
    font-family: Karla, sans-serif;
    color: #303030;
    letter-spacing: 1.75%;
    font-weight: normal;
    ${media.giant`font-size: 2rem`}
     ${media.desktop`font-size: 1rem; margin:0.5rem 0`}
     ${media.tablet`font-size: 1rem`}
     ${media.phone`font-size: 1rem`}
`;

const CirclePlus = styled.img`
    height: 30px;
    padding-bottom: 100px;
    width: auto;
    ${media.desktop`height: 72px; padding-bottom: 60px;`}
    ${media.tablet`height: 26px; padding-bottom: 50px;`}
    ${media.phone`height: 26px; padding-bottom: 50px;`}
    
`;

const SubHeader = styled.div`
    margin-bottom: 8.125%;
    display: flex;
    ${media.desktop`margin-bottom: 5%;`}
    ${media.tablet`margin-bottom: 3%;`}
    ${media.phone`margin-bottom: 2%;`}
    
`;

const Button = styled.button`
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

class ToursAndActivities extends Component {
    render() {
        return (

            <ToursSection >
                <SectionTitle>Tours & Activities</SectionTitle>
                <SubHeader>
                    
                    <ToursSubHeader>FIND AN ADVENTURE , BOOK A TRIP.</ToursSubHeader>
                    <ToursOptions>
                        <ToursFilters>
                            <li>ALL</li>
                            <li>TOURS</li>
                            <li>TICKET</li>
                            <li>DESTINATION<span className="fa fa-caret-down"></span></li>
                            
                        </ToursFilters>
                    </ToursOptions>
                </SubHeader>
                
                <ToursGrid>
                    <ToursImageWrapper>
                        <ToursImageShadow src="img/temple.png"  alt = ""></ToursImageShadow>
                        <ToursImageDescription>
                            <div><img src={arrows_slim_down_dashed} alt="" /></div>
                            <TourDescription>CITY TOUR</TourDescription>
                            <TourName>City and Temple Tour</TourName>
                            <TourCity>BANGKOK, THAILAND</TourCity>
                            <CirclePlus src={arrows_circle_plus} alt="" />
                        </ToursImageDescription>
                    </ToursImageWrapper>
                    
                    <ToursImageWrapper>
                        <ToursImageShadow src="img/familia.png"  alt = ""></ToursImageShadow>
                        <ToursImageDescription>
                            <div><img src={arrows_slim_down_dashed} alt="" /></div>
                            <TourDescription>CITY TOUR</TourDescription>
                            <TourName>City and Temple Tour</TourName>
                            <TourCity>BANGKOK, THAILAND</TourCity>
                            <CirclePlus src={arrows_circle_plus} alt="" />
                        </ToursImageDescription>
                    </ToursImageWrapper>
  
                  <ToursImageWrapper>
                    <ToursImageShadow src="img/london.png"  alt = ""></ToursImageShadow>
                        <ToursImageDescription>
                            <div><img src={arrows_slim_down_dashed} alt="" /></div>
                            <TourDescription>CITY TOUR</TourDescription>
                            <TourName>City and Temple Tour</TourName>
                            <TourCity>BANGKOK, THAILAND</TourCity>
                            <CirclePlus src={arrows_circle_plus} alt="" />
                        </ToursImageDescription>
                  </ToursImageWrapper>
               
                <ToursImageWrapper>
                    <ToursImageShadow src="img/palma.png"  alt = ""></ToursImageShadow>
                    <ToursImageDescription>
                        <div><img src={arrows_slim_down_dashed} alt="" /></div>
                        <TourDescription>CITY TOUR</TourDescription>
                        <TourName>City and Temple Tour</TourName>
                        <TourCity>BANGKOK, THAILAND</TourCity>
                        <CirclePlus src={arrows_circle_plus} alt="" />
                    </ToursImageDescription>
                </ToursImageWrapper>
                
                <ToursImageWrapper>
                    <ToursImageShadow src="img/san.png"  alt = ""></ToursImageShadow>
                    <ToursImageDescription>
                        <div><img src={arrows_slim_down_dashed} alt="" /></div>
                        <TourDescription>CITY TOUR</TourDescription>
                        <TourName>City and Temple Tour</TourName>
                        <TourCity>BANGKOK, THAILAND</TourCity>
                        <CirclePlus src={arrows_circle_plus} alt="" />
                    </ToursImageDescription>
                </ToursImageWrapper>
  
                  <ToursImageWrapper>
                <ToursImageShadow src="img/greece.png"  alt = ""></ToursImageShadow>
                    <ToursImageDescription>
                        <div><img src={arrows_slim_down_dashed} alt="" /></div>
                        <TourDescription>CITY TOUR</TourDescription>
                        <TourName>City and Temple Tour</TourName>
                        <TourCity>BANGKOK, THAILAND</TourCity>
                        <CirclePlus src={arrows_circle_plus} alt="" />
                    </ToursImageDescription>
                  </ToursImageWrapper>
            </ToursGrid>
                
                
                <div className="ad"> <Button>VIEW ALL TOURS & ACTIVITIES</Button></div>
            </ToursSection>
          
        )
    }
}

export default ToursAndActivities;