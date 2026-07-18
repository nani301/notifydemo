import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Notification, MOCK_NOTIFICATIONS, CATEGORIES } from '../data/mockData';

interface DataContextType {
  notifications: Notification[];
  savedIds: string[];
  toggleSave: (id: string) => void;
  isSaved: (id: string) => boolean;
  categories: typeof CATEGORIES;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  selectedNotification: Notification | null;
  setSelectedNotification: (notification: Notification | null) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [notifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('govnotify_saved');
    return saved ? JSON.parse(saved) : ['6']; // pre-save UPSC Civil Services 2024
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(MOCK_NOTIFICATIONS[0]);

  useEffect(() => {
    localStorage.setItem('govnotify_saved', JSON.stringify(savedIds));
  }, [savedIds]);

  const toggleSave = (id: string) => {
    setSavedIds(prev => 
      prev.includes(id) ? prev.filter(savedId => savedId !== id) : [...prev, id]
    );
  };

  const isSaved = (id: string) => savedIds.includes(id);

  return (
    <DataContext.Provider value={{
      notifications,
      savedIds,
      toggleSave,
      isSaved,
      categories: CATEGORIES,
      searchQuery,
      setSearchQuery,
      activeCategory,
      setActiveCategory,
      selectedNotification,
      setSelectedNotification
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
