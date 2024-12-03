// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Quota extends APIResource {
  /**
   * Retrieve quota for MML Object Instances
   */
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<QuotaListResponse> {
    return this._client.get(`/v1/mml-objects/${projectId}/object-instances-quota`, options);
  }
}

export interface MMLObjectInstanceQuota {
  current: number;

  limit: number;
}

export interface QuotaListResponse {
  quota: MMLObjectInstanceQuota;
}

export declare namespace Quota {
  export {
    type MMLObjectInstanceQuota as MMLObjectInstanceQuota,
    type QuotaListResponse as QuotaListResponse,
  };
}
