import {View, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function Home({navigation}) {

const [user, setUser] = useState(0);

function usermais(){
  setUser(prev => prev + 1);

}
function usermenos(){
  setUser(prev => prev - 1);
}

  return (
    <View >
      <View>
        <Text> Votação específica do usuário </Text>
        <Text>{user}</Text>
        <TouchableOpacity onPress={usermais}>
        <Text>mais</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={usermenos}>
        <Text>menos</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}