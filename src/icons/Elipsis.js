import React from 'react';
import Svg, {Circle} from 'react-native-svg';

const Elipsis = () => {
  return (
    <Svg
      width="30"
      height="6"
      viewBox="0 0 30 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="3" cy="3" r="3" fill="#1B1B1B" />
      <Circle cx="15" cy="3" r="3" fill="#1B1B1B" />
      <Circle cx="27" cy="3" r="3" fill="#1B1B1B" />
    </Svg>
  );
};

export default Elipsis;
