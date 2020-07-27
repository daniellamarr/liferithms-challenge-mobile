import React, {useRef, useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {connect} from 'react-redux';
import moment from 'moment';
import Text from '../components/Text';
import {dashboardStyle, mainStyle} from '../styles';
import colors from '../styles/colors';
import {fetchActivities} from '../redux/actions';
import Loader from '../components/Loader';
import Menu from '../icons/Menu';
import Elipsis from '../icons/Elipsis';
import Add from '../icons/Add';

const Dashboard = (props) => {
  const [currentlyViewing, setCurrentlyViewing] = useState({});
  const {fetchActivities: fActivities} = props;

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
          {moment(item.end_date).format('DD')}
        </Text>
        <Text fontSize={10}>{moment(item.start_date).format('MMMM')}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={dashboardStyle.outerContainer}>
      <View style={dashboardStyle.container}>
        <TouchableOpacity style={mainStyle.menuIconView}>
          <Menu />
        </TouchableOpacity>
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
              />
            </SafeAreaView>
          )}
        </View>
      </View>
      <View style={mainStyle.footer}>
        <TouchableOpacity style={mainStyle.activeRoute}>
          <Add />
        </TouchableOpacity>
      </View>
      <Modalize
        ref={modalizeRef}
        snapPoint={400}
        overlayStyle={dashboardStyle.modalizeOverlay}
        handleStyle={dashboardStyle.modalizeHandle}>
        <View style={dashboardStyle.modalize}>
          <View>
            <Text>{currentlyViewing.name}</Text>
          </View>
          <View style={dashboardStyle.rightIcon}>
            <Elipsis />
          </View>
          <View style={dashboardStyle.graph} />
          <View style={dashboardStyle.startDateView}>
            <Text>Start</Text>
            <Text fontSize={12} color={colors.gray68}>
              Mon 23, May
            </Text>
          </View>
          <View style={dashboardStyle.endDateView}>
            <Text>End</Text>
            <Text fontSize={12} color={colors.gray68}>
              Mon 23, May
            </Text>
          </View>
        </View>
      </Modalize>
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  activities: state.activities,
});

export default connect(mapStateToProps, {fetchActivities})(Dashboard);
