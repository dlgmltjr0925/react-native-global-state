import Home from '../screen/Home';
import NestedStack from '../screen/NestedStack';
import Profile from '../screen/Profile';
import React from 'react';
import Settings from '../screen/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import withIndex from '../hoc/withIndex';

const Stack = createNativeStackNavigator();

export default function MainStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Awesome app',
        }}
      />
      <Stack.Screen
        name="NestedStack1"
        component={withIndex(NestedStack, 1)}
        options={{
          title: 'NestedStack1',
        }}
      />
      <Stack.Screen
        name="NestedStack2"
        component={withIndex(NestedStack, 2)}
        options={{
          title: 'NestedStack2',
        }}
      />
      <Stack.Screen
        name="NestedStack3"
        component={withIndex(NestedStack, 3)}
        options={{
          title: 'NestedStack3',
        }}
      />
      <Stack.Screen
        name="NestedStack4"
        component={withIndex(NestedStack, 4)}
        options={{
          title: 'NestedStack4',
        }}
      />
      <Stack.Screen
        name="NestedStack5"
        component={withIndex(NestedStack, 5)}
        options={{
          title: 'NestedStack5',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'My profile',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
