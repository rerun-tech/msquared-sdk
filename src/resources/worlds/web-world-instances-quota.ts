// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class WebWorldInstancesQuota extends APIResource {
  /**
   * Retrieve quota for Web World Instances
   */
  list(
    projectId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebWorldInstancesQuotaListResponse> {
    return this._client.get(`/v1/worlds/${projectId}/web-world-instances-quota`, options);
  }
}

export interface WorldQuota {
  current: number;

  limit: number;
}

export interface WebWorldInstancesQuotaListResponse {
  quota: WorldQuota;
}

export declare namespace WebWorldInstancesQuota {
  export {
    type WorldQuota as WorldQuota,
    type WebWorldInstancesQuotaListResponse as WebWorldInstancesQuotaListResponse,
  };
}
