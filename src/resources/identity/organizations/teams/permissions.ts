// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as PermissionsAPI from '../../../organizations/teams/permissions';

export class Permissions extends APIResource {
  /**
   * Create a team permission
   */
  create(
    organizationId: string,
    teamId: string,
    body: PermissionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionsAPI.TeamPermission> {
    return this._client.post(`/v1/identity/organizations/${organizationId}/teams/${teamId}/permissions`, {
      body,
      ...options,
    });
  }

  /**
   * List all permissions for a team
   */
  list(
    organizationId: string,
    teamId: string,
    query?: PermissionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionListResponse>;
  list(
    organizationId: string,
    teamId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionListResponse>;
  list(
    organizationId: string,
    teamId: string,
    query: PermissionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionListResponse> {
    if (isRequestOptions(query)) {
      return this.list(organizationId, teamId, {}, query);
    }
    return this._client.get(`/v1/identity/organizations/${organizationId}/teams/${teamId}/permissions`, {
      query,
      ...options,
    });
  }

  /**
   * Delete a team permission
   */
  delete(
    organizationId: string,
    teamId: string,
    permissionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(
      `/v1/identity/organizations/${organizationId}/teams/${teamId}/permissions/${permissionId}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }
}

export interface PermissionListResponse {
  limit: number;

  offset: number;

  teamPermissions: Array<PermissionsAPI.TeamPermission>;

  totalResults: number;

  teamRole?: 'admin' | 'member';
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
    type PermissionListResponse as PermissionListResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionListParams as PermissionListParams,
  };
}
