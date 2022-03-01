import { StyleSheet, Text, View, Image } from 'react-native'
import Nav from './component/Header'
import Home from './component/Home'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

console.log('Console hello world !')

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
      <View style={styles.nav}>
        <Nav style={styles.nav}/>
      </View>
      <Home/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nav: {
    
  }

})
