// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MembersAPI from './members';
import {
  MemberCreateParams,
  MemberListParams,
  MemberListResponse,
  MemberUpdateParams,
  Members,
  TeamMember,
} from './members';
import * as PermissionsAPI from './permissions';
import {
  PermissionCreateParams,
  PermissionListParams,
  PermissionListResponse,
  Permissions,
  TeamPermission,
} from './permissions';
import * as ProfileAPI from './profile';
import { Profile, ProfileResource } from './profile';
import * as ProjectsAPI from './projects';
import {
  ProjectCreateParams,
  ProjectListParams,
  ProjectListResponse,
  ProjectRetrieveResponse,
  Projects,
} from './projects';

export class Teams extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);
  profile: ProfileAPI.ProfileResource = new ProfileAPI.ProfileResource(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);

  /**
   * Create a team
   */
  create(
    organizationId: string,
    body: TeamCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Team> {
    return this._client.post(`/v1/identity/organizations/${organizationId}/teams`, { body, ...options });
  }

  /**
   * Get a team
   */
  retrieve(organizationId: string, teamId: string, options?: Core.RequestOptions): Core.APIPromise<Team> {
    return this._client.get(`/v1/identity/organizations/${organizationId}/teams/${teamId}`, options);
  }

  /**
   * Update a team
   */
  update(
    organizationId: string,
    teamId: string,
    body: TeamUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Team> {
    return this._client.post(`/v1/identity/organizations/${organizationId}/teams/${teamId}`, {
      body,
      ...options,
    });
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

export interface TeamUpdateParams {
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
Teams.ProfileResource = ProfileResource;
Teams.Projects = Projects;

export declare namespace Teams {
  export {
    type Team as Team,
    type TeamListResponse as TeamListResponse,
    type TeamCreateParams as TeamCreateParams,
    type TeamUpdateParams as TeamUpdateParams,
    type TeamListParams as TeamListParams,
  };

  export {
    Members as Members,
    type TeamMember as TeamMember,
    type MemberListResponse as MemberListResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
  };

  export {
    Permissions as Permissions,
    type TeamPermission as TeamPermission,
    type PermissionListResponse as PermissionListResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionListParams as PermissionListParams,
  };

  export { ProfileResource as ProfileResource, type Profile as Profile };

  export {
    Projects as Projects,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
  };
}
