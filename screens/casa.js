import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const entries = [
  { title: 'Slide 1', text: 'This is the first slide.', image: require('../img/diogoaula.png') },
  { title: 'Slide 2', text: 'This is the second slide.', image: require('../img/sparringday3.jpeg') },
  { title: 'Slide 3', text: 'This is the second slide.', image: require('../img/acampamento.jpeg') },
  { title: 'Slide 4', text: 'This is the third slide.', image: require('../img/segundolugar.jpeg') },
  { title: 'Slide 5', text: 'This is the third slide.', image: require('../img/sparringday.jpeg') },
  { title: 'Slide 6', text: 'This is the second slide.', image: require('../img/bernardo.jpg') },
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
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Welcome</Text>
        </View>
        <Carousel
          ref={carouselRef}
          data={entries}
          renderItem={renderItem}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth - 60} // Adjusted itemWidth to center the slide
          layout={'default'}
        />

        <View style={styles.noticia}>
          <Text style={styles.titulonuti}>Notícias:</Text>
          
          {/* Notícia 1 */}
          <View style={styles.noticiaContainer}>
            <Text style={styles.destaque}>Campeonato Europeu</Text>
            <Text style={styles.noticiaText}>Decorreu na Suécia de 2 a 6 de Maio. Portugal conquistou 14 medalhas, incluindo 1 primeiro lugar em Sanda Light.</Text>
            <Image source={require('../img/euro2024.jpeg')} style={styles.GreciaSelecao} />
          </View>
          
          <View style={styles.divider} />

          {/* Notícia 2 */}
          <View style={styles.noticiaContainer}>
            <Text style={styles.destaque}>Gala do Desporto</Text>
            <Text style={styles.noticiaText}>Atletas da YMAA receberam trofeus distribuidos pela Amadora Desporto pelo seu desempenho no ano de 2022-2023 por reconhecimento nacional e internacional em competições.</Text>
            <Image source={require('../img/galadesporto2023.jpeg')} style={styles.GreciaSelecao} />
          </View>
          
          <View style={styles.divider} />

          {/* Notícia 3 */}
          <View style={styles.noticiaContainer}>
            <Text style={styles.destaque}>Campeonato Mundial de Sanda</Text>
            <Text style={styles.noticiaText}>Decorreu nos Estados Unidos em Fort Worth de 16-21 de Novembro de 2023</Text>
            <Image source={require('../img/mundiais.png')} style={styles.GreciaSelecao} />
          </View>
          <View style={styles.divider} />

          {/* Notícia 4 */}
          <View style={styles.noticiaContainer}>
            <Text style={styles.destaque}>Campeonato internacional Shoubo</Text>
            <Text style={styles.noticiaText}>Decorreu em França de 29-30 de Abril de 2023, a equipa conquistou 4 medalhas, incluindo 1 primeiro lugar, 1 segundo lugar e 2 terceiros</Text>
            <Image source={require('../img/medalhasfrança.jpg')} style={styles.GreciaSelecao} />
          </View>
          <View style={styles.divider} />

          {/*Noticia 5 */}
          <View style={styles.noticiaContainer}>
            <Text style={styles.destaque}>Campeonato Europeu Grecia</Text>
            <Text style={styles.noticiaText}>Decorreu na Grecia em Atenas de 10-16 de Novembro de 2022.</Text>
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
    backgroundColor: '#121212', // Cor de fundo escura
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  headerContainer: {
    marginTop: 60, // Margem superior para posicionar abaixo do menu
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#33FFFF',

  },
  slide: {
    backgroundColor: '#76c7c0',
    borderRadius: 10,
    height: 260, // Altura aumentada do slide
    width: viewportWidth - 60,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: '#33FFFF',
    borderWidth: 2,
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
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  noticia: {
    backgroundColor: '#A8A8A8',
    marginTop: 25,
    borderRadius: 10,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderColor:'#33FFFF',
    borderWidth: 2,
  },
  titulonuti: {
    fontSize: 22,
    color: '#33FFFF',
    fontWeight:'bold',
    marginBottom: 10,
  },
  noticiaContainer: {
    width: '100%',
    alignItems: 'center',
  },
  destaque: {
    fontSize: 18,
    color:'#121212',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noticiaText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    color: '#121212',
  },
  GreciaSelecao: {
    width: 280, // Aumentando o tamanho da imagem
    height: 220, // Altura aumentada da imagem
    resizeMode: 'cover',
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#121212',
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
    backgroundColor: '#33FFFF',
    marginVertical: 15,
  },
});

export default Casa;
