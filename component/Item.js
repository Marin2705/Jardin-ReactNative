import { StyleSheet, View, Text, Image } from 'react-native'

function Item(props) {
    return (
        <View style={styles.item}>
             {/* <Text>{props.data}</Text> */}
            <View style={[styles.map, {flex: 1}]}>
                {/* Carte */}
            </View>

            <View style={[styles.infos, {flex: 1.5}]}>
                <Text style={styles.title}>{props.data.nom}</Text>
                <Text style={styles.text}>{props.data.description}</Text>

                <View style={[styles.row, {flex: 1, justifyContent: 'space-between', alignItems: 'flex-end'}]}>
                    <Text style={styles.text}>le {props.data.date}</Text>

                    <View style={[styles.row]}>
                        <Image style={styles.likeIcon} source={require('../assets/like.png')} />
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
        width: 13, 
        height: 11,
        marginRight: 5
    }
})

export default Item