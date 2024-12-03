// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class ObjectInstancesQuota extends APIResource {
  /**
   * Retrieve quota for MML Object Instances
   */
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<ObjectInstancesQuotaListResponse> {
    return this._client.get(`/v1/mml-objects/${projectId}/object-instances-quota`, options);
  }
}

export interface ObjectInstancesQuotaListResponse {
  quota: ObjectInstancesQuotaListResponse.Quota;
}

export namespace ObjectInstancesQuotaListResponse {
  export interface Quota {
    current: number;

    limit: number;
  }
}

export declare namespace ObjectInstancesQuota {
  export { type ObjectInstancesQuotaListResponse as ObjectInstancesQuotaListResponse };
}
