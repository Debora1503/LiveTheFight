
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

const ArtesMarciais = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>artesmarciais Screen</Text>
    </View>
  );
};

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

export default ArtesMarciais;
