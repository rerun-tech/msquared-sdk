// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as QuotaAPI from './object-instances/quota';

export class ObjectInstancesQuota extends APIResource {
  /**
   * Retrieve quota for MML Object Instances
   */
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<ObjectInstancesQuotaListResponse> {
    return this._client.get(`/v1/mml-objects/${projectId}/object-instances-quota`, options);
  }
}

export interface ObjectInstancesQuotaListResponse {
  quota: QuotaAPI.MmlObjectInstanceQuota;
}

export declare namespace ObjectInstancesQuota {
  export { type ObjectInstancesQuotaListResponse as ObjectInstancesQuotaListResponse };
}
