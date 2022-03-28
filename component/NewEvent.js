import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native'
import MapContainer from './MapContainer'

// Accepter la fonction CloseModal passée en prop
function NewEvent({ CloseModal }) {
  generateBoxShadowStyle(-2, 4, '#000000', 0.25, 3, 4, '#000000')

  const [touchY, setTouchY] = useState(0)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [coord, setCoord] = useState([2.337179, 48.846836])
  const [ListAddresses, setList] = useState([])
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
            // Insérer dans un tableau toutes les adresses correspondantes
            let tab = []

            value.features.forEach((address) => {
              tab.push({
                name: address.place_name,
                coord: address.center,
              })
            })

            // Set le state qui sera lu par la Flatlist
            setList(tab)
          })
        })
      } else {
        setList([])
      }
    }, 600)
  }

  const onSubmit = () => {
    let data = {
      name: name,
      description: description,
      lat: coord[1],
      long: coord[0],
    }

    fetch(
      'https://perso-etudiant.u-pem.fr/~elodie.pan/api/Surroundings.php?action=addEvent',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      }
    ).then(() => {
      CloseModal()
    })
  }

  return (
    <View style={[styles.popup, styles.boxShadow]}>
      {/* Drag vers le bas -> déclencher l'évènement CloseModal qui sera détectée par le component parent */}
      <Pressable
        style={{ paddingVertical: 15 }}
        onTouchStart={(e) => setTouchY(e.nativeEvent.pageY)}
        onTouchEnd={(e) => {
          if (e.nativeEvent.pageY - touchY > 20) {
            CloseModal()
          }
        }}
      >
        <View style={styles.handle}></View>
      </Pressable>

      <KeyboardAvoidingView style={styles.form} behavior="height">
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

          <FlatList
            style={[
              styles.list,
              ListAddresses.length != 0
                ? { borderBottomWidth: 1 }
                : { borderBottomWidth: 0 },
            ]}
            data={ListAddresses}
            keyExtractor={(item, i) => i}
            renderItem={({ item }) => (
              // Au clic sur une adresse, la map s'actualise, la valeur de l'input et la liste des adresses est vide pour que la Flatlist soit vide et invisible
              <Pressable
                style={[
                  styles.listItem,
                  ListAddresses.length != 0
                    ? { borderWidth: 1 }
                    : { borderWidth: 0 },
                ]}
                onPress={() => {
                  setCoord(item.coord)
                  setList([])
                  setAddress(item.name)
                }}
              >
                <Text>{item.name}</Text>
              </Pressable>
            )}
          />
        </View>

        <View style={styles.map}>
          {/* Localisation correspondant à l'adresse saisie */}
          <MapContainer
            lat={coord[1]}
            long={coord[0]}
            name={name}
            description={description}
          />
        </View>

        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.textButton}>Partager</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
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
  list: {
    width: '100%',
    maxHeight: 280,
    backgroundColor: '#FFFFFF',
    borderColor: '#C4C4C4',
    position: 'absolute',
    top: 55,
    margin: 'auto',
    zIndex: 5,
  },
  listItem: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderColor: '#C4C4C4',
    borderBottomColor: '#C4C4C4',
  },
  map: {
    zIndex: 0,
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
