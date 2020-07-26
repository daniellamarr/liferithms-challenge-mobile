import React, {useRef, useState} from 'react';
import {View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import moment from 'moment';
import Text from '../components/Text';
import { dashboardStyle } from '../styles';
import colors from '../styles/colors';

const activities = [
  {
    name: 'Walk',
    description: 'Walking...',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: ''
  },
  {
    name: 'Run',
    description: 'Walking...',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: ''
  },
  {
    name: 'Gym',
    description: 'Walking...',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: ''
  }
];

const Dashboard = props => {
  const [currentlyViewing, setCurrentlyViewing] = useState({});

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current.open();
  };

  const onClose = () => {
    modalizeRef.current.close();
  };

  const handleOpenDialog = activity => {
    setCurrentlyViewing(activity);
    onOpen();
  };

  const renderActivities = ({item}) => (
    <TouchableOpacity
      style={dashboardStyle.activityCard}
      onPress={() => handleOpenDialog(item)}>
      <View>
        <Text fontSize={14}>{item.name}</Text>
      </View>
      <View style={dashboardStyle.activityHours}>
        <Text fontSize={20} fontFamily="primaryMedium">362</Text>
        <Text fontSize={8}>Hours</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={dashboardStyle.outerContainer}>
      <View style={dashboardStyle.container}>
        <View>
          <Text fontSize={14} color={colors.primary}>Hello,</Text>
          <Text fontSize={24} fontFamily="primaryMedium">John Doe</Text>
          <Text fontSize={12} color={colors.gray68}>
            {moment().format('dddd, DD MMMM')}
          </Text>
        </View>
        <View style={dashboardStyle.activitiesView}>
          <SafeAreaView>
            <FlatList
              data={activities}
              keyExtractor={item => item.name}
              numColumns={2}
              renderItem={renderActivities}
            />
          </SafeAreaView>
        </View>
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
            <Text>...</Text>
          </View>
          <View style={dashboardStyle.graph}></View>
          <View style={dashboardStyle.startDateView}>
            <Text>Start</Text>
            <Text fontSize={12} color={colors.gray68}>Mon 23, May</Text>
          </View>
          <View style={dashboardStyle.endDateView}>
            <Text>End</Text>
            <Text fontSize={12} color={colors.gray68}>Mon 23, May</Text>
          </View>
        </View>
      </Modalize>
    </View>
  )
}

export default Dashboard;
