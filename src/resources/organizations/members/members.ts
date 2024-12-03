// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
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
   * Update a member
   */
  create(
    organizationId: string,
    memberId: string,
    body: MemberCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Member> {
    return this._client.post(`/v1/identity/organizations/${organizationId}/members/${memberId}`, {
      body,
      ...options,
    });
  }

  /**
   * Get a member
   */
  retrieve(organizationId: string, memberId: string, options?: Core.RequestOptions): Core.APIPromise<Member> {
    return this._client.get(`/v1/identity/organizations/${organizationId}/members/${memberId}`, options);
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

export interface MemberCreateParams {
  role: 'admin' | 'member';
}

Members.Permissions = Permissions;

export declare namespace Members {
  export { type Member as Member, type MemberCreateParams as MemberCreateParams };

  export {
    Permissions as Permissions,
    type MemberPermission as MemberPermission,
    type PermissionListResponse as PermissionListResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionListParams as PermissionListParams,
  };
}
