import React, { PropsWithChildren, useState } from 'react';

interface AppStateValue {
  username: string;
  shoppingCart: {
    items: {
      id: number,
      name: string
    }[]
  }
}

const defaultContextValue: AppStateValue = {
  username: 'alex',
  shoppingCart: { items: [] }
}

export const appContext = React.createContext(defaultContextValue);


const AppStateValueProvider : React.FC<PropsWithChildren<>> =(props) =>{
  const [] = useState
  return (
    <appContext.Provider>
      {props.children}
    </appContext.Provider>
}