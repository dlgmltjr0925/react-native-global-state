import { CounterProvider } from './src/context/CounterContext';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <CounterProvider>
        <NavigationContainer>
          <MainStackNavigation />
        </NavigationContainer>
      </CounterProvider>
    </Provider>
  );
}
