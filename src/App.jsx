import React from 'react';

// Import providers
import { ThemeProvider, AppStateProvider, NotificationProvider } from './contexts/index.js';

// Import the main system component
import { CTFutevoleiSystem } from './components/common/CTFutevoleiSystem.js';

// Import utilities to initialize
import './utils/scrollbar.js'; // This will initialize the scrollbar styling

// Import the Toaster component
import { Toaster } from './utils/toast.js';

// Componente principal exportado
const App = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AppStateProvider>
          <CTFutevoleiSystem />
          <Toaster />
        </AppStateProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;