import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {authStyle, mainStyle} from '../styles';
import Text from '../components/Text';
import Google from '../icons/Google';
import colors from '../styles/colors';

const Signin = props => {
  return (
    <View style={authStyle.container}>
      <View>
        <Text fontSize={28} fontFamily="primaryMedium">
          {'Welcome\nBack!'}
        </Text>
      </View>
      <View style={authStyle.authView}>
        <TouchableOpacity style={authStyle.authButton}>
          <View style={mainStyle.row}>
            <View style={authStyle.authButtonIcon}>
              <Google />
            </View>
            <Text fontSize={14} fontFamily="primaryMedium">
              Sign In With Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={authStyle.optional}>
        <Text fontSize={14}>Don't have an acccount?
          <Text
            fontSize={14}
            fontFamily="primaryMedium"
            color={colors.primary}
            onPress={() => props.navigation.navigate('Signup')}>
            {' '}Sign up
          </Text>
        </Text>
      </View>
    </View>
  )
}

export default Signin;
