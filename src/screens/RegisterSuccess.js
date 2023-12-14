import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function RegisterSuccess({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Successful!</Text>
      <Text style={styles.message}>
        Thank you for registering with us. You can now log in to your account.
      </Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default RegisterSuccess;
