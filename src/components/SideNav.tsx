import { useNavigation } from '../context/NavigationContext';
import { Home, Grid, Bookmark, User, LayoutDashboard, Bell, Users, FileText, Settings } from 'lucide-react';

export function SideNav() {
  const { currentScreen, navigate } = useNavigation();

  if (currentScreen === 'admin') {
    return (
      <aside className="hidden md:flex flex-col w-64 bg-surface border-r border-surface-container shrink-0 h-screen fixed left-0 top-0">
        <div className="p-6 border-b border-surface-container">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-on-primary font-bold">G</div>
            <span className="font-bold text-xl tracking-tight uppercase">GovNotify</span>
          </div>
        </div>
        <div className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto">
          <div className="px-4 py-2">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Admin</span>
          </div>
          <button className="flex flex-col items-start px-6 py-3 bg-primary-container text-on-primary-container border-r-4 border-primary w-full text-left">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-5 h-5" />
              <span className="font-semibold">Dashboard</span>
            </div>
          </button>
          <button className="flex flex-col items-start px-6 py-3 text-on-surface-variant hover:bg-surface-dim transition-colors w-full text-left">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </div>
          </button>
          <button className="flex flex-col items-start px-6 py-3 text-on-surface-variant hover:bg-surface-dim transition-colors w-full text-left">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <span>Users</span>
            </div>
          </button>
          <button className="flex flex-col items-start px-6 py-3 text-on-surface-variant hover:bg-surface-dim transition-colors w-full text-left">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5" />
              <span>Applications</span>
            </div>
          </button>
          <button className="flex flex-col items-start px-6 py-3 text-on-surface-variant hover:bg-surface-dim transition-colors w-full text-left">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </div>
          </button>
        </div>
      </aside>
    );
  }

  return (
    <nav className="hidden md:flex flex-col w-64 bg-surface border-r border-surface-container shrink-0 h-screen fixed left-0 top-0 z-40">
      <div className="p-6 border-b border-surface-container">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-on-primary font-bold">G</div>
          <span className="font-bold text-xl tracking-tight uppercase text-on-surface">GovNotify</span>
        </div>
      </div>
      <div className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto">
        <div className="px-4 py-2">
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Main Menu</span>
        </div>
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); navigate('home'); }}
          className={`flex flex-col items-start px-6 py-3 transition-colors ${currentScreen === 'home' ? 'bg-primary-container text-on-primary-container border-r-4 border-primary' : 'text-on-surface-variant hover:bg-surface-dim'}`}
        >
          <div className="flex items-center gap-3">
            <Home className="w-5 h-5" />
            <span className={currentScreen === 'home' ? 'font-semibold' : ''}>Home</span>
          </div>
        </a>
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); navigate('categories'); }}
          className={`flex flex-col items-start px-6 py-3 transition-colors ${currentScreen === 'categories' ? 'bg-primary-container text-on-primary-container border-r-4 border-primary' : 'text-on-surface-variant hover:bg-surface-dim'}`}
        >
          <div className="flex items-center gap-3">
            <Grid className="w-5 h-5" />
            <span className={currentScreen === 'categories' ? 'font-semibold' : ''}>Categories</span>
          </div>
        </a>
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); navigate('saved'); }}
          className={`flex flex-col items-start px-6 py-3 transition-colors ${currentScreen === 'saved' ? 'bg-primary-container text-on-primary-container border-r-4 border-primary' : 'text-on-surface-variant hover:bg-surface-dim'}`}
        >
          <div className="flex items-center gap-3">
            <Bookmark className="w-5 h-5" />
            <span className={currentScreen === 'saved' ? 'font-semibold' : ''}>Saved</span>
          </div>
        </a>
        <div className="px-4 py-2 mt-4">
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Account</span>
        </div>
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); navigate('profile'); }}
          className={`flex flex-col items-start px-6 py-3 transition-colors ${currentScreen === 'profile' ? 'bg-primary-container text-on-primary-container border-r-4 border-primary' : 'text-on-surface-variant hover:bg-surface-dim'}`}
        >
          <div className="flex items-center gap-3">
            <User className="w-5 h-5" />
            <span className={currentScreen === 'profile' ? 'font-semibold' : ''}>Profile</span>
          </div>
        </a>
      </div>
      <div className="p-4 border-t border-surface-container">
        <div className="flex items-center gap-3 bg-surface-container-low p-2 rounded-lg cursor-pointer hover:bg-surface-container transition-colors" onClick={() => navigate('profile')}>
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex-shrink-0 border border-surface overflow-hidden">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" alt="avatar" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold truncate text-on-surface">Alex Johnson</p>
            <p className="text-[10px] text-on-surface-variant truncate">Premium Member</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
