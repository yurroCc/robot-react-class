import React from 'react';

interface AppStateValue{
  username: string;
  shoppingCart: {
    items: {
      id: number
    }
  }
}

const defaultContextValue = {
  username: 'alex',
  shoppingCart: {items:[]}
}

export const appContext = React.createContext(defaultContextValue);
