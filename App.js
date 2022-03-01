import { StyleSheet, Text, View, Image } from 'react-native'
import Nav from './component/header'
import Home from './component/Home'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

export default function App() {
  let [fontsLoaded] = useFonts({
    'Fedora-Regular': require('./assets/fonts/Federo-Regular.ttf'),
    'Exo-Regular':  require('./assets/fonts/Exo-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Home />
      <Nav />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
