import * as LDClient from 'launchdarkly-js-client-sdk';

// You'll need this context later, but you can ignore it for now.
// const context: LDClient.LDContext = {
//     kind: 'beta-user',
//     key: 'fill-in',
//     name: 'Betty',
//     email: 'betty@testcorp.com'
};
const client = LDClient.initialize('67ef2147c1c6dc09860736ad', context);

client.on('initialized', function () {
    console.log('Betty you SDK successfully initialized! YAYYY');
});
