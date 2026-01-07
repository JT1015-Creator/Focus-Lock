
import React from 'react';

interface Props {
  onBack: () => void;
}

const SettingsView: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="flex h-full flex-col bg-background-dark overflow-hidden">
      <div className="sticky top-0 z-10 flex items-center p-5 pb-3 justify-between bg-background-dark/95 backdrop-blur-md">
        <button onClick={onBack} className="flex size-10 items-center justify-start">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-[17px] font-bold">Settings</h2>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 no-scrollbar pb-12">
        <div className="bg-surface-dark border border-white/5 rounded-2xl p-5 shadow-xl mb-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-16 w-16 shrink-0 ring-1 ring-white/10" style={{ backgroundImage: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=Alex")' }}></div>
            <div className="flex flex-col min-w-0">
              <p className="text-[18px] font-bold">Alex Johnson</p>
              <p className="text-text-secondary text-[13px] truncate">alex.johnson@example.com</p>
              <div className="mt-1.5"><span className="bg-primary/20 text-primary text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Pro Member</span></div>
            </div>
          </div>
          <span className="material-symbols-outlined text-text-secondary">chevron_right</span>
        </div>

        <div className="flex flex-col gap-8">
          <section>
            <h3 className="text-text-secondary text-[11px] font-bold uppercase tracking-widest px-1 pb-3">General</h3>
            <div className="bg-surface-dark rounded-2xl overflow-hidden border border-white/5 divide-y divide-white/5 shadow-xl">
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 text-primary p-1.5 rounded-xl"><span className="material-symbols-outlined material-symbols-filled text-[22px]">lock</span></div>
                  <span className="font-bold text-[15px]">Strict Mode</span>
                </div>
                <div className="w-[51px] h-[31px] bg-slate-700 rounded-full relative"><div className="absolute right-[2px] top-[2px] size-[27px] bg-white rounded-full"></div></div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="bg-red-500/20 text-red-500 p-1.5 rounded-xl"><span className="material-symbols-outlined material-symbols-filled text-[22px]">emergency_home</span></div>
                  <span className="font-bold text-[15px]">Emergency Unlock</span>
                </div>
                <div className="w-[51px] h-[31px] bg-slate-700 rounded-full relative opacity-50"><div className="absolute left-[2px] top-[2px] size-[27px] bg-white rounded-full"></div></div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500/20 text-green-500 p-1.5 rounded-xl"><span className="material-symbols-outlined material-symbols-filled text-[22px]">face</span></div>
                  <span className="font-bold text-[15px]">Face ID</span>
                </div>
                <div className="w-[51px] h-[31px] bg-slate-700 rounded-full relative"><div className="absolute right-[2px] top-[2px] size-[27px] bg-white rounded-full"></div></div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 text-purple-400 p-1.5 rounded-xl"><span className="material-symbols-outlined material-symbols-filled text-[22px]">dark_mode</span></div>
                  <span className="font-bold text-[15px]">Appearance</span>
                </div>
                <div className="flex items-center gap-1.5 text-text-secondary text-[14px]">
                  <span>Dark</span>
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-text-secondary text-[11px] font-bold uppercase tracking-widest px-1 pb-3">Notifications</h3>
            <div className="bg-surface-dark rounded-2xl overflow-hidden border border-white/5 divide-y divide-white/5 shadow-xl">
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-500/20 text-orange-400 p-1.5 rounded-xl"><span className="material-symbols-outlined material-symbols-filled text-[22px]">notifications</span></div>
                  <span className="font-bold text-[15px]">Lock Reminders</span>
                </div>
                <div className="w-[51px] h-[31px] bg-slate-700 rounded-full relative"><div className="absolute right-[2px] top-[2px] size-[27px] bg-white rounded-full"></div></div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/20 text-blue-400 p-1.5 rounded-xl"><span className="material-symbols-outlined material-symbols-filled text-[22px]">bar_chart</span></div>
                  <span className="font-bold text-[15px]">Weekly Reports</span>
                </div>
                <div className="w-[51px] h-[31px] bg-slate-700 rounded-full relative"><div className="absolute right-[2px] top-[2px] size-[27px] bg-white rounded-full"></div></div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-text-secondary text-[11px] font-bold uppercase tracking-widest px-1 pb-3">Support & Account</h3>
            <div className="bg-surface-dark rounded-2xl overflow-hidden border border-white/5 divide-y divide-white/5 shadow-xl">
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-500/20 text-gray-400 p-1.5 rounded-xl"><span className="material-symbols-outlined material-symbols-filled text-[22px]">help</span></div>
                  <span className="font-bold text-[15px]">Help Center</span>
                </div>
                <span className="material-symbols-outlined text-text-secondary">chevron_right</span>
              </div>
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-500/20 text-gray-400 p-1.5 rounded-xl"><span className="material-symbols-outlined material-symbols-filled text-[22px]">shield</span></div>
                  <span className="font-bold text-[15px]">Privacy Policy</span>
                </div>
                <span className="material-symbols-outlined text-text-secondary">chevron_right</span>
              </div>
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4 text-red-500">
                  <div className="bg-red-500/20 p-1.5 rounded-xl"><span className="material-symbols-outlined material-symbols-filled text-[22px]">logout</span></div>
                  <span className="font-bold text-[15px]">Log Out</span>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center py-6">
            <p className="text-text-secondary/40 text-[12px] font-bold tracking-tight">Version 2.4.0 (Build 302)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
