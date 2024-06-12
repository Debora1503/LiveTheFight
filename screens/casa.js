import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const entries = [
  { title: 'Slide 1', text: 'This is the first slide.' },
  { title: 'Slide 2', text: 'This is the second slide.' },
  { title: 'Slide 3', text: 'This is the third slide.' },
  // Add more slides as needed
];

const Casa = ({ navigation }) => {
  const carouselRef = useRef(null);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.header}>Welcome</Text>
      <Carousel
        ref={carouselRef}
        data={entries}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth * 0.8}
        layout={'default'}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  slide: {
    backgroundColor: '#76c7c0',
    borderRadius: 10,
    height: 200,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  buttonText: {
    color: 'white',
    marginTop: 20,
    fontSize: 18,
  },
});

export default Casa;
