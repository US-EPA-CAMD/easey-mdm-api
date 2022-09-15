require('dotenv').config();
import { registerAs } from '@nestjs/config';
import { parseBool } from '@us-epa-camd/easey-common/utilities';

const path = process.env.EASEY_MDM_API_PATH || 'master-data-mgmt';
const host = process.env.EASEY_MDM_API_HOST || 'localhost';
const port = +process.env.EASEY_MDM_API_PORT || 8050;

let uri = `https://${host}/${path}`;

if (host === 'localhost') {
  uri = `http://localhost:${port}/${path}`;
}

export default registerAs('app', () => ({
  name: 'mdm-api',
  title: process.env.EASEY_MDM_API_TITLE || 'Master Data Management',
  path,
  host,
  apiHost: process.env.EASEY_API_GATEWAY_HOST || 'api.epa.gov/easey/dev',
  port,
  uri,
  env: process.env.EASEY_MDM_API_ENV || 'local-dev',
  enableCors: parseBool(process.env.EASEY_NOTIFICATIONS_API_ENABLE_CORS, true),
  enableApiKey: parseBool(
    process.env.EASEY_NOTIFICATIONS_API_ENABLE_API_KEY,
    true,
  ),
  enableAuthToken: parseBool(
    process.env.EASEY_NOTIFICATIONS_API_ENABLE_AUTH_TOKEN,
  ),
  enableGlobalValidationPipes: parseBool(
    process.env.EASEY_NOTIFICATIONS_API_ENABLE_GLOBAL_VALIDATION_PIPE,
    true,
  ),
  version: process.env.EASEY_MDM_API_VERSION || 'v0.0.0',
  published: process.env.EASEY_MDM_API_PUBLISHED || 'local',
  enableSecretToken: parseBool(
    process.env.EASEY_MDM_API_ENABLE_SECRET_TOKEN,
    false,
  ),
}));
