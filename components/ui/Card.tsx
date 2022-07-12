import React, { FC, ReactNode } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/colors';


interface Props {
  children: ReactNode
}

const Card: FC<Props> = ({children}) => {

  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
    );
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: Dimensions.get('window').width < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25
  }
})