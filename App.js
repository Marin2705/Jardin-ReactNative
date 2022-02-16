import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'

import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

console.log('Console hello world !')

export default function App() {
  let [fontsLoaded] = useFonts({
    'Fedora-Regular': require('./assets/fonts/Federo-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.home}>Jardins du Luxembourg</Text>
      <Image
        style={styles.homeImage}
        source={require('./assets/accueil.jpg')}
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  home: {
    margin: 20,
    fontSize: 40,
    alignItems: 'flex-start',
    width: '100%',
    fontFamily: 'Fedora-Regular',
  },
  homeImage: {
    height: '30%',
    width: '100%',
  },
})
