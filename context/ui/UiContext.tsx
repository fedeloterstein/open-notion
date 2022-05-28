import { createContext } from 'react'

interface ContextProps {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
}

export const UiContext = createContext({} as ContextProps)
