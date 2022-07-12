import React, { FC, ReactNode } from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

interface Props {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void
}

const PrimaryButton: FC<Props> = ({onPress, children}) => {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{color: Colors.primary500}}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 29,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular'
  },
  pressed: {
    opacity: 0.75,
  },
});