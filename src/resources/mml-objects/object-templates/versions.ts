// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as ObjectTemplatesVersionsAPI from '../../objects/object-templates/versions';

export class Versions extends APIResource {
  /**
   * Create an MML Object Template Version
   */
  create(
    projectId: string,
    templateId: string,
    body: VersionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectTemplatesVersionsAPI.MMLObjectTemplateVersion> {
    return this._client.post(`/v1/mml-objects/${projectId}/object-templates/${templateId}/versions/`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve an MML Object Template Version
   */
  retrieve(
    projectId: string,
    templateId: string,
    versionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectTemplatesVersionsAPI.MMLObjectTemplateVersion> {
    return this._client.get(
      `/v1/mml-objects/${projectId}/object-templates/${templateId}/versions/${versionId}/`,
      options,
    );
  }

  /**
   * Edit an MML Object Template Version
   */
  update(
    projectId: string,
    templateId: string,
    versionId: string,
    body: VersionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectTemplatesVersionsAPI.MMLObjectTemplateVersion> {
    return this._client.post(
      `/v1/mml-objects/${projectId}/object-templates/${templateId}/versions/${versionId}/`,
      { body, ...options },
    );
  }

  /**
   * List MML Object Template Versions
   */
  list(
    projectId: string,
    templateId: string,
    query?: VersionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionListResponse>;
  list(
    projectId: string,
    templateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionListResponse>;
  list(
    projectId: string,
    templateId: string,
    query: VersionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionListResponse> {
    if (isRequestOptions(query)) {
      return this.list(projectId, templateId, {}, query);
    }
    return this._client.get(`/v1/mml-objects/${projectId}/object-templates/${templateId}/versions/`, {
      query,
      ...options,
    });
  }
}

export interface VersionListResponse {
  canWrite: boolean;

  limit: number;

  offset: number;

  templateVersions: Array<ObjectTemplatesVersionsAPI.MMLObjectTemplateVersion>;

  totalResults: number;
}

export interface VersionCreateParams {
  id: string;

  source: string;

  description?: string;

  parametersSchema?: Record<string, unknown>;

  setAsDefault?: boolean;
}

export interface VersionUpdateParams {
  description?: string;
}

export interface VersionListParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;

  /**
   * The offset into queried items to return
   */
  offset?: number;

  /**
   * Search query
   */
  search?: string;
}

export declare namespace Versions {
  export {
    type VersionListResponse as VersionListResponse,
    type VersionCreateParams as VersionCreateParams,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionListParams as VersionListParams,
  };
}
