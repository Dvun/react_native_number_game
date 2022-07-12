import React, { FC, useEffect, useState } from 'react';
import { Alert, StyleSheet, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Title from '../components/ui/Title';
import { generateRandomBetween } from '../utils/generateRandomBetween';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';


interface Props {
  userNumber: number
  setGameIsOver: (bool: boolean) => void
  setRoundsNumber: (num: number) => void
}

const GameScreen: FC<Props> = ({userNumber, setGameIsOver, setRoundsNumber}) => {
  let MIN_BOUNDARY = 1;
  let MAX_BOUNDARY = 100;
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) {
      setGameIsOver(true)
      MIN_BOUNDARY = 1
      MAX_BOUNDARY = 100
      setRoundsNumber(guessRounds.length + 1)
    }
  }, [currentGuess, userNumber, setGameIsOver])

  const nextGuessHandler = (direction: string) => {
    if ((direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert(
        "Don't lie",
        'You know that this is wrong...', [{text: 'Sorry', style: 'cancel'}])
      return;
    }
    if (direction === 'lower') {
      MAX_BOUNDARY = currentGuess;
    } else {
      MIN_BOUNDARY = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(MIN_BOUNDARY, MAX_BOUNDARY, currentGuess);
    setCurrentGuess(newRndNumber)
    setGuessRounds(prevState => [newRndNumber, ...prevState])
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Ionicons name='md-add' size={24}/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name='md-remove' size={24}/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) =>
            <GuessLogItem roundNumber={guessRounds.length - item.index} guess={item.item}/>
        }
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  },
  instructionText: {
    marginBottom: 12
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
})