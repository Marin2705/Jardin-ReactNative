import React, { useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native'
import MapContainer from './MapContainer'

// Accepter la fonction childToParent passée en prop
function NewEvent({ childToParent }) {
  // BOX SHADOW QUI FONCTIONNE SEULEMENT SUR MOBILE ???
  // generateBoxShadowStyle(-2, 4, '#000000', 0.25, 3, 4, '#000000');

  const [touchY, setTouchY] = useState(0)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState([2.337179, 48.846836])
  const apitoken =
    'pk.eyJ1IjoiZWxvcG4iLCJhIjoiY2t3dnRsNm5zMjNwcTJ3cDNjdjB1cWNldCJ9.tH301UpWotwarxl8l7w9HA'

  let timeout
  const getCoord = (input) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      if (input) {
        fetch(
          'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
            input +
            '.json?access_token=' +
            apitoken
        ).then((response) => {
          response.json().then((value) => {
            setAddress(value.features[0].center)
          })
        })
      }
    }, 600)
  }

  const onSubmit = () => {
    let data = { name: name, description: description, address: address }

    fetch(
      'http://172.24.141.205/reactnative/Jardin-ReactNative/assets/api/Surroundings.php?action=addEvent',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      }
    ).then(() => {
      childToParent()
    })
  }

  return (
    <View style={[styles.popup, styles.boxShadow]}>
      {/* Drag vers le bas -> déclencher l'évènement childToParent qui sera détectée par le component parent */}
      <Pressable
        style={{ paddingVertical: 15 }}
        onTouchStart={(e) => setTouchY(e.nativeEvent.pageY)}
        onTouchEnd={(e) => {
          if (e.nativeEvent.pageY - touchY > 20) {
            childToParent()
          }
        }}
      >
        <View style={styles.handle}></View>
      </Pressable>

      <KeyboardAvoidingView behavior="height">
        <ScrollView style={styles.form}>
          <View>
            <Text>Nom</Text>
            <TextInput
              style={styles.input}
              placeholder="Nom du lieu"
              onChangeText={(insertedName) => setName(insertedName)}
              defaultValue={name}
            />
          </View>
          <View>
            <Text>Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Description du lieu"
              onChangeText={(insertedDesc) => setDescription(insertedDesc)}
              defaultValue={description}
            />
          </View>
          <View>
            <Text>Adresse</Text>
            <TextInput
              style={styles.input}
              placeholder="Adresse du lieu"
              onChangeText={(insertedAddress) => getCoord(insertedAddress)}
              defaultValue={address}
            />
          </View>
          <View style={styles.map}>
            {/* Localisation correspondant à l'adresse saisie */}
            <MapContainer
              lat={address[1]}
              long={address[0]}
              name={name}
              description={description}
            />
          </View>

          <Pressable style={styles.button} onPress={onSubmit}>
            <Text style={styles.textButton}>Partager</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

// Box Shadow en fonction de l'OS de l'appareil (SEULEMENT SUR MOBILE ??)
// const generateBoxShadowStyle = (
//     xOffset,
//     yOffset,
//     shadowColorIos,
//     shadowOpacity,
//     shadowRadius,
//     elevation,
//     shadowColorAndroid,
//   ) => {
//     if (Platform.OS === 'ios') {
//       styles.boxShadow = {
//         shadowColor: shadowColorIos,
//         shadowOffset: {width: xOffset, height: yOffset},
//         shadowOpacity,
//         shadowRadius,
//       };
//     } else if (Platform.OS === 'android') {
//       styles.boxShadow = {
//         elevation,
//         shadowColor: shadowColorAndroid,
//       };
//     }
// };

const styles = StyleSheet.create({
  popup: {
    width: '100%',
    paddingHorizontal: 40,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    zIndex: 5,
  },
  form: {
    marginTop: 20,
  },
  handle: {
    width: 70,
    height: 5,
    backgroundColor: '#ACACAC',
    alignSelf: 'center',
    borderRadius: 5,
  },
  input: {
    marginBottom: 50,
    padding: 5,
    borderBottomWidth: 1,
  },
  map: {
    height: 200,
    backgroundColor: '#DCFFCB',
  },
  button: {
    width: 180,
    height: 40,
    marginVertical: 40,
    alignSelf: 'center',
    backgroundColor: '#E22A2A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textButton: {
    fontFamily: 'Fedora-Regular',
    fontSize: 20,
    color: '#FFFFFF',
  },
})

export default NewEvent
