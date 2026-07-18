import { useNavigation } from '../context/NavigationContext';
import { useData } from '../context/DataContext';
import { Bookmark, Check, Briefcase } from 'lucide-react';
import { TopBar } from '../components/TopBar';

export function SavedScreen() {
  const { navigate } = useNavigation();
  const { notifications, savedIds, toggleSave, setSelectedNotification, isSaved } = useData();

  const savedNotifications = notifications.filter(n => savedIds.includes(n.id));

  return (
    <>
      <TopBar />
      <main className="flex-1 px-4 md:px-6 pt-24 pb-24 md:pb-6 md:ml-64 w-full max-w-5xl mx-auto min-h-screen">
        <div className="mb-6">
          <h2 className="font-medium text-[22px] mb-2 text-on-surface">Saved Items</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedNotifications.length === 0 ? (
            <div className="col-span-full text-center text-sm text-outline p-8 bg-surface border border-surface-container rounded-2xl">
              No saved items yet.
            </div>
          ) : (
            savedNotifications.map(notification => (
              <article key={notification.id} className="bg-surface-container-lowest rounded-[20px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => {
                  setSelectedNotification(notification);
                  navigate('notification-details');
                }}>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-2 py-1 bg-surface-container text-on-surface-variant rounded font-medium text-[11px] uppercase flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> {notification.category}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave(notification.id);
                      }}
                      className="text-primary hover:text-error transition-colors"
                    >
                      <Bookmark className={`w-5 h-5 ${isSaved(notification.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  <h3 className="font-medium text-[18px] leading-[24px] mb-2 text-on-surface">{notification.title}</h3>
                  <p className="text-[14px] text-on-surface-variant mb-4 line-clamp-3">{notification.description}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-outline-variant/30 flex justify-end">
                  <button className="bg-primary-container text-on-primary-container hover:opacity-90 px-4 py-2 rounded-full font-medium text-[14px] transition-colors">Read More</button>
                </div>
              </article>
            ))
          )}
        </div>
      </main>
    </>
  );
}
