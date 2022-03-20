import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useContext } from 'react';
import {
  StackActions,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';

import { CounterContext } from '../context/CounterContext';

export default function NestedStack() {
  const index = useNavigationState(state => state.index);
  const screenKey = `NestedStack ${index}`;
  console.log(`[SCREEN] ${screenKey}`);

  const navigation = useNavigation();

  const { count, increase, decrease } = useContext(CounterContext);

  const handlePress = useCallback(
    () => navigation.dispatch(StackActions.push('NestedStack')),
    [navigation],
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonWrapper} onPress={handlePress}>
        <Text>{`NestedStack ${index + 1}`}</Text>
      </Pressable>
      <View style={styles.counterWrapper}>
        <Pressable style={styles.counterButton} onPress={decrease}>
          <Text style={styles.counterText}>-</Text>
        </Pressable>
        <Text style={styles.counterText}>Count : {count}</Text>
        <Pressable style={styles.counterButton} onPress={increase}>
          <Text style={styles.counterText}>+</Text>
        </Pressable>
      </View>
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
  counterWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  counterText: {
    fontSize: 20,
  },
  counterButton: {
    marginHorizontal: 20,
    width: 40,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
