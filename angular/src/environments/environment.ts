import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Elearning',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44365',
    redirectUri: baseUrl,
    clientId: 'Elearning_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone Elearning',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44365',
      rootNamespace: 'Home.Elearning',
    },
  },
} as Environment;
