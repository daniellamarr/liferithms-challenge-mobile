import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {connect} from 'react-redux';
import moment from 'moment';
import Text from '../components/Text';
import {dashboardStyle, mainStyle} from '../styles';
import colors from '../styles/colors';
import {
  fetchActivities,
  filterActivities,
  deleteActivity,
  signOut,
} from '../redux/actions';
import Loader from '../components/Loader';
import Menu from '../icons/Menu';
import Elipsis from '../icons/Elipsis';
import Add from '../icons/Add';
import Backdrop from '../components/Backdrop';

const Dashboard = (props) => {
  const [currentlyViewing, setCurrentlyViewing] = useState({});
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState('Ascending');
  const [openOptionsPopup, setOptionsPopup] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const {fetchActivities: fActivities} = props;

  const filterArray = ['Ascending', 'Descending'];

  useEffect(() => {
    fActivities();
  }, [fActivities]);

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current.open();
  };

  const onClose = () => {
    modalizeRef.current.close();
  };

  const handleOpenDialog = (activity) => {
    setCurrentlyViewing(activity);
    onOpen();
  };

  const handleFilterChange = (value) => {
    props.filterActivities(value);
    setFilter(value);
    setOpenFilter(false);
  };

  const promptDelete = (activityId) => {
    Alert.alert(
      'Delete Activity?',
      "Once deleted, you won't be able to view this activity anymore",
      [
        {
          text: 'Continue',
          onPress: () => {
            onClose();
            props.deleteActivity(activityId);
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {},
        },
      ],
    );
  };

  const renderActivities = ({item}) => (
    <TouchableOpacity
      style={dashboardStyle.activityCard}
      onPress={() => handleOpenDialog(item)}>
      <View>
        <Text fontSize={14}>
          {item.name && item.name.length > 10
            ? `${item.name.substring(0, 10)}...`
            : item.name}
        </Text>
      </View>
      <View style={dashboardStyle.activityHours}>
        <Text fontSize={20} fontFamily="primaryMedium">
          {moment.unix(item.start_date).format('DD')}
        </Text>
        <Text fontSize={10}>{moment.unix(item.start_date).format('MMMM')}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={dashboardStyle.outerContainer}>
      <View style={dashboardStyle.container}>
        <TouchableOpacity
          style={mainStyle.menuIconView}
          onPress={() => setOpenMenu(!openMenu)}>
          <Menu />
        </TouchableOpacity>
        {openMenu && (
          <View style={mainStyle.menuList}>
            <View style={mainStyle.menuProfile}>
              <Image
                source={{uri: props.auth.user.picture}}
                style={mainStyle.menuImage}
              />
              <Text
                fontSize={12}
                color={colors.primary}
                fontFamily="primaryMedium">
                {props.auth.user.name}
              </Text>
            </View>
            <TouchableOpacity onPress={() => props.signOut()}>
              <Text fontSize={12} color={colors.gray68}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View>
          <Text fontSize={14} color={colors.primary}>
            Hello,
          </Text>
          <Text fontSize={24} fontFamily="primaryMedium">
            {props.auth.user.name}
          </Text>
          <Text fontSize={12} color={colors.gray68}>
            {moment().format('dddd, DD MMMM')}
          </Text>
        </View>
        <View style={dashboardStyle.activitiesView}>
          <View style={dashboardStyle.filterView}>
            <TouchableOpacity
              style={dashboardStyle.filter}
              onPress={() => setOpenFilter(true)}>
              <Text fontSize={10} color={colors.primary}>
                {filter} Order
              </Text>
            </TouchableOpacity>
          </View>
          {openFilter && (
            <View style={dashboardStyle.filterList}>
              <View style={dashboardStyle.filterListItem}>
                <Text fontSize={11} color={colors.primary}>
                  Sorted by date
                </Text>
              </View>
              {filterArray.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={dashboardStyle.filterListItem}
                  onPress={() => handleFilterChange(item)}>
                  <Text
                    fontSize={12}
                    color={filter === item ? colors.gray72 : colors.black}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {props.activities.loading ? (
            <Loader color={colors.primary} />
          ) : props.activities.all.length < 1 ? (
            <View style={dashboardStyle.emptyActivity}>
              <View>
                <Text color={colors.white} fontSize={14}>
                  Create an Activity to get started
                </Text>
              </View>
            </View>
          ) : (
            <SafeAreaView>
              <FlatList
                data={props.activities.all}
                keyExtractor={(item) => item.name}
                numColumns={2}
                renderItem={renderActivities}
                showsVerticalScrollIndicator={false}
              />
            </SafeAreaView>
          )}
        </View>
      </View>
      <View style={mainStyle.footer}>
        <TouchableOpacity
          style={mainStyle.activeRoute}
          onPress={() => props.navigation.navigate('CreateActivity')}>
          <Add />
        </TouchableOpacity>
      </View>
      <Modalize
        ref={modalizeRef}
        snapPoint={400}
        overlayStyle={dashboardStyle.modalizeOverlay}
        handleStyle={dashboardStyle.modalizeHandle}
        onClose={() => setOptionsPopup(false)}>
        <View style={dashboardStyle.modalize}>
          <View>
            <Text>{currentlyViewing.name}</Text>
          </View>
          <TouchableOpacity
            style={dashboardStyle.rightIcon}
            onPress={() => setOptionsPopup(true)}>
            <Elipsis />
          </TouchableOpacity>
          {openOptionsPopup && (
            <View style={dashboardStyle.optionsPopup}>
              <TouchableOpacity
                style={dashboardStyle.optionsPopupItem}
                onPress={() => {
                  onClose();
                  props.navigation.navigate('EditActivity', {
                    activity: currentlyViewing,
                  });
                }}>
                <Text fontSize={13} color={colors.primary}>
                  Edit Activity
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={dashboardStyle.optionsPopupItem}
                onPress={() => promptDelete(currentlyViewing.activityId)}>
                <Text fontSize={13} color={'red'}>
                  Delete Activity
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={dashboardStyle.graph} />
          <View style={dashboardStyle.startDateView}>
            <Text>Start</Text>
            <Text fontSize={12} color={colors.gray68}>
              {moment.unix(currentlyViewing.start_date).format('ddd DD, MMMM')}
            </Text>
          </View>
          <View style={dashboardStyle.endDateView}>
            <Text>End</Text>
            <Text fontSize={12} color={colors.gray68}>
              {moment.unix(currentlyViewing.end_date).format('ddd DD, MMMM')}
            </Text>
          </View>
        </View>
      </Modalize>
      {props.activities.deleteLoading && (
        <Backdrop loader loaderText="deleting activity" />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  activities: state.activities,
});

const mapDispatchToProps = {
  fetchActivities,
  filterActivities,
  deleteActivity,
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
