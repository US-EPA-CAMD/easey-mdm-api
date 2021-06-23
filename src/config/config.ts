const title = process.env.EASEY_MDM_API_TITLE || 'Master Data Management';
const path = process.env.EASEY_MDM_API_PATH || 'api/master-data-mgmt';
const host = process.env.EASEY_MDM_API_HOST || 'localhost';
const port = process.env.EASEY_MDM_API_PORT || 8080;
const env = process.env.EASEY_MDM_API_ENV || 'local-dev';
const version = process.env.EASEY_MDM_API_VERSION || 'v0.0.0';
const published = process.env.EASEY_MDM_API_PUBLISHED || 'local';

let pgHost = process.env.EASEY_DB_HOST || 'database';
let pgPort = process.env.EASEY_DB_PORT || 5432;
let pgUser = process.env.EASEY_DB_USER || 'postgres';
let pgPwd = process.env.EASEY_DB_PWD || 'password';
let pgDb = process.env.EASEY_DB_NAME || 'postgres';

let uri = `https://${host}/${path}`;

if (host === 'localhost') {
  uri = `http://localhost:${port}/${path}`;
}

if (process.env.VCAP_SERVICES) {
  const vcapSvc = JSON.parse(process.env.VCAP_SERVICES);
  const vcapSvcCreds = vcapSvc['aws-rds'][0].credentials;

  pgHost = vcapSvcCreds.host;
  pgPort = +vcapSvcCreds.port;
  pgUser = vcapSvcCreds.username;
  pgPwd = vcapSvcCreds.password;
  pgDb = vcapSvcCreds.name;
}

export default {
  title,
  path,
  host,
  port,
  env,
  version,
  published,
  uri,
  pgHost,
  pgPort,
  pgUser,
  pgPwd,
  pgDb
}