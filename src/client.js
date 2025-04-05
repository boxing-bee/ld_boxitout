import LDClient from 'launchdarkly-js-client-sdk';

const ldClientInstance = LDClient.initialize('67ef2147c1c6dc09860736ad', {
    anonymous: true
});
export const client = ldClientInstance;