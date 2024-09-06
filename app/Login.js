import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CheckBox } from 'react-native-elements';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedPlan, setSelectedPlan] = useState('');

  const renderLoginForm = () => (
    <>
      <Text style={styles.title}>Faça login em sua conta</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu endereço de email"
          keyboardType="email-address"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          secureTextEntry
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Ainda não tem conta? </Text>
        <TouchableOpacity onPress={() => setCurrentPage('registration1')}>
          <Text style={styles.signupLink}>Faça seu cadastro!</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  const renderRegistrationForm1 = () => (
    <>
      <Text style={styles.title}>Insira alguns dados básicos:</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu endereço de email"
          keyboardType="email-address"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Crie uma senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          secureTextEntry
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Repita a senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          secureTextEntry
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => setCurrentPage('registration2')}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => setCurrentPage('login')}>
        <Text style={styles.backToLogin}>Voltar para o login</Text>
      </TouchableOpacity>
    </>
  );

  const renderRegistrationForm2 = () => (
    <>
      <Text style={styles.title}>Agora, mais alguns dados sobre você:</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CEP</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu CEP"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu endereço"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu número"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Complemento</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu complemento"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(00) 00000-0000"
          keyboardType="phone-pad"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => setCurrentPage('registration1')}>
          <Text style={styles.secondaryButtonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCurrentPage('healthPlan')}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  const renderHealthPlanSelection = () => {
    const plans = ['Sulamerica', 'Unimed', 'Bradesco', 'Amil', 'Biosaúde', 'Biovida', 'Outros', 'Não tenho plano'];

    return (
      <>
        <Text style={styles.title}>Para finalizar, qual seu plano de saúde?</Text>
        
        <View style={styles.checkboxContainer}>
          <Text style={styles.subtitle}>Selecione os planos:</Text>
          {plans.map((plan) => (
            <CheckBox
              key={plan}
              title={plan}
              checked={selectedPlan === plan}
              onPress={() => setSelectedPlan(plan)}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
              checkedColor="#003366"
            />
          ))}
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => setCurrentPage('registration2')}>
            <Text style={styles.secondaryButtonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setCurrentPage('login')}>
            <Text style={styles.buttonText}>Cadastrar!</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          source={require('../assets/images/Logo-WithImage.png')}
          style={styles.logo}
        />
        {currentPage === 'login' && renderLoginForm()}
        {currentPage === 'registration1' && renderRegistrationForm1()}
        {currentPage === 'registration2' && renderRegistrationForm2()}
        {currentPage === 'healthPlan' && renderHealthPlanSelection()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    color: '#003366',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
  },
  signupLink: {
    fontSize: 16,
    color: '#003366',
    fontWeight: 'bold',
  },
  backToLogin: {
    marginTop: 15,
    color: '#003366',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  secondaryButton: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#003366',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 15,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
    alignItems: 'left',
    width: '100%',
  },
  checkboxText: {
    fontWeight: 'normal',
  },
});
