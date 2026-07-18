import { useNavigation } from '../context/NavigationContext';
import { Home, Grid, Bookmark, User, LayoutDashboard, Bell, Users, FileText, Settings } from 'lucide-react';

export function BottomNav() {
  const { currentScreen, navigate } = useNavigation();

  const isHome = currentScreen === 'home';
  const isCategories = currentScreen === 'categories';
  const isSaved = currentScreen === 'saved';
  const isProfile = currentScreen === 'profile';
  const isAdmin = currentScreen === 'admin';

  if (isAdmin) {
    return (
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface shadow-md flex justify-around items-center h-20 px-2 pb-safe border-t border-surface-container">
        <button 
          onClick={() => navigate('home')}
          className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:text-primary active:scale-95 transition-transform duration-200"
        >
          <Home className="mb-1 w-6 h-6" />
          <span className="text-[11px] font-medium mt-1">Home</span>
        </button>
        <button 
          onClick={() => navigate('categories')}
          className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:text-primary active:scale-95 transition-transform duration-200"
        >
          <Grid className="mb-1 w-6 h-6" />
          <span className="text-[11px] font-medium mt-1">Categories</span>
        </button>
        <button 
          onClick={() => navigate('saved')}
          className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:text-primary active:scale-95 transition-transform duration-200"
        >
          <Bookmark className="mb-1 w-6 h-6" />
          <span className="text-[11px] font-medium mt-1">Saved</span>
        </button>
        <button 
          onClick={() => navigate('profile')}
          className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:text-primary active:scale-95 transition-transform duration-200"
        >
          <User className="mb-1 w-6 h-6" />
          <span className="text-[11px] font-medium mt-1">Profile</span>
        </button>
      </nav>
    );
  }

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface shadow-md flex justify-around items-center h-20 px-2 pb-safe border-t border-surface-container">
      <button 
        onClick={() => navigate('home')}
        className={`flex flex-col items-center justify-center px-4 py-1 active:scale-95 transition-transform duration-200 ${isHome ? 'text-primary' : 'text-on-surface-variant'}`}
      >
        <div className={`px-4 py-1 rounded-full ${isHome ? 'bg-primary-container text-on-primary-container' : 'hover:bg-surface-dim'} transition-colors`}>
          <Home className="w-6 h-6" />
        </div>
        <span className={`text-[11px] ${isHome ? 'font-semibold text-primary' : 'font-medium'}`}>Home</span>
      </button>

      <button 
        onClick={() => navigate('categories')}
        className={`flex flex-col items-center justify-center px-4 py-1 active:scale-95 transition-transform duration-200 ${isCategories ? 'text-primary' : 'text-on-surface-variant'}`}
      >
        <div className={`px-4 py-1 rounded-full ${isCategories ? 'bg-primary-container text-on-primary-container' : 'hover:bg-surface-dim'} transition-colors`}>
          <Grid className="w-6 h-6" />
        </div>
        <span className={`text-[11px] ${isCategories ? 'font-semibold text-primary' : 'font-medium'}`}>Categories</span>
      </button>

      <button 
        onClick={() => navigate('saved')}
        className={`flex flex-col items-center justify-center px-4 py-1 active:scale-95 transition-transform duration-200 ${isSaved ? 'text-primary' : 'text-on-surface-variant'}`}
      >
        <div className={`px-4 py-1 rounded-full ${isSaved ? 'bg-primary-container text-on-primary-container' : 'hover:bg-surface-dim'} transition-colors`}>
          <Bookmark className="w-6 h-6" />
        </div>
        <span className={`text-[11px] ${isSaved ? 'font-semibold text-primary' : 'font-medium'}`}>Saved</span>
      </button>

      <button 
        onClick={() => navigate('profile')}
        className={`flex flex-col items-center justify-center px-4 py-1 active:scale-95 transition-transform duration-200 ${isProfile ? 'text-primary' : 'text-on-surface-variant'}`}
      >
        <div className={`px-4 py-1 rounded-full ${isProfile ? 'bg-primary-container text-on-primary-container' : 'hover:bg-surface-dim'} transition-colors`}>
          <User className="w-6 h-6" />
        </div>
        <span className={`text-[11px] ${isProfile ? 'font-semibold text-primary' : 'font-medium'}`}>Profile</span>
      </button>
    </nav>
  );
}
