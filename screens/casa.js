import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

const { width: viewportWidth } = Dimensions.get('window');

const entries = [
  { title: 'Slide 1', text: 'This is the first slide.' },
  { title: 'Slide 2', text: 'This is the second slide.' },
  { title: 'Slide 3', text: 'This is the third slide.' },
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Welcome</Text>
        <Carousel
          ref={carouselRef}
          data={entries}
          renderItem={renderItem}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth * 0.8}
          layout={'default'}
        />

        <View style={styles.noticia}>
          <Text style={styles.titulonuti}>Noticias:</Text>
          <Text style={styles.tituloum}>Ultimos Campeonatos:</Text>
          <Text style={styles.destaque}>Campeonato Europeu </Text>
          <Text>Decorrino na Suécia de 2-6 de Maio Portugal conquistou 14 medalhas entre elas 1 primeiro lugar em Sanda Light</Text>
          <View style={styles.imageContainer}>
            <Image source={require('../img/GreciaSelecao.jpg')} style={styles.GreciaSelecao} />
          </View>
          <Text style={styles.destaque}>Campeonato Europeu </Text>
          <Text>Decorrino na Suécia de 2-6 de Maio Portugal conquistou 14 medalhas entre elas 1 primeiro lugar em Sanda Light</Text>
          <View style={styles.imageContainer}>
            <Image source={require('../img/GreciaSelecao.jpg')} style={styles.GreciaSelecao} />
          </View>
          <Text style={styles.destaque}>Campeonato Europeu </Text>
          <Text>Decorrino na Suécia de 2-6 de Maio Portugal conquistou 14 medalhas entre elas 1 primeiro lugar em Sanda Light</Text>
          <View style={styles.imageContainer}>
            <Image source={require('../img/GreciaSelecao.jpg')} style={styles.GreciaSelecao} />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

Casa.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
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
  noticia: {
    backgroundColor: '#A8A8A8',
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  titulonuti: {
    fontSize: 20,
  },
  tituloum: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  destaque: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imageContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  GreciaSelecao: {
    width: 170,
    height: 170,
    resizeMode: 'cover',
    marginTop: 10,
    marginBottom:15,
    borderRadius:10,
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default Casa;
