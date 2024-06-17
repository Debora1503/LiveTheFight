import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

const { width: viewportWidth } = Dimensions.get('window');

const entries = [
  { title: 'Slide 1', text: 'This is the first slide.', image: require('../img/GreciaSelecao.jpg') },
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
      {item.image ? (
        <Image source={item.image} style={styles.fullSlideImage} />
      ) : (
        <>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </>
      )}
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
          itemWidth={viewportWidth - 60} // Adjusted itemWidth to center the slide
          layout={'default'}
        />

        <View style={styles.noticia}>
          <Text style={styles.titulonuti}>Noticias:</Text>
          
          {/* Noticia 1 */}
          <Text style={styles.tituloum}>Ultimos Campeonatos:</Text>
          <Text style={styles.destaque}>Campeonato Europeu</Text>
          <Text style={styles.noticiaText}>Decorrino na Suécia de 2-6 de Maio Portugal conquistou 14 medalhas entre elas 1 primeiro lugar em Sanda Light</Text>
          <View style={styles.imageContainer}>
            <Image source={require('../img/GreciaSelecao.jpg')} style={styles.GreciaSelecao} />
          </View>
          
          <View style={styles.divider} />

          {/* Noticia 2 */}
          <Text style={styles.destaque}>Campeonato Europeu</Text>
          <Text style={styles.noticiaText}>Decorrino na Suécia de 2-6 de Maio Portugal conquistou 14 medalhas entre elas 1 primeiro lugar em Sanda Light</Text>
          <View style={styles.imageContainer}>
            <Image source={require('../img/GreciaSelecao.jpg')} style={styles.GreciaSelecao} />
          </View>
          
          <View style={styles.divider} />

          {/* Noticia 3 */}
          <Text style={styles.destaque}>Campeonato Europeu</Text>
          <Text style={styles.noticiaText}>Decorrino na Suécia de 2-6 de Maio Portugal conquistou 14 medalhas entre elas 1 primeiro lugar em Sanda Light</Text>
          <View style={styles.imageContainer}>
            <Image source={require('../img/GreciaSelecao.jpg')} style={styles.GreciaSelecao} />
          </View>
        </View>
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
    marginTop: -20,
    textShadowColor: '#33FFFF',  // Cor da sombra do texto
    textShadowOffset: { width: -1, height: 1 },  // Deslocamento da sombra do texto
    textShadowRadius: 10,  // Raio da sombra do texto
  },
  slide: {
    backgroundColor: '#76c7c0',
    borderRadius: 10,
    height: 240,
    width: viewportWidth - 60, // Adjusted width to fit within the viewport
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  fullSlideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  noticia: {
    backgroundColor: '#A8A8A8',
    marginTop: 25,
    borderRadius: 10,
    padding: 10,
    width: 350,
  },
  titulonuti: {
    fontSize: 22,
    color: 'white',
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
  noticiaText: {
    textAlign: 'left',
    marginBottom: 15,
  },
  imageContainer: {
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  GreciaSelecao: {
    width: 220,
    height: 220,
    resizeMode: 'cover',
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
});

export default Casa;
