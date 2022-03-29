{/* <one line to give the program's name and a brief idea of what it does.>
Copyright (C) 2022 Marin BOUANCHAUD, Elodie PAN, Lucien BOISSEAU-SABLE

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. */}

import { StyleSheet, View, StatusBar, Modal } from 'react-native'
import Home from './component/Home'
import Quiz from './component/Quiz'
import Info from './component/Info'
import People from './component/People'
import Form from './component/Form'
import Share from './component/Share'
import ShareEvent from './component/ShareEvent'
import Surroundings from './component/Surroundings'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import * as React from 'react'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  let [fontsLoaded] = useFonts({
    'Fedora-Regular': require('./assets/fonts/Federo-Regular.ttf'),
    'Exo-Regular': require('./assets/fonts/Exo-Regular.ttf'),
  })

  const childToParent = () => {
    setModalVisible(false)
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" />
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
              tabBarIcon: () => <Info />,
            }}
          />
          <Tab.Screen
            name="Surroundings"
            component={Surroundings}
            options={{
              tabBarLabel: 'Surroundings',
              tabBarIcon: () => <People />,
            }}
          />
          <Tab.Screen
            name="Formulaire"
            component={Quiz}
            options={{
              tabBarLabel: 'Formulaire',
              tabBarIcon: () => <Form />,
            }}
          />
          <Tab.Screen
            name="Share"
            component={Quiz}
            options={{
              tabBarLabel: 'Partager',
              tabBarIcon: () => <Share />,
            }}
            listeners={{
              tabPress: (e) => {
                // Prevent default action
                e.preventDefault()
                setModalVisible(!modalVisible)
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
        style={styles.modal}
      >
        <ShareEvent childToParent={childToParent} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
