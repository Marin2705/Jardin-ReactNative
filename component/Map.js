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

import {
  StyleSheet,
  Button,
  Dimensions,
  View,
  NativeModules,
} from 'react-native'
import * as React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const { StatusBarManager } = NativeModules
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT

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
          minZoomLevel={10}
          maxZoomLevel={20}
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
