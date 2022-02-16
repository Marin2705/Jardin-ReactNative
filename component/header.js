import { StyleSheet, Text, View, Image } from 'react-native'

export default function Nav(){
    return(
        <View>
            <View style={styles.nav}>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  nav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
})