import React, { PropsWithChildren } from 'react';

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


const AppStateValueProvider : React.FC<PropsWithChildren> =(props) =>{
  return (
    <appContext.Provider>
      {props.children}
    </appContext.Provider>
}