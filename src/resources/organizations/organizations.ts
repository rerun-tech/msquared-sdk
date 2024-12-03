// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ProjectsAPI from './projects';
import { ProjectCreateParams, ProjectListParams, ProjectListResponse, Projects } from './projects';
import * as InvitesAPI from './invites/invites';
import {
  InviteCreateParams,
  InviteCreateResponse,
  InviteListParams,
  InviteListResponse,
  Invites,
  OrganizationInvite,
} from './invites/invites';
import * as MembersAPI from './members/members';
import { Member, MemberCreateParams, Members } from './members/members';
import * as TeamsAPI from './teams/teams';
import { Team, TeamCreateParams, TeamListParams, TeamListResponse, Teams } from './teams/teams';

export class Organizations extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);

  /**
   * Edit an organization
   */
  create(
    organizationId: string,
    body: OrganizationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Organization> {
    return this._client.post(`/v1/identity/organizations/${organizationId}`, { body, ...options });
  }

  /**
   * Info for a specific organization
   */
  retrieve(
    organizationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationRetrieveResponse> {
    return this._client.get(`/v1/identity/organizations/${organizationId}`, options);
  }

  /**
   * List all organizations
   */
  list(
    query?: OrganizationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<OrganizationListResponse>;
  list(
    query: OrganizationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/identity/organizations', { query, ...options });
  }
}

export interface Organization {
  id: string;

  createdBy: Organization.UnionMember0 | Organization.UnionMember1;

  name: string;

  createdAt?: string;

  description?: string;
}

export namespace Organization {
  export interface UnionMember0 {
    type: 'user';

    userId: string;
  }

  export interface UnionMember1 {
    apiKeyId: string;

    type: 'apiKey';
  }
}

export interface OrganizationRetrieveResponse {
  organization: Organization;

  organizationMembership?: OrganizationRetrieveResponse.OrganizationMembership;
}

export namespace OrganizationRetrieveResponse {
  export interface OrganizationMembership {
    role: 'admin' | 'member';
  }
}

export interface OrganizationListResponse {
  limit: number;

  offset: number;

  organizations: Array<Organization>;

  totalResults: number;
}

export interface OrganizationCreateParams {
  name: string;
}

export interface OrganizationListParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;

  /**
   * The offset into queried items to return
   */
  offset?: number;
}

Organizations.Projects = Projects;
Organizations.Invites = Invites;
Organizations.Members = Members;
Organizations.Teams = Teams;

export declare namespace Organizations {
  export {
    type Organization as Organization,
    type OrganizationRetrieveResponse as OrganizationRetrieveResponse,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationListParams as OrganizationListParams,
  };

  export {
    Projects as Projects,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
  };

  export {
    Invites as Invites,
    type OrganizationInvite as OrganizationInvite,
    type InviteCreateResponse as InviteCreateResponse,
    type InviteListResponse as InviteListResponse,
    type InviteCreateParams as InviteCreateParams,
    type InviteListParams as InviteListParams,
  };

  export { Members as Members, type Member as Member, type MemberCreateParams as MemberCreateParams };

  export {
    Teams as Teams,
    type Team as Team,
    type TeamListResponse as TeamListResponse,
    type TeamCreateParams as TeamCreateParams,
    type TeamListParams as TeamListParams,
  };
}
