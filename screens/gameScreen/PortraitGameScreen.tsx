import React, { FC } from 'react';
import NumberContainer from '../../components/game/NumberContainer';
import Card from '../../components/ui/Card';
import InstructionText from '../../components/ui/InstructionText';
import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';


interface Props {
  currentGuess: number
  nextGuessHandler: (text: string) => void
}

const PortraitGameScreen: FC<Props> = ({nextGuessHandler, currentGuess}) => {

  return (
    <>
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
    </>
  );
};

export default PortraitGameScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  },
  instructionText: {
    marginBottom: 12
  }
})