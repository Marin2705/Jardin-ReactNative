import { render } from 'react-dom';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable, Image, Modal } from 'react-native'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native'
import Item from './Item'
import NewEvent from './NewEvent'

function Surroundings() {

    // BOX SHADOW QUI FONCTIONNE SEULEMENT SUR MOBILE ???
    // generateBoxShadowStyle(-2, 4, '#000000', 0.25, 3, 4, '#000000');
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState('');
    
    const childToParent = () => {
      setModalVisible(false)
    }

    // const getDataFromApi = async () => {
    //   try {
    //     const response = await fetch(
    //       'http://172.24.141.205/reactnative/Jardin-ReactNative/assets/api/getData.php'
    //     );
    //     const json = await response.json();
    //     console.log(json)
    //     return json;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // https://perso-etudiant.u-pem.fr/~elodie.pan/api/getData.php

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            'http:///172.24.141.205/reactnative/Jardin-ReactNative/assets/api/getData.php'
            // 
            // https://perso-etudiant.u-pem.fr/~elodie.pan/api/getData.php
          );
          const json = await response.json();
          setData(json)
          return json;
        } catch (error) {
          console.error(error);
        }
      };

      fetchData()
    }, []);
  

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
            <Text style={styles.title}>Autour du Jardin</Text>
            
            {/* Data à remplacer par les données de l'API */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Item data={item}/>}
            />

            {/* Faire apparaitre la popup au clic */}
            <Pressable style={[styles.addButton]} onPress={() => {
              setModalVisible(true);
            }}>
              <Image source={require('../assets/add.png')}/>
            </Pressable>

                      
        </View>

        {/* Popup */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          {/* Passer une prop au component enfant et recevoir l'évènement créé par l'enfant */}
          <NewEvent childToParent={childToParent} />

          </Modal>
      </View>
    )
}

// Box Shadow en fonction de l'OS de l'appareil (SEULEMENT SUR MOBILE ??)
// const generateBoxShadowStyle = (
//     xOffset,
//     yOffset,
//     shadowColorIos,
//     shadowOpacity,
//     shadowRadius,
//     elevation,
//     shadowColorAndroid,
//   ) => {
//     if (Platform.OS === 'ios') {
//       styles.boxShadow = {
//         shadowColor: shadowColorIos,
//         shadowOffset: {width: xOffset, height: yOffset},
//         shadowOpacity,
//         shadowRadius,
//       };
//     } else if (Platform.OS === 'android') {
//       styles.boxShadow = {
//         elevation,
//         shadowColor: shadowColorAndroid,
//       };
//     }
// };

const styles = StyleSheet.create({
    title: {
        paddingTop: 50,
        paddingBottom: 15,
        fontFamily: 'Fedora-Regular',
        fontSize: 36,
        textAlign: 'center',
    },
    addButton: {
        padding: 20,
        borderRadius: 50,
        backgroundColor: '#FF4141',
        position: 'absolute',
        right: 20,
        bottom: 20
    }
})

export default Surroundings
