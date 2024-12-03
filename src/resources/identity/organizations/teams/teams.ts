// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as MembersAPI from './members';
import { MemberCreateParams, MemberListParams, MemberListResponse, Members } from './members';
import * as PermissionsAPI from './permissions';
import {
  PermissionCreateParams,
  PermissionListParams,
  PermissionListResponse,
  Permissions,
} from './permissions';

export class Teams extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);

  /**
   * Delete a team
   */
  delete(organizationId: string, teamId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/identity/organizations/${organizationId}/teams/${teamId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

Teams.Members = Members;
Teams.Permissions = Permissions;

export declare namespace Teams {
  export {
    Members as Members,
    type MemberListResponse as MemberListResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberListParams as MemberListParams,
  };

  export {
    Permissions as Permissions,
    type PermissionListResponse as PermissionListResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionListParams as PermissionListParams,
  };
}
