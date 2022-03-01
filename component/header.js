import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable} from 'react-native';
import React, { useState } from "react";
import Svg, { Path } from "react-native-svg";
import { LinearGradient } from 'expo-linear-gradient';

export default function Nav() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.nav} start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#00000000', '#00000022', '#00000099']}>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Notifications')}>
          <Svg style={styles.navImg}>
            <Path
              d="M22.235 44.47c12.28 0 22.236-9.954 22.236-22.235C44.47 9.955 34.516 0 22.235 0 9.955 0 0 9.955 0 22.235s9.955 22.236 22.235 22.236Z"
              fill="#44991D"/>
            <Path
              d="M22.235 16.059a3.706 3.706 0 1 0 0-7.412 3.706 3.706 0 0 0 0 7.412ZM18.53 23.47v9.883a2.47 2.47 0 0 0 2.47 2.47h4.941V21a2.47 2.47 0 0 0-2.47-2.47H16.059V21a2.47 2.47 0 0 0 2.47 2.47Z"
              fill="#fff"/>
          </Svg>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Notifications')}>
        <Svg style={styles.navImg}>
          <Path
            d="M10.617 25.67c0-2.314.763-4.451 2.048-6.178a7.556 7.556 0 0 0-5.07-1.952A7.596 7.596 0 0 0 0 25.136s1.787 15.96 7.596 15.96c2.245 0 3.887-2.386 5.06-5.311-1.369-4.503-1.922-8.998-2.03-9.965l-.01-.15ZM7.596 16.99a6.708 6.708 0 0 0 5.89-3.496 9.257 9.257 0 0 1-1.413-8.197 6.679 6.679 0 0 0-4.477-1.722 6.708 6.708 0 0 0 0 13.415ZM34.404 17.54c-1.95 0-3.723.742-5.069 1.952a10.312 10.312 0 0 1 2.049 6.178l-.01.15c-.108.967-.661 5.461-2.03 9.964 1.173 2.925 2.815 5.311 5.06 5.311 5.809 0 7.596-15.96 7.596-15.96 0-4.193-3.4-7.595-7.596-7.595Z"
            fill="#44991D"/>
          <Path
            d="M28.514 13.493a6.708 6.708 0 1 0 5.89-9.919c-1.723 0-3.289.656-4.477 1.723a9.267 9.267 0 0 1-1.413 8.196ZM21 16.627a9.043 9.043 0 0 0-9.043 9.043s2.128 19 9.043 19c6.915 0 9.043-19 9.043-19A9.043 9.043 0 0 0 21 16.627Z"
            fill="#44991D"/>
          <Path
            d="M21 15.971a7.986 7.986 0 1 0 0-15.97 7.986 7.986 0 0 0 0 15.97Z"
            fill="#44991D"/>
        </Svg>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Notifications')}>
        <Svg style={styles.navImg}>
          <Path
            d="M.993 18.672a.993.993 0 0 0-.993.992v9.926c0 .548.444.992.993.992h9.925a.993.993 0 0 0 .993-.992v-9.926a.993.993 0 0 0-.993-.992H.993Zm.992 1.985h7.94v7.94h-7.94v-7.94ZM.993 32.56a.993.993 0 0 0-.993.993v9.925c0 .548.444.993.993.993h9.925a.993.993 0 0 0 .993-.993v-9.925a.993.993 0 0 0-.993-.993H.993Zm.992 1.985h7.94v7.94h-7.94v-7.94Z"
            fill="#44991D"/>
          <Path
            d="M13.665.454a.993.993 0 1 1 1.652 1.101l-7.94 11.91a.992.992 0 0 1-1.714-.106l-1.985-3.97-.01-.022a.993.993 0 1 1 1.786-.866l1.22 2.44 2.791-4.187h-7.48v7.94h7.94v-3.86l1.986-2.978v7.83a.993.993 0 0 1-.993.993H.993A.993.993 0 0 1 0 15.687V5.76c0-.548.444-.992.993-.992h9.796L13.665.454Z"
            fill="#5DCF27"/>
          <Path
            d="M15.53 12.992c0-.548.444-.992.992-.992h17.866c.548 0 .992.444.992.992v1.986a.993.993 0 0 1-.992.992H16.522a.993.993 0 0 1-.993-.992v-1.986ZM15.53 26.888c0-.548.444-.993.992-.993h17.866c.548 0 .992.445.992.993v1.985a.993.993 0 0 1-.992.992H16.522a.993.993 0 0 1-.993-.992v-1.985ZM15.53 40.79c0-.548.444-.992.992-.992h17.866c.548 0 .992.444.992.992v1.986a.993.993 0 0 1-.992.992H16.522a.993.993 0 0 1-.993-.992V40.79Z"
            fill="#fff"/>
        </Svg>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setModalVisible(!modalVisible)}>
        <Svg style={styles.navImg}>
            <Path
              d="M2.89 39.892c.415.953 1.213 1.726 2.22 2.149a4.404 4.404 0 0 0 3.148.107 4.048 4.048 0 0 0 1.506-.95c.416-.418.725-.92.903-1.471l.076-.265c1.118-5.104 4.036-9.662 8.295-12.96a14.824 14.824 0 0 1 3.582-1.866l1.584 3.658c.288.65.763 1.217 1.372 1.639.608.421 1.325.68 2.07.746a4.313 4.313 0 0 0 2.21-.334 3.847 3.847 0 0 0 1.653-1.375l10.587-16.115c.325-.5.518-1.068.565-1.659a3.653 3.653 0 0 0-.297-1.744 4.023 4.023 0 0 0-1.096-1.463 4.38 4.38 0 0 0-1.665-.875L19.727 1.628a4.58 4.58 0 0 0-2.619.149 4.078 4.078 0 0 0-1.542.994 3.545 3.545 0 0 0-.95 1.813 3.57 3.57 0 0 0 .22 2.039l1.584 3.658C8.213 13.155-1.3 29.297 2.89 39.892Z"
              fill="#fff"
            />
            <Path
              d="M1.507 38.533c.415.952 1.213 1.725 2.22 2.148a4.404 4.404 0 0 0 3.149.107 4.048 4.048 0 0 0 1.505-.95c.417-.418.725-.92.904-1.47l.075-.266c1.119-5.103 4.036-9.662 8.295-12.96a14.824 14.824 0 0 1 3.582-1.866l1.584 3.658c.288.65.764 1.217 1.372 1.639.608.421 1.325.68 2.07.747a4.314 4.314 0 0 0 2.21-.335 3.847 3.847 0 0 0 1.653-1.375l10.587-16.115c.325-.5.518-1.068.565-1.659a3.653 3.653 0 0 0-.297-1.743 4.023 4.023 0 0 0-1.095-1.463 4.38 4.38 0 0 0-1.666-.876L18.346.268a4.58 4.58 0 0 0-2.62.15 4.078 4.078 0 0 0-1.542.993 3.546 3.546 0 0 0-.949 1.813 3.57 3.57 0 0 0 .219 2.04l1.584 3.657C6.83 11.795-2.683 27.937 1.507 38.533Z"
              fill="#44991D"
            />
        </Svg>
      </TouchableOpacity>
      </LinearGradient>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Donnez-nous votre avis !</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    bottom:0,
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '25%'
  },
  navImg: {
    height:45,
    width:45
  },



  container: {
    height: '50%'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})




const App = () => {
};