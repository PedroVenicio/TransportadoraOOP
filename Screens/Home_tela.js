import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (

    <View style={styles.container}>
      <Text style={styles.TextTop1}> Clique nos ícones </Text>
      <Text style={styles.TextTop2}>e realizar a ação!</Text>
      <View style={styles.row}>

        <View style={[styles.square1, styles.red]}>
          <Text style={styles.Text1}>Realize sua demanda!</Text>
          <View style={styles.viewBox}>
            <Image
              style={styles.box}
              source={require('../ft/box.png')}
            />
          </View>
        </View>


        <View style={[styles.square2, styles.white]}>
          <Text style={styles.Text2}>Pesquise suas demandas aqui</Text>
          <View style={styles.viewLupa}>
            <Image
              style={styles.lupa}
              source={require('../ft/lupa.png')}
            />
          </View>
        </View>
      </View>


      <View style={styles.row}>

        <View style={[styles.square3, styles.white]}>
          <Text style={styles.Text3}> Sobre a empresa:
            horários de funcionametno, telfone, email e etc
            Funcionario do mês:</Text>
          <Ionicons name="business" marginTop={45} size={88} color="#607274" />
        </View>


        <View style={[styles.square4, styles.gray]}>
          <Text style={styles.Text4} >Configurações do aplicativo aqui!</Text>
          <AntDesign name="setting" marginTop={100} size={88} color="white" />
        </View>

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
  TextTop1: {
    color: 'black',
    textAlign: "center",
    fontSize: 30,
    marginTop: -10,
    marginLeft: -30,
  },
  TextTop2: {
    color: 'black',
    textAlign: "center",
    fontSize: 30,
    marginLeft: 25,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  square1: {
    width: "45%", // Defina o tamanho padrão dos quadrados
    aspectRatio: 0.65, // Mantém a proporção quadrada
    borderRadius: 15,
    borderWidth: 2,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  square2: {
    width: "45%", // Defina o tamanho padrão dos quadrados
    aspectRatio: 0.65, // Mantém a proporção quadrada
    borderRadius: 15,
    borderWidth: 2,
    marginHorizontal: 5,
    alignItems: "center",

  },
  square3: {
    width: "45%", // Defina o tamanho padrão dos quadrados
    aspectRatio: 0.65, // Mantém a proporção quadrada
    borderRadius: 15,
    borderWidth: 2,
    marginHorizontal: 5,
    alignItems: "center",

  },
  square4: {
    width: "45%", // Defina o tamanho padrão dos quadrados
    aspectRatio: 0.65, // Mantém a proporção quadrada
    borderRadius: 15,
    borderWidth: 2,
    marginHorizontal: 5,
    alignItems: "center",

  },
  Text1: {
    color: 'white',
    fontSize: 26,
    marginTop: 12,
    textAlign: "center",
    marginBottom: 20,
  },
  Text2: {
    color: 'black',
    fontSize: 22,
    marginTop: 32,
    textAlign: "center",
    marginBottom: 30,
  },
  Text3: {
    color: 'black',
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
  Text4: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,

  },
  red: {
    backgroundColor: 'red',
  },
  white: {
    backgroundColor: 'white',
  },
  gray: {
    backgroundColor: '#607274',
  },
  viewBox: {
    width: "80%",
    height: "55%",
  },
  viewLupa: {
    width: "77.5%",
    height: "50%",
  },
  box: {
    width: "100%",
    height: "100%",
  },
  lupa: {
    width: "100%",
    height: "100%",
  },
});
