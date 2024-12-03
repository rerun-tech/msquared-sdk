// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class WebWorldInstancesUsage extends APIResource {
  /**
   * List usage for Web World Instances
   */
  list(
    projectId: string,
    query: WebWorldInstancesUsageListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebWorldInstancesUsageListResponse> {
    return this._client.get(`/v1/worlds/${projectId}/web-world-instances-usage`, { query, ...options });
  }
}

export interface WebWorldInstancesUsageListResponse {
  intervals: Array<WebWorldInstancesUsageListResponse.Interval>;
}

export namespace WebWorldInstancesUsageListResponse {
  export interface Interval {
    connectedClientMicroseconds: number;

    connectedClients: number;

    endTime: string;

    startTime: string;
  }
}

export interface WebWorldInstancesUsageListParams {
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

export declare namespace WebWorldInstancesUsage {
  export {
    type WebWorldInstancesUsageListResponse as WebWorldInstancesUsageListResponse,
    type WebWorldInstancesUsageListParams as WebWorldInstancesUsageListParams,
  };
}
