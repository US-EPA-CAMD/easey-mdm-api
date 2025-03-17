import { registerAs } from '@nestjs/config';
import {
  getConfigValue,
  getConfigValueNumber,
  getConfigValueBoolean,
} from '@us-epa-camd/easey-common/utilities';

require('dotenv').config();

const host = getConfigValue('EASEY_MDM_API_HOST', 'localhost');
const port = getConfigValueNumber('EASEY_MDM_API_PORT', 8050);
const path = getConfigValue('EASEY_MDM_API_PATH', 'master-data-mgmt');

let uri = `https://${host}/${path}`;

if (host === 'localhost') {
  uri = `http://localhost:${port}/${path}`;
}

const apiHost = getConfigValue('EASEY_API_GATEWAY_HOST', 'api.epa.gov/easey/dev');

export default registerAs('app', () => ({
  name: 'mdm-api',
  host, port, path, uri,
  title: getConfigValue(
    'EASEY_MDM_API_TITLE', 'Master Data Management',
  ),
  description: getConfigValue(
    'EASEY_MDM_API_DESCRIPTION',
    'Provides reference codes, descriptions, & relationship data for CAMD applications',
  ),
  env: getConfigValue(
    'EASEY_MDM_API_ENV', 'local-dev',
  ),
  enableApiKey: getConfigValueBoolean(
    'EASEY_MDM_API_ENABLE_API_KEY',
  ),
  secretToken: getConfigValue(
    'EASEY_MDM_API_SECRET_TOKEN',
  ),
  enableSecretToken: getConfigValueBoolean(
    'EASEY_MDM_API_ENABLE_SECRET_TOKEN',
  ),
  enableCors: getConfigValueBoolean(
    'EASEY_MDM_API_ENABLE_CORS', true,
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
  // ENABLES DEBUG CONSOLE LOGS
  enableDebug: getConfigValueBoolean(
    'EASEY_MDM_API_ENABLE_DEBUG',
  ),
  apiHost: apiHost,
  authApi: {
    uri: getConfigValue('EASEY_AUTH_API', `https://${apiHost}/auth-mgmt`),
  },
  apiKey: getConfigValue('EASEY_MDM_API_KEY'),

  maxConnectionPool: getConfigValueNumber('EASEY_DB_MAX_CONNECTION_POOL',15),
  idleTimeout: getConfigValueNumber( 'EASEY_DB_IDLE_TIMEOUT', 30000, ),
  connectionTimeout: getConfigValueNumber('EASEY_DB_CONNECTION_TIMEOUT',10000),
  acquireConnectionFromPoolTimeout: getConfigValueNumber('EASEY_DB_IDLE_CONNECTION_TIMEOUT',15000),
  statementTimeout: getConfigValueNumber('EASEY_DB_STATEMENT_TIMEOUT',300000),
  idleInTransactionSessionTimeout: getConfigValueNumber('EASEY_DB_IDLE_TRANS_SESSION_TIMEOUT',300000),
  sqlLogging: getConfigValue('EASEY_DB_SQL_LOGGING', "error"),
  maxQueryExecutionTime: getConfigValueNumber('EASEY_DB_MAX_QUERY_EXECUTION_TIMEOUT',30000),
  maxUsesBeforeRecreatingConnection: getConfigValueNumber('EASEY_DB_MAX_USES_BEFORE_CONN_RECREATE',500),
}));
