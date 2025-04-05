
import LDClient from './client.js';

LDClient.on('ready', () => {
    // Replace 'dark-mode-flag' with your actual LaunchDarkly flag key
    LDClient.variation('dark_mode', false, (isDarkModeEnabled) => {
        if (isDarkModeEnabled) {
            document.body.classList.add('dark_mode_on');
        } else {
            document.body.classList.remove('dark_mode_off');
        }
    });
});