import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import Nav from './component/header'

console.log('Console hello world !');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Jardins du Luxembourg</Text>
      <Image
        style={styles.headerImage}
        source={require('./assets/accueil.jpg')}
      />
      {/* <StatusBar style="auto" /> */}
      <Nav/>
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
  header: {
    margin: 20,
    fontSize: 40,
    alignItems: 'flex-start',
    width: '100%',
  },
  headerImage: {
    height: '30%',
    width: '100%',
  },
})
