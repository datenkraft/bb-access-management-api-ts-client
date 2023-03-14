# Backbone - access-management API TS Client

## Introduction

The access-management API TS Client enables you to work with the access-management API.

## Prerequisites

- npm

## Installation

You can use [npm](https://www.npmjs.com/) to install the package.

```bash
npm install @datenkraft/bb-access-management-api-ts-client
```

## Using the package

The package can be used to communicate with the access-management API.
The Client includes functionalities for every endpoint defined in the openapi.json.
The Client is auto-generated with [OpenAPITools](https://openapi-generator.tech/docs/generators/typescript-axios) using an openapi.json file.

### Initializing the Client and calling an Endpoint

```typescript
import { ConfigOptions } from '@datenkraft/bb-base-api-ts-client';
import { AccessManagementApiClient } from '@datenkraft/bb-access-management-api-ts-client';
import { XxxApi } from '@datenkraft/bb-access-management-api-ts-client/Generated';

const configOptions: ConfigOptions = {
  clientId: 'clientId',
  clientSecret: 'clientSecret',
  oAuthTokenHost: 'oAuthTokenHost',
  tokenTradeInPath: 'tokenTradeInPath',
  externalIdToken: 'externalIdToken',
  useExternalIdToken: true,
};

AccessManagementApiClient.getApiConfig(configOptions).then((config) => {
  const XxxApi = new XxxApi(config);
  XxxApi.getXxxCollection().then((data) => {});
});
```

## License

This repository is available under the [MIT license](https://opensource.org/licenses/MIT).
