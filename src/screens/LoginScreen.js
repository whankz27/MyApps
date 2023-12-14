import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  StatusBar,
  TextInput,
  StyleSheet,
} from 'react-native';

function LoginScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <Image
        source={require('../images/Logo-NavHabit.png')}
        style={styles.logo}
      />
      
      <Text style={styles.appTitle}>
        <Text style={{fontWeight: 'normal'}}>Login ke akun </Text> 
        Nav<Text style={{color: 'blue'}}>Habit</Text> 
        <Text style={{fontWeight: 'normal'}}> anda</Text>
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Masukkan Email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Masukkan Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Button color="#FFA500" title="LOGIN" onPress={() => navigation.navigate('Main')} />
      </View>
      

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Belum punya akun? Buat dulu yuk!</Text>
      </TouchableOpacity>
      
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width: 100,
    height: 100,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: -8
  },
  inputContainer: {
    marginTop: 20,
    width: '80%',
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
  registerText: {
    paddingTop: 80,
    marginTop: 20,
    color: '#FFA500',
    fontSize: 16,
  },
});

export default LoginScreen;
