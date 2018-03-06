import React, { Component } from 'react';
import '../App.css';
import '../fonts/font-awesome.css';
import styled from 'styled-components';

import { SectionTitle } from '../common';
import media from '../mediaTemplate';
import arrows_slim_down_dashed from '../SVGcomponents/arrows_slim_down_dashed.svg';
import arrows_circle_plus from '../SVGcomponents/arrows_circle_plus.svg';


const HotelsSection = styled.section`
    width: auto;
    padding: 0% 6.5% 6.5% 6.5%;
    background-color: rgb(240, 240, 240);
`;

/*const HotelsHeader = styled.div`
    height: 40px;
    text-align: left;
    font-family: NewsCycle;
    font-size: 96px;
    padding-bottom: 50px;
    margin-bottom: 50px;
`;*/

const HotelsSubHeader = styled.div`
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

const HotelsFilter = styled.li`
    display: inline;
    padding-right: 35px;
    font-family: Karla, sans-serif;
    font-weight: normal;
    font-size: 32px;
    color: rgb(102,102,102);
     ${media.desktop`font-size: 1rem;word-spacing:4px; letter-spacing:1px`}
     ${media.tablet`font-size: 1rem;`}
     ${media.phone`font-size: 1rem;`}
`;

const HotelsFirstFilter = styled.li`
    display: inline;
    padding-right: 35px;
    font: normal Karla, sans-serif;
    font-size: 32px;
    padding-left: 50px;
    color: rgb(102,102,102);
    ${media.desktop`font-size: 1rem;word-spacing:4px; letter-spacing:2px`}
    ${media.tablet`font-size: 1rem;`}
    ${media.phone`font-size: 1rem;`}
    
`;

const HotelsFilterRating = styled.li`
display: inline;
padding-right: 60px;
font: normal Karla, sans-serif;
font-size: 32px;
 ${media.desktop`height: 1rem;padding-right: 30px;`}
 ${media.tablet`height: 1rem;`}
 ${media.phone`height: 1rem;`}
`;

const HotelsFilterLast = styled.li`
    display: inline;
    font-family: karla;
    font-size: 32px;
    padding-right: 10px;
    color: rgb(102,102,102);
    ${media.desktop`font-size: 1rem;word-spacing:8px; letter-spacing:2px`}
    ${media.tablet`font-size: 1rem;`}
    ${media.phone`font-size: 1rem;`}
`;

const HotelsMainImage= styled.div`
    width: auto;
    
    margin-top: 40px;
    ${media.desktop`height: 520px;margin-top: 30px;`}
    ${media.tablet`font-size: 1rem;`}
    ${media.phone`font-size: 1rem;`}
`;

const CirclePlus = styled.img`
    height: 26px;
    padding-top: 40px;
    
     ${media.desktop`height: 40px;padding-top: 1rem; padding-bottom: 0.5rem;`}
     ${media.tablet`height: 0.5rem;padding-top: 0.25rem;`}
     ${media.phone`height: 0.5rem;padding-top: 0.25rem;`}
    
`;

const HotelsDownArrow = styled.div`
   img {
            height: 56px;
            padding-top: 40px;
            padding-bottom: 10px;
        }
    ${media.desktop`img{height: 55px;padding-top: 25px;padding-bottom: 10px;}`}
    ${media.tablet`img{height: 1.25rem;padding-top: 20px;padding-bottom: 10px;}`}
    ${media.phone`img {height: 1.25rem;padding-top: 10px;padding-bottom: 10px;}`}
    
`;

const HotelsType = styled.div`
    color: rgb(106,219,216);
    font: Karla, sans-serif;
    font-weight: normal;
    padding-bottom: 10px;
    ${media.giant`font-size: 2rem`}
     ${media.desktop`font-size: 1rem;padding-bottom: 0px;`}
     ${media.tablet`font-size: 1rem`}
     ${media.phone`font-size: 1rem`}
    
`;

const HotelsName = styled.div`
    font-family: NewsCycle;
    font-size: 48px;
    font-weight: normal;
    font: NewsCycle, sans-serif;
    padding-bottom: 10px;
    ${media.giant`font-size: 3rem`}
     ${media.desktop`font-size: 1.5rem;padding-bottom: 0px;`}
     ${media.tablet`font-size: 1.5rem`}
     ${media.phone`font-size: 1.5rem`}
    
