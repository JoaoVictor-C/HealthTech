import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const AppointmentCard = ({ doctor, specialty, date, isPast, onButtonPress }) => (
  <View style={[styles.card, isPast && styles.pastCard]}>
    <Image source={require('../assets/images/woman-1.png')} style={styles.doctorImage} />
    <View style={styles.cardContent}>
      <Text style={styles.doctorName}>{doctor}</Text>
      <Text style={styles.specialty}>{specialty}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
    <TouchableOpacity style={[styles.button, isPast ? styles.rescheduleButton : styles.cancelButton]} onPress={onButtonPress}>
      <Text style={styles.buttonText}>{isPast ? 'Agendar consulta' : 'Cancelar'}</Text>
    </TouchableOpacity>
  </View>
);

export default function Consultation() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Minhas consultas</Text>
        
        <TouchableOpacity style={styles.scheduleButton}>
          <Text style={styles.scheduleButtonText}>Agendar outra consulta</Text>
        </TouchableOpacity>
        
        <Text style={styles.sectionTitle}>Próximas consultas</Text>
        <AppointmentCard 
          doctor="Dra. Ana Lúcia"
          specialty="Angiologista"
          date="03/03/2023"
          isPast={false}
          onButtonPress={() => console.log('Cancel appointment')}
        />
        
        <Text style={styles.sectionTitle}>Consultas passadas</Text>
        <AppointmentCard 
          doctor="Dra. Ana Lúcia"
          specialty="Angiologista"
          date="01/02/2022"
          isPast={true}
          onButtonPress={() => console.log('Reschedule appointment')}
        />
        <AppointmentCard 
          doctor="Dr. Paulo Matos"
          specialty="Otorrinolaringologista"
          date="09/08/2022"
          isPast={true}
          onButtonPress={() => console.log('Reschedule appointment')}
        />
        <AppointmentCard 
          doctor="Dra. Mariana Luz"
          specialty="Mastologista"
          date="07/10/2022"
          isPast={true}
          onButtonPress={() => console.log('Reschedule appointment')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scheduleButton: {
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  scheduleButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pastCard: {
    backgroundColor: '#e6f2ff',
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  specialty: {
    color: '#666',
    fontSize: 14,
  },
  date: {
    color: '#666',
    fontSize: 12,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#FF6347',
  },
  rescheduleButton: {
    backgroundColor: '#4A90E2',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },
  tabItem: {
    fontSize: 12,
    color: '#666',
  },
  activeTab: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});