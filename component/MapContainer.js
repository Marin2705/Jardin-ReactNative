import { useEffect, useRef } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

function MapContainer(props) {
  const _map = useRef(null)

  // animateCamera had issues on android
  useEffect(() => {
    if (_map.current) {
      _map.current.animateCamera(
        {
          center: {
            latitude: props.lat,
            longitude: props.long,
          },
        },
        5000
      )
      console.log('effect map current', props.lat, props.long)
    }
  }, [props.lat])

  return (
    <MapView
      ref={_map}
      style={styles.map}
      initialRegion={{
        latitude: parseFloat(props.lat),
        longitude: parseFloat(props.long),
        latitudeDelta: props.delta ? props.delta : 0.005,
        longitudeDelta: props.delta ? props.delta : 0.005,
      }}
      minZoomLevel={15}
      maxZoomLevel={20}
      mapType={props.type ? props.type : 'standard'}
      provider={PROVIDER_GOOGLE}
    >
      <Marker
        coordinate={{
          latitude: parseFloat(props.lat),
          longitude: parseFloat(props.long),
        }}
        title={props.name}
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
