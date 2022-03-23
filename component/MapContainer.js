import { StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

function MapContainer(props) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: props.lat,
        longitude: props.long,
        latitudeDelta: props.delta ? props.delta : 0.005,
        longitudeDelta: props.delta ? props.delta : 0.005,
      }}
      minZoomLevel={15}
      maxZoomLevel={20}
      mapType={props.type ? props.type : 'standard'}
      provider={PROVIDER_GOOGLE}
    >
      <Marker
        coordinate={{ latitude: props.lat, longitude: props.long }}
        title={'Jardin du Luxembourg'}
        description={'Localisation du jardin'}
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