`;

const HotelsCity = styled.div`
    font: Karla, sans-serif;
    padding-bottom: 30px;
    font-weight: normal;
    ${media.giant`font-size: 2rem;`}
     ${media.desktop`font-size: 1rem;padding-bottom: 15px;padding-top: 5px;`}
     ${media.tablet`font-size: 1rem; padding-bottom: 10px;`}
     ${media.phone`font-size: 1rem; padding-bottom: 10px;`}
    
`;

const HotelsImageGrid = styled.div`
    padding-top: 50px;
    height: 600px;
    width: auto;
    padding-bottom: 350px;
    display: flex;
    justify-content: space-between;
    ${media.desktop`padding-top: 0px;padding-bottom: 0px;`}
     ${media.tablet`padding-top: 0px;padding-bottom: 0px;`}
     ${media.phone`padding-top: 0px; padding-bottom: 0px;`}
`;

const HotelsImageMargin = styled.div`
    margin-right: 30px;
    
`;


const HotelsDownArrowGrid = styled.div`
   img {
            height: 56px;
            padding-top: 40px;
            padding-bottom: 10px;
        }
        ${media.desktop`img{height: 55px;padding-top: 25px;padding-bottom: 10px;}`}
        ${media.tablet`img{height: 1.25rem;padding-top: 10px;padding-bottom: 10px;}`}
        ${media.phone`img {height: 1.25rem;padding-top: 10px;padding-bottom: 10px;}`}
    
`;

const HotelsGridType = styled.div`
    color: rgb(106,219,216);
    font-family: karla, sans-serif;
    font-weight: normal;
    font-size: 32px;
    padding-top: 20px;
    ${media.desktop`font-size: 1rem;padding-top: 0px;`}
     ${media.tablet`font-size: 1rem`}
     ${media.phone`font-size: 1rem`}
    
`;

const HotelsGridName = styled.div`
    color: rgb(240,240,240);
    font-family: NewsCycle, sans-serif;
    font-weight: normal;
    font-size: 42px;
    padding-bottom: 10px;
    padding-top: 10px;
    ${media.desktop`font-size: 1.5rem;padding-bottom: 0px;padding-top: 0px;`}
     ${media.tablet`font-size: 1.25rem`}
     ${media.phone`font-size: 1rem`}
    
`;

const HotelsGridCity = styled.div`
    color: rgb(240,240,240);
    font-family: karla, sans-serif;
    font-weight: normal;
    font-size: 30px;
    padding-bottom: 20px;
    padding-top: 10px;
    ${media.desktop`font-size: 1rem;padding-bottom: 10px;`}
     ${media.tablet`font-size: 1rem`}
     ${media.phone`font-size: 1rem`}
    
`;

const HotelsGridCircle = styled.img`
    height: 26px;
    padding-top: 30px;
    ${media.desktop`height: 32px;padding-bottom: 0px;padding-top: 15px;`}
     ${media.tablet`height:0.5rem`}
     ${media.phone`height:0.5rem`}
`;

const SubHeader = styled.div`
    margin-bottom: 8.125%;
    display: flex;
    
`;

const FirstStar = styled.span`
    color: lightgrey;
    padding-right: 15px;
    font-size: 30px;
    margin-left: 25px;
    ${media.desktop`font-size: 1rem;padding:0px 2px!important;margin-left: 2px;`}
    ${media.tablet`font-size: 1rem;`}
    ${media.phone`font-size: 1rem;`}
`;

const Star = styled.span`
    color: lightgrey;
    padding-right: 15px;
    font-size: 30px;
    ${media.desktop`font-size: 1rem;padding:0px 3px!important;`}
    ${media.tablet`font-size: 1rem;`}
    ${media.phone`font-size: 1rem;`}
`;

const LastStar = styled.span`
    color: lightgrey;
    font-size: 30px;
    ${media.desktop`font-size: 1rem;padding:0px 2px!important;`}
    ${media.tablet`font-size: 1rem;`}
    ${media.phone`font-size: 1rem;`}
`;

const Options = styled.div`
    flex: 2;
    text-align: right;
