import { useNavigation } from '../context/NavigationContext';
import { useData } from '../context/DataContext';
import { Search } from 'lucide-react';
import { TopBar } from '../components/TopBar';
import { useState } from 'react';

export function CategoryScreen() {
  const { navigate } = useNavigation();
  const { categories, setActiveCategory } = useData();
  const [localSearch, setLocalSearch] = useState('');

  const filteredCategories = categories.filter(c => c.name.toLowerCase().includes(localSearch.toLowerCase()) || c.subtitle.toLowerCase().includes(localSearch.toLowerCase()));

  return (
    <>
      <TopBar />
      <main className="flex-1 px-4 md:px-6 pt-24 pb-24 md:pb-6 md:ml-64 w-full max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="font-medium text-[22px] text-on-surface mb-2">Browse Categories</h2>
          <p className="text-[14px] text-on-surface-variant">Find relevant updates, notifications, and resources by sector.</p>
        </div>

        <div className="mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-outline w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search categories..." 
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-[14px] text-on-surface transition-shadow" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCategories.map(category => {
            const colors = ['primary', 'secondary', 'tertiary', 'error'];
            const color = colors[categories.indexOf(category) % colors.length];
            return (
              <button 
                key={category.id} 
                onClick={() => {
                  setActiveCategory(category.name);
                  navigate('home');
                }}
                className={`group block relative overflow-hidden bg-surface rounded-[20px] p-4 flex flex-col justify-between aspect-square transition-transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-${color} shadow-[0px_2px_8px_rgba(0,0,0,0.08)] text-left`}
              >
                <div className={`w-12 h-12 rounded-full bg-${color}-container flex items-center justify-center text-on-${color}-container mb-2 group-hover:scale-110 transition-transform text-2xl`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className={`font-medium text-[14px] text-on-surface group-hover:text-${color} transition-colors`}>{category.name}</h3>
                  <p className="font-medium text-[11px] text-on-surface-variant mt-1">{category.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </>
  );
}
