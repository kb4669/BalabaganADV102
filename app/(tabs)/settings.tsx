import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>Customize your preferences.</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#EAE7FA', 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#6F69AC',
    marginBottom: 10,
  },
  text: { 
    fontSize: 18, 
    color: '#444', 
  },
});
