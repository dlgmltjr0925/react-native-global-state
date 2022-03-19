import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import {
  StackActions,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';

export default function NestedStack() {
  const index = useNavigationState(state => state.index);
  const screenKey = `NestedStack ${index}`;
  console.log(`[SCREEN] ${screenKey}`);

  const navigation = useNavigation();

  const handlePress = useCallback(
    () => navigation.dispatch(StackActions.push('NestedStack')),
    [navigation],
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonWrapper} onPress={handlePress}>
        <Text>NestedStack</Text>
      </Pressable>
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
