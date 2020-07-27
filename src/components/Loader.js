import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import colors from '../styles/colors';

const Loader = (props) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={props.size} color={props.color} />
    </View>
  );
};

Loader.defaultProps = {
  size: 'small',
  color: colors.white,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loader;
