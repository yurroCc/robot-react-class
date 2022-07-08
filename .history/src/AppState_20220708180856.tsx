import React from 'react';

interface AppStateValue{
  
}

const defaultContextValue = {
  username: 'alex',
  shoppingCart: {items:[]}
}

export const appContext = React.createContext(defaultContextValue);
