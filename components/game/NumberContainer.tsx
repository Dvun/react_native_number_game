import React, { FC, ReactNode } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

interface Props {
  children: ReactNode;
}

const NumberContainer: FC<Props> = ({children}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: Dimensions.get('window').width < 380 ? 12 : 24,
    margin: Dimensions.get('window').width < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.accent500,
    fontSize: Dimensions.get('window').width < 380 ? 28 : 36,
    fontFamily: 'OpenSans_700Bold'
  },
});