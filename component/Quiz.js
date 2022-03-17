import { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function QuizView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.quizH1}>Quiz</Text>
      <View style={[styles.textContainer, styles.question]}>
        <Text style={styles.questionText}>{props.questionText}</Text>
      </View>
      {props.answers.map((answer, i) => {
        let valid =
          props.answered && (answer.valid ? styles.valid : styles.wrong)
        return (
          <TouchableOpacity
            style={[styles.textContainer, styles.answer, valid]}
            key={i + 1}
            onPress={() => {
              props.setAnswered(i + 1)
            }}
          >
            <Text style={styles.questionText}>{answer.text}</Text>
          </TouchableOpacity>
        )
      })}
      {props.answered && (
        <TouchableOpacity
          style={[styles.textContainer, styles.answer]}
          onPress={() => {
            props.setAnswered(false)
          }}
        >
          <Text style={styles.questionText}>Suivant</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

function Quiz() {
  const [answered, setAnswered] = useState(false)

  return (
    <QuizView
      questionText="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      answers={[
        { text: 'Réponse 1', valid: true },
        { text: 'Réponse 2', valid: false },
      ]}
      answered={answered}
      setAnswered={setAnswered}
    />
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
  valid: {
    backgroundColor: '#44991D',
  },
  wrong: {
    borderColor: 'red',
    backgroundColor: 'red',
  },
})

export default Quiz
