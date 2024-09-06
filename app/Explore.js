import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function SearchResults() {
  const renderDoctorCard = (name, specialty) => (
    <View style={styles.doctorCard}>
      <Image
        source={require('../assets/images/man-1.png')}
        style={styles.doctorImage}
      />
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{name}</Text>
        <Text style={styles.doctorSpecialty}>{specialty}</Text>
      </View>
      <TouchableOpacity style={styles.scheduleButton}>
        <Text style={styles.scheduleButtonText}>Agendar consulta</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Digite a especialidade"
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Digite sua localização"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.resultsTitle}>Resultado da busca</Text>
      
      {[1, 2, 3, 4, 5].map((index) => (
        renderDoctorCard(`Dra. Ana Lucia`, 'Angiologista')
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    marginLeft: 16,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  doctorSpecialty: {
    color: '#666',
  },
  scheduleButton: {
    backgroundColor: '#003366',
    padding: 10,
    borderRadius: 5,
  },
  scheduleButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
  },
  tabItem: {
    alignItems: 'center',
  },
});