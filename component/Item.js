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

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import AsyncStorage  from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import likeOff from '../assets//likeOff.png'
import likeOn from '../assets/likeOn.png'
import { PanResponder } from 'react-native-web';
import MapContainer from './MapContainer'


function Item(props) {
    const [imglike, setLike] = useState(false);
    const data = {"id": props.data.id};


    AsyncStorage.getItem('likes').then(local => {
        if (local != null) {
           if (JSON.parse(local).filter(item => item.id == props.data.id).length !== 0) {
                setLike(true)
           } 
        }     
    })

    const like = () => {

        // Si déjà liké
        if (imglike){

            // Retirer le like du local
            AsyncStorage.getItem('likes').then(local => {
                let likes = JSON.parse(local).filter(item => item.id !== props.data.id)

                AsyncStorage.setItem('likes', JSON.stringify(likes))
                props.data.likes--
                setLike(false)
            })

            // Retirer le like de la bdd
            fetch('https://perso-etudiant.u-pem.fr/~elodie.pan/api/Surroundings.php?action=deleteLike' ,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    method: "POST",
                    body: JSON.stringify(data)
                })

        } else {
            
            // Ajouter le like dans le storage
            AsyncStorage.getItem('likes').then(local => {
                let likes = [];

                if (local != null){
                    likes = JSON.parse(local);
                }

                likes.push(data)
                AsyncStorage.setItem('likes', JSON.stringify(likes))

                props.data.likes++
                setLike(true)

            })
                       
            // Ajouter le like dans la bdd
            fetch('https://perso-etudiant.u-pem.fr/~elodie.pan/api/Surroundings.php?action=addLike',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify(data)
            })
        }
    }

    return (
        <View style={styles.item}>
            <View style={styles.map}>
                {/* Localisation correspondant à l'adresse saisie */}
                <MapContainer lat={props.data.latitude} long={props.data.longitude} name={props.data.nom} description={props.data.description} />
            </View>

            <View style={[styles.infos, {flex: 1.5}]}>
                <Text style={styles.title}>{props.data.nom}</Text>
                <Text style={styles.text}>{props.data.description}</Text>

                <View style={[styles.row, {flex: 1, justifyContent: 'space-between', alignItems: 'flex-end'}]}>
                    <Text style={styles.text}>le {props.data.date}</Text>

                    <View style={[styles.row]}>

                        <TouchableOpacity onPress={like}>
                            <Image style={styles.likeIcon} source={ imglike ? likeOn : likeOff } />
                        </TouchableOpacity>

                        <Text style={styles.text}>{props.data.likes}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        flexDirection: 'row',
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        fontFamily: 'Exo-Regular',
        borderStyle: 'solid',
        borderColor: '#44991D',
        borderWidth: 3
    },
    map: {
        flex: 1, 
        height: 150,
        backgroundColor: '#DCFFCB',
        marginRight: 10
    },
    infos: {
        flex: 3,  
        flexDirection: 'column'
    },
    title: {
        fontFamily: 'Fedora-Regular',
        fontSize: 16
    },
    text: {
        fontFamily: 'Exo-Regular',
        fontSize: 11
    },
    likeIcon: {
        width: 15, 
        height: 15,
        marginRight: 5
    }
})

export default Item