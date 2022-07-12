import React, { FC, ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/colors';


interface Props {
  children: ReactNode
  style?: {}
}

const InstructionText: FC<Props> = ({style, children}) => {

  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontFamily: 'OpenSans_400Regular',
    fontSize: 24
  }
})