import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import { decrement, increment } from '../feature/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

import Counter from '../component/Counter';
import { RootState } from '../store';
import useIsFocused from '../hook/useIsFocused';

interface NestedStackProps {
  index: number;
}

export default function NestedStack({ index }: NestedStackProps) {
  const screenKey = `NestedStack ${index}`;
  console.log(`[SCREEN] ${screenKey}`);

  const navigation = useNavigation();

  // const counter = useContext(CounterContext);
  const isFocused = useIsFocused();
  const count = useSelector(
    (state: RootState) => state.counter.count,
    (prev, next) => {
      console.log(screenKey, isFocused, prev, next);
      return !navigation.isFocused() || prev === next;
    },
  );
  const dispatch = useDispatch();

  const increase = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const decrease = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const handlePress = useCallback(
    () => navigation.dispatch(StackActions.push(`NestedStack${index + 1}`)),
    [index, navigation],
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonWrapper} onPress={handlePress}>
        <Text>{`NestedStack ${index + 1}`}</Text>
      </Pressable>
      <Counter count={count} increase={increase} decrease={decrease} />
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
