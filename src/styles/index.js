import {StyleSheet, Dimensions} from 'react-native';
import colors from './colors';

const {width, height} = Dimensions.get('window');

const mainStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
  }
});

const splashscreenStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const onboardingStyle = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  image: {
    marginBottom: 80,
    width: 280,
    height: 190
  },
  description: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
  },
  nextView: {
    position: 'absolute',
    bottom: -50,
    width,
    alignItems: 'center'
  },
  nextButton: {
    backgroundColor: colors.primary,
    height: 120,
    width: 120,
    paddingTop: 25,
    alignItems: 'center',
    borderRadius: 60
  }
});

const authStyle = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    padding: 60
  },
  authView: {
    marginTop: 60
  },
  authButton: {
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
  },
  authButtonIcon: {
    marginRight: 30,
  },
  optional: {
    position: 'absolute',
    width,
    bottom: 30,
    alignItems: 'center'
  }
});

export {
  mainStyle,
  splashscreenStyle,
  onboardingStyle,
  authStyle
};
