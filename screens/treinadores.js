// screens/Treinadores.js
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

export default function Treinadores() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Treinadores Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
