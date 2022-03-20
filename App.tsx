import { CounterProvider } from './src/context/CounterContext';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export default function App() {
  return (
    <CounterProvider>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </CounterProvider>
  );
}
