import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {connect} from 'react-redux';
import moment from 'moment';
import {mainStyle, activityStyle} from '../styles';
import Text from '../components/Text';
import colors from '../styles/colors';
import Back from '../icons/Back';
import Button from '../components/Button';
import timeToSeconds from '../helpers/timeToSeconds';
import {createActivity} from '../redux/actions';
import validateFields from '../helpers/validateFields';
import Backdrop from '../components/Backdrop';

const CreateActivity = (props) => {
  const {activities} = props;

  const [date] = useState(new Date());
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [start_date, setStartDate] = useState(date);
  const [start_time, setStartTime] = useState(date);
  const [end_date, setEndDate] = useState(date);
  const [end_time, setEndTime] = useState(date);
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [startTimeOpen, setStartTimeOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);
  const [endTimeOpen, setEndTimeOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', closeAllDateTime);
  }, []);

  useEffect(() => {
    if (!activities.createLoading && !activities.createError && submitted) {
      props.navigation.navigate('Dashboard');
    }
  }, [
    activities.createError,
    activities.createLoading,
    props.navigation,
    submitted,
  ]);

  const closeAllDateTime = () => {
    setStartDateOpen(false);
    setStartTimeOpen(false);
    setEndDateOpen(false);
    setEndTimeOpen(false);
  };

  const openCloseDateTime = (value) => {
    Keyboard.dismiss();
    closeAllDateTime();
    switch (value) {
      case 'startDate':
        startDateOpen === true
          ? setStartDateOpen(false)
          : setStartDateOpen(true);
        break;
      case 'startTime':
        startTimeOpen === true
          ? setStartTimeOpen(false)
          : setStartTimeOpen(true);
        break;
      case 'endDate':
        endDateOpen === true ? setEndDateOpen(false) : setEndDateOpen(true);
        break;
      case 'endTime':
        endTimeOpen === true ? setEndTimeOpen(false) : setEndTimeOpen(true);
        break;
      default:
        closeAllDateTime();
    }
  };

  const fieldsValidation = (type) => {
    const requiredFields = [
      {
        name: 'activity name',
        value: name,
      },
      {
        name: 'event description',
        value: description,
      },
    ];

    const validate = validateFields(requiredFields);
    if (!validate.status) {
      // setCreateEventErrorField(validate.errorField);
      // setCreateEventError(validate.message);
      return false;
    }
    // setCreateEventErrorField('');
    // setCreateEventError('');
    return true;
  };

  const dateValidation = () => {
    const startSeconds = timeToSeconds(moment(start_time).format('HH:mm'));
    const endSeconds = timeToSeconds(moment(end_time).format('HH:mm'));

    const sumStartDate =
      parseInt(moment(start_date).format('X'), 10) + startSeconds;
    const sumEndDate = parseInt(moment(end_date).format('X'), 10) + endSeconds;

    if (sumEndDate <= sumStartDate) {
      // setCreateEventError('consider adjusting your event end date and time');
      // setCreateEventErrorField('datetime');
      return false;
    } else if (sumStartDate <= moment().format('X')) {
      // setCreateEventError('consider adjusting your event start date and time');
      // setCreateEventErrorField('datetime');
      return false;
    }
    return true;
  };

  const validateForm = () => {
    if (!fieldsValidation('final')) {
      return false;
    }

    if (!dateValidation()) {
      return false;
    }
    // setCreateEventError('');
  };

  const handleCreate = async () => {
    try {
      if (validateForm() === false) {
        return false;
      }
      const startSeconds = timeToSeconds(moment(start_time).format('HH:mm'));
      const endSeconds = timeToSeconds(moment(end_time).format('HH:mm'));

      const sumStartDate =
        parseInt(moment(start_date).format('X'), 10) + startSeconds;
      const sumEndDate =
        parseInt(moment(end_date).format('X'), 10) + endSeconds;

      await props.createActivity({
        name,
        description,
        start_date: sumStartDate,
        end_date: sumEndDate,
      });
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={mainStyle.flex1}>
      <View style={mainStyle.row}>
        <View style={activityStyle.headerLeftBg} />
        <View style={activityStyle.headerRightBg} />
        <View style={activityStyle.header}>
          <View style={activityStyle.headerInner}>
            <TouchableOpacity
              style={activityStyle.headerBack}
              onPress={() => props.navigation.goBack()}>
              <Back />
            </TouchableOpacity>
            <Text color={colors.white} fontSize={18}>
              Create an activity
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={activityStyle.container}>
          <View style={mainStyle.inputView}>
            <View style={mainStyle.inputTitle}>
              <Text fontSize={12}>Activity Name</Text>
            </View>
            <TextInput
              placeholder="Name"
              placeholderTextColor={colors.gray72}
              style={mainStyle.input}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={mainStyle.inputView}>
            <View style={mainStyle.inputTitle}>
              <Text fontSize={12}>Activity Description</Text>
            </View>
            <TextInput
              placeholder="Description"
              placeholderTextColor={colors.gray72}
              style={mainStyle.textarea}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={mainStyle.row}>
            <View style={mainStyle.inputView}>
              <View style={mainStyle.inputTitle}>
                <Text fontSize={12}>Start Date</Text>
              </View>
              <TouchableOpacity
                placeholder="Description"
                style={[activityStyle.dateButton, activityStyle.leftDateButton]}
                onPress={() => openCloseDateTime('startDate')}>
                <Text fontSize={10} color={colors.gray72}>
                  {moment(start_date).format('DD MMMM YYYY')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={mainStyle.inputView}>
              <View
                style={[mainStyle.inputTitle, activityStyle.rightDateButton]}>
                <Text fontSize={12}>Start Time</Text>
              </View>
              <TouchableOpacity
                placeholder="Description"
                style={[
                  activityStyle.dateButton,
                  activityStyle.rightDateButton,
                ]}
                onPress={() => openCloseDateTime('startTime')}>
                <Text fontSize={10} color={colors.gray72}>
                  {moment(start_time).format('HH:mm a')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {startDateOpen && (
            <DateTimePicker
              value={start_date}
              mode="date"
              minimumDate={date}
              display="default"
              onChange={(e, d) => {
                setStartDateOpen(Platform.OS === 'ios');
                d && setStartDate(d);
              }}
            />
          )}
          {startTimeOpen && (
            <DateTimePicker
              value={start_time}
              mode="time"
              is24Hour={true}
              minimumDate={date}
              display="spinner"
              minuteInterval={30}
              onChange={(e, d) => {
                setStartTimeOpen(Platform.OS === 'ios');
                d && setStartTime(d);
              }}
            />
          )}
          <View style={mainStyle.row}>
            <View style={mainStyle.inputView}>
              <View style={mainStyle.inputTitle}>
                <Text fontSize={12}>End Date</Text>
              </View>
              <TouchableOpacity
                placeholder="Description"
                style={[activityStyle.dateButton, activityStyle.leftDateButton]}
                onPress={() => openCloseDateTime('endDate')}>
                <Text fontSize={10} color={colors.gray72}>
                  {moment(end_date).format('DD MMMM YYYY')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={mainStyle.inputView}>
              <View
                style={[mainStyle.inputTitle, activityStyle.rightDateButton]}>
                <Text fontSize={12}>End Time</Text>
              </View>
              <TouchableOpacity
                placeholder="Description"
                style={[
                  activityStyle.dateButton,
                  activityStyle.rightDateButton,
                ]}
                onPress={() => openCloseDateTime('endTime')}>
                <Text fontSize={10} color={colors.gray72}>
                  {moment(end_time).format('HH:mm a')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {endDateOpen && (
            <DateTimePicker
              value={end_date}
              mode="date"
              minimumDate={start_date}
              display="default"
              onChange={(e, d) => {
                setEndDateOpen(Platform.OS === 'ios');
                d && setEndDate(d);
              }}
            />
          )}
          {endTimeOpen && (
            <DateTimePicker
              value={end_time}
              mode="time"
              is24Hour={true}
              minimumDate={date}
              display="spinner"
              minuteInterval={30}
              onChange={(e, d) => {
                setEndTimeOpen(Platform.OS === 'ios');
                d && setEndTime(d);
              }}
            />
          )}
          <View style={activityStyle.createButton}>
            <Button onPress={handleCreate}>
              <Text fontSize={14} color={colors.white}>
                Create
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
      {activities.createLoading && (
        <Backdrop loader loaderText="creating activity" />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  activities: state.activities,
});

export default connect(mapStateToProps, {createActivity})(CreateActivity);
