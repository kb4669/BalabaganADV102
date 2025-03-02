import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Services</Text>
      <Text style={styles.text}>Manage your tasks with ease.</Text>
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#E8F8F5', 
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
