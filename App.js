import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, } from 'react-native';


import Login from './Screens/Login_tela';
import Home from './Screens/Home_tela';
import Carro from './Screens/Carrinho_tela';
import Pagamentos from './Screens/Pagamento_tela';
import Cadastro from './Screens/Cadastrar_tela';

import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function HomeTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarActiveBackgroundColor: "transparent",
        tabBarInactiveBackgroundColor: "transparent",
        tabBarInactiveTintColor: "grey",
        headerStyle: { backgroundColor: "red" },
        headerTintColor: "white",
        headerTitleAlign: "left",
      }}>

      <Tab.Screen name='Home' component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (<Fontisto name="home" size={30} color={color} />)
      }} />

      <Tab.Screen name='Veículos' component={Carro} options={{
        tabBarLabel: 'Veículos',
        tabBarIcon: ({ color }) => (<FontAwesome name="bus" size={28} color={color} />)
      }} />

      <Tab.Screen name='Pagamento' component={Pagamentos} options={{
        tabBarLabel: 'Pagamento',
        tabBarIcon: ({ color }) => (<MaterialIcons name="attach-money" size={30} color={color} />)
      }} />
    </Tab.Navigator>
  )
}

export default function Stack() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options ={{ headerShown:false }} name='Login' component={Login} />
        <Stack.Screen options ={{ headerShown:false }} name='Cadastro' component={Cadastro} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeTabs} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
