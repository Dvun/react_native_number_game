import React, { FC } from 'react';
import NumberContainer from '../../components/game/NumberContainer';
import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';


interface Props {
  currentGuess: number;
  nextGuessHandler: (text: string) => void;
}

const LandscapeGameScreen: FC<Props> = ({nextGuessHandler, currentGuess}) => {

  return (
    <>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => nextGuessHandler('greater')}>
            <Ionicons name="md-add" size={24}/>
          </PrimaryButton>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>
            <Ionicons name="md-remove" size={24}/>
          </PrimaryButton>
        </View>
      </View>
    </>
  );
};

export default LandscapeGameScreen;


const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  }
});