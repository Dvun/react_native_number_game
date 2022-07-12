import React, { FC, useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { Colors } from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';


interface Props {
  setUserNumber: (num: number) => void
  setGameIsOver: (bool: boolean) => void
}

const StartGameScreen: FC<Props> = ({setUserNumber, setGameIsOver}) => {
  const [enteredNumber, setEnteredNumber] = useState<string>('')

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return Alert.alert(
        'Invalid number!',
        'Number has to be between 1 to 99',
        [{text: 'Okay', style: 'destructive', onPress: () => setEnteredNumber('')}]
      )
    }
    setUserNumber(chosenNumber)
    setGameIsOver(false)
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={styles.rootContainer}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType='number-pad'
              autoCapitalize='none'
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={() => setEnteredNumber('')}>Reset</PrimaryButton>
              </View>
              <View  style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  }
})