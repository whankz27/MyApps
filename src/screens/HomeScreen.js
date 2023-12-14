import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function HomeScreen({navigation}) {
  const handleActionClick = () => {
    // Add the logic for the action you want to perform here
    console.log('Click to Action performed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dayCount}>0</Text>
      <Text style={styles.dayText}>Hari</Text>
      <Text style={styles.streakText}>Streak Sekarang: 0h 00j 00m 00d</Text>
      <Text style={styles.streakText}>Streak Terlama: 0h 00j 00m 00d</Text>
      <TouchableOpacity style={styles.actionButton} onPress={handleActionClick}>
        <Text style={styles.actionButtonText}>Berhasrat!</Text>
      </TouchableOpacity>
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
  dayCount: {
    fontSize: 72,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dayText: {
    fontSize: 32,
    marginBottom: 10,
  },
  streakText: {
    fontSize: 16,
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
