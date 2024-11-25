
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Cadastro from "./screens/Cadastro";
import Login from "./screens/Login";
import Principal from './screens/Principal';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App(){

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
    <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false}}/>
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
    <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}