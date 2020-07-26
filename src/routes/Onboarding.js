import React, {createRef, useState} from 'react';
import {View, FlatList, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Text from '../components/Text';
import {onboardingStyle} from '../styles';
import Onboarding1 from '../assets/images/onboarding1.png';
import Onboarding2 from '../assets/images/onboarding2.png';
import Onboarding3 from '../assets/images/onboarding3.png';
import colors from '../styles/colors';

const slides = [
  {
    title: 'Track Your Workouts',
    description: 'With Aktiviti you can track your daily workout and see your progress',
    image: Onboarding1
  },
  {
    title: 'Track Your Work',
    description: 'With Aktiviti you can track your daily workout and see your progress',
    image: Onboarding2
  },
  {
    title: 'Track Your Hygeine',
    description: 'With Aktiviti you can track your daily workout and see your progress',
    image: Onboarding3
  }
];

const Onboarding = props => {
  const [activeSlide, setActiveSlide] = useState(0);
  const flatListRef = createRef(null);

  const onScroll = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    setActiveSlide(slide);
  };

  const onClickNext = () => {
    if (activeSlide === slides.length - 1) {
      props.navigation.navigate('Signup');
      return false;
    }
    flatListRef.current.scrollToIndex({index: activeSlide + 1, animated: true});
  };

  const renderSlides = ({item}) => (
    <View style={onboardingStyle.container}>
      <Image source={item.image} style={onboardingStyle.image} />
      <Text
        fontSize={24}
        fontFamily="primaryMedium">
        {item.title}
      </Text>
      <View style={onboardingStyle.description}>
        <Text color={colors.gray68} center>
          {item.description}
        </Text>
      </View>
    </View>
  );

  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={slides}
          keyExtractor={item => item.title}
          renderItem={renderSlides}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={onScroll}
          ref={flatListRef}
        />
      </SafeAreaView>
      <View style={onboardingStyle.nextView}>
        <TouchableOpacity
          style={onboardingStyle.nextButton}
          onPress={onClickNext}
        >
          <Text color={colors.white}>
            {activeSlide === slides.length - 1 ? 'Start' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Onboarding;
