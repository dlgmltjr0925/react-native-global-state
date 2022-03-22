import React from 'react';

interface Props {
  index: number;
}

export default function withIndex(Component: React.FC<Props>, index: number) {
  return function () {
    return <Component index={index} />;
  };
}
