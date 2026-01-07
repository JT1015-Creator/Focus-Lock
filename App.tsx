
import React, { useState, useEffect } from 'react';
import { AppView } from './types';
import WelcomeView from './views/WelcomeView';
import DashboardView from './views/DashboardView';
import ProgressView from './views/ProgressView';
import SettingsView from './views/SettingsView';
import AppSelectionView from './views/AppSelectionView';
import NewSessionView from './views/NewSessionView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.WELCOME);
  const [selectedApps, setSelectedApps] = useState<string[]>(['insta', 'tiktok', 'whatsapp']);

  const navigateTo = (view: AppView) => setCurrentView(view);

  const renderView = () => {
    switch (currentView) {
      case AppView.WELCOME:
        return <WelcomeView onStart={() => navigateTo(AppView.DASHBOARD)} />;
      case AppView.DASHBOARD:
        return <DashboardView 
                onProgress={() => navigateTo(AppView.PROGRESS)} 
                onSettings={() => navigateTo(AppView.SETTINGS)}
                onAddSession={() => navigateTo(AppView.NEW_SESSION)}
               />;
      case AppView.PROGRESS:
        return <ProgressView 
                onBack={() => navigateTo(AppView.DASHBOARD)} 
                onSettings={() => navigateTo(AppView.SETTINGS)}
               />;
      case AppView.SETTINGS:
        return <SettingsView onBack={() => navigateTo(AppView.DASHBOARD)} />;
      case AppView.APP_SELECTION:
        return <AppSelectionView 
                onBack={() => navigateTo(AppView.NEW_SESSION)} 
                selectedApps={selectedApps}
                setSelectedApps={setSelectedApps}
               />;
      case AppView.NEW_SESSION:
        return <NewSessionView 
                onBack={() => navigateTo(AppView.DASHBOARD)}
                onEditApps={() => navigateTo(AppView.APP_SELECTION)}
               />;
      default:
        return <WelcomeView onStart={() => navigateTo(AppView.DASHBOARD)} />;
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen relative bg-background-light dark:bg-background-dark overflow-hidden shadow-2xl">
      {renderView()}
    </div>
  );
};

export default App;
