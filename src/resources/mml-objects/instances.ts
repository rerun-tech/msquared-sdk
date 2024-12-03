// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Instances extends APIResource {
  /**
   * Create an MML Object Instance
   */
  create(
    projectId: string,
    body: InstanceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MMLObjectInstance> {
    return this._client.post(`/v1/mml-objects/${projectId}/object-instances/`, { body, ...options });
  }

  /**
   * Retrieve an MML Object Instance
   */
  retrieve(
    projectId: string,
    instanceId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MMLObjectInstance> {
    return this._client.get(`/v1/mml-objects/${projectId}/object-instances/${instanceId}`, options);
  }

  /**
   * Edit an MML Object Instance
   */
  update(
    projectId: string,
    instanceId: string,
    body: InstanceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MMLObjectInstance> {
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
    query?: InstanceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceListResponse>;
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<InstanceListResponse>;
  list(
    projectId: string,
    query: InstanceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceListResponse> {
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
  ): Core.APIPromise<MMLObjectInstanceLogAccess> {
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
    query: InstanceUsageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceUsageResponse> {
    return this._client.get(`/v1/mml-objects/${projectId}/object-instances/${instanceId}/usage`, {
      query,
      ...options,
    });
  }
}

export interface MMLObjectInstance {
  id: string;

  createdAt: string;

  createdBy: MMLObjectInstance.UserID | MMLObjectInstance.APIKeyID;

  enabled: boolean;

  name: string;

  source: MMLObjectInstance.UnionMember0 | MMLObjectInstance.UnionMember1;

  url: string;

  description?: string;

  parameters?: Record<string, unknown>;
}

export namespace MMLObjectInstance {
  export interface UserID {
    type: 'user';

    userId: string;
  }

  export interface APIKeyID {
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

export interface MMLObjectInstanceLogAccess {
  token: string;

  url: string;
}

export interface InstanceListResponse {
  canWrite: boolean;

  limit: number;

  objects: Array<MMLObjectInstance>;

  offset: number;

  totalResults: number;
}

export interface InstanceUsageResponse {
  intervals: Array<InstanceUsageResponse.Interval>;
}

export namespace InstanceUsageResponse {
  export interface Interval {
    connectedClientMicroseconds: number;

    connectedClients: number;

    endTime: string;

    startTime: string;
  }
}

export interface InstanceCreateParams {
  name: string;

  source: InstanceCreateParams.UnionMember0 | InstanceCreateParams.UnionMember1;

  id?: string;

  description?: string;

  enabled?: boolean;
}

export namespace InstanceCreateParams {
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

export interface InstanceUpdateParams {
  description?: string;

  enabled?: boolean;

  name?: string;

  parameters?: Record<string, unknown>;

  source?: InstanceUpdateParams.UnionMember0 | InstanceUpdateParams.UnionMember1;
}

export namespace InstanceUpdateParams {
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

export interface InstanceListParams {
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

export interface InstanceUsageParams {
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

export declare namespace Instances {
  export {
    type MMLObjectInstance as MMLObjectInstance,
    type MMLObjectInstanceLogAccess as MMLObjectInstanceLogAccess,
    type InstanceListResponse as InstanceListResponse,
    type InstanceUsageResponse as InstanceUsageResponse,
    type InstanceCreateParams as InstanceCreateParams,
    type InstanceUpdateParams as InstanceUpdateParams,
    type InstanceListParams as InstanceListParams,
    type InstanceUsageParams as InstanceUsageParams,
  };
}
