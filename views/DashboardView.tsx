
import React from 'react';

interface Props {
  onProgress: () => void;
  onSettings: () => void;
  onAddSession: () => void;
}

const DashboardView: React.FC<Props> = ({ onProgress, onSettings, onAddSession }) => {
  return (
    <div className="flex h-full flex-col bg-background-dark">
      <div className="flex items-center px-5 py-4 justify-between sticky top-0 z-50 bg-background-dark/90 backdrop-blur-xl">
        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-1 ring-white/10" style={{ backgroundImage: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=Alex")' }}></div>
        <h2 className="text-[17px] font-bold flex-1 text-center">Dashboard</h2>
        <button className="rounded-full size-10 flex items-center justify-end text-white/80">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-36">
        <div className="flex flex-col gap-4 px-5 py-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-primary font-bold tracking-widest uppercase text-[11px]">Focus Mode Active</span>
            <h1 className="text-[44px] font-bold tabular-nums tracking-tight">01:24:30</h1>
            <p className="text-text-secondary text-[14px]">Time remaining until freedom</p>
          </div>

          <div className="flex flex-col gap-2.5 mt-6">
            <div className="flex justify-between items-center px-1">
              <span className="text-[13px] font-medium text-text-secondary">Progress</span>
              <span className="text-[13px] font-bold text-primary">65%</span>
            </div>
            <div className="h-[9px] w-full rounded-full bg-white/5 overflow-hidden">
              <div className="h-full rounded-full bg-primary shadow-[0_0_10px_rgba(19,109,236,0.5)] transition-all duration-500" style={{ width: '65%' }}></div>
            </div>
            <p className="text-text-secondary text-[14px] text-center mt-3">You are doing great! Keep it up.</p>
          </div>
        </div>

        <div className="flex flex-col px-5 gap-4">
          <h3 className="text-[16px] font-bold">Quick Actions</h3>
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            <button className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-surface-dark border border-white/5 px-4 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[20px] material-symbols-filled">pause</span>
              <span className="text-[14px] font-semibold">Pause (5m)</span>
            </button>
            <button className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-surface-dark border border-white/5 px-4 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[20px] material-symbols-filled">add_circle</span>
              <span className="text-[14px] font-semibold">Extend (15m)</span>
            </button>
            <button className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary/20 border border-primary/40 px-4 text-primary">
              <span className="material-symbols-outlined text-[20px] material-symbols-filled">verified_user</span>
              <span className="text-[14px] font-semibold">Strict Mode</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col px-5 mt-8">
          <div className="flex items-center justify-between pb-3">
            <h3 className="text-[16px] font-bold">Active Locks</h3>
            <button className="text-primary text-[13px] font-bold">Manage</button>
          </div>
          <div className="flex flex-col gap-3">
            {/* Social Media Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-dark border border-white/5 shadow-xl">
              <div className="relative size-14 shrink-0 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[30px] material-symbols-filled">photo_camera</span>
                <div className="absolute -bottom-1 -right-1 bg-surface-dark rounded-full p-0.5 border border-white/5">
                  <span className="material-symbols-outlined text-red-500 text-[14px] bg-red-500/20 rounded-full p-1 material-symbols-filled">lock</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[16px] font-bold">Social Media</h4>
                <p className="text-text-secondary text-[13px] truncate">Instagram, TikTok, Twitter</p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="text-[13px] font-bold tabular-nums">Until 5:00 PM</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-500 uppercase">Locked</span>
              </div>
            </div>

            {/* Communication Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-dark border border-white/5 shadow-xl">
              <div className="relative size-14 shrink-0 rounded-2xl bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[30px] material-symbols-filled">mail</span>
                <div className="absolute -bottom-1 -right-1 bg-surface-dark rounded-full p-0.5 border border-white/5">
                  <span className="material-symbols-outlined text-orange-400 text-[14px] bg-orange-400/20 rounded-full p-1 material-symbols-filled">schedule</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[16px] font-bold">Communication</h4>
                <p className="text-text-secondary text-[13px] truncate">Mail, Slack, Messages</p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="text-[13px] font-bold tabular-nums">15m left</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-400/20 text-orange-400 uppercase">Allowance</span>
              </div>
            </div>

            {/* Games Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-dark border border-white/5 shadow-xl opacity-60">
              <div className="relative size-14 shrink-0 rounded-2xl bg-teal-500/40 flex items-center justify-center text-white/50">
                <span className="material-symbols-outlined text-[30px] material-symbols-filled">videogame_asset</span>
                <div className="absolute -bottom-1 -right-1 bg-surface-dark rounded-full p-0.5 border border-white/5">
                  <span className="material-symbols-outlined text-gray-400 text-[14px] bg-gray-400/20 rounded-full p-1 material-symbols-filled">lock</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[16px] font-bold">Games</h4>
                <p className="text-text-secondary text-[13px] truncate">All installed games</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[13px] font-bold text-text-secondary">Scheduled</span>
                <span className="text-[11px] text-text-secondary">Starts 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 px-5">
          <button className="w-full h-14 flex items-center justify-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/5 text-red-500 active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined text-[20px] material-symbols-filled">lock_open</span>
            <span className="text-[16px] font-bold">Emergency Override</span>
          </button>
          <p className="text-center text-[12px] text-text-secondary mt-3">Use only if necessary. Breaks your streak.</p>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#0B121A] border-t border-white/5 pt-3 px-6 pb-8 z-50">
        <div className="flex justify-between items-end">
          <button className="flex flex-col items-center gap-1.5 text-primary">
            <span className="material-symbols-outlined text-[26px] material-symbols-filled">grid_view</span>
            <span className="text-[11px] font-bold">Home</span>
          </button>
          <button onClick={onProgress} className="flex flex-col items-center gap-1.5 text-text-secondary">
            <span className="material-symbols-outlined text-[26px]">calendar_today</span>
            <span className="text-[11px] font-bold">Schedule</span>
          </button>
          <div className="relative -top-3">
            <button onClick={onAddSession} className="flex items-center justify-center size-16 rounded-full bg-primary shadow-xl shadow-primary/40 text-white">
              <span className="material-symbols-outlined text-[32px]">add</span>
            </button>
          </div>
          <button onClick={onProgress} className="flex flex-col items-center gap-1.5 text-text-secondary">
            <span className="material-symbols-outlined text-[26px]">bar_chart</span>
            <span className="text-[11px] font-bold">Stats</span>
          </button>
          <button onClick={onSettings} className="flex flex-col items-center gap-1.5 text-text-secondary">
            <span className="material-symbols-outlined text-[26px]">settings</span>
            <span className="text-[11px] font-bold">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
