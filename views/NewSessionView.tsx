
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  onEditApps: () => void;
}

const NewSessionView: React.FC<Props> = ({ onBack, onEditApps }) => {
  const [isStrict, setIsStrict] = useState(false);

  return (
    <div className="flex h-full flex-col bg-background-dark overflow-hidden">
      <header className="flex items-center justify-between px-5 py-4 shrink-0">
        <button onClick={onBack} className="flex size-10 items-center justify-center">
          <span className="material-symbols-outlined text-[28px]">close</span>
        </button>
        <h1 className="text-[17px] font-bold">New Lock Session</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="px-5 py-4">
          <div className="flex h-11 w-full rounded-xl bg-surface-dark border border-white/5 p-1">
            <button className="flex-1 bg-primary rounded-[10px] shadow-lg text-[14px] font-bold text-white">Fixed Time</button>
            <button className="flex-1 text-[14px] font-bold text-text-secondary">Usage Limit</button>
          </div>
        </div>

        <div className="relative w-full h-44 flex items-center justify-center overflow-hidden my-4">
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark z-10 pointer-events-none"></div>
          <div className="absolute top-1/2 left-5 right-5 -translate-y-1/2 h-14 bg-white/5 border-y border-white/10 z-0 rounded-2xl"></div>
          
          <div className="flex w-full px-12 gap-6 justify-center relative z-1 items-center">
            <div className="flex flex-col items-center gap-1.5 w-16">
              <span className="text-[20px] text-text-secondary opacity-40">08</span>
              <span className="text-[28px] font-bold py-1">09</span>
              <span className="text-[20px] text-text-secondary opacity-40">10</span>
            </div>
            <span className="text-[24px] font-bold self-center mb-0.5">:</span>
            <div className="flex flex-col items-center gap-1.5 w-16">
              <span className="text-[20px] text-text-secondary opacity-40">00</span>
              <span className="text-[28px] font-bold py-1">30</span>
              <span className="text-[20px] text-text-secondary opacity-40">45</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 w-16 ml-2">
              <span className="text-[22px] font-bold text-white">AM</span>
              <span className="text-[18px] text-text-secondary opacity-40">PM</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 px-5 mb-8">
          <div className="flex-1">
            <span className="text-text-secondary text-[11px] font-bold uppercase tracking-widest block mb-2 ml-1">Start Time</span>
            <div className="flex items-center justify-center h-14 bg-surface-dark border border-white/5 rounded-2xl font-bold text-[16px]">09:30 AM</div>
          </div>
          <div className="flex-1">
            <span className="text-text-secondary text-[11px] font-bold uppercase tracking-widest block mb-2 ml-1">End Time</span>
            <div className="flex items-center justify-center h-14 bg-surface-dark border border-white/5 rounded-2xl font-bold text-[16px]">05:00 PM</div>
          </div>
        </div>

        <div className="px-5 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[16px] font-bold">Repeat on</h2>
            <button className="text-[13px] font-bold text-primary">Every Weekday</button>
          </div>
          <div className="flex justify-between">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <button 
                key={i}
                className={`size-11 rounded-full flex items-center justify-center font-bold text-[13px] transition-all ${i < 5 ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-surface-dark border border-white/5 text-text-secondary'}`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[16px] font-bold">Blocking 4 Apps</h2>
            <button onClick={onEditApps} className="text-[13px] font-bold text-primary">Edit</button>
          </div>
          <div className="bg-surface-dark border border-white/5 rounded-2xl p-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center">
              <div className="size-12 rounded-xl bg-purple-500/80 flex items-center justify-center text-white ring-2 ring-surface-dark relative z-40">
                <span className="material-symbols-outlined text-[24px] material-symbols-filled">photo_camera</span>
              </div>
              <div className="size-12 rounded-xl bg-primary flex items-center justify-center text-white ring-2 ring-surface-dark -ml-3 relative z-30">
                <span className="material-symbols-outlined text-[24px] material-symbols-filled">chat</span>
              </div>
              <div className="size-12 rounded-xl bg-black flex items-center justify-center text-white ring-2 ring-surface-dark -ml-3 relative z-20 overflow-hidden">
                <span className="font-black text-[10px] tracking-tighter">RETWEET</span>
              </div>
              <div className="size-12 rounded-xl bg-orange-500 flex items-center justify-center text-white ring-2 ring-surface-dark -ml-3 relative z-10 overflow-hidden">
                 <span className="font-black text-[10px] tracking-tighter">TWEET</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-text-secondary">chevron_right</span>
          </div>
        </div>

        <div className="px-5 mb-10">
          <div className="bg-surface-dark border border-white/5 rounded-2xl p-5 flex items-center justify-between shadow-lg">
            <div className="flex flex-col">
              <span className="text-[16px] font-bold">Strict Mode</span>
              <span className="text-[12px] text-text-secondary mt-0.5">Prevent unlocking during session</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={isStrict} onChange={(e) => setIsStrict(e.target.checked)} className="sr-only peer"/>
              <div className="w-[51px] h-[31px] bg-slate-700 peer-focus:outline-none rounded-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-[27px] after:w-[27px] after:transition-all peer-checked:after:translate-x-[20px]"></div>
            </label>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-background-dark/80 backdrop-blur-xl border-t border-white/5 p-5 z-20 flex justify-center">
        <button onClick={onBack} className="w-full max-w-md h-16 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2 text-[17px]">
          <span className="material-symbols-outlined material-symbols-filled">lock_clock</span>
          Save Schedule
        </button>
      </div>
    </div>
  );
};

export default NewSessionView;
