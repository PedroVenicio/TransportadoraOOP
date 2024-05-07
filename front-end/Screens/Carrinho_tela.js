
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';

export default function Carro({navigation}) {
  return (
    <ScrollView style={styles.scrol}>
      <View style = {styles.container} >
      
        <Text style = {styles.txt1}> Transformamos seus  </Text>
        <Text style = {styles.txt1}> ㅤㅤsonhos em destinos! </Text>
        <View >
          <Image 
            style={styles.carro1}
            source={{ uri: 'https://palmas.renaultalliance.com.br/images/renault/kwid/novo-kwid-2022/kwid-outsider.png' }}
          />
          <Image 
            style={styles.carro2}
            source={{ uri: 'https://cdn.autopapo.com.br/carro/renault/duster-20-16v-dynamique-4x4-flex-2017/destaque-v1.png' }}
          />
          <Image 
            style={styles.carro3}
            source={{ uri: 'https://cdn.autopapo.com.br/carro/renault/sandero-expression-16-8v-flex-2017/destaque-v1.png' }}
          />
          <Image 
            style={styles.carro4}
            source={{ uri: 'https://mkt.carrera.com.br/public/Carrera_RN/oroch__oroch__87d.webp?w=400' }}
          />
          <Image 
            style={styles.carro5}
            source={{ uri: 'https://www.renault.pt/agg/vn/unique/grade_carrousel_main_1_small/grade_carrousel_1.png?uri=https%3A%2F%2Fpt.co.rplug.renault.com%2Fproduct%2Fmodel%2FCP1%2Fcaptur%2Fc%2FA-ENS_0MDL2PSL1SERIELIM2_-TENNP-HJB' }}
          />
        </View>
        <View>
            <Text style = {styles.txt2}> Os melhores carros estão aqui! </Text>
        </View>
      
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({ 
  container:{
    marginTop:"10%",
    justifyContent:'center',
    alignItems:'center',
  },

  img:{
    justifyContent:'center',
    alignItems: 'flex-start',
  },

  imagem: {
    height: 160,
    width: 160,
    
  },
  txt1:{
    fontSize: 20,
    color:"black",
    fontStyle:"italic"
  },
  carro1:{
    height: 160,
    width: 240,
    position:"absolute",
  },
  carro2:{
    height: 160,
    width: 240,
    position:"absolute",
    top:90,
    right:7,
  },
  carro3:{
    height: 160,
    width: 240,
    position:"absolute",
    top:180,
  },
  carro4:{
    height: 160,
    width: 240,
    position:"absolute",
    top:380,
  },
  carro5:{
    height: 220,
    width: 320,
    position:"absolute",
    top:250,
    right:-10,
  },
  txt2:{
    center: "center",
    fontSize: 20,
    color:"black",
    top:550,
    fontStyle:"italic"
  },
  scrol:{
    marginHorizontal:0,
  }
});