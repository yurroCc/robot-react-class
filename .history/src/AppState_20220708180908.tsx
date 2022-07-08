import React from 'react';

interface AppStateValue{
  username: string;
  sho
}

const defaultContextValue = {
  username: 'alex',
  shoppingCart: {items:[]}
}

export const appContext = React.createContext(defaultContextValue);
