import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {authStyle, mainStyle} from '../styles';
import Text from '../components/Text';
import Google from '../icons/Google';
import colors from '../styles/colors';
import googleSignin from '../helpers/googleSignin';
import {signIn} from '../redux/actions';
import Backdrop from '../components/Backdrop';

const Signin = (props) => {
  useEffect(() => {
    if (!props.auth.loading && props.auth.token) {
      props.navigation.navigate('Dashboard');
    }
  }, [props.auth.loading, props.auth.token, props.navigation]);

  const handleAuth = async () => {
    const googleAuth = await googleSignin();
    if (googleAuth.success) {
      await props.signIn(googleAuth.token);
    }
  };

  return (
    <View>
      <View style={authStyle.container}>
        <View>
          <Text fontSize={28} fontFamily="primaryMedium">
            {'Welcome\nBack!'}
          </Text>
        </View>
        <View style={authStyle.authView}>
          <TouchableOpacity style={authStyle.authButton} onPress={handleAuth}>
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
          <Text fontSize={14}>
            Don't have an acccount?
            <Text
              fontSize={14}
              fontFamily="primaryMedium"
              color={colors.primary}
              onPress={() => props.navigation.navigate('Signup')}>
              {' '}
              Sign up
            </Text>
          </Text>
        </View>
      </View>
      {props.auth.loading && <Backdrop loader />}
    </View>
  );
};

export const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {signIn})(Signin);
