
import React from 'react';

interface Props {
  onStart: () => void;
}

const WelcomeView: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="flex h-full flex-col relative z-10 overflow-hidden bg-background-dark">
      <div className="w-full h-12 flex items-end justify-between px-6 pb-2 text-[13px] font-medium z-20">
        <span>9:41</span>
        <div className="flex gap-1.5 items-center">
          <span className="material-symbols-outlined text-[16px]">signal_cellular_alt</span>
          <span className="material-symbols-outlined text-[16px]">wifi</span>
          <span className="material-symbols-outlined text-[16px]">battery_full</span>
        </div>
      </div>

      <div className="w-full flex justify-center py-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined material-symbols-filled">lock_clock</span>
          </div>
          <span className="font-bold text-xl tracking-tight">FocusLock</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6">
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/20 to-transparent z-10"></div>
          <div 
            className="w-full h-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url("https://raw.githubusercontent.com/google/material-design-icons/master/symbols/web/lock/materialsymbolsoutlined/lock_24px.svg")' }}
          >
            {/* Fallback pattern for better look if hotlink is restricted */}
            <div className="w-full h-full flex items-center justify-center bg-[#0d1721]">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-[80px]"></div>
                    <img src="https://api.dicebear.com/7.x/shapes/svg?seed=lock&backgroundColor=0d1721" className="w-64 h-64 opacity-20" alt="" />
                    <span className="material-symbols-outlined text-[180px] text-cyan-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">shield_lock</span>
                </div>
            </div>
          </div>
          <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-[11px] font-semibold text-white">Protection Active</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-[40px] font-bold tracking-tight leading-none">
            Focus, <span className="text-primary">Unlocked.</span>
          </h1>
          <p className="text-text-secondary text-base leading-relaxed px-4">
            Instantly lock distracting apps and build better digital habits. Take back control of your screen time today.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-row items-center justify-center gap-2 py-6">
        <div className="h-1 w-6 rounded-full bg-primary/40"></div>
        <div className="h-1 w-6 rounded-full bg-primary"></div>
        <div className="h-1 w-1 rounded-full bg-slate-700"></div>
      </div>

      <div className="w-full px-6 pb-10">
        <button 
          onClick={onStart}
          className="flex w-full items-center justify-center rounded-2xl h-16 px-5 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all text-white text-[17px] font-bold shadow-[0_8px_20px_rgba(19,109,236,0.3)]"
        >
          Get Started
          <span className="material-symbols-outlined ml-2">arrow_forward</span>
        </button>
        <button className="w-full mt-6 text-text-secondary text-[15px] font-medium text-center">
          I already have an account
        </button>
      </div>
    </div>
  );
};

export default WelcomeView;
