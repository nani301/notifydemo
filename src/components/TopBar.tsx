import { useNavigation } from '../context/NavigationContext';
import { useData } from '../context/DataContext';
import { Menu, Search, Bell } from 'lucide-react';

export function TopBar() {
  const { navigate, currentScreen } = useNavigation();
  const { searchQuery, setSearchQuery } = useData();

  const getScreenTitle = () => {
    switch (currentScreen) {
      case 'home': return 'Home Dashboard';
      case 'categories': return 'Categories';
      case 'saved': return 'Saved Notifications';
      case 'profile': return 'User Profile';
      case 'admin': return 'Admin Dashboard';
      case 'notification-details': return 'Notification Details';
      default: return '';
    }
  };

  return (
    <>
      {/* Mobile Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface text-primary flex justify-between items-center px-4 md:px-6 h-16 md:hidden">
        <div className="flex items-center gap-4">
          <button className="hover:bg-surface-dim transition-colors rounded-full p-2 active:opacity-80">
            <Menu className="w-6 h-6 text-on-surface" />
          </button>
          <span className="font-bold text-xl tracking-tight uppercase text-on-surface">GovNotify</span>
        </div>
        <div className="flex items-center gap-4">
          {currentScreen === 'home' && (
            <button className="hover:bg-surface-dim transition-colors rounded-full p-2 active:opacity-80">
              <Search className="w-6 h-6 text-on-surface-variant" />
            </button>
          )}
          {currentScreen !== 'home' && (
            <button 
              onClick={() => navigate('profile')}
              className="hover:bg-surface-dim transition-colors rounded-full active:opacity-80 w-8 h-8 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
                alt="avatar"
                data-alt="avatar clean, corporate headshot"
                className="w-full h-full object-cover"
              />
            </button>
          )}
        </div>
      </header>

      {/* Desktop Top App Bar (used across screens) */}
      <header className="hidden md:flex fixed top-0 right-0 left-64 z-30 bg-surface border-b border-surface-container px-8 h-16 shrink-0 justify-between items-center">
        <h1 className="text-lg font-bold text-on-surface">{getScreenTitle()}</h1>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('categories'); }} className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Categories</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('saved'); }} className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Saved</a>
          </nav>
          <div className="h-8 w-[1px] bg-surface-container"></div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search exams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-surface-container-low border-none text-xs rounded-full py-2 px-4 w-48 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
            <button className="relative p-2 text-outline hover:text-primary transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
