import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NotificationScreen = () => {
 const [showNotification, setShowNotification] = useState(false);

 const handleShowNotification = () => {
    setShowNotification(true);
 };

 const handleHideNotification = () => {
    setShowNotification(false);
 };

 return (
    <View style={styles.container}>
        <Text style={styles.text}>Belum ada notifikasi</Text>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
 },
 text: {
    fontSize: 16,
    color: '#757575',
 },
});

export default NotificationScreen;