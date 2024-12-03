// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Projects extends APIResource {
  /**
   * Edit a project
   */
  create(
    projectId: string,
    body: ProjectCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Project> {
    return this._client.post(`/v1/identity/projects/${projectId}`, { body, ...options });
  }
}

export interface ProjectCreateParams {
  name: string;
}

export declare namespace Projects {
  export { type ProjectCreateParams as ProjectCreateParams };
}
