// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class ObjectInstancesUsage extends APIResource {
  /**
   * List usage for MML Object Instances
   */
  list(
    projectId: string,
    query: ObjectInstancesUsageListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectInstancesUsageListResponse> {
    return this._client.get(`/v1/mml-objects/${projectId}/object-instances-usage`, { query, ...options });
  }
}

export interface ObjectInstancesUsageListResponse {
  intervals: Array<ObjectInstancesUsageListResponse.Interval>;
}

export namespace ObjectInstancesUsageListResponse {
  export interface Interval {
    connectedClientMicroseconds: number;

    connectedClients: number;

    endTime: string;

    startTime: string;
  }
}

export interface ObjectInstancesUsageListParams {
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

export declare namespace ObjectInstancesUsage {
  export {
    type ObjectInstancesUsageListResponse as ObjectInstancesUsageListResponse,
    type ObjectInstancesUsageListParams as ObjectInstancesUsageListParams,
  };
}
