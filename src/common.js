import 'babel-polyfill';
import styled from 'styled-components';
import media from "./mediaTemplate";

export const SectionTitle = styled.h1`
    text-align: left;
    font-family:  NewsCycle, sans-serif;
    font-weight: normal;
    color: rgb(48,48,48);
     ${media.giant`
       font-size: 6rem;
       line-height: 6rem;
        margin: 0 0  50px 0;
     `}
     ${media.desktop`
      font-size: 3rem;
      line-height: 3rem;
      margin: 0px;
     `}
     ${media.tablet`
     font-size: 2rem;
     margin: 0px;
     `}
     ${media.phone`
     font-size: 2rem;
     text-align: center;
     margin: 0px;
     `}
  `;