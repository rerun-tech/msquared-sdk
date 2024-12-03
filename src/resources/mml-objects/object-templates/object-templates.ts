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
import * as ObjectTemplatesObjectTemplatesAPI from '../../objects/object-templates/object-templates';

export class ObjectTemplates extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Create an MML Object Template
   */
  create(
    projectId: string,
    body: ObjectTemplateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectTemplatesObjectTemplatesAPI.MMLObjectTemplate> {
    return this._client.post(`/v1/mml-objects/${projectId}/object-templates/`, { body, ...options });
  }

  /**
   * Retrieve an MML Object Template
   */
  retrieve(
    projectId: string,
    templateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectTemplatesObjectTemplatesAPI.MMLObjectTemplate> {
    return this._client.get(`/v1/mml-objects/${projectId}/object-templates/${templateId}`, options);
  }

  /**
   * Edit an MML Object Template
   */
  update(
    projectId: string,
    templateId: string,
    body: ObjectTemplateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectTemplatesObjectTemplatesAPI.MMLObjectTemplate> {
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
    query?: ObjectTemplateListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectTemplateListResponse>;
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<ObjectTemplateListResponse>;
  list(
    projectId: string,
    query: ObjectTemplateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectTemplateListResponse> {
    if (isRequestOptions(query)) {
      return this.list(projectId, {}, query);
    }
    return this._client.get(`/v1/mml-objects/${projectId}/object-templates/`, { query, ...options });
  }
}

export interface ObjectTemplateListResponse {
  canWrite: boolean;

  limit: number;

  offset: number;

  templates: Array<ObjectTemplatesObjectTemplatesAPI.MMLObjectTemplate>;

  totalResults: number;
}

export interface ObjectTemplateCreateParams {
  name: string;

  description?: string;
}

export interface ObjectTemplateUpdateParams {
  defaultTemplateVersionId?: string;

  description?: string;

  name?: string;
}

export interface ObjectTemplateListParams {
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

ObjectTemplates.Versions = Versions;

export declare namespace ObjectTemplates {
  export {
    type ObjectTemplateListResponse as ObjectTemplateListResponse,
    type ObjectTemplateCreateParams as ObjectTemplateCreateParams,
    type ObjectTemplateUpdateParams as ObjectTemplateUpdateParams,
    type ObjectTemplateListParams as ObjectTemplateListParams,
  };

  export {
    Versions as Versions,
    type VersionListResponse as VersionListResponse,
    type VersionCreateParams as VersionCreateParams,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionListParams as VersionListParams,
  };
}
