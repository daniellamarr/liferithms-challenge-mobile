import {StyleSheet, Dimensions} from 'react-native';
import colors from './colors';

const {width, height} = Dimensions.get('window');

const mainStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  backdrop: {
    height,
    width,
    top: 0,
    left: 0,
    position: 'absolute',
    zIndex: 100000,
  },
  backdropInner: {
    alignItems: 'center',
    paddingTop: height / 2,
  },
  menuIconView: {
    position: 'absolute',
    right: 40,
    top: 85,
    zIndex: 10,
  },
  menuList: {
    backgroundColor: colors.white,
    padding: 15,
    paddingTop: 20,
    position: 'absolute',
    right: 40,
    top: 100,
    borderRadius: 5,
    shadowColor: colors.gray68,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.1,
    elevation: 1,
    zIndex: 10,
  },
  menuItem: {
    marginBottom: 20,
  },
  menuProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  footer: {
    position: 'absolute',
    width,
    bottom: 20,
    alignItems: 'center',
  },
  activeRoute: {
    height: 60,
    width: 60,
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    marginBottom: 20,
  },
  input: {
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 15,
    fontSize: 10,
    fontFamily: 'primary',
  },
  textarea: {
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 15,
    paddingTop: 0,
    fontSize: 10,
    fontFamily: 'primary',
    height: 100,
  },
  inputTitle: {
    marginBottom: 10,
  },
  button: {
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 18,
    color: colors.white,
    marginLeft: 20,
  },
  flex1: {
    flex: 1,
  },
});

const splashscreenStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const onboardingStyle = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    marginBottom: 80,
    width: 280,
    height: 190,
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
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: colors.primary,
    height: 120,
    width: 120,
    paddingTop: 25,
    alignItems: 'center',
    borderRadius: 60,
  },
});

const authStyle = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    padding: 60,
  },
  authView: {
    marginTop: 60,
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
    alignItems: 'center',
  },
});

const dashboardStyle = StyleSheet.create({
  outerContainer: {
    height,
  },
  container: {
    padding: 40,
    paddingTop: 80,
    height: height - 150,
  },
  activitiesView: {
    marginTop: 40,
  },
  filterView: {
    alignItems: 'flex-end',
  },
  filter: {
    backgroundColor: colors.white,
    padding: 5,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  filterList: {
    backgroundColor: colors.white,
    padding: 10,
    paddingTop: 15,
    position: 'absolute',
    right: 0,
    width: 150,
    borderRadius: 5,
    zIndex: 10,
  },
  filterListItem: {
    marginBottom: 5,
  },
  emptyActivity: {
    height: 200,
    width: width - 80,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityCard: {
    width: width / 2 - 50,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    marginRight: 20,
    shadowColor: 'rgba(27, 27, 27, 0.1)',
    shadowRadius: 20,
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.1,
    elevation: 1,
  },
  activityHours: {
    marginTop: 25,
  },
  modalize: {
    padding: 40,
  },
  modalizeOverlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  modalizeHandle: {
    backgroundColor: colors.gray68,
  },
  rightIcon: {
    position: 'absolute',
    right: 40,
    top: 50,
  },
  optionsPopup: {
    backgroundColor: colors.white,
    padding: 10,
    paddingTop: 20,
    position: 'absolute',
    right: 40,
    top: 45,
    width: 150,
    borderRadius: 5,
    shadowColor: colors.gray68,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.1,
    elevation: 1,
    zIndex: 10,
  },
  optionsPopupItem: {
    marginBottom: 10,
  },
  graph: {
    backgroundColor: colors.primary,
    height: 250,
    padding: 30,
    borderRadius: 30,
    marginTop: 30,
  },
  startDateView: {
    marginTop: 60,
  },
  endDateView: {
    marginTop: 20,
  },
});

const activityStyle = StyleSheet.create({
  headerLeftBg: {
    width: width / 2,
    height: 250,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 30,
  },
  headerRightBg: {
    width: width / 2,
    height: 250,
    backgroundColor: '#17ce6af0',
    borderBottomRightRadius: 30,
  },
  header: {
    position: 'absolute',
    left: 40,
    top: 60,
  },
  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBack: {
    marginRight: 30,
  },
  headerImageView: {
    marginTop: 40,
  },
  headerImage: {
    width: 130,
    height: 90,
  },
  container: {
    padding: 40,
  },
  dateButton: {
    width: (width - 80) / 2 - 10,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 15,
  },
  leftDateButton: {
    marginRight: 10,
  },
  rightDateButton: {
    marginLeft: 10,
  },
  createButton: {
    marginTop: 10,
  },
});

export {
  mainStyle,
  splashscreenStyle,
  onboardingStyle,
  authStyle,
  dashboardStyle,
  activityStyle,
};
