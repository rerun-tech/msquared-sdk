// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';

export class Versions extends APIResource {}

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

export declare namespace Versions {
  export { type MMLObjectTemplateVersion as MMLObjectTemplateVersion };
}
