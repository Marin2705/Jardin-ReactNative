import { StyleSheet, Text, View, Image } from 'react-native'

function Home() {
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Jardin du Luxembourg</Text>
      <Image style={styles.homeImage} source={require('../assets/home.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    position: 'absolute',
    zIndex: 1,
    margin: 20,
    fontSize: 40,
    alignItems: 'flex-start',
    fontFamily: 'Fedora-Regular',
  },
  homeImage: {
    height: '100%',
    width: '100%',
  },
})

export default Home
