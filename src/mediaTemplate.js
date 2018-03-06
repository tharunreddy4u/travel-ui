
import {css} from 'styled-components';

import Preferences from './Preferences';
/*
const sizes = {
  giant: 2560,
  desktop: 2420,
  tablet: 768,
  phone: 376
}
*/

const sizes = Preferences.MEDIA;

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc
}, {});

export default media;
