// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class Subresources extends APIResource {}

export interface WorldQuota {
  current: number;

  limit: number;
}

export declare namespace Subresources {
  export { type WorldQuota as WorldQuota };
}