`;

const Filters = styled.ul`
li {
    display: inline;
    padding-right: 35px;
    font-family: karla;
    font-size: 32px;

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

/*const ImageWrapper = styled.div`
     ${media.giant`width: 30%`}
     ${media.desktop`width: 30%`}
     ${media.tablet`width: 48%`}
     ${media.phone`width: 100%`}
`;*/

const MainImage = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    background-color: rgba(0,0,0,0.75);
    text-align: center;
    color: #ffffff;
    top: 26%;
    left: 37%;
    ${media.desktop`width: 200px; height:auto; top: -70%; left:42%`}
     ${media.tablet`width: 17%; height:25%; top: -300px`}
     ${media.phone`width: 25%; height:25%; top: -300px`}
`;

const GridImage = styled.div`
    position: relative;
    padding: 7px;
    width: 55%;
    height: 78%;
    background-color: rgba(0,0,0,0.75);
    text-align: center;
    color: #ffffff;
    top: -124%;
    left: 22%;
    ${media.desktop`width: 190px; height:auto; top: -62%; left:20%`}
     ${media.tablet`width: 55%; height:35%; top: -42%; left:20%`}
     ${media.phone`width: 55%; height:35%; top: -62%; left:20%`}
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

class Hotels extends Component {
    render() {
        return (
            <HotelsSection>
                <SectionTitle>Hotels</SectionTitle>
                <SubHeader>
                    <HotelsSubHeader>FIND AND COMPARE THE BEST DEALS</HotelsSubHeader>
                    <Options>
                        
                            <Filters>
                            <HotelsFirstFilter>ALL</HotelsFirstFilter>
                            <HotelsFilter>HOTEL</HotelsFilter>
                            <HotelsFilter>HOSTEL</HotelsFilter>
                            <HotelsFilter>RESORT</HotelsFilter>
                            <HotelsFilterRating>
                                <FirstStar className="fa fa-star"></FirstStar>
                                <Star className="fa fa-star"></Star>
                                <Star className="fa fa-star"></Star>
                                <Star className="fa fa-star"></Star>
                                <LastStar className="fa fa-star"></LastStar>
                            </HotelsFilterRating>
                            <HotelsFilterLast>DESTINATION<span className="fa fa-caret-down"></span></HotelsFilterLast>
                        </Filters>
                    </Options>
                </SubHeader>
                <HotelsMainImage>
                    <img src="img/eden.png"  alt = ""></img>
                    <MainImage>
                        <HotelsDownArrow><img src={arrows_slim_down_dashed} alt="" /></HotelsDownArrow>
                        <HotelsType>RESORT</HotelsType>
                        <HotelsName>Eden Roc Resort</HotelsName>
                        <HotelsCity>MIAMI , FL</HotelsCity>
                        
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <div><CirclePlus src={arrows_circle_plus} alt="" /></div>
                    </MainImage>
                </HotelsMainImage>
                  
                <HotelsImageGrid>
                    <HotelsImageMargin>
                    <img src="img/hong.png"  alt = ""></img>
                    <GridImage>
                    <HotelsDownArrowGrid>
                        <img src={arrows_slim_down_dashed}alt="" />
                    </HotelsDownArrowGrid>
                    <HotelsGridType>HOTEL</HotelsGridType>
                    <HotelsGridName>The Upper House</HotelsGridName>
                    <HotelsGridCity>HONG KONG, HK</HotelsGridCity>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                    <div><HotelsGridCircle src={arrows_circle_plus} alt="" /></div>
                    </GridImage>
                    </HotelsImageMargin>
                    <HotelsImageMargin>
                    <img src="img/van.png"  alt = ""></img>
                    <GridImage>
                    <HotelsDownArrowGrid>
                        <img src={arrows_slim_down_dashed}alt="" />
                    </HotelsDownArrowGrid>
                    <HotelsGridType>HOTEL</HotelsGridType>
                    <HotelsGridName>The Upper House</HotelsGridName>
                    <HotelsGridCity>HONG KONG, HK</HotelsGridCity>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                    <div><HotelsGridCircle src={arrows_circle_plus} alt="" /></div>
                    </GridImage>
                    </HotelsImageMargin>
                    <div style={{}}>
                    <img src="img/berlin.png"  alt = ""></img>
                    <GridImage>
                    <HotelsDownArrowGrid>
                        <img src={arrows_slim_down_dashed}alt="" />
                    </HotelsDownArrowGrid>
                    <HotelsGridType>HOTEL</HotelsGridType>
                    <HotelsGridName>The Upper House</HotelsGridName>
                    <HotelsGridCity>HONG KONG, HK</HotelsGridCity>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                        <Star className="fa fa-star"></Star>
                    <div><HotelsGridCircle src={arrows_circle_plus} alt="" /></div>
                    </GridImage>
                    </div>
                </HotelsImageGrid>
                <div className="ad"><Button>VIEW ALL HOTELS</Button> </div>
            </HotelsSection>
        )
    }
}

export default Hotels;