import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Meu perfil</Text>
        
        <Image
          source={require('../assets/images/woman-1.png')}
          style={styles.profileImage}
        />
        
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Informações pessoais</Text>
          <Text style={styles.name}>Joana Magalhães Souza</Text>
          <Text style={styles.details}>28/05/1990</Text>
          <Text style={styles.details}>São Paulo-SP</Text>
        </View>
        
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Histórico médico</Text>
          <View style={styles.medicalList}>
            <Text style={styles.medicalItem}>• Bronquite</Text>
            <Text style={styles.medicalItem}>• Sinusite</Text>
          </View>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  infoSection: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  medicalList: {
    marginLeft: 10,
  },
  medicalItem: {
    fontSize: 14,
    marginBottom: 5,
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
