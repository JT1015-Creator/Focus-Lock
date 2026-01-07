
import React, { useState, useEffect } from 'react';
import { RewardService, REWARDS_DATA } from '../services/RewardService';

interface Props {
  onBack: () => void;
  onSettings: () => void;
}

const ProgressView: React.FC<Props> = ({ onBack, onSettings }) => {
  const [streak, setStreak] = useState(RewardService.getStreak());
  const unlockedIds = RewardService.getUnlockedRewards();
  const nextReward = RewardService.getNextReward();

  // Calculate progress for the next reward
  const currentProgress = nextReward 
    ? Math.min(100, Math.round((streak / nextReward.requirement) * 100))
    : 100;

  const handleSimulateStreak = () => {
    const newStreak = streak + 1;
    RewardService.setStreak(newStreak);
    setStreak(newStreak);
  };

  return (
    <div className="flex h-full flex-col bg-background-dark overflow-hidden">
      <div className="sticky top-0 z-10 flex items-center p-5 pb-3 justify-between bg-background-dark/90 backdrop-blur-md">
        <button onClick={onBack} className="flex size-10 items-center justify-start">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-[17px] font-bold">Your Progress</h2>
        <button onClick={onSettings} className="flex size-10 items-center justify-end">
          <span className="material-symbols-outlined text-[26px]">settings</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 no-scrollbar pb-36">
        <div className="flex flex-col gap-5 items-center mt-4">
          <div 
            className="relative flex items-center justify-center size-36 rounded-full bg-primary/10 ring-1 ring-white/5 shadow-2xl cursor-pointer active:scale-95 transition-transform"
            onClick={handleSimulateStreak}
            title="Tap to simulate streak progress"
          >
            <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(19,109,236,0.6)]">
                <span className="material-symbols-outlined text-white text-[64px] material-symbols-filled">local_fire_department</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[34px] font-bold tracking-tight">{streak} Day Streak</h1>
            <p className="text-text-secondary text-[15px] mt-1">Tap icon to simulate daily progress</p>
          </div>
        </div>

        <div className="bg-surface-dark border border-white/5 rounded-2xl p-5 text-center mt-8">
          <p className="text-text-secondary text-[14px] font-medium italic">"Consistency is the bridge between goals and accomplishment."</p>
        </div>

        {nextReward && (
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex justify-between items-center px-1">
              <p className="text-[16px] font-bold">Next Reward</p>
              <p className="text-primary text-[13px] font-bold">{nextReward.requirement - streak} days left</p>
            </div>
            <div className="bg-surface-dark rounded-2xl p-5 border border-white/5 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 p-2.5 rounded-xl text-primary">
                  <span className={`material-symbols-outlined material-symbols-filled`}>{nextReward.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[15px]">{nextReward.name}</span>
                  <span className="text-text-secondary text-[12px]">{nextReward.description}</span>
                </div>
              </div>
              <div className="rounded-full bg-white/5 h-2.5 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-primary transition-all duration-500 shadow-[0_0_10px_rgba(19,109,236,0.4)]" 
                  style={{ width: `${currentProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4 mt-10">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-[17px] font-bold">Achievements</h3>
            <button className="text-primary text-[14px] font-bold">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {REWARDS_DATA.map(reward => {
              const isUnlocked = unlockedIds.includes(reward.id);
              return (
                <div 
                  key={reward.id} 
                  className={`p-5 rounded-2xl bg-surface-dark flex flex-col items-center gap-4 border border-white/5 shadow-xl transition-all ${!isUnlocked ? 'opacity-40 grayscale' : 'hover:scale-105'}`}
                >
                  <div className={`size-14 rounded-full flex items-center justify-center ${isUnlocked ? reward.colorClass : 'bg-white/5 text-text-secondary'}`}>
                    <span className={`material-symbols-outlined text-[28px] ${isUnlocked ? 'material-symbols-filled' : ''}`}>
                      {isUnlocked ? reward.icon : 'lock'}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-[15px]">{reward.name}</p>
                    <p className="text-text-secondary text-[12px] mt-0.5">
                      {isUnlocked ? 'Unlocked' : reward.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-background-dark/80 backdrop-blur-xl border-t border-white/5 p-5 z-20 flex justify-center">
        <button onClick={onBack} className="w-full max-w-md h-16 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2 text-[17px]">
          <span className="material-symbols-outlined material-symbols-filled">play_arrow</span>
          Start Focus Session
        </button>
      </div>
    </div>
  );
};

export default ProgressView;
