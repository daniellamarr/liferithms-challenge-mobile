import {StyleSheet, Dimensions} from 'react-native';
import colors from './colors';

const {width, height} = Dimensions.get('window');

const mainStyle = StyleSheet.create({});

const splashscreenStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export {
  mainStyle,
  splashscreenStyle
};
