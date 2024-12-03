// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ProjectsAPI from './projects';
import { Project, ProjectCreateParams, ProjectListParams, ProjectListResponse, Projects } from './projects';
import * as APIKeysAPI from './api-keys/api-keys';
import {
  APIKeyCreateParams,
  APIKeyCreateResponse,
  APIKeyListParams,
  APIKeyListResponse,
  APIKeyRetrieveResponse,
  APIKeyUpdateParams,
  APIKeyUpdateResponse,
  APIKeys,
} from './api-keys/api-keys';
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
import { Member, MemberListParams, MemberListResponse, MemberUpdateParams, Members } from './members/members';
import * as TeamsAPI from './teams/teams';
import {
  Team,
  TeamCreateParams,
  TeamListParams,
  TeamListResponse,
  TeamUpdateParams,
  Teams,
} from './teams/teams';

export class Organizations extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);

  /**
   * Create an organization
   */
  create(body: OrganizationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Organization> {
    return this._client.post('/v1/identity/organizations', { body, ...options });
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
   * Edit an organization
   */
  update(
    organizationId: string,
    body: OrganizationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Organization> {
    return this._client.post(`/v1/identity/organizations/${organizationId}`, { body, ...options });
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

  createdBy: Organization.UserID | Organization.APIKeyID;

  name: string;

  createdAt?: string;

  description?: string;
}

export namespace Organization {
  export interface UserID {
    type: 'user';

    userId: string;
  }

  export interface APIKeyID {
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

export interface OrganizationUpdateParams {
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

Organizations.APIKeys = APIKeys;
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
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyRetrieveResponse as APIKeyRetrieveResponse,
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyListParams as APIKeyListParams,
  };

  export {
    Projects as Projects,
    type Project as Project,
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

  export {
    Members as Members,
    type Member as Member,
    type MemberListResponse as MemberListResponse,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
  };

  export {
    Teams as Teams,
    type Team as Team,
    type TeamListResponse as TeamListResponse,
    type TeamCreateParams as TeamCreateParams,
    type TeamUpdateParams as TeamUpdateParams,
    type TeamListParams as TeamListParams,
  };
}
