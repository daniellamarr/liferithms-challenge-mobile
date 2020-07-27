/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import {mainStyle} from '../styles';

const Button = (props) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={() => props.onPress()}
      style={[
        mainStyle.button,
        {
          ...props.style,
          backgroundColor: props.bgColor,
          paddingTop: props.size === 'normal' ? 15 : 8,
          paddingBottom: props.size === 'normal' ? 15 : 8,
        },
      ]}>
      {props.children}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  bgColor: colors.primary,
  onPress: () => {},
  disabled: false,
  size: 'normal',
};

export default Button;
