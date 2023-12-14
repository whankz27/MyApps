import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function StatisticScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>1 bulan yang lalu</Text>
      
      <View style={styles.valueWrapper}>
        <View style={styles.stats}>
          <Text style={styles.value}>30,00</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.value}>0</Text>
        </View>
      </View>
      
      <Text style={{paddingTop: 10}}></Text>
      <View style={styles.valueWrapper}>
        <View style={styles.stats}>
          <Text style={styles.value}>Hari / Relapse</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.value}>Total Relapse</Text>
        </View>
      </View>
      
      <Text style={{paddingTop: 10}}></Text>
      <View style={styles.valueWrapper}>
        <View style={styles.stats}>
          <Text style={styles.value}>30 Hari</Text>
          <Text style={styles.value}>0 jam</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.value}>Total Relapse</Text>
        </View>
      </View>
      
      <Text style={{paddingTop: 10}}></Text>
      <View style={styles.valueWrapper}>
        <View style={styles.stats}>
          <Text style={styles.value}>Streak Terlama</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.value}>Streak Terpendek</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
 },
 stats: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1
 },
 label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
 },
 value: {
    fontSize: 16,
    marginBottom: 5,
 },
 valueWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
 },
});


export default StatisticScreen;
