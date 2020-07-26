import React, {useState, useEffect, createRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splashscreen from './src/routes/Splashscreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
