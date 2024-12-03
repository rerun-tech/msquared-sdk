// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Permissions extends APIResource {
  /**
   * Create a member permission
   */
  create(
    organizationId: string,
    memberId: string,
    body: PermissionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberPermission> {
    return this._client.post(`/v1/identity/organizations/${organizationId}/members/${memberId}/permissions`, {
      body,
      ...options,
    });
  }

  /**
   * List all permissions for a member
   */
  list(
    organizationId: string,
    memberId: string,
    query?: PermissionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionListResponse>;
  list(
    organizationId: string,
    memberId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionListResponse>;
  list(
    organizationId: string,
    memberId: string,
    query: PermissionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionListResponse> {
    if (isRequestOptions(query)) {
      return this.list(organizationId, memberId, {}, query);
    }
    return this._client.get(`/v1/identity/organizations/${organizationId}/members/${memberId}/permissions`, {
      query,
      ...options,
    });
  }

  /**
   * Delete a member permission
   */
  delete(
    organizationId: string,
    memberId: string,
    permissionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(
      `/v1/identity/organizations/${organizationId}/members/${memberId}/permissions/${permissionId}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }
}

export interface MemberPermission {
  id: string;

  permission: MemberPermission.Permission;

  projectId: string;
}

export namespace MemberPermission {
  export interface Permission {
    resource: 'worlds' | 'mml-objects';

    verb: 'read' | 'write' | 'admin';
  }
}

export interface PermissionListResponse {
  limit: number;

  memberPermissions: Array<MemberPermission>;

  offset: number;

  totalResults: number;
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

export interface PermissionListParams {
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
    type MemberPermission as MemberPermission,
    type PermissionListResponse as PermissionListResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionListParams as PermissionListParams,
  };
}
