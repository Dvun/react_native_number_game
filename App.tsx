import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import GameScreen from './screens/gameScreen/GameScreen';
import { Colors } from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import AppLoading from 'expo-app-loading';
import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';


export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular, OpenSans_700Bold
  });
  const [userNumber, setUserNumber] = useState<number | undefined>();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [roundsNumber, setRoundsNumber] = useState<number>(0)

  if (!fontsLoaded) return <AppLoading />

  const startNewGameHandler = () => {
    setGameIsOver(false)
    setUserNumber(undefined)
    setRoundsNumber(0)
  }

  return (
    <>
      <StatusBar style="light"/>
      <LinearGradient style={styles.appContainer} colors={[Colors.primary700, Colors.accent500]}>
        <ImageBackground
          source={require('./assets/images/dice.jpg')}
          resizeMode="cover"
          style={styles.appContainer}
          imageStyle={styles.backgroundImage}
        >
          {
            gameIsOver ?
              <GameOverScreen userNumber={userNumber} onStartNewGame={startNewGameHandler} roundsNumber={roundsNumber}/>
              :
              <SafeAreaView style={styles.appContainer}>
                {
                  userNumber ?
                    <GameScreen
                      userNumber={userNumber}
                      setGameIsOver={setGameIsOver}
                      setRoundsNumber={setRoundsNumber}
                    />
                    :
                    <StartGameScreen setUserNumber={setUserNumber} setGameIsOver={setGameIsOver}/>
                }
              </SafeAreaView>
          }
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
