import React, { FC, useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, useWindowDimensions, View } from 'react-native';
import Title from '../../components/ui/Title';
import { generateRandomBetween } from '../../utils/generateRandomBetween';
import GuessLogItem from '../../components/game/GuessLogItem';
import PortraitGameScreen from './PortraitGameScreen';
import LandscapeGameScreen from './LandscapeGameScreen';


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
  const {width} = useWindowDimensions()

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
      {
        width > 500 ?
          <LandscapeGameScreen  currentGuess={currentGuess} nextGuessHandler={nextGuessHandler}/>
          :
          <PortraitGameScreen currentGuess={currentGuess} nextGuessHandler={nextGuessHandler}/>
      }
      <View style={[styles.listContainer, width > 500 && styles.listContainerLandscape]}>
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
  listContainer: {
    flex: 1,
    padding: 16
  },
  listContainerLandscape: {
    flex: 1,
    padding: 0
  }
})