import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function SettingsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Tombol ditekan')}>
        <Text style={styles.buttonText}>CADANGKAN</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 10}}></Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Tombol ditekan')}>
        <Text style={styles.buttonText}>MULAI BARU</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 10}}></Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Tombol ditekan')}>
        <Text style={styles.buttonText}>KEBIJAKAN PRIVASI</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 10}}></Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Tombol ditekan')}>
        <Text style={styles.buttonText}>BERI RATING!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontWeight: 'center',
    backgroundColor: 'white',
    paddingTop: 150
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

export default SettingsScreen;
