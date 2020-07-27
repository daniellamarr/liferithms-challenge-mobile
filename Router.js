import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Splashscreen from './src/routes/Splashscreen';
import Onboarding from './src/routes/Onboarding';
import Signup from './src/routes/Signup';
import Signin from './src/routes/Signin';
import Dashboard from './src/routes/Dashboard';
import CreateActivity from './src/routes/CreateActivity';
import EditActivity from './src/routes/EditActivity';

const Stack = createStackNavigator();

const Router = (props) => {
  const [loading, setLoading] = useState(true);

  const launchApp = () => {
    setTimeout(() => setLoading(false), 3000);
  };

  useEffect(() => {
    launchApp();
  }, []);

  if (loading) {
    return <Splashscreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {!props.auth.token ? (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Signin" component={Signin} />
          </>
        ) : (
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="CreateActivity" component={CreateActivity} />
            <Stack.Screen name="EditActivity" component={EditActivity} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Router);
