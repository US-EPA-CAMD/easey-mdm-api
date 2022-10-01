import { registerAs } from '@nestjs/config';
import {
  getConfigValue,
  getConfigValueNumber,
  getConfigValueBoolean,
} from '@us-epa-camd/easey-common/utilities';

require('dotenv').config();

const path = getConfigValue('EASEY_MDM_API_PATH', 'master-data-mgmt');
const host = getConfigValue('EASEY_MDM_API_HOST', 'localhost');
const port = getConfigValueNumber('EASEY_MDM_API_PORT', 8050);

let uri = `https://${host}/${path}`;

if (host === 'localhost') {
  uri = `http://localhost:${port}/${path}`;
}

export default registerAs('app', () => ({
  name: 'mdm-api',
  host, port, path, uri,
  title: getConfigValue(
    'EASEY_MDM_API_TITLE', 'Master Data Management',
  ),
  apiHost: getConfigValue(
    'EASEY_API_GATEWAY_HOST', 'api.epa.gov/easey/dev',
  ),
  env: getConfigValue(
    'EASEY_MDM_API_ENV', 'local-dev',
  ),
  enableCors: getConfigValueBoolean(
    'EASEY_MDM_API_ENABLE_CORS', true,
  ),
  enableApiKey: getConfigValueBoolean(
    'EASEY_MDM_API_ENABLE_API_KEY',
  ),
  enableGlobalValidationPipes: getConfigValueBoolean(
    'EASEY_MDM_API_ENABLE_GLOBAL_VALIDATION_PIPE', true,
  ),
  version: getConfigValue(
    'EASEY_MDM_API_VERSION', 'v0.0.0',
  ),
  published: getConfigValue(
    'EASEY_MDM_API_PUBLISHED', 'local',
  ),
  enableSecretToken: getConfigValueBoolean(
    'EASEY_MDM_API_ENABLE_SECRET_TOKEN',
  ),
  // ENABLES DEBUG CONSOLE LOGS
  enableDebug: getConfigValueBoolean(
    'EASEY_MDM_API_ENABLE_DEBUG',
  ),
}));
