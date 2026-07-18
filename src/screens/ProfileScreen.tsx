import { useNavigation } from '../context/NavigationContext';
import { ShieldCheck, Bell, Globe, Moon, Shield, FileText, Info, LogOut, ChevronRight } from 'lucide-react';
import { TopBar } from '../components/TopBar';

export function ProfileScreen() {
  const { navigate } = useNavigation();

  return (
    <>
      <TopBar />
      <main className="flex-grow px-4 md:px-6 py-6 md:py-24 max-w-3xl mx-auto w-full flex flex-col gap-6 md:ml-64 pt-24 pb-24">
        <section className="bg-surface-container-lowest rounded-xl p-4 flex items-center gap-4 shadow-sm">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-surface-container flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" 
              className="w-full h-full object-cover" 
              alt="User Avatar" 
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-[22px] text-on-surface">Alex Johnson</h1>
            <p className="text-[14px] text-on-surface-variant">alex.johnson@example.com</p>
            <div className="mt-2 flex items-center gap-1">
              <ShieldCheck className="text-primary w-4 h-4" />
              <span className="font-medium text-[11px] text-primary uppercase tracking-widest">Verified Account</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-medium text-[14px] text-on-surface-variant px-1">Account Settings</h2>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden divide-y divide-surface-container">
            <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors text-left group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center group-hover:bg-primary-container/30 transition-colors">
                  <Bell className="text-primary w-5 h-5" />
                </div>
                <span className="text-[16px] text-on-surface">Notification Preferences</span>
              </div>
              <ChevronRight className="text-outline-variant w-5 h-5" />
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors text-left group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center group-hover:bg-secondary-container/50 transition-colors">
                  <Globe className="text-secondary w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] text-on-surface">Language</span>
                  <span className="text-[14px] text-on-surface-variant">English (US)</span>
                </div>
              </div>
              <ChevronRight className="text-outline-variant w-5 h-5" />
            </button>
            <div className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-tertiary-container/30 flex items-center justify-center">
                  <Moon className="text-tertiary w-5 h-5" />
                </div>
                <span className="text-[16px] text-on-surface">Dark Mode</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-on-surface-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary peer-checked:after:bg-on-primary peer-checked:after:border-on-primary"></div>
              </label>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 mt-4">
          <h2 className="font-medium text-[14px] text-on-surface-variant px-1">Information</h2>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden divide-y divide-surface-container">
            <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors text-left group">
              <div className="flex items-center gap-4">
                <Shield className="text-on-surface-variant group-hover:text-primary transition-colors w-5 h-5" />
                <span className="text-[16px] text-on-surface">Privacy Policy</span>
              </div>
              <ChevronRight className="text-outline-variant w-5 h-5" />
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors text-left group">
              <div className="flex items-center gap-4">
                <FileText className="text-on-surface-variant group-hover:text-primary transition-colors w-5 h-5" />
                <span className="text-[16px] text-on-surface">Terms of Service</span>
              </div>
              <ChevronRight className="text-outline-variant w-5 h-5" />
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors text-left group">
              <div className="flex items-center gap-4">
                <Info className="text-on-surface-variant group-hover:text-primary transition-colors w-5 h-5" />
                <span className="text-[16px] text-on-surface">About</span>
              </div>
              <ChevronRight className="text-outline-variant w-5 h-5" />
            </button>
          </div>
        </section>

        <div className="mt-6 mb-6 w-full">
          <button 
            onClick={() => navigate('admin')}
            className="w-full py-3 px-4 rounded-full border border-outline text-error font-medium text-[14px] hover:bg-error-container/20 active:bg-error-container/40 transition-colors flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Switch to Admin View (Demo)
          </button>
        </div>

        <div className="text-center pb-6">
          <p className="font-medium text-[11px] text-outline-variant uppercase tracking-widest">App Version v1.0.4</p>
        </div>
      </main>
    </>
  );
}
