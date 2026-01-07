
export enum AppView {
  WELCOME = 'welcome',
  DASHBOARD = 'dashboard',
  PROGRESS = 'progress',
  SETTINGS = 'settings',
  APP_SELECTION = 'app_selection',
  NEW_SESSION = 'new_session'
}

export interface AppInfo {
  id: string;
  name: string;
  category: string;
  icon: string;
  color?: string;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  requirement?: string;
  colorClass: string;
}
