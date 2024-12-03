// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MembersAPI from './members';
import { Members, TeamMember } from './members';
import * as PermissionsAPI from './permissions';
import { Permissions, TeamPermission } from './permissions';

export class Teams extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);

  /**
   * Update a team
   */
  create(
    organizationId: string,
    teamId: string,
    body: TeamCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Team> {
    return this._client.post(`/v1/identity/organizations/${organizationId}/teams/${teamId}`, {
      body,
      ...options,
    });
  }

  /**
   * Get a team
   */
  retrieve(organizationId: string, teamId: string, options?: Core.RequestOptions): Core.APIPromise<Team> {
    return this._client.get(`/v1/identity/organizations/${organizationId}/teams/${teamId}`, options);
  }

  /**
   * List all teams within an organization
   */
  list(
    organizationId: string,
    query?: TeamListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamListResponse>;
  list(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<TeamListResponse>;
  list(
    organizationId: string,
    query: TeamListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamListResponse> {
    if (isRequestOptions(query)) {
      return this.list(organizationId, {}, query);
    }
    return this._client.get(`/v1/identity/organizations/${organizationId}/teams`, { query, ...options });
  }
}

export interface Team {
  id: string;

  name: string;

  description?: string;
}

export interface TeamListResponse {
  limit: number;

  offset: number;

  teams: Array<Team>;

  totalResults: number;
}

export interface TeamCreateParams {
  name: string;
}

export interface TeamListParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;

  /**
   * The offset into queried items to return
   */
  offset?: number;

  /**
   * Search string to filter teams by
   */
  search?: string;
}

Teams.Members = Members;
Teams.Permissions = Permissions;

export declare namespace Teams {
  export {
    type Team as Team,
    type TeamListResponse as TeamListResponse,
    type TeamCreateParams as TeamCreateParams,
    type TeamListParams as TeamListParams,
  };

  export { Members as Members, type TeamMember as TeamMember };

  export { Permissions as Permissions, type TeamPermission as TeamPermission };
}
