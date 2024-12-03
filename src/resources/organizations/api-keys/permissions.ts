// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Permissions extends APIResource {
  /**
   * Create an API Key permission
   */
  create(
    organizationId: string,
    apiKeyId: string,
    body: PermissionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionCreateResponse> {
    return this._client.post(
      `/v1/identity/organizations/${organizationId}/api-keys/${apiKeyId}/permissions`,
      { body, ...options },
    );
  }

  /**
   * List all permissions for an API key
   */
  retrieve(
    organizationId: string,
    apiKeyId: string,
    query?: PermissionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionRetrieveResponse>;
  retrieve(
    organizationId: string,
    apiKeyId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionRetrieveResponse>;
  retrieve(
    organizationId: string,
    apiKeyId: string,
    query: PermissionRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(organizationId, apiKeyId, {}, query);
    }
    return this._client.get(`/v1/identity/organizations/${organizationId}/api-keys/${apiKeyId}/permissions`, {
      query,
      ...options,
    });
  }

  /**
   * Delete an API Key permission
   */
  delete(
    organizationId: string,
    apiKeyId: string,
    permissionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(
      `/v1/identity/organizations/${organizationId}/api-keys/${apiKeyId}/permissions/${permissionId}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }
}

export interface PermissionCreateResponse {
  id: string;

  permission: PermissionCreateResponse.Permission;

  createdAt?: string;

  projectId?: string;
}

export namespace PermissionCreateResponse {
  export interface Permission {
    resource: 'worlds' | 'mml-objects';

    verb: 'read' | 'write' | 'admin';
  }
}

export interface PermissionRetrieveResponse {
  apiKeyPermissions: Array<PermissionRetrieveResponse.APIKeyPermission>;

  limit: number;

  offset: number;

  totalResults: number;
}

export namespace PermissionRetrieveResponse {
  export interface APIKeyPermission {
    id: string;

    permission: APIKeyPermission.Permission;

    createdAt?: string;

    projectId?: string;
  }

  export namespace APIKeyPermission {
    export interface Permission {
      resource: 'worlds' | 'mml-objects';

      verb: 'read' | 'write' | 'admin';
    }
  }
}

export interface PermissionCreateParams {
  permission: PermissionCreateParams.Permission;

  projectId: string;
}

export namespace PermissionCreateParams {
  export interface Permission {
    resource: 'worlds' | 'mml-objects';

    verb: 'read' | 'write' | 'admin';
  }
}

export interface PermissionRetrieveParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;

  /**
   * The offset into queried items to return
   */
  offset?: number;
}

export declare namespace Permissions {
  export {
    type PermissionCreateResponse as PermissionCreateResponse,
    type PermissionRetrieveResponse as PermissionRetrieveResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionRetrieveParams as PermissionRetrieveParams,
  };
}
