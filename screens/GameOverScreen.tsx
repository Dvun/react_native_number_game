import React, { FC } from 'react';
import { Dimensions, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Title from '../components/ui/Title';
import { Colors } from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';


interface Props {
  roundsNumber: number
  userNumber?: number
  onStartNewGame: () => void
}

const GameOverScreen: FC<Props> = ({roundsNumber, userNumber, onStartNewGame}) => {
  const {height, width} = useWindowDimensions()
  let imageSize = 300

  if (width < 380) {
    imageSize = 150
  }

  if (height < 400) {
    imageSize = 90
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
    <View style={styles.container}>
      <Title>GAME OVER</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image style={styles.image} source={require('../assets/images/success.png')}/>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guest the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={() => onStartNewGame()}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const dimensionWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensionWidth < 380 ? 30 : 40
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'OpenSans_700Bold',
    color: Colors.primary500,
  },
});