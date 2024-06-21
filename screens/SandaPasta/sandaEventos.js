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
  '2022-11-10': { marked: true, dotColor: 'blue', description: 'Campeonato Europeu na Grecia'},
  '2022-11-11': { marked: true, dotColor: 'blue', description: 'Campeonato Europeu na Grecia'},
  '2022-11-12': { marked: true, dotColor: 'blue', description: 'Campeonato Europeu na Grecia'},
  '2022-11-13': { marked: true, dotColor: 'blue', description: 'Campeonato Europeu na Grecia'},
  '2022-11-14': { marked: true, dotColor: 'blue', description: 'Campeonato Europeu na Grecia'},
  '2022-11-15': { marked: true, dotColor: 'blue', description: 'Campeonato Europeu na Grecia'},
  '2022-11-16': { marked: true, dotColor: 'blue', description: 'Campeonato Europeu na Grecia'},
  '2022-12-10': { marked: true, dotColor: 'blue', description: 'Campeonato Junior'},
  '2023-04-15': { marked: true, dotColor: 'blue', description: 'Torneio em Viana do Castelo'},
  '2023-04-28': { marked: true, dotColor: 'blue', description: 'Campeonato Internacional Shuai Jiao em França'},
  '2023-04-29': { marked: true, dotColor: 'blue', description: 'Campeonato Internacional Shuai Jiao em França'},
  '2023-04-30': { marked: true, dotColor: 'blue', description: 'Campeonato Internacional Shuai Jiao em França'},
  '2023-06-18': { marked: true, dotColor: 'blue', description: 'Treino da Seleção em Lisboa'},
  '2023-07-15': { marked: true, dotColor: 'blue', description: 'Campeonato Nacional em São João da Madeira'},
  '2023-08-05': { marked: true, dotColor: 'blue', description: 'Treino da Seleção em Valença'},
  '2023-10-06': { marked: true, dotColor: 'blue', description: 'Treino da Seleção em Boticas'},
  '2023-11-04': { marked: true, dotColor: 'blue', description: 'Campeonato Internacional em Valença'},
  '2024-04-20': { marked: true, dotColor: 'blue', description: 'Campeonato Internacional na Maia'},
  '2024-05-03': { marked: true, dotColor: 'blue', description: 'Campeonato Europeu na Suecia'},
  '2024-05-04': { marked: true, dotColor: 'blue', description: 'Campeonato Europeu na Suecia'},
  '2024-05-05': { marked: true, dotColor: 'blue', description: 'Campeonato Europeu na Suecia'},
  '2024-10-18': { marked: true, dotColor: 'pink', description: 'Campeonato Internacional na Espanha'},
  '2024-10-19': { marked: true, dotColor: 'pink', description: 'Campeonato Internacional na Espanha'},
  '2024-10-20': { marked: true, dotColor: 'pink', description: 'Campeonato Internacional na Espanha'},
};

const SandaEventos = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.titulo}>Eventos de Sanda</Text>
      <View style={styles.calendarContainer}>
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
          style={styles.calendar}
        />
      </View>
      {selectedDate && events[selectedDate] && (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>{selectedDate}</Text>
          <Text style={styles.text}>{events[selectedDate].description}</Text>
        </View>
      )}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: 'blue' }]} />
          <Text style={styles.legendText}>Campeonatos Passados</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: 'purple' }]} />
          <Text style={styles.legendText}>Treinos da Seleção</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: 'pink' }]} />
          <Text style={styles.legendText}>Campeonatos Futuros</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
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
  calendarContainer: {
    width: '100%',
    alignItems: 'center',
  },
  calendar: {
    width: 400,
    height: 400,
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
  legendContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  legendText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SandaEventos;
