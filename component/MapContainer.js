import { StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

function MapContainer(props) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: props.lat,
        longitude: props.long,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      provider={PROVIDER_GOOGLE}
    >
      <Marker
        coordinate={{ latitude: props.lat, longitude: props.long }}
        title={'Jardin du Luxembourg'}
        description={'lorem'}
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    margin: 0,
    width: '100%',
    height: '100%',
  },
})

export default MapContainer
