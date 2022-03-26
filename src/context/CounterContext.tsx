import { PropsWithChildren, createContext, useCallback, useRef } from 'react';

import React from 'react';

interface CounterContextValue {
  count: number;
  increase: () => void;
  decrease: () => void;
}

interface CounterProviderProps {}

export const CounterContext = createContext<CounterContextValue>({
  count: 0,
  increase: () => {},
  decrease: () => {},
});

export function CounterProvider({
  children,
}: PropsWithChildren<CounterProviderProps>) {
  const countRef = useRef<number>(0);

  const increase = useCallback(() => {
    countRef.current++;
  }, []);

  const decrease = useCallback(() => {
    countRef.current--;
  }, []);

  return (
    <CounterContext.Provider
      value={{ count: countRef.current, increase, decrease }}>
      {children}
    </CounterContext.Provider>
  );
}
