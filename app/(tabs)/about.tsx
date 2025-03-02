import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Task Manager</Text>
      <Text style={styles.text}>
        Task Manager is a productivity app designed to help you organize and manage your daily tasks efficiently.
      </Text>
      <Text style={styles.text}>Version: 1.0.0</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#FAF3F3', 
    padding: 20,
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#333333',
  },
  text: { 
    fontSize: 16, 
    color: '#555555', 
    textAlign: 'center',
    marginBottom: 5,
  },
});``