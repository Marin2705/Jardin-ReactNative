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

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native'
import { useState, useEffect, useRef } from 'react'
import MapContainer from './MapContainer'
import bgImage from '../assets/home.jpg'
import HomePointer from '../assets/HomePointer'
import ScrollArrow from '../assets/ScrollArrow'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Map from './Map'
import presentation from '../assets/presentation.jpg'
import activity from '../assets/activity.jpg'
import chairs from '../assets/chairs.jpg'

const Stack = createNativeStackNavigator()
const window = Dimensions.get('window')
const screen = Dimensions.get('screen')
const vw = Dimensions.get('window').width
const vh = Dimensions.get('window').height

function HomeMain({ navigation }) {
  const [dimensions, setDimensions] = useState({ window, screen })
  const scrollRef = useRef()

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
      <ScrollView style={styles.scrollView} ref={scrollRef}>
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
            <ScrollArrow
              style={styles.ScrollArrow}
              onPress={() => {
                scrollRef.current?.scrollTo({
                  y: vh,
                  animated: true,
                })
              }}
            />
          </View>
        </ImageBackground>
        <View style={styles.presentation}>
          <Text style={styles.presentationH1}>Présentation</Text>
          <Text style={styles.presentationText}>
            Situé dans le 6e arrondissement, en bordure de
            Saint-Germain-des-Prés et du quartier Latin, le jardin du Luxembourg
            est un des principaux et des plus beaux îlots de verdure du centre
            de Paris.
          </Text>
          <Text style={styles.presentationText}>
            Il fut construit pour l'hôtel du Luxembourg, aujourd'hui Palais du
            Luxembourg. Le jardin est aujourd'hui ouvert au public, mais le
            palais abrite le Sénat, qui assure donc sa gestion et son entretien.
          </Text>
          <Text style={styles.presentationText}>
            Son organisation s’inspire du jardin florentin Boboli et il a été
            créé à l’initiative de la reine Marie de Médicis en 1612. D’une
            superficie de 25 hectares, le jardin se divise en une partie à la
            française et l’autre à l'anglaise. Entre les deux s'étend une forêt
            géométrique et un grand bassin.
          </Text>
          <Image style={styles.image} source={presentation} />
          <Text style={styles.presentationH2}>Activités</Text>
          <Text style={styles.presentationText}>
            Le jardin comporte des terrains de tennis, de basket-ball, de jeu de
            Paume, des tables de jeu d'échecs et de bridge.
          </Text>
          <Image style={styles.image} source={activity} />
          <Text style={styles.presentationH2}>Dans la culture</Text>
          <Text style={styles.presentationText}>
            Souvent aperçu dans des films et cité dans des romans, le jardin est
            par exemple récemment apparu au cinéma dans Illusions Perdues de
            Xavier Giannoli, une adaptation de Balzac.
          </Text>
          <Text style={styles.presentationH2}>Entretien</Text>
          <Text style={styles.presentationText}>
            Fort d'une équipe de 60 jardiniers sélectionnés sur concours, le
            jardin fait partie du patrimoine et de l'image de la France.
            N'appartenant pas à la municipalité, son entretien est financé par
            le Sénat, presque exclusivement par des dotations de l'État, à
            hauteur de plus de 12 millions d'euros par an.
          </Text>
          <Text style={styles.presentationText}>
            Contrairement aux jardins gérés par la Mairie de Paris, qui
            s'appuyent sur des pépinières à l'extérieur de la ville, les fleurs
            du jardin sont cultivées sur place, dans des serres situées à
            l'angle sud-est du jardin.
          </Text>
          <View style={styles.map}>
            <MapContainer
              lat={48.8450641}
              long={2.3379879}
              delta={0.001}
              type="satellite"
            />
          </View>
          <Text style={styles.presentationH2}>Anecdotes</Text>
          <Text style={styles.presentationText}>
            Connu pour son parc de chaises vertes à disposition du public dans
            tous le jardin, très prisées des parisiens, le droit de s'assoir
            n'est en réalité gratuit que depuis 1974. Il fallait auparavant
            s'affranchir d'un droit de 20 centimes de francs, collecté par des
            "chaisiers" - loueur de chaises -, un métier aujourd'hui disparu.
          </Text>
          <Image style={styles.image} source={chairs} />
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
    top: '7%',
  },
  presentation: {
    minHeight: vh,
    backgroundColor: 'white',
    paddingBottom: 40,
    alignItems: 'center',
  },
  map: {
    marginTop: 30,
    height: 200,
    width: '80%',
    backgroundColor: '#DCFFCB',
  },
  image: {
    margin: 30,
    marginBottom: 0,
    width: 0.8 * vw,
    height: (3 / 4) * 0.8 * vw,
  },
  presentationH1: {
    textAlign: 'center',
    zIndex: 1,
    marginTop: 60,
    fontSize: 40,
    alignItems: 'flex-start',
    fontFamily: 'Fedora-Regular',
    color: 'black',
  },
  presentationH2: {
    textAlign: 'center',
    zIndex: 1,
    marginTop: 40,
    fontSize: 30,
    alignItems: 'flex-start',
    fontFamily: 'Fedora-Regular',
    color: 'black',
  },
  presentationText: {
    textAlign: 'justify',
    zIndex: 1,
    margin: 30,
    marginBottom: 0,
    fontSize: 20,
    alignItems: 'flex-start',
    fontFamily: 'Fedora-Regular',
    color: 'black',
  },
})

export default Home
