import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useContext } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';

import Counter from '../component/Counter';
import { CounterContext } from '../context/CounterContext';

interface NestedStackProps {
  index: number;
}

export default function NestedStack({ index }: NestedStackProps) {
  const screenKey = `NestedStack ${index}`;
  console.log(`[SCREEN] ${screenKey}`);

  const navigation = useNavigation();

  const counter = useContext(CounterContext);

  const handlePress = useCallback(
    () => navigation.dispatch(StackActions.push(`NestedStack${index + 1}`)),
    [index, navigation],
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonWrapper} onPress={handlePress}>
        <Text>{`NestedStack ${index + 1}`}</Text>
      </Pressable>
      <Counter {...counter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonWrapper: {
    width: 200,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 10,
  },
});
