import React, { Component } from 'react';
import '../App.css';
import styled from 'styled-components';
import media from '../mediaTemplate';

import arrows_slim_right_dashed from '../SVGcomponents/arrows_slim_right_dashed.svg';


const MagazineSection = styled.section`

    width: auto;

    padding: 160px;
    background-color: rgb(240, 240, 240);
    ${media.desktop`padding: 0% 6.5% 9% 6.5%;`}
     ${media.tablet`padding: 0% 6.5%;`}
     ${media.phone`padding: 0% 6.5%;`}
`;

const MagazineSectionWrapper = styled.section`

    width: auto;

    background: rgb(15,15,15);
`;

const MagazineSectionHeader = styled.div`
    width: 100%;
    height: 110px;
    text-align: center;
    color: white;
    padding-top: 100px;
    padding-bottom: 40px;
    ${media.desktop`padding: 4% 4% 3% 4%;height: 170px;`}
     ${media.tablet`padding: 4%;`}
     ${media.phone`padding: 4%;`}
`;

const MagazineSectionHeaderLogo = styled.img`
    height: 70px;
    width: 525px;
    ${media.desktop`width: 23%; height: 40%;margin-right: 25px`}
     ${media.tablet`width: auto; height: auto;`}
     ${media.phone`width: auto; height: auto;`}
`;

const MagazineSectionSubHeader= styled.div`
    text-align: left;
    padding-left: 710px;
    ${media.desktop`padding-left: 335px;`}
     ${media.tablet`width: auto; height: auto;`}
     ${media.phone`width: auto; height: auto;`}
`;

const MagazineSectionType= styled.span`
    font-family: NewsCycle,sans-serif;
    font-weight: normal;
    font-size: 60px;
    padding-left: 50px;
    ${media.desktop`font-size: 2rem;padding-left:5px;`}
     ${media.tablet`width: auto; height: auto;`}
     ${media.phone`width: auto; height: auto;`}
`;

const MagazineSectionImage= styled.div`
    
    
    margin: 120px 120px 0px;
    ${media.desktop`margin: 0% 6.5%; height:400px`}
     ${media.tablet`margin: 0% 6.5%; height:200px`}
     ${media.phone`margin: 0% 6.5%; height:100px`}
`;

const MagazineSectionImageDescription= styled.div`
    position: relative;
    color: rgb(255, 255, 255);
    top: 300px;
    font-weight: normal;
    font-size: 96px;
    font-family: NewsCycle, sans-serif;
    ${media.desktop`top: -532px;font-size: 3rem;`}
     ${media.tablet`margin: 10.15% 6.5%;`}
     ${media.phone`margin: 10.15% 6.5%;`}
`;

const MagazineSectionImagePlace= styled.div`
    padding-left: 815px;
    padding-top: 365px;
    ${media.desktop`top: -600px;font-size: 3rem;padding-left: 40%;`}
     ${media.tablet`top: -600px;font-size: 3rem;padding-left: 20%;`}
     ${media.phone`top: -600px;font-size: 3rem;padding-left: 20%;`}
`;

const ImageInfo= styled.div`
    font-size: 40px;
    font-family: Karla,sans-serif;
    font-weight: normal;
    padding-left: 600px;
    ${media.desktop`top: -500px;font-size: 1.25rem;padding-left: 29%;`}
     ${media.tablet`top: -500px;font-size: 1.25rem;padding-left: 29%;`}
     ${media.phone`top: -500px;font-size: 1.25rem;padding-left: 29%;`}
`;

const MagazineSectionImageCircle= styled.img`
    height: 56px;
    display: block;
    padding-left: 975px;
    padding-top: 10px;
    ${media.desktop`height: 40px;padding-left:5px;`}
    ${media.tablet`height: 1.5rem;padding-left:10px;`}
    ${media.phone`height: 1.5rem;padding-left:10px;`}
`;

const MagazineSectionImageGrid= styled.div`
    margin: 60px 120px 120px;
    width: auto;
    display: flex;
    justify-content: space-between;
    ${media.desktop`margin: 10.15% 6.5% 0% 6.5%;`}
     ${media.tablet`margin: 10.15% 6.5%;`}
     ${media.phone`margin: 10.15% 6.5%;`}
`;

