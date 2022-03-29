{/* <one line to give the program's name and a brief idea of what it does.>
Copyright (C) 2022 Marin BOUANCHAUD, Elodie PAN, Lucien BOISSEAU-SABLE

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. */}

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
