import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
  Pressable,
  Button,
} from 'react-native'
import { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import bgImage from '../assets/home.jpg'
import HomePointer from '../assets/HomePointer'
import ScrollArrow from '../assets/ScrollArrow'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Map from './Map'

const Stack = createNativeStackNavigator()
const window = Dimensions.get('window')
const screen = Dimensions.get('screen')
const vw = Dimensions.get('window').width
const vh = Dimensions.get('window').height

function HomeMain({ navigation }) {
  const [dimensions, setDimensions] = useState({ window, screen })

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window, screen }) => {
        setDimensions({ window, screen })
      }
    )
    return () => subscription?.remove()
  })

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <ImageBackground source={bgImage} resizeMode="cover" style={styles.bg}>
          <View style={styles.container}>
            <HomePointer style={styles.homePointer} />
            <Text style={styles.text}>Le jardin du Luxembourg</Text>
            <Pressable
              onPress={() => navigation.navigate('Map', { name: 'Map' })}
              style={styles.Pressable}
            >
              <Text style={styles.PressableText}>Voir la carte</Text>
            </Pressable>
            <ScrollArrow style={styles.ScrollArrow} />
          </View>
        </ImageBackground>
        <View style={styles.presentation}>
          <Text style={styles.presentationH1}>Présentation</Text>
          <Text style={styles.presentationText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quibusdam ad odio quasi, corrupti reprehenderit, quidem debitis,
            quisquam dolore mollitia perspiciatis repellat molestiae possimus!
            Commodi laboriosam et ex molestiae natus.
          </Text>
        </View>
      </ScrollView>
    </>
  )
}

function Home({ navigation }) {
  const [dimensions, setDimensions] = useState({ window, screen })

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window, screen }) => {
        setDimensions({ window, screen })
      }
    )
    return () => subscription?.remove()
  })

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeMain" component={HomeMain} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {},
  bg: {
    flex: 1,
    height: vh,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0F0FC0',
  },
  text: {
    textAlign: 'center',
    zIndex: 1,
    margin: 20,
    fontSize: 40,
    alignItems: 'flex-start',
    fontFamily: 'Fedora-Regular',
    color: 'white',
  },
  homePointer: {},
  Pressable: {
    backgroundColor: '#44991D',
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    minWidth: 100,
  },
  PressableText: {
    textAlign: 'center',
    fontSize: 20,
    alignItems: 'flex-start',
    fontFamily: 'Fedora-Regular',
    color: 'white',
  },
  ScrollArrow: {
    position: 'relative',
    top: 100,
  },
  presentation: {
    height: vh,
    backgroundColor: 'white',
  },
  presentationH1: {
    textAlign: 'center',
    zIndex: 1,
    marginTop: 40,
    fontSize: 40,
    alignItems: 'flex-start',
    fontFamily: 'Fedora-Regular',
    color: 'black',
  },
  presentationText: {
    textAlign: 'justify',
    zIndex: 1,
    margin: 30,
    fontSize: 20,
    alignItems: 'flex-start',
    fontFamily: 'Fedora-Regular',
    color: 'black',
  },
})

export default Home
