import {
  StyleSheet,
  Text,
  Button,
  Dimensions,
  View,
  NativeModules,
} from 'react-native'
import * as React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const { StatusBarManager } = NativeModules
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

function Map({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Button
          title="Retourner à l'accueil"
          onPress={() => navigation.navigate('HomeMain', { name: 'HomeMain' })}
          style={styles.goBackBtn}
        />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 48.846836,
            longitude: 2.337179,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          provider={PROVIDER_GOOGLE}
        >
          <Marker
            coordinate={{ latitude: 48.846836, longitude: 2.337179 }}
            title={'Jardin du Luxembourg'}
            description={'lorem'}
          />
        </MapView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT : 0,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  goBackBtn: {
    position: 'absolute',
    top: 10,
    zIndex: 10,
  },
})

export default Map
