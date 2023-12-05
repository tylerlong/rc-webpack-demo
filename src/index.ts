import RingCentral from '@ringcentral/sdk';

const rc = new RingCentral({
  server: 'https://platform.ringcentral.com',
  clientId: 'fake-client-id',
  clientSecret: 'fake-client-secret',
});

console.log(rc);