const ImageWrapper= styled.div`
    
    ${media.desktop`width: 32%`}
     ${media.tablet`width: 32%`}
     ${media.phone`width: 32%`}
`;

const MagazineSectionGridDescription= styled.div`
    color: rgb(255, 255, 255);
    text-align: left;
    font-size: 48px;
    font: NewsCycle, sans-serif;
    font-weight: normal;
    padding-left: 60px;
    padding-top: 50px;
    ${media.desktop`font-size: 1.5rem;margin-left: 30px; margin-top:10px;padding-left: 0px;padding-top: 0px;`}
     ${media.tablet`width: 1rem`}
     ${media.phone`width: 1rem`}
`;

const MagazineSectionGridPlace= styled.div`
    font-size: 34px;
    font: Karla, sans-serif;
    font-weight: normal;
    padding-top: 20px;
    width: 500px;
    ${media.desktop`font-size: 1rem;width: 250px;padding-top: 10px;letter-spacing: 1px;`}
     ${media.tablet`width: 1rem`}
     ${media.phone`width: 1rem`}
`;

const MagazineSectionGridArrow= styled.img`
    height: 56px;
    padding-top: 20px;
    padding-bottom: 100px;
    ${media.desktop`height: 90px;width: auto;padding-top: 10px;padding-bottom: 50px;`}
     ${media.tablet`height: 1rem;width: auto`}
     ${media.phone`height: 1rem;width: auto`}
`;

const Line= styled.img`
    
    ${media.desktop`width:23%`}
     ${media.tablet`height: 1rem;width: auto`}
     ${media.phone`height: 1rem;width: auto`}
`;

class Hotels extends Component {
    render() {
        return (
            <MagazineSection>
                <MagazineSectionWrapper>
                    <MagazineSectionHeader>
                    <MagazineSectionHeaderLogo src="img/TCLogo.png" alt = ""></MagazineSectionHeaderLogo>
                    <MagazineSectionSubHeader>
                    <Line src="img/line.png" style={{}} alt = ""></Line>
                    <MagazineSectionType> magazine</MagazineSectionType>
                    </MagazineSectionSubHeader>
                    </MagazineSectionHeader>
                    
                    <MagazineSectionImage>
                        <img src="img/cambodia.png"  alt = ""></img>
                        <MagazineSectionImageDescription>
                        <MagazineSectionImagePlace>Cambodia</MagazineSectionImagePlace>
                        <ImageInfo>Angkor - see one of the world's true wonders</ImageInfo>
                        <MagazineSectionImageCircle src={arrows_slim_right_dashed} alt="" />
                        </MagazineSectionImageDescription>
                    </MagazineSectionImage>
                    <MagazineSectionImageGrid>
                        <ImageWrapper><img src="img/arm.png" className="" alt = ""></img>
                        <MagazineSectionGridDescription>
                        <div>Armenia</div><MagazineSectionGridPlace>History in abundance</MagazineSectionGridPlace>
                        <MagazineSectionGridArrow src={arrows_slim_right_dashed} alt="" /></MagazineSectionGridDescription></ImageWrapper>
                        
                        <ImageWrapper><img src="img/est.png" className="" alt = ""></img>
                        <MagazineSectionGridDescription>
                        <div>Estonia</div><MagazineSectionGridPlace>Tallin - Beauty in the Baltics</MagazineSectionGridPlace>
                        <MagazineSectionGridArrow src={arrows_slim_right_dashed} alt="" /></MagazineSectionGridDescription></ImageWrapper>
                        
                        <ImageWrapper><img src="img/czech.png" className="" alt = ""></img>
                        <MagazineSectionGridDescription>
                        <div>Czech Republic</div><MagazineSectionGridPlace>Prague - capital of the Czech Republic</MagazineSectionGridPlace>
                        <MagazineSectionGridArrow src={arrows_slim_right_dashed} alt="" /></MagazineSectionGridDescription></ImageWrapper>
                        
                    </MagazineSectionImageGrid>
                </MagazineSectionWrapper>
            </MagazineSection>
        )
    }
}

export default Hotels;