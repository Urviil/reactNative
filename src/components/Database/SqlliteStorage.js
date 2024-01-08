import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';import HomeScreen from './AddNewUser';
import AddNewUser from './AddNewUser';
import MainScreen from './MainScreen';
import UpdateUser from './UpdateUser';

const Stack = createNativeStackNavigator();
const SqlliteStorage = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName= "MainScreen">
    <Stack.Screen name="AddNewUser" component={AddNewUser} options={{headerShown:false}} />
    <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown:false}} />
    <Stack.Screen name="UpdateUser" component={UpdateUser} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default SqlliteStorage

const styles = StyleSheet.create({})