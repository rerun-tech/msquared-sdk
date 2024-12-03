// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';

export class Permissions extends APIResource {}

export interface TeamPermission {
  id: string;

  permission: TeamPermission.Permission;

  projectId: string;
}

export namespace TeamPermission {
  export interface Permission {
    resource: 'worlds' | 'mml-objects';

    verb: 'read' | 'write' | 'admin';
  }
}

export declare namespace Permissions {
  export { type TeamPermission as TeamPermission };
}
