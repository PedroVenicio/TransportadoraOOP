import React, { useState }  from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

export default function PesquisaouDeletaDemanda({ navigation }) {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  async function getDemanda() {
    try{
      const response = await axios.get('http://localhost:3000/demanda');
      if (search !== ''){
        const demandas = response.data.demandas.filter(demanda => {
                  return demanda.codigo == search;
                })
        setData(demandas)
      }
      else{
        setData(response.data.demandas);
      }  
      console.log(response.data)
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteDemanda(codigo) {
    try {
      await axios.delete('http://localhost:3000/demanda', {
        data: {
          codigo: codigo,
        },
      });
      setData(prevData => prevData.filter(demanda => demanda.codigo !== codigo));
    } catch (e) {
      console.log(e);
    }
  }

  return (

    <View style={styles.container}>
      <View style={styles.campoPesquisa}>
        <TextInput
        style={styles.inputContainer}
        placeholder='Pesquise a demanda pelo código:'
        placeholderTextColor="gray"
        id='serach'
        value={search}
        onChangeText={setSearch}
        />
        <View style={styles.square1}>
          <TouchableOpacity onPress={getDemanda}>
          <Image
            style={styles.lupa}
            source={require('../ft/lupa.png')}
          />
          </TouchableOpacity>
        </View>
      </View> 
      <View style={styles.resultadoPesquisa}>
        <ScrollView>
          <Text>
            Suas demandas
          </Text>
          {data.length <= 0 ? (
            <Text>Pesquisando...</Text>
          ) : (
            data.map((demanda) => {
              return(
                <View key={demanda.codigo}>
                  <Text>
                    {demanda.codigo} {demanda.carga} {demanda.valor} {demanda.remetente} {demanda.enderecoRemetente} {demanda.destinatario} {demanda.enderecoDestinatario}{''}
                  </Text>
                  <TouchableOpacity
                  onPress={() => deleteDemanda(demanda.codigo)}
                  >
                    <Feather name="trash-2" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10
  },
  campoPesquisa: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },

  inputContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    margin: 5,
    width: 20,
    height: 45,
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 0.75,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },

  lupa: {
    width: 30,
    height: 30,
  },

  square1: {
    width: 70, 
    height: 40, // Mantém a proporção quadrada
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 1.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  resultadoPesquisa: {
    width: 370, 
    height: 600,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 1.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
});
