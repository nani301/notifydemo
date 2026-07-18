/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { HomeScreen } from './screens/HomeScreen';
import { CategoryScreen } from './screens/CategoryScreen';
import { SavedScreen } from './screens/SavedScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { AdminScreen } from './screens/AdminScreen';
import { NotificationDetailScreen } from './screens/NotificationDetailScreen';
import { BottomNav } from './components/BottomNav';
import { SideNav } from './components/SideNav';

function AppContent() {
  const { currentScreen } = useNavigation();

  return (
    <div className="min-h-screen bg-background font-sans text-on-background antialiased flex flex-col md:flex-row">
      {currentScreen !== 'notification-details' && <SideNav />}
      
      <div className="flex-1 flex flex-col w-full min-h-screen">
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'categories' && <CategoryScreen />}
        {currentScreen === 'saved' && <SavedScreen />}
        {currentScreen === 'profile' && <ProfileScreen />}
        {currentScreen === 'admin' && <AdminScreen />}
        {currentScreen === 'notification-details' && <NotificationDetailScreen />}
      </div>

      {currentScreen !== 'notification-details' && <BottomNav />}
    </div>
  );
}

import { DataProvider } from './context/DataContext';

export default function App() {
  return (
    <DataProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </DataProvider>
  );
}
