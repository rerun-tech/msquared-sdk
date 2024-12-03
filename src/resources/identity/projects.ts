// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as OrganizationsAPI from '../organizations/organizations';

export class Projects extends APIResource {
  /**
   * Info for a specific project
   */
  retrieve(projectId: string, options?: Core.RequestOptions): Core.APIPromise<ProjectRetrieveResponse> {
    return this._client.get(`/v1/identity/projects/${projectId}`, options);
  }

  /**
   * List all projects that a user has access to
   */
  list(query?: ProjectListParams, options?: Core.RequestOptions): Core.APIPromise<ProjectListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ProjectListResponse>;
  list(
    query: ProjectListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/identity/projects', { query, ...options });
  }
}

export interface ProjectRetrieveResponse extends Shared.Project {
  organization: OrganizationsAPI.Organization;

  organizationMembership?: ProjectRetrieveResponse.OrganizationMembership;
}

export namespace ProjectRetrieveResponse {
  export interface OrganizationMembership {
    role: 'admin' | 'member';
  }
}

export interface ProjectListResponse {
  limit: number;

  offset: number;

  projects: Array<Shared.Project>;

  totalResults: number;
}

export interface ProjectListParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;

  /**
   * The offset into queried items to return
   */
  offset?: number;
}

export declare namespace Projects {
  export {
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectListParams as ProjectListParams,
  };
}
