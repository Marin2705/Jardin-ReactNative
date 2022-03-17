import { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Linking,
} from 'react-native'
import bgImage from '../assets/home.jpg'
import questions from '../assets/quiz.json'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const window = Dimensions.get('window')
const screen = Dimensions.get('screen')
const vw = Dimensions.get('window').width
const vh = Dimensions.get('window').height

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
            key={i}
            onPress={() => {
              props.setAnswered(true)
              props.setStat([...props.stat, answer.valid])
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
            props.setQuestionId(props.questionId + 1)
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
  const [stat, setStat] = useState([])
  const [questionId, setQuestionId] = useState(0)
  const question = questions[questionId]

  useEffect(() => {
    console.log(answered)
  }, [answered])

  useEffect(() => {
    console.log(stat)
  }, [stat])

  if (question) {
    return (
      <QuizView
        questionText={question.questionText}
        answers={question.answers}
        answered={answered}
        stat={stat}
        questionId={questionId}
        setAnswered={setAnswered}
        setQuestionId={setQuestionId}
        setStat={setStat}
      />
    )
  } else {
    const statDivision =
      stat.filter((x) => x === true).length + ' / ' + stat.length
    return (
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.bg}>
        <View style={styles.containerBg}>
          <Text style={[styles.quizH1, styles.bgColor]}>Quiz</Text>
          <Text style={[styles.questionText, styles.bgColor]}>
            Vous avez terminé le quiz !
          </Text>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={[styles.statText, styles.bgColor]}>
                {statDivision}
              </Text>
              <Text style={[styles.statSmallText, styles.bgColor]}>
                bonnes réponses
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={[styles.textContainer, styles.valid, styles.answer]}
            onPress={() => {
              setAnswered(false)
              setQuestionId(0)
              setStat([])
            }}
          >
            <Text style={[styles.questionText, styles.bgColor]}>
              Recommencer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.share]}
            onPress={() => {
              const quote = encodeURI(
                `J'ai eu ${statDivision} bonnes réponses à ce Quiz sur le Jardin du Luxembourg !`
              )
              const link = encodeURI('https://zoey-app.fr')
              const url = `https://www.facebook.com/sharer/sharer.php?u=${link}&quote=${quote}`
              Linking.openURL(url)
            }}
          >
            <Text style={[styles.questionText, styles.bgColor]}>
              Partager sur Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBg: {
    flex: 1,
    backgroundColor: '#0F0F0FC0',
  },
  bgColor: {
    color: 'white',
  },
  bg: {
    flex: 1,
    height: vh,
  },
  circle: {
    height: vw * 0.75,
    width: vw * 0.75,
    borderWidth: 3,
    borderRadius: vw * 0.75,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
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
  endTextContainer: {
    zIndex: 1,
    margin: 30,
    color: 'black',
    justifyContent: 'center',
  },
  questionText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Fedora-Regular',
  },
  statText: {
    textAlign: 'center',
    fontSize: 100,
    fontFamily: 'Fedora-Regular',
  },
  statSmallText: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Fedora-Regular',
  },
  share: {
    marginTop: 40,
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
