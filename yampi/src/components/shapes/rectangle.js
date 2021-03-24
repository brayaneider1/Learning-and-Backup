import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export default Rectangle = () =>
  <SvgXml xml={`
    <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.10" x="78.634" y="219.357" width="161.203" height="161.203" rx="20" transform="rotate(-119.196 78.634 219.357)" fill="url(#paint0_linear)"/>
    <defs>
    <linearGradient id="paint0_linear" x1="159.235" y1="219.357" x2="159.235" y2="380.56" gradientUnits="userSpaceOnUse">
    <stop stop-color="#BB62EE"/>
    <stop offset="1" stop-color="#BB62EE" stop-opacity="0.97"/>
    </linearGradient>
    </defs>
    </svg>
  `} width="390" height="390"/>

