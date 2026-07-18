import { useNavigation } from '../context/NavigationContext';
import { useData } from '../context/DataContext';
import { Bookmark, Share2, Briefcase, Landmark, Calendar, CalendarX, Info, ShieldCheck, CheckCircle2, CalendarDays, FileText, Globe, Send, MapPin, IndianRupee } from 'lucide-react';

export function NotificationDetailScreen() {
  const { navigate } = useNavigation();
  const { selectedNotification, toggleSave, isSaved } = useData();

  if (!selectedNotification) {
    return (
      <div className="bg-background text-on-surface antialiased min-h-screen pt-16 pb-32 flex items-center justify-center">
        <p>Notification not found.</p>
        <button onClick={() => navigate('home')} className="ml-4 text-primary underline">Go Home</button>
      </div>
    );
  }

  const saved = isSaved(selectedNotification.id);

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen pt-16 pb-32">
      <header className="fixed top-0 w-full z-50 bg-surface text-primary flex justify-between items-center px-4 md:px-6 h-16 w-full shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('home')}
            className="hover:bg-surface-container-low transition-colors rounded-full p-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="font-semibold text-[28px] text-primary">GovNotify</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('profile')}
            className="hover:bg-surface-container-low transition-colors rounded-full p-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" 
              className="w-8 h-8 rounded-full object-cover" 
              alt="avatar" 
              data-alt="avatar" 
            />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="relative w-full h-64 md:h-80 rounded-b-xl overflow-hidden mb-6 shadow-md group">
          <div className="bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105" 
               style={{backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=400&fit=crop')"}}
          ></div>
          <div className="absolute top-4 right-4 flex gap-2">
            <button 
              onClick={() => toggleSave(selectedNotification.id)}
              className="bg-surface/80 backdrop-blur-sm text-primary hover:bg-surface-container transition-colors rounded-full p-2 shadow-sm flex items-center justify-center"
            >
              <Bookmark className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
            </button>
            <button className="bg-surface/80 backdrop-blur-sm text-primary hover:bg-surface-container transition-colors rounded-full p-2 shadow-sm flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full font-medium text-[11px] uppercase tracking-wide shadow-sm flex items-center gap-1">
              <Briefcase className="w-4 h-4" /> {selectedNotification.category}
            </span>
          </div>
        </div>

        <div className="bg-surface rounded-xl p-6 shadow-md mb-6 border border-surface-container">
          <h1 className="font-semibold text-[28px] md:text-[32px] text-on-surface mb-2">{selectedNotification.title}</h1>
          <div className="flex items-center gap-2 mb-4 text-on-surface-variant">
            <Landmark className="w-5 h-5" />
            <span className="text-[14px]">{selectedNotification.organization}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-surface-container-low p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-[11px] text-on-surface-variant">Posted Date</div>
                <div className="font-medium text-[14px] text-on-surface truncate">{selectedNotification.postedDate}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-on-error-container shrink-0">
                <CalendarX className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-[11px] text-on-surface-variant">Last Date</div>
                <div className="font-medium text-[14px] text-error truncate">{selectedNotification.deadline}</div>
              </div>
            </div>
            {selectedNotification.salary && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container shrink-0">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-[11px] text-on-surface-variant">Salary</div>
                  <div className="font-medium text-[14px] text-on-surface truncate">{selectedNotification.salary}</div>
                </div>
              </div>
            )}
            {selectedNotification.location && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-[11px] text-on-surface-variant">Location</div>
                  <div className="font-medium text-[14px] text-on-surface truncate">{selectedNotification.location}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-surface rounded-xl p-6 shadow-md border border-surface-container">
              <h2 className="font-medium text-[22px] mb-4 flex items-center gap-2 text-primary">
                <Info className="w-6 h-6" /> Details
              </h2>
              <div className="text-[16px] text-on-surface-variant space-y-4">
                <p>{selectedNotification.details.fullDescription}</p>
              </div>
            </div>
            
            <div className="bg-surface rounded-xl p-6 shadow-md border border-surface-container">
              <h2 className="font-medium text-[22px] mb-4 flex items-center gap-2 text-primary">
                <ShieldCheck className="w-6 h-6" /> Eligibility Criteria
              </h2>
              <ul className="space-y-3 text-[14px] text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Education:</strong> {selectedNotification.details.education}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Age Limit:</strong> {selectedNotification.details.ageLimit}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Nationality:</strong> {selectedNotification.details.nationality}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-surface rounded-xl shadow-md border border-surface-container overflow-hidden sticky top-24">
              <div className="bg-surface-container-low p-4 border-b border-surface-variant">
                <h2 className="font-medium text-[18px] flex items-center gap-2 text-on-surface">
                  <CalendarDays className="w-5 h-5" /> Important Dates
                </h2>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-surface-container">
                  <div className="text-[14px] text-on-surface-variant">Posted On</div>
                  <div className="font-medium text-[14px] text-on-surface">{selectedNotification.postedDate}</div>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-surface-container">
                  <div className="text-[14px] text-on-surface-variant">Last Date</div>
                  <div className="font-medium text-[14px] text-error">{selectedNotification.deadline}</div>
                </div>
                {selectedNotification.details.tier1ExamDate && (
                  <div className="flex justify-between items-center pb-2 border-b border-surface-container">
                    <div className="text-[14px] text-on-surface-variant">Exam Date</div>
                    <div className="font-medium text-[14px] text-on-surface">{selectedNotification.details.tier1ExamDate}</div>
                  </div>
                )}
                {selectedNotification.details.resultDate && (
                  <div className="flex justify-between items-center">
                    <div className="text-[14px] text-on-surface-variant">Result Date</div>
                    <div className="font-medium text-[14px] text-primary">{selectedNotification.details.resultDate}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 w-full z-40 bg-surface border-t border-surface-container shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] p-4 flex flex-wrap md:flex-nowrap justify-center md:justify-end items-center gap-3">
        <button className="px-4 py-2 rounded-lg font-medium text-[14px] border border-outline text-on-surface-variant hover:bg-surface-container-low transition-colors flex items-center gap-2">
          <FileText className="w-4 h-4" /> Download PDF
        </button>
        <button className="px-4 py-2 rounded-lg font-medium text-[14px] bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim transition-colors flex items-center gap-2">
          <Globe className="w-4 h-4" /> Official Website
        </button>
        <button className="px-6 py-2 rounded-lg font-medium text-[14px] bg-primary text-on-primary hover:bg-surface-tint transition-colors shadow-md flex items-center gap-2">
          <Send className="w-4 h-4" /> Apply Now
        </button>
      </div>
    </div>
  );
}
