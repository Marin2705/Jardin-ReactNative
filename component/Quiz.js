{/* <one line to give the program's name and a brief idea of what it does.>
Copyright (C) 2022 Marin BOUANCHAUD, Elodie PAN, Lucien BOISSEAU-SABLE

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. */}

import { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Linking,
  ScrollView,
} from 'react-native'
import bgImage from '../assets/home.jpg'
import questions from '../assets/quiz.json'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const window = Dimensions.get('window')
const screen = Dimensions.get('screen')
const vw = Dimensions.get('window').width
const vh = Dimensions.get('window').height

function AnswerBtn(props) {
  let valid = props.answered && props.answer.valid && styles.valid
  if (!valid && props.answered && props.answered == props.i + 1) {
    valid = styles.wrong
  }
  return (
    <TouchableOpacity
      style={[styles.textContainer, styles.answer, valid]}
      key={props.i}
      onPress={() => {
        if (!props.answered) {
          props.setAnswered(props.i + 1)
          props.setStat([...props.stat, props.answer.valid])
        }
      }}
    >
      <Text style={styles.questionText}>{props.answer.text}</Text>
    </TouchableOpacity>
  )
}

function QuizView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.quizH1}>Quiz</Text>
      <View style={[styles.textContainer, styles.question]}>
        <Text style={styles.questionText}>{props.questionText}</Text>
      </View>
      {props.answers.map((answer, i) => {
        return (
          <AnswerBtn
            answer={answer}
            i={i}
            key={i}
            questionText={props.questionText}
            answers={props.answers}
            answerText={props.answerText}
            answered={props.answered}
            stat={props.stat}
            questionId={props.questionId}
            setAnswered={props.setAnswered}
            setQuestionId={props.setQuestionId}
            setStat={props.setStat}
          />
        )
      })}

      {props.answered && (
        <>
          {props.answerText && (
            <Text style={styles.answerText}>{props.answerText}</Text>
          )}
          <TouchableOpacity
            style={[styles.textContainer, styles.answer]}
            onPress={() => {
              props.setAnswered(false)
              props.setQuestionId(props.questionId + 1)
            }}
          >
            <Text style={styles.questionText}>Suivant</Text>
          </TouchableOpacity>
        </>
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
      <ScrollView>
        <QuizView
          questionText={question.questionText}
          answers={question.answers}
          answerText={question.answerText}
          answered={answered}
          stat={stat}
          questionId={questionId}
          setAnswered={setAnswered}
          setQuestionId={setQuestionId}
          setStat={setStat}
        />
      </ScrollView>
    )
  } else {
    const statDivision =
      stat.filter((x) => x === true).length + ' / ' + stat.length
    return (
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.bg}>
        <View style={styles.containerBg}>
          <Text style={[styles.quizH1, styles.bgColor]}>Quiz</Text>
          <Text style={[styles.questionText, styles.bgColor]}>
            Vous avez termin?? le quiz !
          </Text>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={[styles.statText, styles.bgColor]}>
                {statDivision}
              </Text>
              <Text style={[styles.statSmallText, styles.bgColor]}>
                bonnes r??ponses
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
                `J'ai eu ${statDivision} bonnes r??ponses ?? ce quiz sur le Jardin du Luxembourg !`
              )
              const link = encodeURI('https://zoey-app.fr') // remplace with actual link
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
  answerText: {
    marginTop: 30,
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
