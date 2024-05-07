import { TextInput, StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import { useState } from 'react';


export default function Login({navigation}) {

const [username,setUsername] =useState('');
const [password,setPassword] =useState('');

function Submit(){
  if (username === 'dudu' && password === '1234'){
  navigation.navigate('Home')

  setUsername('');
  setPassword('');
} else{
  alert('Dados inválidos')
}}

  return (
    <View style = {styles.container} >
        <Text style = {styles.txt1}> Faça seu login em Ara Vans! </Text>
        <View style={styles.img}>
            <Image 
            style={styles.imagem}
            source={require('../ft/logo.png')} 
            />      
        </View>
        <TextInput style = {styles.input} 
            placeholder = "Usarname: "
            placeholderTextColor={"white"}
            value={username}
            onChangeText={setUsername}/>
        <TextInput style = {styles.input} 
            placeholder = "Senha:       "
            placeholderTextColor={"white"} 
            value={password}
            onChangeText={setPassword}/>
        <View style={styles.botom}>
            <TouchableOpacity style={styles.container} onPress={Submit}>
            <Text style = {styles.txtbotom} > login </Text>
            </TouchableOpacity>
        </View>
        <Text style = {styles.txt}> esqueceu a senha? </Text>
    </View>
  );
}


const styles = StyleSheet.create({ 
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
    paddingBottom: -5,
  },

  input: {
    backgroundColor:'red',
    paddingHorizontal:'36%',
    display:'flex',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    paddingBottom: 5,
    paddingTop:5,
    marginTop:5,
    marginBottom:5,

  },
  botom: {
    width: "50%",
    height: "7%",
    marginTop:10,
    marginBottom:10,

   
  },
  txtbotom: {
    fontSize: 20,
    color:"black",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
  },
   img:{
    justifyContent:'center',
    alignItems: 'flex-start',
  },

  imagem: {
    height: 160,
    width: 160,
    
  },
    txt:{
    fontSize: 15,
    color:"red",
  },
  txt1:{
    fontSize: 30,
    color:"Black",
   }
});