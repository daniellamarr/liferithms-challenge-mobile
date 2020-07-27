import React from 'react';
import Svg, {Rect} from 'react-native-svg';

const Menu = () => {
  return (
    <Svg
      width="23"
      height="15"
      viewBox="0 0 23 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width="11.5" height="2.875" fill="#1B1B1B" />
      <Rect y="5.75" width="23" height="2.875" fill="#1B1B1B" />
      <Rect x="11.5" y="11.5" width="11.5" height="2.875" fill="#1B1B1B" />
    </Svg>
  );
};

export default Menu;
