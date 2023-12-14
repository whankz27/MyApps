import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';

function ProfileScreen({navigation}) {
  // Dummy user data (replace it with your actual user data)
  const user = {
    name: 'M Ryzha Fadillah',
    email: 'ryzha.fadillah@gmail.com',
    avatar: require('../images/ryzha.png'), // Replace with the path to your user's avatar
  };

  return (
    <View style={styles.container}>
      <View style={{width: '80%', marginTop: 20}}>
      <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('AkunScreen')}>
        <Text style={styles.buttonText}>Akun Saya</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => console.log('Tombol ditekan')}>
          <Text style={styles.buttonText2}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  button2: {
    padding: 10,
    borderRadius: 50,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red'
  },
  buttonText2: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ProfileScreen;
