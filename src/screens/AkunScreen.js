import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function AkunScreen({navigation}) {
  // Dummy user data (replace it with your actual user data)
  const user = {
    name: 'M Ryzha Fadillah',
    email: 'ryzha.fadillah@gmail.com',
    avatar: require('../images/ryzha.png'), // Replace with the path to your user's avatar
  };

  return (
    <View style={styles.container}>
      <Image source={user.avatar} style={styles.avatar} />
      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.userEmail}>{user.email}</Text>
      <View style={{borderBottomWidth: 1, borderBottomColor: 'grey', width: '80%', marginTop: 20}}></View>
      <View style={{width: '80%', marginTop: 20}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Perangkat Saya</Text>
        </TouchableOpacity>
        <Text style={{marginTop: -10}}></Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ubah Kata Sandi</Text>
        </TouchableOpacity>

        <Text style={{marginTop: 100}}></Text>
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

export default AkunScreen;
