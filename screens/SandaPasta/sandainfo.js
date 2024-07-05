import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const SandaInfo = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.titulo}>Sanda</Text>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Origem e História</Text>
          <Text style={styles.text}>
            Sanda, também conhecido como Sanshou, é uma forma moderna de combate corpo a corpo, esporte de combate e sistema de autodefesa desenvolvido pela República Popular da China. O Sanda é derivado do Kung Fu tradicional e incorpora técnicas de várias artes marciais chinesas. Foi introduzido como desporto competitivo na década de 1970.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Introdução em Portugal</Text>
          <Text style={styles.text}>
            O Sanda foi introduzido em Portugal no início dos anos 1990. Desde então, tem ganhado popularidade como um desporto competitivo e uma forma eficaz de autodefesa. Vários ginasios e associações promovem a prática do Sanda em todo o país.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Prática do Sanda</Text>
          <Text style={styles.text}>
            O Sanda é praticado numa Leitai, uma plataforma elevada que pode variar em altura e tamanho. Inclui uma combinação de socos, pontapés, quedas e projeções. Os praticantes usam luvas, protetores de cabeça (capacetes) e outras proteções para garantir a segurança durante os combates. As sessões de treino geralmente incluem exercícios de condicionamento físico, técnicas de combate e sparring.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Curiosidades</Text>
          <Text style={styles.text}>
            - O Sanda é frequentemente incluído em competições de Wushu.
            {'\n'}- É conhecido por sua ênfase em técnicas de queda e projeção, diferenciando-se de muitas outras artes marciais de striking.
            {'\n'}- O Sanda tem uma forte presença em competições de artes marciais mistas (MMA).
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Regras da Luta</Text>
          <Text style={styles.text}>
            - Combates são realizados em um leitai, uma plataforma elevada.
            {'\n'}- Pontos são concedidos por golpes limpos, quedas e técnicas eficazes.
            {'\n'}- Os combates são divididos em rounds de dois minutos.
            {'\n'}- Golpes ilegais incluem ataques aos olhos, garganta e genitais.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Como se Pratica</Text>
          <Text style={styles.text}>
            Para praticar Sanda, é recomendável encontrar um ginasio ou instrutor qualificado. A prática inclui condicionamento físico, aprendizagem de técnicas de combate e prática regular de sparring. Competir em torneios é uma excelente forma de testar habilidades e ganhar experiência.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Pontuação nos Combates</Text>
          <Text style={styles.subtitulo}>Golpes Limpos</Text>
          <Text style={styles.text}>
            - Soco : 1 ponto
            {'\n'}- Pontapé a cabeça ou colete (Pé ou Perna): 2 pontos
            {'\n'}- Pontapé a perna (Pé ou Perna): 1 ponto 
            {'\n'}
          </Text>
          <Text style={styles.subtitulo}>Projeções</Text>
          <Text style={styles.text}>
            - Queda Limpa: 2 pontos
            {'\n'}- Queda Parcial: 1 ponto{'\n'}
          </Text>
          <Text style={styles.subtitulo}>Controle do Combate</Text>
          <Text style={styles.text}>
            - Manter o controle da leitai e forçar o oponente a sair da plataforma: 1 ponto
            {'\n'}- Derrubar o oponente fora da leitai: 2 pontos{'\n'}
          </Text>
          <Text style={styles.subtitulo}>Defesa e Contra-Ataque</Text>
          <Text style={styles.text}>
            {'\n'}- Defesa eficaz que resulta em contra-ataque bem-sucedido pode adicionar pontos, dependendo da clareza e eficácia da técnica.
            {'\n'}
          </Text>
          <Text style={styles.subtitulo}>Descontos de Pontos</Text>
          <Text style={styles.text}>
            - Faltas Técnicas como ataques ilegais resultam em dedução de pontos.
            {'\n'}- Se um lutador sair da leitai sem ser forçado: 1 ponto é deduzido.
            {'\n'}
          </Text>
          <Text style={styles.subtitulo}>Decisão dos Juízes</Text>
          <Text style={styles.text}>
            - Juízes laterais avaliam o combate e atribuem pontos com base nos critérios acima.
            {'\n'}- O lutador com maior pontuação ao final dos rounds é declarado vencedor.
            {'\n'}- Em caso de empate, critérios adicionais são considerados.
            {'\n'}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Leitai</Text>
          <Image source={require('../../img/leitaisanda.png')} style={styles.leitaiImage} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
    paddingTop: 60,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  titulo: {
    textAlign: 'center',
    color: '#33FFFF',
    fontSize: 30,
    marginBottom: 30,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#33FFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 22,
    color: '#33FFFF',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
  },
  subtitulo: {
    color: '#33FFFF',
    fontSize: 18,
  },
  leitaiImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 15,
  },
});

export default SandaInfo;
