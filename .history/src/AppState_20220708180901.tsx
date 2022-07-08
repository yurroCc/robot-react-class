import React from 'react';

interface AppStateValue{
  username: string;
  
}

const defaultContextValue = {
  username: 'alex',
  shoppingCart: {items:[]}
}

export const appContext = React.createContext(defaultContextValue);
