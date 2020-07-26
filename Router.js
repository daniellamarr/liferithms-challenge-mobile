import React, {useState, useEffect, createRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splashscreen from './src/routes/Splashscreen';
import Onboarding from './src/routes/Onboarding';
import Signup from './src/routes/Signup';
import Signin from './src/routes/Signin';
import Dashboard from './src/routes/Dashboard';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
