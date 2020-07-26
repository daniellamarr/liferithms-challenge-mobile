import React from 'react';
import {View} from 'react-native';
import {splashscreenStyle} from '../styles';
import colors from '../styles/colors';
import Text from '../components/Text';

const Splashscreen = () => {
  return (
    <View style={splashscreenStyle.container}>
      <View>
        <Text
          color={colors.white}
          fontSize={40}
          fontFamily="primaryBold"
        >
          Aktiviti
        </Text>
      </View>
    </View>
  )
}

export default Splashscreen;
