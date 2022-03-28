import {
  I18nManager,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

interface TopTabsComponentProps {
  tab: number;
  style: StyleProp<ViewStyle>;
}

function TopTabsComponent({ tab, style }: TopTabsComponentProps) {
  return function () {
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{tab}</Text>
      </View>
    );
  };
}

export default function TopTabsNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Red"
        component={TopTabsComponent({
          tab: 1,
          style: { backgroundColor: 'red' },
        })}
      />
      <Tab.Screen
        name="Blue"
        component={TopTabsComponent({
          tab: 2,
          style: { backgroundColor: 'blue' },
        })}
      />
      <Tab.Screen
        name="Yellow"
        component={TopTabsComponent({
          tab: 3,
          style: { backgroundColor: 'yellow' },
        })}
      />
      <Tab.Screen
        name="Green"
        component={TopTabsComponent({
          tab: 4,
          style: { backgroundColor: 'green' },
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});
