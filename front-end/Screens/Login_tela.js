import React, { useState } from 'react';
import { TextInput, StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

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
        <Feather name="user" size={24} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Username: "
            placeholderTextColor="gray"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="gray" style={styles.icon} />
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
      <Text style={styles.errosenha}>esqueceu a senha?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
    borderWidth: 2,
    borderRadius: 15,
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
    width: 100,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  txtbotom: {
    fontSize: 20,
    color: 'gray',
  },
  errosenha: {
    marginTop: 10,
    fontSize: 15,
    color: 'red',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
});
