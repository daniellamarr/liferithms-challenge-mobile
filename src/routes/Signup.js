import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {authStyle, mainStyle} from '../styles';
import Text from '../components/Text';
import Google from '../icons/Google';
import colors from '../styles/colors';
import googleSignin from '../helpers/googleSignin';

const Signup = props => {
  return (
    <View style={authStyle.container}>
      <View>
        <Text fontSize={28} fontFamily="primaryMedium">
          {'Sign\nUp'}
        </Text>
      </View>
      <View style={authStyle.authView}>
        <TouchableOpacity style={authStyle.authButton} onPress={googleSignin}>
          <View style={mainStyle.row}>
            <View style={authStyle.authButtonIcon}>
              <Google />
            </View>
            <Text fontSize={14} fontFamily="primaryMedium">
              Sign Up With Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={authStyle.optional}>
        <Text fontSize={14}>Already have an acccount?
          <Text
            fontSize={14}
            fontFamily="primaryMedium"
            color={colors.primary}
            onPress={() => props.navigation.navigate('Signin')}>
            {' '}Sign in
          </Text>
        </Text>
      </View>
    </View>
  )
}

export default Signup;
