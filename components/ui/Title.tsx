import React, { FC, ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
  children: ReactNode
}

const Title: FC<Props> = ({children}) => {

  return (
    <Text style={styles.title}>{children}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'OpenSans_700Bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
})