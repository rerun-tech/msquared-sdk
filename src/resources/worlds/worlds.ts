// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as WebWorldInstancesQuotaAPI from './web-world-instances-quota';
import {
  WebWorldInstancesQuota,
  WebWorldInstancesQuotaListResponse,
  WorldQuota,
} from './web-world-instances-quota';
import * as WebWorldInstancesUsageAPI from './web-world-instances-usage';
import {
  WebWorldInstancesUsage,
  WebWorldInstancesUsageListParams,
  WebWorldInstancesUsageListResponse,
} from './web-world-instances-usage';
import * as WebWorldInstancesAPI from './web-world-instances/web-world-instances';
import {
  WebWorldInstanceCreateParams,
  WebWorldInstanceListParams,
  WebWorldInstanceListResponse,
  WebWorldInstanceUpdateParams,
  WebWorldInstances,
} from './web-world-instances/web-world-instances';

export class Worlds extends APIResource {
  webWorldInstances: WebWorldInstancesAPI.WebWorldInstances = new WebWorldInstancesAPI.WebWorldInstances(
    this._client,
  );
  webWorldInstancesQuota: WebWorldInstancesQuotaAPI.WebWorldInstancesQuota =
    new WebWorldInstancesQuotaAPI.WebWorldInstancesQuota(this._client);
  webWorldInstancesUsage: WebWorldInstancesUsageAPI.WebWorldInstancesUsage =
    new WebWorldInstancesUsageAPI.WebWorldInstancesUsage(this._client);
}

Worlds.WebWorldInstances = WebWorldInstances;
Worlds.WebWorldInstancesQuota = WebWorldInstancesQuota;
Worlds.WebWorldInstancesUsage = WebWorldInstancesUsage;

export declare namespace Worlds {
  export {
    WebWorldInstances as WebWorldInstances,
    type WebWorldInstanceListResponse as WebWorldInstanceListResponse,
    type WebWorldInstanceCreateParams as WebWorldInstanceCreateParams,
    type WebWorldInstanceUpdateParams as WebWorldInstanceUpdateParams,
    type WebWorldInstanceListParams as WebWorldInstanceListParams,
  };

  export {
    WebWorldInstancesQuota as WebWorldInstancesQuota,
    type WorldQuota as WorldQuota,
    type WebWorldInstancesQuotaListResponse as WebWorldInstancesQuotaListResponse,
  };

  export {
    WebWorldInstancesUsage as WebWorldInstancesUsage,
    type WebWorldInstancesUsageListResponse as WebWorldInstancesUsageListResponse,
    type WebWorldInstancesUsageListParams as WebWorldInstancesUsageListParams,
  };
}
