import React from 'react';
import {AppLoading} from 'expo';
import {useFonts} from 'expo-font';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Router from './Router';
import {store, persistor} from './src/redux/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    primary: require('./src/assets/fonts/Poppins/Poppins-Regular.ttf'),
    primaryBold: require('./src/assets/fonts/Poppins/Poppins-Bold.ttf'),
    primaryMedium: require('./src/assets/fonts/Poppins/Poppins-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}
