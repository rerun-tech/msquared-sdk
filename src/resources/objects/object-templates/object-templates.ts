// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as VersionsAPI from './versions';
import { MmlObjectTemplateVersion, Versions } from './versions';

export class ObjectTemplates extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

export interface MmlObjectTemplate {
  id: string;

  createdAt: string;

  createdBy: MmlObjectTemplate.UnionMember0 | MmlObjectTemplate.UnionMember1;

  name: string;

  defaultTemplateVersionId?: string;

  description?: string;
}

export namespace MmlObjectTemplate {
  export interface UnionMember0 {
    type: 'user';

    userId: string;
  }

  export interface UnionMember1 {
    apiKeyId: string;

    type: 'apiKey';
  }
}

ObjectTemplates.Versions = Versions;

export declare namespace ObjectTemplates {
  export { type MmlObjectTemplate as MmlObjectTemplate };

  export { Versions as Versions, type MmlObjectTemplateVersion as MmlObjectTemplateVersion };
}
