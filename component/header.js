import { StyleSheet, Text, View, Image } from 'react-native'

export default function Header(){
    return(
        <View>
            <View>
                <Text style={styles.headerImage}>Coucou</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
})