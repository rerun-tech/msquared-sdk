// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class ProfileResource extends APIResource {
  /**
   * Get own profile
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Profile> {
    return this._client.get('/v1/identity/profile', options);
  }
}

export interface Profile {
  id: string;

  createdAt: string;

  name: string;
}

export declare namespace ProfileResource {
  export { type Profile as Profile };
}
