import { PropsWithChildren, createContext, useCallback, useState } from 'react';

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
  const [count, setCount] = useState<number>(0);

  const increase = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrease = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CounterContext.Provider>
  );
}
