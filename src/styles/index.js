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

const dashboardStyle = StyleSheet.create({
  outerContainer: {
    height
  },
  container: {
    padding: 40,
    paddingTop: 80
  },
  activitiesView: {
    marginTop: 60,
  },
  activityCard: {
    width: width/2 - 50,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    marginRight: 20,
    shadowColor: 'rgba(27, 27, 27, 0.1)',
    shadowRadius: 20,
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.1,
  },
  activityHours: {
    marginTop: 25
  },
  modalize: {
    padding: 40,
  },
  modalizeOverlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },
  modalizeHandle: {
    backgroundColor: colors.gray68,
  },
  rightIcon: {
    position: 'absolute',
    right: 40,
    top: 40,
  },
  graph: {
    backgroundColor: colors.primary,
    height: 250,
    padding: 30,
    borderRadius: 30,
    marginTop: 30
  },
  startDateView: {
    marginTop: 60
  },
  endDateView: {
    marginTop: 20
  },
});

export {
  mainStyle,
  splashscreenStyle,
  onboardingStyle,
  authStyle,
  dashboardStyle
};
