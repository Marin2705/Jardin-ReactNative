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

import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  Modal,
  SafeAreaView,
} from 'react-native'
import Item from './Item'
import NewEvent from './NewEvent'

function Surroundings() {
  generateBoxShadowStyle(-2, 4, '#000000', 0.25, 3, 4, '#000000')

  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState('')

  const CloseModal = () => {
    setModalVisible(false)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const response = await fetch(
        'https://perso-etudiant.u-pem.fr/~elodie.pan/api/Surroundings.php?action=getEvents'
      )
      const json = await response.json()
      setData(json)
      console.log(json)
      return json
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Autour du Jardin</Text>

        {/* Data à remplacer par les données de l'API */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item data={item} />}
        />
        {/* Faire apparaitre la popup au clic */}
        <Pressable
          style={[styles.addButton, styles.boxShadow]}
          onPress={() => {
            setModalVisible(true)
          }}
        >
          <Image source={require('../assets/add.png')} />
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        {/* Passer une prop au component enfant et recevoir l'évènement créé par l'enfant */}
        <NewEvent CloseModal={CloseModal} />
      </Modal>
    </SafeAreaView>
  )
}

// Box Shadow en fonction de l'OS de l'appareil (SEULEMENT SUR MOBILE ??)
const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid
) => {
  if (Platform.OS === 'ios') {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    }
  } else if (Platform.OS === 'android') {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    }
  }
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: 'Fedora-Regular',
    fontSize: 36,
    textAlign: 'center',
  },
  addButton: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: '#FF4141',
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
})

export default Surroundings
