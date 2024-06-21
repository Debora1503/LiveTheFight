// ./screens/SandaEventos.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// Configure the calendar locale
LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
  dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt';

const events = {
  '2024-06-01': { marked: true, dotColor: 'red', description: 'Torneio Nacional de Sanda' },
  '2024-06-15': { marked: true, dotColor: 'blue', description: 'Campeonato Regional' },
  '2024-06-20': { marked: true, dotColor: 'green', description: 'Sessão de Treinamento Aberta' },
  '2024-07-20': { marked: true, dotColor: 'green', description: 'Sessão de Treinamento Aberta' },

  // Adicione mais eventos conforme necessário
};

const SandaEventos = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');

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
      <Text style={styles.titulo}>Eventos de Sanda</Text>
      <Calendar
        markedDates={{
          ...events,
          [selectedDate]: { selected: true, marked: !!events[selectedDate], selectedColor: 'orange' }
        }}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        theme={{
          calendarBackground: '#1E1E1E',
          textSectionTitleColor: '#b6c1cd',
          dayTextColor: '#d9e1e8',
          todayTextColor: '#33FFFF',
          selectedDayTextColor: '#ffffff',
          monthTextColor: '#33FFFF',
          indicatorColor: '#33FFFF',
          selectedDayBackgroundColor: '#333333',
          arrowColor: '#33FFFF',
        }}
      />
      {selectedDate && events[selectedDate] && (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>{selectedDate}</Text>
          <Text style={styles.text}>{events[selectedDate].description}</Text>
        </View>
      )}
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
    alignItems: 'center',
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
    textAlign: 'center',
  },
});

export default SandaEventos;
