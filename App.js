import { StyleSheet, Text, View, Image } from 'react-native'
import Nav from './component/Header'
import Home from './component/Home'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { backgroundColor, borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

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
      <Home style={styles.home}/>
      <View style={styles.nav}>
        <Nav/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  home: {
    flex: 1
  },
  nav: {
    position: 'absolute',
    backgroundColor: 'red',
    bottom: 0
  }

})
