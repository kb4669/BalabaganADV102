import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'];

export default function ColorChanger() {
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[randomIndex]);
  };

  return (
    <View style={[styles.container, { backgroundColor: currentColor.toLowerCase() }]}>
      <Text style={styles.text}>Current Color: {currentColor}</Text>
      <TouchableOpacity style={styles.button} onPress={changeColor}>
        <Text style={styles.buttonText}>Change Color</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
