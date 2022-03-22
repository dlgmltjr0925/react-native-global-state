import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';

export default function Home() {
  console.log('[SCREEN] Home');

  const navigation = useNavigation();

  const handlePress = useCallback(
    (screenName: string) => {
      return () => navigation.dispatch(StackActions.push(screenName));
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.buttonWrapper}
        onPress={handlePress('NestedStack1')}>
        <Text>NestedStack</Text>
      </Pressable>
      <Pressable style={styles.buttonWrapper} onPress={handlePress('Profile')}>
        <Text>Profile</Text>
      </Pressable>
      <Pressable style={styles.buttonWrapper} onPress={handlePress('Settings')}>
        <Text>Settings</Text>
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
