// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SubresourcesAPI from './subresources';
import { Subresources, WorldQuota } from './subresources';
import * as WebWorldInstancesQuotaAPI from './web-world-instances-quota';
import { WebWorldInstancesQuota, WebWorldInstancesQuotaListResponse } from './web-world-instances-quota';
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
  subresources: SubresourcesAPI.Subresources = new SubresourcesAPI.Subresources(this._client);
}

Worlds.WebWorldInstances = WebWorldInstances;
Worlds.WebWorldInstancesQuota = WebWorldInstancesQuota;
Worlds.WebWorldInstancesUsage = WebWorldInstancesUsage;
Worlds.Subresources = Subresources;

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
    type WebWorldInstancesQuotaListResponse as WebWorldInstancesQuotaListResponse,
  };

  export {
    WebWorldInstancesUsage as WebWorldInstancesUsage,
    type WebWorldInstancesUsageListResponse as WebWorldInstancesUsageListResponse,
    type WebWorldInstancesUsageListParams as WebWorldInstancesUsageListParams,
  };

  export { Subresources as Subresources, type WorldQuota as WorldQuota };
}
