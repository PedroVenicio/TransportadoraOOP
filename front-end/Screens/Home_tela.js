import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.TextTop}> clique nos icones para ir para a tela desejada</Text>
      <View style={styles.row}>

        <View style={[styles.square, styles.red]}>
          <Text style={styles.Text1}>Demanda!</Text>
          <AntDesign name="inbox" size={120} marginTop={85} color="white" />
        </View>


        <View style={[styles.square, styles.white]}>
          <Text style={styles.Text2}>Pesquise seus coletas e entregas aqui</Text>
          <FontAwesome5 name="search" marginTop={55} size={100} color="#607274" />
        </View>

      </View>


      <View style={styles.row}>

        <View style={[styles.square, styles.white]}>
          <Text style={styles.Text3}> Sobre a empresa:
           horários de funcionametno, telfone, email e etc
            Funcionario do mês:</Text>
          <Ionicons name="business" marginTop={45} size={88} color="#607274" />
        </View>


        <View style={[styles.square, styles.gray]}>
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
  TextTop: {
    color: 'black',
    textAlign: "center",
    fontSize: 36,
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  square: {
    width: "45%", // Defina o tamanho padrão dos quadrados
    aspectRatio: 0.65, // Mantém a proporção quadrada
    borderRadius: 15,
    borderWidth: 2,
    marginHorizontal: 5,
    alignItems: "center",

  },
  Text1: {
    color: 'white',
    fontSize: 30,
    marginTop: 12,

  },
  Text2: {
    color: 'black',
    fontSize: 20,
    marginTop: 12,

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
});
