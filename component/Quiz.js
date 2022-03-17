import { StyleSheet, View, Text } from 'react-native'

function Quiz() {
  return (
    <View style={styles.container}>
      <Text style={styles.quizH1}>Quiz</Text>
      <View style={[styles.textContainer, styles.question]}>
        <Text style={styles.questionText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </View>
      <View style={[styles.textContainer, styles.answer]}>
        <Text style={styles.questionText}>Réponse 1</Text>
      </View>
      <View style={[styles.textContainer, styles.answer]}>
        <Text style={styles.questionText}>Réponse 1</Text>
      </View>
      <View style={[styles.textContainer, styles.answer]}>
        <Text style={styles.questionText}>Réponse 1</Text>
      </View>
      <View style={[styles.textContainer, styles.answer]}>
        <Text style={styles.questionText}>Réponse 1</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  quizH1: {
    textAlign: 'center',
    zIndex: 1,
    marginTop: 40,
    fontSize: 40,
    alignItems: 'flex-start',
    fontFamily: 'Fedora-Regular',
    color: 'black',
  },
  question: {
    minHeight: 130,
    marginBottom: 40,
  },
  answer: {
    marginBottom: 0,
    marginTop: 20,
  },
  textContainer: {
    zIndex: 1,
    margin: 30,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#44991D',
    padding: 10,
    color: 'black',
    justifyContent: 'center',
  },
  questionText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Fedora-Regular',
  },
})

export default Quiz
