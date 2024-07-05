import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const TreinadorDetail = ({ route, navigation }) => {
  const { treinador } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const Card = ({ title, children }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.cardContent}>
          {children}
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>
      <Image source={treinador.foto} style={styles.foto} />
      <Text style={styles.nome}>{treinador.nome}</Text>
      <Card title="Informações Gerais">
        <Text style={styles.info}>Idade: {treinador.idade}</Text>
        <Text style={styles.info}>Associação: {treinador.associacao}</Text>
        <Text style={styles.info}>Ano de Entrada: {treinador.anoentrada}</Text>
        <Text style={styles.info}>Artes Marciais: {treinador.artesmarciais}</Text>
        <Text style={styles.info}>Formações: {treinador.formacoes}</Text>
      </Card>
      <Card title="Biografia">
        <Text style={styles.biografia}>{treinador.biografia}</Text>
      </Card>
      <Card title="Conquistas">
        {treinador.conquistas.map((conquista, index) => (
          <Text key={index} style={styles.listItem}>{conquista}</Text>
        ))}
      </Card>
      <Card title="Alunos Notáveis">
        {treinador.alunosNotaveis.map((aluno, index) => (
          <Text key={index} style={styles.listItem}>{aluno.nome}: {aluno.descricao}</Text>
        ))}
      </Card>
      <Card title="Contato">
        <Text style={styles.info}>Email: </Text>
        <Text style={styles.info}> {treinador.contato.email}</Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
    alignItems: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  foto: {
    marginTop:35,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },  
  nome: {
    fontSize: 28,
    color: '#33FFFF',
    marginBottom: 10,
  },
  card: {
    width: '100%',
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#33FFFF',
  },
  cardTitle: {
    fontSize: 20,
    color: '#33FFFF',
    marginBottom: 10,
  },
  cardContent: {
    paddingLeft: 10,
  },
  info: {
    fontSize: 18,
    color: '#CCCCCC',
    marginVertical: 2,
  },
  biografia: {
    fontSize: 16,
    color: '#CCCCCC',
    marginVertical: 10,
    textAlign: 'center',
  },
  listItem: {
    fontSize: 16,
    color: '#CCCCCC',
    marginVertical: 2,
  },
});

export default TreinadorDetail;
