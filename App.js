import React from 'react';
import {AppLoading} from 'expo';
import {useFonts} from 'expo-font';
import Router from './Router';

export default function App() {
  const [fontsLoaded] = useFonts({
    'primary': require('./src/assets/fonts/Poppins/Poppins-Regular.ttf'),
    'primaryBold': require('./src/assets/fonts/Poppins/Poppins-Bold.ttf'),
    'primaryMedium': require('./src/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Router />
  );
}
