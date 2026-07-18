import { createContext, useContext, useState, ReactNode } from 'react';
import { ScreenState } from '../types';

interface NavigationContextType {
  currentScreen: ScreenState;
  navigate: (screen: ScreenState) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('home');

  const navigate = (screen: ScreenState) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  return (
    <NavigationContext.Provider value={{ currentScreen, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
