import { useNavigation } from '../context/NavigationContext';
import { Plus, Bell, Users, FileText, Megaphone, FileEdit, Trash2, Edit2 } from 'lucide-react';

export function AdminScreen() {
  const { navigate } = useNavigation();

  return (
    <>
      <header className="bg-surface dark:bg-background fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-6 h-16 shadow-sm border-b border-surface-container">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-[28px] md:text-[32px] text-primary hidden md:block">GovNotify Admin</span>
          <span className="font-medium text-[22px] text-primary md:hidden">GovNotify</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="active:opacity-80 p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
            <Bell className="w-6 h-6" />
          </button>
          <div 
            className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant cursor-pointer"
            onClick={() => navigate('profile')}
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" 
              alt="avatar" 
              data-alt="avatar"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </header>
      
      <main className="flex-1 overflow-y-auto p-4 md:p-6 md:ml-64 pt-24 pb-24 h-screen">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="font-semibold text-[28px] md:text-[32px] text-on-surface">Admin Overview</h2>
              <p className="text-[14px] text-on-surface-variant mt-1">Manage system notifications and activity.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-medium text-[14px] hover:opacity-90 transition-opacity shadow-md">
              <Plus className="w-5 h-5" />
              Create Notification
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-surface-variant flex flex-col gap-2 relative overflow-hidden group">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary mb-2">
                <Bell className="w-6 h-6" />
              </div>
              <p className="font-medium text-[14px] text-on-surface-variant">Total Notifications</p>
              <h3 className="text-[57px] leading-[64px] text-on-surface tracking-tight">128</h3>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-surface-variant flex flex-col gap-2 relative overflow-hidden group">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary mb-2">
                <Users className="w-6 h-6" />
              </div>
              <p className="font-medium text-[14px] text-on-surface-variant">Active Users</p>
              <h3 className="text-[57px] leading-[64px] text-on-surface tracking-tight">1.2k</h3>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-surface-variant flex flex-col gap-2 relative overflow-hidden group">
              <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container mb-2">
                <FileText className="w-6 h-6" />
              </div>
              <p className="font-medium text-[14px] text-on-surface-variant">Total Applications</p>
              <h3 className="text-[57px] leading-[64px] text-on-surface tracking-tight">450</h3>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant overflow-hidden">
            <div className="p-6 border-b border-surface-variant flex justify-between items-center bg-surface-bright">
              <h3 className="font-medium text-[22px] text-on-surface">Recent Activities</h3>
              <button className="text-primary font-medium text-[14px] hover:underline">View All</button>
            </div>
            <div className="divide-y divide-surface-variant">
              <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-surface-container-low transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0 mt-1 md:mt-0">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-error-container text-on-error-container uppercase tracking-wider">Urgent</span>
                      <span className="font-medium text-[11px] text-on-surface-variant">2 hours ago</span>
                    </div>
                    <h4 className="font-medium text-[16px] text-on-surface mb-1">SSC CGL Post Created</h4>
                    <p className="text-[14px] text-on-surface-variant line-clamp-1">New notification published for Staff Selection Commission Combined Graduate Level Examination.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end md:self-center">
                  <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-full transition-colors">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/50 rounded-full transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-surface-container-low transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0 mt-1 md:mt-0">
                    <FileEdit className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container uppercase tracking-wider">Update</span>
                      <span className="font-medium text-[11px] text-on-surface-variant">5 hours ago</span>
                    </div>
                    <h4 className="font-medium text-[16px] text-on-surface mb-1">UPSC Prelims Results Updated</h4>
                    <p className="text-[14px] text-on-surface-variant line-clamp-1">Modified the result links and added additional annexures to the existing post.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end md:self-center">
                  <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-full transition-colors">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/50 rounded-full transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-surface-container-low transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0 mt-1 md:mt-0">
                    <Trash2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-[11px] text-on-surface-variant">Yesterday</span>
                    </div>
                    <h4 className="font-medium text-[16px] text-on-surface mb-1">Outdated Admit Card Notice Removed</h4>
                    <p className="text-[14px] text-on-surface-variant line-clamp-1">System auto-archived and removed the notice for RRB Group D 2022 as it expired.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end md:self-center">
                  <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-full transition-colors" disabled>
                    <Edit2 className="w-5 h-5 opacity-50" />
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/50 rounded-full transition-colors" disabled>
                    <Trash2 className="w-5 h-5 opacity-50" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <button className="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-lg flex items-center justify-center z-40 hover:bg-primary/90 active:scale-95 transition-all">
        <Plus className="w-6 h-6" />
      </button>
    </>
  );
}
