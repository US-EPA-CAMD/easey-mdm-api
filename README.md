# Master Data Management API

[![License](https://img.shields.io/github/license/US-EPA-CAMD/easey-mdm-api)](https://github.com/US-EPA-CAMD/easey-mdm-api/blob/develop/LICENSE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=US-EPA-CAMD_easey-mdm-api&metric=alert_status)](https://sonarcloud.io/dashboard?id=US-EPA-CAMD_easey-mdm-api)
[![Develop CI/CD](https://github.com/US-EPA-CAMD/easey-mdm-api/workflows/Develop%20Branch%20Workflow/badge.svg)](https://github.com/US-EPA-CAMD/easey-mdm-api/actions)
[![Release CI/CD](https://github.com/US-EPA-CAMD/easey-mdm-api/workflows/Release%20Branch%20Workflow/badge.svg)](https://github.com/US-EPA-CAMD/easey-mdm-api/actions)
![Issues](https://img.shields.io/github/issues/US-EPA-CAMD/easey-mdm-api)
![Forks](https://img.shields.io/github/forks/US-EPA-CAMD/easey-mdm-api)
![Stars](https://img.shields.io/github/stars/US-EPA-CAMD/easey-mdm-api)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/US-EPA-CAMD/easey-mdm-api)

## Description
Manages master data for the EPA CAMD Business Systems. Provides referential lookup values and relational data mappings between code tables driving UI behavior to ensure data integrity.
​
## Getting Started
Follow these [instructions](https://github.com/US-EPA-CAMD/devops/blob/master/GETTING-STARTED.md) to get the project up and running correctly.

## Installing
1. Open a terminal and navigate to the directory where you wish to store the repository.
2. Clone the repository using one of the following git cli commands or using your favorit Git management software<br>
    **Using SSH**
    ```
    $ git clone git@github.com:US-EPA-CAMD/easey-mdm-api.git
    ```
    **Using HTTPS**
    ```
    $ git clone https://github.com/US-EPA-CAMD/easey-mdm-api.git
    ```
3. Navigate to the projects root directory
    ```
    $ cd easey-mdm-api
    ```
4. Install package dependencies
    ```
    $ yarn install
    ```

## Configuration
The Master Data API uses a number of environment variables to properly configure the api. The following is the list of configureble values and their default setting.

| Typescript Var Name | Environment Var Name | Default Value | Comment |
| :------------------ | :------------------- | :------------ | :------ |
| name | N/A | mdm-api | Fixed value |
| host | EASEY_MDM_API_HOST | localhost | Configurable
| port | EASEY_MDM_API_PORT | 8050 | Configurable |
| path | EASEY_MDM_API_PATH | master-data-mgmt | Configurable |
| uri | N/A | N/A | Determined by host, port, & path |
| title | EASEY_MDM_API_TITLE | Master Data Management | Configurable |
| description | EASEY_MDM_API_DESCRIPTION | ??? | Configurable |
| apiHost | EASEY_API_GATEWAY_HOST | api.epa.gov/easey/dev | Configurable |
| env | EASEY_MDM_API_ENV | local-dev | Configurable |
| enableCors | EASEY_MDM_API_ENABLE_CORS | true | Configurable |
| enableApiKey | EASEY_MDM_API_ENABLE_API_KEY | false | Configurable |
| enableGlobalValidationPipes | EASEY_MDM_API_ENABLE_GLOBAL_VALIDATION_PIPE | true | Configurable |
| version | EASEY_MDM_API_VERSION | v0.0.0 | Dynamically set by CI/CD workflow |
| published | EASEY_MDM_API_PUBLISHED | local | Dynamically set by CI/CD workflow |
| perPageLimit | EASEY_MDM_API_PAGINATION_MAX_PER_PAGE | 500 | Configurable |
| secretToken | EASEY_MDM_API_SECRET_TOKEN | N/A | Dynamically set by CI/CD workflow |
| enableSecretToken | EASEY_MDM_API_ENABLE_SECRET_TOKEN | false | Configurable |
| enableDebug | EASEY_MDM_API_ENABLE_DEBUG | false | Configurable |

## Environment Variables File
Database credentials are injected into the cloud.gov environments as part of the CI/CD deployment process therefore they do not need to be configured. However, when running locally for local development the following environment variables are required to be configured using a local .env file in the root of the project. **PLEASE DO NOT commit the .env file to source control.**

- EASEY_MDM_API_ENABLE_DEBUG=true
- EASEY_MDM_API_ENABLE_API_KEY=false
- EASEY_MDM_API_ENABLE_SECRET_TOKEN=false

**Please refer to our [Getting Started](https://github.com/US-EPA-CAMD/devops/blob/master/GETTING-STARTED.md) instructions on how to configure the following environment variables & connect to the database.**
- EASEY_DB_HOST
- EASEY_DB_PORT
- EASEY_DB_NAME
- EASEY_DB_USER
- EASEY_DB_PWD

## Building, Testing, & Running the application
From within the projects root directory run the following commands using the yarn command line interface

**Run in development mode**
```
$ yarn start:dev
```

**Install/update package dependencies & run in development mode**
```
$ yarn up
```

**Unit tests**
```
$ yarn test
```

**Build**
```
$ yarn build
```

**Run in production mode**
```
$ yarn start
```

## API Endpoints
Please refer to the Master Data Management API Swagger Documentation for descriptions of the endpoints.<br>
[Dev Environment](https://api.epa.gov/easey/dev/master-data-mgmt/swagger/) | [Test Environment](https://api.epa.gov/easey/test/master-data-mgmt/swagger/) | [Beta Environment](https://api.epa.gov/easey/beta/master-data-mgmt/swagger/) | [Staging Environment](https://api.epa.gov/easey/staging/master-data-mgmt/swagger/)

## License & Contributing
This project is licensed under the MIT License. We encourage you to read this project’s [License](LICENSE), [Contributing Guidelines](CONTRIBUTING.md), and [Code of Conduct](CODE-OF-CONDUCT.md).

## Disclaimer
The United States Environmental Protection Agency (EPA) GitHub project code is provided on an "as is" basis and the user assumes responsibility for its use. EPA has relinquished control of the information and no longer has responsibility to protect the integrity , confidentiality, or availability of the information. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by EPA. The EPA seal and logo shall not be used in any manner to imply endorsement of any commercial product or activity by EPA or the United States Government.
