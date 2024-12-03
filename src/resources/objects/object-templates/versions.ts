// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';

export class Versions extends APIResource {}

export interface MmlObjectTemplateVersion {
  id: string;

  createdAt: string;

  createdBy: MmlObjectTemplateVersion.UnionMember0 | MmlObjectTemplateVersion.UnionMember1;

  source: string;

  description?: string;

  parametersSchema?: Record<string, unknown>;
}

export namespace MmlObjectTemplateVersion {
  export interface UnionMember0 {
    type: 'user';

    userId: string;
  }

  export interface UnionMember1 {
    apiKeyId: string;

    type: 'apiKey';
  }
}

export declare namespace Versions {
  export { type MmlObjectTemplateVersion as MmlObjectTemplateVersion };
}
