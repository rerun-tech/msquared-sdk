// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as PermissionsAPI from './permissions';
import {
  MemberPermission,
  PermissionCreateParams,
  PermissionListParams,
  PermissionListResponse,
  Permissions,
} from './permissions';

export class Members extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);

  /**
   * Get a member
   */
  retrieve(organizationId: string, memberId: string, options?: Core.RequestOptions): Core.APIPromise<Member> {
    return this._client.get(`/v1/identity/organizations/${organizationId}/members/${memberId}`, options);
  }

  /**
   * Update a member
   */
  update(
    organizationId: string,
    memberId: string,
    body: MemberUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Member> {
    return this._client.post(`/v1/identity/organizations/${organizationId}/members/${memberId}`, {
      body,
      ...options,
    });
  }

  /**
   * List all members within an organization
   */
  list(
    organizationId: string,
    query?: MemberListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberListResponse>;
  list(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<MemberListResponse>;
  list(
    organizationId: string,
    query: MemberListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberListResponse> {
    if (isRequestOptions(query)) {
      return this.list(organizationId, {}, query);
    }
    return this._client.get(`/v1/identity/organizations/${organizationId}/members`, { query, ...options });
  }

  /**
   * Delete a member
   */
  delete(organizationId: string, memberId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/identity/organizations/${organizationId}/members/${memberId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface Member {
  id: string;

  createdAt: string;

  role: 'admin' | 'member';

  userInfo: Member.UserInfo;

  userId?: string;
}

export namespace Member {
  export interface UserInfo {
    displayName?: string;

    email?: string;

    photoUrl?: string;
  }
}

export interface MemberListResponse {
  limit: number;

  members: Array<Member>;

  offset: number;

  totalResults: number;

  role?: 'admin' | 'member';
}

export interface MemberUpdateParams {
  role: 'admin' | 'member';
}

export interface MemberListParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;

  /**
   * The offset into queried items to return
   */
  offset?: number;

  /**
   * Search string to filter organization members by
   */
  search?: string;
}

Members.Permissions = Permissions;

export declare namespace Members {
  export {
    type Member as Member,
    type MemberListResponse as MemberListResponse,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
  };

  export {
    Permissions as Permissions,
    type MemberPermission as MemberPermission,
    type PermissionListResponse as PermissionListResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionListParams as PermissionListParams,
  };
}
