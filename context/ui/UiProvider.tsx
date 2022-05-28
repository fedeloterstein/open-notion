import { FC, ReactNode, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean
}

interface UiProviderPros {
    children: ReactNode
}
const UI_INITIAL_STATE: UiState = {
    sideMenuOpen: false,
    isAddingEntry: false
}

export const UiProvider: FC<UiProviderPros> = ({children}) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
   
  const openSideMenu = () => {
      dispatch({type: 'UI - Open Sidebar'})
  }

  const closeSideMenu = () => {
    dispatch({type: 'UI - Close Sidebar'})
}

const setIsAddingEntry = (isAdding: boolean) => {
  dispatch({type: 'UI - Set isAddingEntry', payload: isAdding})
}

  return (
    <UiContext.Provider value={{
       ...state,
       openSideMenu,
       closeSideMenu,
       setIsAddingEntry
    }}>
        {children}
    </UiContext.Provider>
  )
}
