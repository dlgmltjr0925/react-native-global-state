import { Pressable, StyleSheet, Text, View } from 'react-native';

import React from 'react';

interface CounterProps {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export default function Counter({ count, increase, decrease }: CounterProps) {
  return (
    <View style={styles.counterWrapper}>
      <Pressable style={styles.counterButton} onPress={decrease}>
        <Text style={styles.counterText}>-</Text>
      </Pressable>
      <Text style={styles.counterText}>Count : {count}</Text>
      <Pressable style={styles.counterButton} onPress={increase}>
        <Text style={styles.counterText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
