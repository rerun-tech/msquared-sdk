// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Projects extends APIResource {
  /**
   * Create a project
   */
  create(
    organizationId: string,
    body: ProjectCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Project> {
    return this._client.post(`/v1/identity/organizations/${organizationId}/projects`, { body, ...options });
  }

  /**
   * List all projects within an organization
   */
  list(
    organizationId: string,
    query?: ProjectListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectListResponse>;
  list(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<ProjectListResponse>;
  list(
    organizationId: string,
    query: ProjectListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectListResponse> {
    if (isRequestOptions(query)) {
      return this.list(organizationId, {}, query);
    }
    return this._client.get(`/v1/identity/organizations/${organizationId}/projects`, { query, ...options });
  }
}

export interface Project {
  id: string;

  createdAt: string;

  createdBy: Project.UnionMember0 | Project.UnionMember1;

  name: string;

  organizationId: string;

  description?: string;
}

export namespace Project {
  export interface UnionMember0 {
    type: 'user';

    userId: string;
  }

  export interface UnionMember1 {
    apiKeyId: string;

    type: 'apiKey';
  }
}

export interface ProjectListResponse {
  limit: number;

  offset: number;

  projects: Array<Project>;

  totalResults: number;
}

export interface ProjectCreateParams {
  name: string;
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

  /**
   * Search string to filter projects by
   */
  search?: string;
}

export declare namespace Projects {
  export {
    type Project as Project,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
  };
}
