import { StyleSheet, Text, Button } from 'react-native'

function Test({ navigation }) {
  return (
    <>
      <Text>Test</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home', { name: 'Home' })}
      />
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {},
})

export default Test
