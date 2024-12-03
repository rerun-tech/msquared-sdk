// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as VersionsAPI from './versions';
import { MMLObjectTemplateVersion, Versions } from './versions';

export class ObjectTemplates extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
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

ObjectTemplates.Versions = Versions;

export declare namespace ObjectTemplates {
  export { type MMLObjectTemplate as MMLObjectTemplate };

  export { Versions as Versions, type MMLObjectTemplateVersion as MMLObjectTemplateVersion };
}
