// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as VersionsAPI from './versions';
import {
  VersionCreateParams,
  VersionListParams,
  VersionListResponse,
  VersionUpdateParams,
  Versions,
} from './versions';

export class Templates extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Create an MML Object Template
   */
  create(
    projectId: string,
    body: TemplateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MMLObjectTemplate> {
    return this._client.post(`/v1/mml-objects/${projectId}/object-templates/`, { body, ...options });
  }

  /**
   * Retrieve an MML Object Template
   */
  retrieve(
    projectId: string,
    templateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MMLObjectTemplate> {
    return this._client.get(`/v1/mml-objects/${projectId}/object-templates/${templateId}`, options);
  }

  /**
   * Edit an MML Object Template
   */
  update(
    projectId: string,
    templateId: string,
    body: TemplateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MMLObjectTemplate> {
    return this._client.post(`/v1/mml-objects/${projectId}/object-templates/${templateId}`, {
      body,
      ...options,
    });
  }

  /**
   * List MML Object Templates
   */
  list(
    projectId: string,
    query?: TemplateListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TemplateListResponse>;
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<TemplateListResponse>;
  list(
    projectId: string,
    query: TemplateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TemplateListResponse> {
    if (isRequestOptions(query)) {
      return this.list(projectId, {}, query);
    }
    return this._client.get(`/v1/mml-objects/${projectId}/object-templates/`, { query, ...options });
  }
}

export interface MMLObjectTemplate {
  id: string;

  createdAt: string;

  createdBy: MMLObjectTemplate.UnionMember0 | MMLObjectTemplate.UnionMember1;

  name: string;

  defaultTemplateVersionId?: string;

  description?: string;
}

export namespace MMLObjectTemplate {
  export interface UnionMember0 {
    type: 'user';

    userId: string;
  }

  export interface UnionMember1 {
    apiKeyId: string;

    type: 'apiKey';
  }
}

export interface MMLObjectTemplateVersion {
  id: string;

  createdAt: string;

  createdBy: MMLObjectTemplateVersion.UnionMember0 | MMLObjectTemplateVersion.UnionMember1;

  source: string;

  description?: string;

  parametersSchema?: Record<string, unknown>;
}

export namespace MMLObjectTemplateVersion {
  export interface UnionMember0 {
    type: 'user';

    userId: string;
  }

  export interface UnionMember1 {
    apiKeyId: string;

    type: 'apiKey';
  }
}

export interface TemplateListResponse {
  canWrite: boolean;

  limit: number;

  offset: number;

  templates: Array<MMLObjectTemplate>;

  totalResults: number;
}

export interface TemplateCreateParams {
  name: string;

  description?: string;
}

export interface TemplateUpdateParams {
  defaultTemplateVersionId?: string;

  description?: string;

  name?: string;
}

export interface TemplateListParams {
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

Templates.Versions = Versions;

export declare namespace Templates {
  export {
    type MMLObjectTemplate as MMLObjectTemplate,
    type MMLObjectTemplateVersion as MMLObjectTemplateVersion,
    type TemplateListResponse as TemplateListResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateListParams as TemplateListParams,
  };

  export {
    Versions as Versions,
    type VersionListResponse as VersionListResponse,
    type VersionCreateParams as VersionCreateParams,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionListParams as VersionListParams,
  };
}
