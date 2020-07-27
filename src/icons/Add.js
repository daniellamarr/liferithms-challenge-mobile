import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Add = () => {
  return (
    <Svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17 7.4375V26.5625"
        stroke="white"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M26.5625 17H17H7.4375"
        stroke="white"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Add;
