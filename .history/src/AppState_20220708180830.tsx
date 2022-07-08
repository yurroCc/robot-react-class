import React from 'react';

const defaultContextValue = {
  username: 'alex',
  shoppingCart: {items:[]}
}

export const CartContext = React.createContext(defaultContextValue);
