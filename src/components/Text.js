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
        color: props.color,
        textAlign: props.center ? 'center' : 'auto'
      }}
    >
      {props.children}
    </RNText>
  )
}

Text.defaultProps = {
  color: colors.black,
  fontSize: 16,
  fontFamily: 'primary',
  center: false
};

export default Text;
