// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ProjectsAPI from './projects';
import { ProjectListParams, ProjectListResponse, ProjectRetrieveResponse, Projects } from './projects';
import * as OrganizationsAPI from './organizations/organizations';
import { Organizations } from './organizations/organizations';

export class Identity extends APIResource {
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

Identity.Organizations = Organizations;
Identity.Projects = Projects;

export declare namespace Identity {
  export { Organizations as Organizations };

  export {
    Projects as Projects,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectListParams as ProjectListParams,
  };
}
