// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as QuotaAPI from './quota';
import { MmlObjectInstanceQuota, Quota } from './quota';

export class ObjectInstances extends APIResource {
  quota: QuotaAPI.Quota = new QuotaAPI.Quota(this._client);

  /**
   * Create an MML Object Instance
   */
  create(
    projectId: string,
    body: ObjectInstanceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MmlObjectInstance> {
    return this._client.post(`/v1/mml-objects/${projectId}/object-instances/`, { body, ...options });
  }

  /**
   * Retrieve an MML Object Instance
   */
  retrieve(
    projectId: string,
    instanceId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MmlObjectInstance> {
    return this._client.get(`/v1/mml-objects/${projectId}/object-instances/${instanceId}`, options);
  }

  /**
   * Edit an MML Object Instance
   */
  update(
    projectId: string,
    instanceId: string,
    body: ObjectInstanceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MmlObjectInstance> {
    return this._client.post(`/v1/mml-objects/${projectId}/object-instances/${instanceId}`, {
      body,
      ...options,
    });
  }

  /**
   * List MML Object Instances
   */
  list(
    projectId: string,
    query?: ObjectInstanceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectInstanceListResponse>;
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<ObjectInstanceListResponse>;
  list(
    projectId: string,
    query: ObjectInstanceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectInstanceListResponse> {
    if (isRequestOptions(query)) {
      return this.list(projectId, {}, query);
    }
    return this._client.get(`/v1/mml-objects/${projectId}/object-instances/`, { query, ...options });
  }

  /**
   * Delete an MML Object Instance
   */
  delete(projectId: string, instanceId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/mml-objects/${projectId}/object-instances/${instanceId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve log access information for an MML Object Instance
   */
  logAccess(
    projectId: string,
    instanceId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MmlObjectInstanceLogAccess> {
    return this._client.get(
      `/v1/mml-objects/${projectId}/object-instances/${instanceId}/log-access`,
      options,
    );
  }

  /**
   * List usage for an MML Object Instance
   */
  usage(
    projectId: string,
    instanceId: string,
    query: ObjectInstanceUsageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectInstanceUsageResponse> {
    return this._client.get(`/v1/mml-objects/${projectId}/object-instances/${instanceId}/usage`, {
      query,
      ...options,
    });
  }
}

export interface MmlObjectInstance {
  id: string;

  createdAt: string;

  createdBy: MmlObjectInstance.UnionMember0 | MmlObjectInstance.UnionMember1;

  enabled: boolean;

  name: string;

  source: MmlObjectInstance.UnionMember0 | MmlObjectInstance.UnionMember1;

  url: string;

  description?: string;

  parameters?: Record<string, unknown>;
}

export namespace MmlObjectInstance {
  export interface UnionMember0 {
    type: 'user';

    userId: string;
  }

  export interface UnionMember1 {
    apiKeyId: string;

    type: 'apiKey';
  }

  export interface UnionMember0 {
    templateVersionId: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

    type: 'template';
  }

  export namespace UnionMember0 {
    export interface UnionMember0 {
      templateId: string;

      versionId: string;

      alwaysDefault?: false;
    }

    export interface UnionMember1 {
      alwaysDefault: true;

      templateId: string;
    }
  }

  export interface UnionMember1 {
    source: string;

    type: 'source';

    parametersSchema?: Record<string, unknown>;
  }
}

export interface MmlObjectInstanceLogAccess {
  token: string;

  url: string;
}

export interface ObjectInstanceListResponse {
  canWrite: boolean;

  limit: number;

  objects: Array<MmlObjectInstance>;

  offset: number;

  totalResults: number;
}

export interface ObjectInstanceUsageResponse {
  intervals: Array<ObjectInstanceUsageResponse.Interval>;
}

export namespace ObjectInstanceUsageResponse {
  export interface Interval {
    connectedClientMicroseconds: number;

    connectedClients: number;

    endTime: string;

    startTime: string;
  }
}

export interface ObjectInstanceCreateParams {
  name: string;

  source: ObjectInstanceCreateParams.UnionMember0 | ObjectInstanceCreateParams.UnionMember1;

  id?: string;

  description?: string;

  enabled?: boolean;
}

export namespace ObjectInstanceCreateParams {
  export interface UnionMember0 {
    templateVersionId: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

    type: 'template';
  }

  export namespace UnionMember0 {
    export interface UnionMember0 {
      templateId: string;

      versionId: string;

      alwaysDefault?: false;
    }

    export interface UnionMember1 {
      alwaysDefault: true;

      templateId: string;
    }
  }

  export interface UnionMember1 {
    source: string;

    type: 'source';

    parametersSchema?: Record<string, unknown>;
  }
}

export interface ObjectInstanceUpdateParams {
  description?: string;

  enabled?: boolean;

  name?: string;

  parameters?: Record<string, unknown>;

  source?: ObjectInstanceUpdateParams.UnionMember0 | ObjectInstanceUpdateParams.UnionMember1;
}

export namespace ObjectInstanceUpdateParams {
  export interface UnionMember0 {
    templateVersionId: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

    type: 'template';
  }

  export namespace UnionMember0 {
    export interface UnionMember0 {
      templateId: string;

      versionId: string;

      alwaysDefault?: false;
    }

    export interface UnionMember1 {
      alwaysDefault: true;

      templateId: string;
    }
  }

  export interface UnionMember1 {
    source: string;

    type: 'source';

    parametersSchema?: Record<string, unknown>;
  }
}

export interface ObjectInstanceListParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;

  /**
   * The offset into queried items to return
   */
  offset?: number;

  /**
   * Search query
   */
  search?: string;
}

export interface ObjectInstanceUsageParams {
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

ObjectInstances.Quota = Quota;

export declare namespace ObjectInstances {
  export {
    type MmlObjectInstance as MmlObjectInstance,
    type MmlObjectInstanceLogAccess as MmlObjectInstanceLogAccess,
    type ObjectInstanceListResponse as ObjectInstanceListResponse,
    type ObjectInstanceUsageResponse as ObjectInstanceUsageResponse,
    type ObjectInstanceCreateParams as ObjectInstanceCreateParams,
    type ObjectInstanceUpdateParams as ObjectInstanceUpdateParams,
    type ObjectInstanceListParams as ObjectInstanceListParams,
    type ObjectInstanceUsageParams as ObjectInstanceUsageParams,
  };

  export { Quota as Quota, type MmlObjectInstanceQuota as MmlObjectInstanceQuota };
}
