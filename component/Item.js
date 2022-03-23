import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import AsyncStorage  from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import likeOff from '../assets//likeOff.png'
import likeOn from '../assets/likeOn.png'


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
            fetch('http://172.24.141.205/reactnative/Jardin-ReactNative/assets/api/Surroundings.php?action=deleteLike',
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
            fetch('http://172.24.141.205/reactnative/Jardin-ReactNative/assets/api/Surroundings.php?action=addLike',
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
            <View style={[styles.map, {flex: 1}]}>
                <Text>{props.data.id}</Text>
                {/* Carte */}
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