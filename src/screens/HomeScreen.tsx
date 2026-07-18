import { useNavigation } from '../context/NavigationContext';
import { useData } from '../context/DataContext';
import { ArrowRight, Check, Briefcase, Bookmark, FileText } from 'lucide-react';
import { TopBar } from '../components/TopBar';

export function HomeScreen() {
  const { navigate } = useNavigation();
  const { notifications, activeCategory, setActiveCategory, toggleSave, isSaved, searchQuery, setSelectedNotification, categories } = useData();

  const homeCategories = ['All', 'Government Jobs', 'Banking', 'Defence', 'Teaching', 'Scholarships', 'Schemes'];

  const filteredNotifications = notifications.filter(n => {
    const matchesCategory = activeCategory === 'All' || n.category === activeCategory;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.organization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <TopBar />
      <main className="flex-1 w-full mx-auto p-4 md:p-8 pt-20 md:pt-24 md:ml-64 pb-24 md:pb-8 grid grid-cols-1 md:grid-cols-12 gap-6 overflow-hidden">
        
        <div className="md:col-span-12 flex flex-col gap-1 mb-2">
          <h1 className="font-bold text-[22px] text-on-surface">Hello, Rahul!</h1>
          <p className="text-[12px] font-bold text-outline uppercase tracking-widest">Stay updated today.</p>
        </div>

        <section className="md:col-span-12 relative overflow-hidden rounded-2xl bg-surface border border-surface-container shadow-sm p-0">
          <div className="flex transition-transform duration-500 ease-in-out">
            <div className="min-w-full relative h-48 md:h-64 flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80" 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Banner" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/90 to-transparent p-6 flex flex-col justify-center">
                <span className="inline-block px-2 py-0.5 bg-primary-container text-on-primary-container font-bold text-[10px] rounded uppercase tracking-wide mb-2 w-max">Featured</span>
                <h2 className="font-bold text-lg md:text-xl text-inverse-on-surface mb-2 max-w-[70%] leading-tight">New National Scholarship Program 2024</h2>
                <button className="font-semibold text-xs text-inverse-primary hover:underline flex items-center gap-1 mt-auto w-max">
                  Apply Now <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="md:col-span-12">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {homeCategories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-2 shadow-sm ${activeCategory === cat ? 'bg-primary text-on-primary' : 'bg-surface text-on-surface-variant border border-surface-container hover:bg-surface-dim'}`}
              >
                {cat === 'All' && <Check className="w-[14px] h-[14px]" />} {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="md:col-span-8 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-on-surface uppercase tracking-tight">Trending Updates</h2>
            <button className="text-xs text-primary font-semibold" onClick={() => navigate('categories')}>View All</button>
          </div>
          <div className="flex flex-col gap-3">
            
            {filteredNotifications.length === 0 ? (
              <div className="text-center text-sm text-outline p-8 bg-surface border border-surface-container rounded-2xl">
                No updates found.
              </div>
            ) : (
              filteredNotifications.map(notification => (
                <div 
                  key={notification.id}
                  className={`bg-surface p-5 rounded-2xl border-l-4 ${notification.type === 'Urgent' ? 'border-l-primary' : notification.type === 'New' ? 'border-l-secondary' : 'border-l-tertiary'} shadow-md border border-surface-container cursor-pointer hover:shadow-lg transition-all`}
                  onClick={() => {
                    setSelectedNotification(notification);
                    navigate('notification-details');
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wide flex items-center gap-1 ${notification.type === 'Urgent' ? 'bg-error-container text-on-error-container' : 'bg-secondary-container text-on-secondary-container'}`}>
                      <Briefcase className="w-3 h-3" /> {notification.type} - {notification.category}
                    </span>
                    <span className="text-xs text-outline">{notification.postedDate}</span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface leading-tight mb-2">{notification.title}</h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">{notification.description}</p>
                  <div className="flex items-center justify-between text-xs text-outline font-medium">
                    <div className="flex items-center gap-1.5">
                      {notification.deadline !== 'N/A' && (
                         <>
                          <ArrowRight className="w-4 h-4 text-outline" />
                          <span className="text-primary font-bold">Deadline: {notification.deadline}</span>
                         </>
                      )}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave(notification.id);
                      }}
                      className={`px-3 py-1 rounded-md text-[10px] font-bold transition-colors uppercase ${isSaved(notification.id) ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'}`}
                    >
                      <Bookmark className={`w-3 h-3 inline mr-1 ${isSaved(notification.id) ? 'fill-current' : ''}`} /> {isSaved(notification.id) ? 'Saved' : 'Save'}
                    </button>
                  </div>
                </div>
              ))
            )}

          </div>
        </section>

        {/* Right Column Widgets */}
        <div className="hidden md:flex md:col-span-4 flex-col gap-6">
          {/* Categories Widget */}
          <div className="bg-surface rounded-2xl border border-surface-container shadow-sm overflow-hidden">
            <div className="bg-surface-dim px-5 py-3 border-b border-surface-container flex items-center justify-between">
              <h3 className="text-xs font-bold text-outline uppercase tracking-widest">Categories</h3>
              <ArrowRight className="w-4 h-4 text-outline" />
            </div>
            <div className="p-2 grid grid-cols-2 gap-2">
              <button className="p-3 rounded-xl border border-surface-container hover:border-primary-container hover:bg-primary-container transition-all text-left group">
                <div className="w-8 h-8 rounded-lg bg-error-container text-on-error-container flex items-center justify-center mb-2">🏛️</div>
                <p className="text-xs font-bold text-on-surface group-hover:text-primary">Central Govt</p>
                <p className="text-[10px] text-outline">244 jobs</p>
              </button>
              <button className="p-3 rounded-xl border border-surface-container hover:border-primary-container hover:bg-primary-container transition-all text-left group">
                <div className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center mb-2">🏦</div>
                <p className="text-xs font-bold text-on-surface group-hover:text-primary">Banking</p>
                <p className="text-[10px] text-outline">89 jobs</p>
              </button>
              <button className="p-3 rounded-xl border border-surface-container hover:border-primary-container hover:bg-primary-container transition-all text-left group">
                <div className="w-8 h-8 rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-2">🛡️</div>
                <p className="text-xs font-bold text-on-surface group-hover:text-primary">Defence</p>
                <p className="text-[10px] text-outline">12 jobs</p>
              </button>
              <button className="p-3 rounded-xl border border-surface-container hover:border-primary-container hover:bg-primary-container transition-all text-left group">
                <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center mb-2">🎓</div>
                <p className="text-xs font-bold text-on-surface group-hover:text-primary">Teaching</p>
                <p className="text-[10px] text-outline">156 jobs</p>
              </button>
            </div>
            <div className="p-4 border-t border-surface-container bg-surface-dim/50">
              <button className="w-full py-2 bg-primary text-on-primary rounded-lg text-xs font-bold shadow-md">Browse All Categories</button>
            </div>
          </div>

          {/* Recent Activity Widget */}
          <div className="bg-inverse-surface rounded-2xl p-5 text-inverse-on-surface shadow-xl relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-outline-variant mb-4">Saved Highlight</h4>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-surface-tint/20 rounded-lg flex items-center justify-center border border-primary/30">🔖</div>
                <div>
                  <p className="text-sm font-bold leading-tight">UPSC Civil Services 2024</p>
                  <p className="text-[10px] text-primary-container uppercase">Exam on June 16</p>
                </div>
              </div>
              <div className="bg-surface-tint/20 rounded-lg p-3 border border-primary/20">
                <div className="flex justify-between text-[10px] font-bold mb-1">
                  <span>Preparation Status</span>
                  <span>75%</span>
                </div>
                <div className="w-full h-1.5 bg-inverse-surface rounded-full overflow-hidden border border-outline/20">
                  <div className="w-3/4 h-full bg-primary-container"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
