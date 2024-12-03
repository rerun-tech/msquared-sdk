// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';

export class Quota extends APIResource {}

export interface MMLObjectInstanceQuota {
  current: number;

  limit: number;
}

export declare namespace Quota {
  export { type MMLObjectInstanceQuota as MMLObjectInstanceQuota };
}
