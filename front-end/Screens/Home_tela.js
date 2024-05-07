import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.squareOne, styles.red]}></View>
        <View style={[styles.squareOne, styles.white]}></View>
      </View>
      <View style={styles.row}>
        <View style={[styles.squareOne, styles.white]}></View>
        <View style={[styles.squareOne, styles.gray]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  squareOne: {
    width: "40%", // Defina o tamanho padrão dos quadrados
    aspectRatio: 0.7, // Mantém a proporção quadrada
    borderRadius: 15,
    borderWidth: 2,
    marginHorizontal: 5,
  },
  red: {
    backgroundColor: 'red',
  },
  white: {
    backgroundColor: 'white',
  },
  gray: {
    backgroundColor: 'gray',
  },
});
