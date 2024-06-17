// ./screens/SandaPasta/AtletaDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AtletaDetail = ({ route, navigation }) => {
  const { atletaName } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: atletaName,
    });
  }, [navigation, atletaName]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{atletaName}</Text>
      {/* Adicione mais detalhes sobre o atleta aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
  },
});

export default AtletaDetail;
