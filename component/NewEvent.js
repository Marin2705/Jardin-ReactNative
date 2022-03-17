import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native'

// Accepter la fonction childToParent passée en prop
function NewEvent({childToParent}) {

    // BOX SHADOW QUI FONCTIONNE SEULEMENT SUR MOBILE ???
    // generateBoxShadowStyle(-2, 4, '#000000', 0.25, 3, 4, '#000000');

    const [touchY, setTouchY] = useState(0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');

    const onSubmit = () => {
        let data = {'name': name, 'description' : description, 'address': address}

        fetch('http:///172.24.141.205/reactnative/Jardin-ReactNative/assets/api/insertData.php',  {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(() => {
            childToParent();
        })
    }

    return (
        <KeyboardAvoidingView style={[styles.popup, styles.boxShadow]} >

            {/* Drag vers le bas -> déclencher l'évènement childToParent qui sera détectée par le component parent */}
            <Pressable style={{paddingVertical: 15}}
            onTouchStart={e=> setTouchY(e.nativeEvent.pageY)}
            onTouchEnd={e => {
                if (e.nativeEvent.pageY - touchY > 20) {
                    childToParent()
                }
            }}
            >
                <View style={styles.handle}></View>    
            </Pressable>

            <ScrollView style={styles.form}>
                <View>
                    <Text>Nom</Text>
                    <TextInput style={styles.input} 
                    placeholder="Type here to translate!"
                    onChangeText={insertedName => setName(insertedName)}
                    defaultValue={name} />
                </View>
                <View>
                    <Text>Description</Text>
                    <TextInput style={styles.input}
                    placeholder="Type here to translate!"
                    onChangeText={insertedDesc => setDescription(insertedDesc)}
                    defaultValue={description} />
                </View>
                <View>
                    <Text>Adresse</Text>
                    <TextInput style={styles.input}
                    placeholder="Type here to translate!"
                    onChangeText={insertedAddress => setAddress(insertedAddress)}
                    defaultValue={address} />
                </View>

                <View style={styles.map}>
                    {/* Localisation correspondant à l'adresse saisie */}
                </View>
                
                <Pressable style={styles.button} onPress={onSubmit}>
                    <Text style={styles.textButton}>Partager</Text>
                </Pressable>
            </ScrollView> 
        </KeyboardAvoidingView>
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
    popup: {
        width: '100%',
        paddingHorizontal: 40,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        zIndex: 5
    },
    form: {
        marginTop: 20,
    },
    handle: {
        width: 70,
        height: 5,
        backgroundColor: '#ACACAC',
        alignSelf: 'center',
        borderRadius: 5
    },
    input: {
        marginBottom: 50,
        padding: 5,
        borderBottomWidth: 1
    },
    map: {
        paddingVertical: 80,
        backgroundColor: '#DCFFCB',
    },
    button: {
        width: 180,
        height: 40,
        marginVertical: 40,
        alignSelf: 'center',
        backgroundColor: '#E22A2A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textButton: {
        fontFamily: 'Fedora-Regular',
        fontSize: 20,
        color: '#FFFFFF'
    }
})

export default NewEvent