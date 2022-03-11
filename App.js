import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Home from './component/Home'
import Test from './component/Test'
import Surroundings from './component/Surroundings'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    'Fedora-Regular': require('./assets/fonts/Federo-Regular.ttf'),
    'Exo-Regular': require('./assets/fonts/Exo-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <MyTabBar {...props} />}
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Surroundings" component={Surroundings} />
          <Tab.Screen name="Test" component={Test} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}