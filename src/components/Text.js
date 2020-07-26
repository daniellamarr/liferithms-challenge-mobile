import React from 'react';
import {Text as RNText} from 'react-native';
import colors from '../styles/colors';

const Text = props => {
  return (
    <RNText
      {...props}
      style={{
        fontSize: props.fontSize,
        fontFamily: props.fontFamily,
        color: props.color
      }}
    >
      {props.children}
    </RNText>
  )
}

Text.defaultProps = {
  color: colors.black,
  fontSize: 14,
  fontFamily: 'primary'
};

export default Text;
