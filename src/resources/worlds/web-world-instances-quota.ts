// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SubresourcesAPI from './subresources';

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

export interface WebWorldInstancesQuotaListResponse {
  quota: SubresourcesAPI.WorldQuota;
}

export declare namespace WebWorldInstancesQuota {
  export { type WebWorldInstancesQuotaListResponse as WebWorldInstancesQuotaListResponse };
}
