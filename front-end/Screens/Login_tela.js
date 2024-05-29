import React, { useState } from 'react';
import { TextInput, StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import Cadastro from './Cadastrar_tela';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function Submit() {
    if (username === 'dudu' && password === '1234') {
      navigation.navigate('Home');
      setUsername('');
      setPassword('');
    } else {
      alert('Dados inválidos');
    }
  }
  const Stack = createStackNavigator();
  <Stack.Navigator>
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name="Cadastro" component={Cadastro} />
  </Stack.Navigator>
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          style={styles.imagem}
          source={require('../ft/MAVERIK.png')}
        />
      </View>
      <Text style={styles.txt}>Faça seu login na</Text>
      <Text style={styles.txt1}>transportadora Maverik!</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Feather name="user" size={24} color="red" />
          <TextInput
            style={styles.input}
            placeholder="Username: "
            placeholderTextColor="gray"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="red" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Senha: "
            placeholderTextColor="gray"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.botom} onPress={Submit}>
          <Text style={styles.txtbotom}>login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.cadstreaqdiv} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.cadastreaq} >Sing up!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  imagem: {
    height: 160,
    width: 160,
    marginBottom: 10,
  },
  txt: {
    fontSize: 30,
    color: 'black',
    fontStyle: 'italic',
  },
  txt1: {
    fontSize: 30,
    color: 'black',
    fontStyle: 'italic',
    marginBottom: 35,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 5,
    width: '70%',
    height: 45,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  botom: {
    width: 160,
    height: 43,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: 'red',
  },
  txtbotom: {
    fontSize: 20,
    color: 'white',
  },
  cadstreaqdiv: {
    alignItems: "center",
  },
  cadastreaq: {
    marginTop: 10,
    fontSize: 15,
    color: 'blue',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
});
