import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native'
import Item from './Item'

function Surroundings() {
  generateBoxShadowStyle(-2, 4, '#000000', 0.25, 3, 4, '#000000')

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Autour du Jardin</Text>

      {/* Data à remplacer par les données de l'API */}
      <FlatList
        data={[
          {
            id: 1,
            nom: 'haha',
            description:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequuntur?',
            date: '29.02.2022',
            likes: 10,
          },
          {
            id: 2,
            nom: 'hihi',
            description:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequuntur?',
            date: '10.01.2022',
            likes: 7,
          },
          {
            id: 3,
            nom: 'hehe',
            description:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequuntur?',
            date: '01.03.2022',
            likes: 20,
          },
          {
            id: 4,
            nom: 'hehe',
            description:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequuntur?',
            date: '01.03.2022',
            likes: 5,
          },
        ]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item data={item} />}
      />

      {/* Fonction faire apparaitre la popup au clic à ajouter */}
      <TouchableOpacity
        style={[styles.addButton, styles.boxShadow]}
        onPress={() => {
          alert('click')
        }}
      >
        {/* <Image source={require('../assets/add_deal.png')}/> */}
      </TouchableOpacity>
    </View>
  )
}

// Box Shadow en fonction de l'OS de l'appareil
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
    paddingVertical: 30,
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
