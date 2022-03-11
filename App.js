import { StyleSheet, View } from 'react-native'
import Home from './component/Home'
import Map from './component/Map'
import Info from './component/Info'
import People from './component/People'
import Form from './component/Form'
import Share from './component/Share'
import Surroundings from './component/Surroundings'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import * as React from 'react'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    'Fedora-Regular': require('./assets/fonts/Federo-Regular.ttf'),
    'Exo-Regular': require('./assets/fonts/Exo-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Info/>
            ) }}
          />
          <Tab.Screen
          name="Surroundings"
          component={Surroundings}
          options={{
            tabBarLabel: 'Surroundings',
            tabBarIcon: () => (
              <People/>
            ) }}
          />
          <Tab.Screen
          name="Formulaire"
          component={Map}
          options={{
            tabBarLabel: 'Formulaire',
            tabBarIcon: () => (
              <Form/>
            ) }}
          />
          <Tab.Screen
          name="Partager"
          component={Share}
          options={{
            tabBarLabel: 'Partager',
            tabBarIcon: () => (
              <Share/>
            ) }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});