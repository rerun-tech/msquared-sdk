// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Usage extends APIResource {
  /**
   * List usage for a Web World Instance
   */
  retrieve(
    projectId: string,
    worldId: string,
    query: UsageRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageRetrieveResponse> {
    return this._client.get(`/v1/worlds/${projectId}/web-world-instances/${worldId}/usage`, {
      query,
      ...options,
    });
  }
}

export interface UsageRetrieveResponse {
  intervals: Array<UsageRetrieveResponse.Interval>;
}

export namespace UsageRetrieveResponse {
  export interface Interval {
    connectedClientMicroseconds: number;

    connectedClients: number;

    endTime: string;

    startTime: string;
  }
}

export interface UsageRetrieveParams {
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
  export {
    type UsageRetrieveResponse as UsageRetrieveResponse,
    type UsageRetrieveParams as UsageRetrieveParams,
  };
}
