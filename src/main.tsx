import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import * as LDClient from 'launchdarkly-js-client-sdk';
const options: LDClient.LDOptions = { allAttributesPrivate: true };
const client = LDClient.initialize('67ef2147c1c6dc09860736ad', context, options);


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    ldClient.on('ready', () => {
      const initialFlagValue = ldClient.variation('dark-mode', false);
      setIsDarkMode(initialFlagValue);

      // Listener to update when flag changes
      ldClient.on('change:dark-mode', (current) => {
        console.log('Flag "dark-mode" changed to:', current);
        setIsDarkMode(current);
      });
    });
  }, []);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen flex items-center justify-center transition-colors duration-500 bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-3xl font-bold">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'} Enabled
        </h1>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
