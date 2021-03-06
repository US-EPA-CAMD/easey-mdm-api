import { registerAs } from '@nestjs/config';

import config from './config';

// const path = process.env.EASEY_MDM_API_PATH || 'api/master-data-mgmt';
// const host = process.env.EASEY_MDM_API_HOST || 'localhost';
// const port = process.env.EASEY_MDM_API_PORT || 8080;

// let uri = `https://${host}/${path}`;

// if (host === 'localhost') {
//   uri = `http://localhost:${port}/${path}`;
// }

// export default registerAs('app', () => ({
//   title: process.env.EASEY_MDM_API_TITLE || 'Master Data Management',
//   path,
//   host,
//   port,
//   uri,
//   env: process.env.EASEY_MDM_API_ENV || 'local-dev',
//   version: process.env.EASEY_MDM_API_VERSION || 'v0.0.0',
//   published: process.env.EASEY_MDM_API_PUBLISHED || 'local',
// }));

export default registerAs('app', () => ({
  title: config.title,
  path: config.path,
  host: config.host,
  port: config.port,
  uri: config.uri,
  env: config.env,
  version: config.version,
  published: config.published,
}));
