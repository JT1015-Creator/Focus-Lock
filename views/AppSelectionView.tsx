
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  selectedApps: string[];
  setSelectedApps: React.Dispatch<React.SetStateAction<string[]>>;
}

const AppSelectionView: React.FC<Props> = ({ onBack, selectedApps, setSelectedApps }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Social', 'Games', 'Productivity'];

  const apps = [
    { id: 'insta', name: 'Instagram', icon: 'photo_camera', color: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600' },
    { id: 'tiktok', name: 'TikTok', icon: 'music_note', color: 'bg-black' },
    { id: 'youtube', name: 'YouTube', icon: 'play_arrow', color: 'bg-red-600' },
    { id: 'sample', name: 'Sample..', icon: 'grid_view', color: 'bg-purple-500' },
    { id: 'gmail', name: 'Gmail', icon: 'mail', color: 'bg-white text-red-600' },
    { id: 'netflix', name: 'Netflix', icon: 'movie', color: 'bg-black text-red-600' },
    { id: 'slack', name: 'Slack', icon: 'forum', color: 'bg-[#4A154B]' },
    { id: 'whatsapp', name: 'WhatsApp', icon: 'chat', color: 'bg-[#25D366]' },
  ];

  const toggleApp = (id: string) => {
    setSelectedApps(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  return (
    <div className="flex h-full flex-col bg-background-dark overflow-hidden">
      <div className="flex items-center px-5 py-4 justify-between sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md">
        <button onClick={onBack} className="flex size-10 items-center justify-start">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-[17px] font-bold">Select Apps to Lock</h2>
        <button className="text-primary text-[15px] font-bold">Select All</button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="px-5 py-2">
            <div className="relative flex items-center">
                <span className="absolute left-4 material-symbols-outlined text-text-secondary">search</span>
                <input 
                    type="text"
                    className="w-full h-12 bg-surface-dark border-none rounded-2xl pl-12 pr-4 text-[15px] placeholder:text-text-secondary focus:ring-1 focus:ring-primary/50"
                    placeholder="Search apps..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>

        <div className="flex gap-2 px-5 py-4 overflow-x-auto no-scrollbar">
            {categories.map(cat => (
                <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-surface-dark text-text-secondary border border-white/5'}`}
                >
                    {cat}
                </button>
            ))}
        </div>

        <div className="px-5 pt-4">
            <h3 className="text-[17px] font-bold mb-4">Most Used</h3>
            <div className="grid grid-cols-4 gap-4">
                {apps.slice(0, 4).map(app => (
                    <button key={app.id} onClick={() => toggleApp(app.id)} className="flex flex-col items-center gap-2">
                        <div className={`size-[72px] rounded-2xl ${app.color} flex items-center justify-center shadow-lg relative ${selectedApps.includes(app.id) ? 'ring-[3px] ring-primary ring-offset-4 ring-offset-background-dark' : ''}`}>
                            <span className="material-symbols-outlined text-[32px] material-symbols-filled">{app.icon}</span>
                        </div>
                        <span className="text-[12px] font-medium text-center truncate w-full">{app.name}</span>
                    </button>
                ))}
            </div>
        </div>

        <div className="px-5 pt-10">
            <h3 className="text-[17px] font-bold mb-4">All Apps</h3>
            <div className="grid grid-cols-4 gap-4">
                {apps.slice(4).map(app => (
                    <button key={app.id} onClick={() => toggleApp(app.id)} className="flex flex-col items-center gap-2">
                        <div className={`size-[72px] rounded-2xl ${app.color} flex items-center justify-center shadow-lg relative ${selectedApps.includes(app.id) ? 'ring-[3px] ring-primary ring-offset-4 ring-offset-background-dark' : ''}`}>
                            <span className="material-symbols-outlined text-[32px] material-symbols-filled">{app.icon}</span>
                        </div>
                        <span className="text-[12px] font-medium text-center truncate w-full">{app.name}</span>
                    </button>
                ))}
            </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-5 bg-background-dark/95 backdrop-blur-md border-t border-white/5 flex justify-center z-50">
        <button 
          onClick={onBack}
          className="w-full max-w-md h-16 flex items-center justify-center bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 text-[17px]"
        >
          Lock {selectedApps.length} Apps
        </button>
      </div>
    </div>
  );
};

export default AppSelectionView;
