import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Linking,
} from 'react-native'
import Facebook from './Facebook';

// Accepter la fonction childToParent passée en prop
function ShareEvent({ childToParent }) {
  // BOX SHADOW QUI FONCTIONNE SEULEMENT SUR MOBILE ???
  // generateBoxShadowStyle(-2, 4, '#000000', 0.25, 3, 4, '#000000');

  const [touchY, setTouchY] = useState(0);

  return (
    <View style={styles.containerPopup}>
      <Pressable style={styles.outside}
      onTouchEnd={(e) => {
        childToParent()
      }}>

      </Pressable>
      <View style={styles.popup}>
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

        <Pressable style={styles.containShare} onPress={() =>{
          const quote = encodeURI(
            `J'ai trouvé une application sur les jardins du Luxembourg !
            Rejoignez-nous !`);
          const link = encodeURI('https://zoey-app.fr');
          const url = `https://www.facebook.com/sharer/sharer.php?u=${link}&quote=${quote}`;
          Linking.openURL(url); }}>
          <Text style={styles.title}>Donnez-nous votre avis !</Text>
          <Facebook/>
        </Pressable>
      </View>
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
  containerPopup:{
    flex: 1
  },
  outside: {
    width: '100%',
    height: "70%" ,
  },
  popup: {
    width: '100%',
    height: "30%" ,
    paddingHorizontal: 40,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    zIndex: 5,
  },
  containShare: {
    marginBottom: 20,
    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  handle: {
    width: 70,
    height: 5,
    backgroundColor: '#ACACAC',
    alignSelf: 'center',
    borderRadius: 5,
  },
  title: {
    fontFamily: 'Fedora-Regular',
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
})

export default ShareEvent;
