// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Usage extends APIResource {
  /**
   * List usage for MML Object Instances
   */
  list(
    projectId: string,
    query: UsageListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageListResponse> {
    return this._client.get(`/v1/mml-objects/${projectId}/object-instances-usage`, { query, ...options });
  }
}

export interface UsageListResponse {
  intervals: Array<UsageListResponse.Interval>;
}

export namespace UsageListResponse {
  export interface Interval {
    connectedClientMicroseconds: number;

    connectedClients: number;

    endTime: string;

    startTime: string;
  }
}

export interface UsageListParams {
  /**
   * The ending ISO 8601 timestamp for this usage period
   */
  endTime: string;

  /**
   * An ISO 8601 duration for the interval
   */
  interval: 'P1D' | 'PT1H' | 'PT1M';

  /**
   * The starting ISO 8601 timestamp of the usage period
   */
  startTime: string;
}

export declare namespace Usage {
  export { type UsageListResponse as UsageListResponse, type UsageListParams as UsageListParams };
}
