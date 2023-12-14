import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

function RegisterScreen({navigation}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Perform registration logic here (you can connect to an API, etc.)
    // For simplicity, let's just log the entered information for now
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    // After registration logic, you can navigate to the login screen or another screen
    // Example: navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.appTitle}>
        <Text style={{fontWeight: 'normal'}}>Buat akun </Text> 
        Nav<Text style={{color: 'blue'}}>Habit</Text> 
        <Text style={{fontWeight: 'normal'}}> anda</Text>
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder="Nama Pengguna"
        value={fullName}
        onChangeText={text => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Kata Sandi"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Ulangi Kata Sandi"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      </View>

      <View style={styles.inputContainer}>
        <Button title="Register" color="#FFA500" onPress={handleRegister} />
      </View>
      
      <View style={styles.loginTextContainer}>
        <Text>Already have an account? </Text>
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  inputContainer: {
    marginTop: 20,
    width: '80%',
  },
  loginTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginLink: {
    color: 'blue',
  },
  appTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: -15
  },
});

export default RegisterScreen;
