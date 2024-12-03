// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Members extends APIResource {
  /**
   * Update a team member
   */
  create(
    organizationId: string,
    teamId: string,
    memberId: string,
    body: MemberCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamMember> {
    return this._client.post(
      `/v1/identity/organizations/${organizationId}/teams/${teamId}/members/${memberId}`,
      { body, ...options },
    );
  }

  /**
   * List all members for a team
   */
  list(
    organizationId: string,
    teamId: string,
    query?: MemberListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberListResponse>;
  list(
    organizationId: string,
    teamId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberListResponse>;
  list(
    organizationId: string,
    teamId: string,
    query: MemberListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberListResponse> {
    if (isRequestOptions(query)) {
      return this.list(organizationId, teamId, {}, query);
    }
    return this._client.get(`/v1/identity/organizations/${organizationId}/teams/${teamId}/members`, {
      query,
      ...options,
    });
  }

  /**
   * Delete a team member
   */
  delete(
    organizationId: string,
    teamId: string,
    memberId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(
      `/v1/identity/organizations/${organizationId}/teams/${teamId}/members/${memberId}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }
}

export interface TeamMember {
  id: string;

  createdAt: string;

  role: 'admin' | 'member';

  userInfo: TeamMember.UserInfo;

  userId?: string;
}

export namespace TeamMember {
  export interface UserInfo {
    displayName?: string;

    email?: string;

    photoUrl?: string;
  }
}

export interface MemberListResponse {
  limit: number;

  offset: number;

  teamMembers: Array<TeamMember>;

  totalResults: number;

  teamRole?: 'admin' | 'member';
}

export interface MemberCreateParams {
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
}

export declare namespace Members {
  export {
    type TeamMember as TeamMember,
    type MemberListResponse as MemberListResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberListParams as MemberListParams,
  };
}
