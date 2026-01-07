
export interface Reward {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number; // Days needed
  colorClass: string;
}

export const REWARDS_DATA: Reward[] = [
  { id: 'novice', name: 'Novice Badge', description: 'Complete 1 focus session', icon: 'military_tech', requirement: 1, colorClass: 'text-orange-400 bg-orange-400/10' },
  { id: 'dark', name: 'Dark Theme', description: '3 Day Streak', icon: 'dark_mode', requirement: 3, colorClass: 'text-purple-400 bg-purple-400/10' },
  { id: 'pro', name: 'Pro Stats', description: '14 Day Streak', icon: 'bar_chart', requirement: 14, colorClass: 'text-blue-400 bg-blue-400/10' },
  { id: 'master', name: 'Zen Master', description: '30 Day Streak', icon: 'self_improvement', requirement: 30, colorClass: 'text-emerald-400 bg-emerald-400/10' },
];

export const RewardService = {
  getStreak: (): number => {
    return parseInt(localStorage.getItem('focus_streak') || '12');
  },
  
  setStreak: (val: number) => {
    localStorage.setItem('focus_streak', val.toString());
  },

  getUnlockedRewards: (): string[] => {
    const streak = RewardService.getStreak();
    return REWARDS_DATA.filter(r => streak >= r.requirement).map(r => r.id);
  },

  getNextReward: () => {
    const streak = RewardService.getStreak();
    return REWARDS_DATA.find(r => r.requirement > streak) || null;
  }
};
