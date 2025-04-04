import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import * as LDClient from 'launchdarkly-js-client-sdk';
const options: LDClient.LDOptions = { allAttributesPrivate: true };
const client = LDClient.initialize('67ef2147c1c6dc09860736ad', context, options);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
