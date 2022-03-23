import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Pressable, Modal } from 'react-native'
import Home from './component/Home'
import Quiz from './component/Quiz'
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
import { LinearGradient } from 'expo-linear-gradient'

const Tab = createBottomTabNavigator();

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  let [fontsLoaded] = useFonts({
    'Fedora-Regular': require('./assets/fonts/Federo-Regular.ttf'),
    'Exo-Regular': require('./assets/fonts/Exo-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar />
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
                  tabPress: e => {
                    // Prevent default action
                    e.preventDefault();
                    setModalVisible(!modalVisible);
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
          <View style={styles.modalShare}>
              <Text style={styles.modalText}>Donnez-nous votre avis !</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
        </Modal>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1,
    height: 50,
  },
  modalShare: {
    flex: 1,
    marginTop: "75%",
    backgroundColor: '#FFFFFF',
  },
})
