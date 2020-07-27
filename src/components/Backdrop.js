import React from 'react';
import {View} from 'react-native';
import {mainStyle} from '../styles';
import colors from '../styles/colors';
import Loader from './Loader';
import Text from './Text';

const Backdrop = (props) => {
  return (
    <View style={[mainStyle.backdrop, {backgroundColor: props.bgColor}]}>
      <View style={mainStyle.backdropInner}>
        {props.loader && <Loader size={props.loaderSize} />}
        {props.loaderText && (
          <View style={mainStyle.marginTop}>
            <Text fontSize={12} color={colors.white}>
              {props.loaderText}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

Backdrop.defaultProps = {
  bgColor: 'rgba(0,0,0,0.5)',
  loader: false,
  loaderSize: 'small',
};

export default Backdrop;
