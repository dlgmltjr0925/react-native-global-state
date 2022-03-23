import * as React from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { useState } from 'react';

/**
 * Hook to get the current focus state of the screen. Returns a `true` if screen is focused, otherwise `false`.
 * This can be used if a component needs to render something based on the focus state.
 */
export default function useIsFocused(): boolean {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(true);

  React.useEffect(() => {
    const unsubscribeBlur = navigation.addListener('blur', () => {
      if (isFocused) {
        console.log('blur');
        setIsFocused(false);
      }
    });

    return () => {
      unsubscribeBlur();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(() => {
    if (!isFocused) {
      console.log('focus');
      setIsFocused(true);
    }
  });

  return isFocused;
}
