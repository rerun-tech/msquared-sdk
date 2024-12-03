// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as PermissionsAPI from './permissions';
import {
  PermissionCreateParams,
  PermissionCreateResponse,
  PermissionRetrieveParams,
  PermissionRetrieveResponse,
  Permissions,
} from './permissions';

export class APIKeys extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);

  /**
   * Create an API key
   */
  create(
    organizationId: string,
    body: APIKeyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIKeyCreateResponse> {
    return this._client.post(`/v1/identity/organizations/${organizationId}/api-keys`, { body, ...options });
  }

  /**
   * Get an API key
   */
  retrieve(
    organizationId: string,
    apiKeyId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIKeyRetrieveResponse> {
    return this._client.get(`/v1/identity/organizations/${organizationId}/api-keys/${apiKeyId}`, options);
  }

  /**
   * Update an API Key
   */
  update(
    organizationId: string,
    apiKeyId: string,
    body: APIKeyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIKeyUpdateResponse> {
    return this._client.post(`/v1/identity/organizations/${organizationId}/api-keys/${apiKeyId}`, {
      body,
      ...options,
    });
  }

  /**
   * List all API keys within an organization
   */
  list(
    organizationId: string,
    query?: APIKeyListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIKeyListResponse>;
  list(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<APIKeyListResponse>;
  list(
    organizationId: string,
    query: APIKeyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIKeyListResponse> {
    if (isRequestOptions(query)) {
      return this.list(organizationId, {}, query);
    }
    return this._client.get(`/v1/identity/organizations/${organizationId}/api-keys`, { query, ...options });
  }

  /**
   * Delete an API Key
   */
  delete(organizationId: string, apiKeyId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/identity/organizations/${organizationId}/api-keys/${apiKeyId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface APIKeyCreateResponse {
  apiKey: APIKeyCreateResponse.APIKey;

  apiKeyToken: string;
}

export namespace APIKeyCreateResponse {
  export interface APIKey {
    id: string;

    createdAt: string;

    name: string;

    createdBy?: APIKey.UserID | APIKey.APIKeyID;
  }

  export namespace APIKey {
    export interface UserID {
      type: 'user';

      userId: string;
    }

    export interface APIKeyID {
      apiKeyId: string;

      type: 'apiKey';
    }
  }
}

export interface APIKeyRetrieveResponse {
  id: string;

  createdAt: string;

  name: string;

  createdBy?: APIKeyRetrieveResponse.UserID | APIKeyRetrieveResponse.APIKeyID;
}

export namespace APIKeyRetrieveResponse {
  export interface UserID {
    type: 'user';

    userId: string;
  }

  export interface APIKeyID {
    apiKeyId: string;

    type: 'apiKey';
  }
}

export interface APIKeyUpdateResponse {
  id: string;

  createdAt: string;

  name: string;

  createdBy?: APIKeyUpdateResponse.UserID | APIKeyUpdateResponse.APIKeyID;
}

export namespace APIKeyUpdateResponse {
  export interface UserID {
    type: 'user';

    userId: string;
  }

  export interface APIKeyID {
    apiKeyId: string;

    type: 'apiKey';
  }
}

export interface APIKeyListResponse {
  apiKeys: Array<APIKeyListResponse.APIKey>;

  limit: number;

  offset: number;

  totalResults: number;
}

export namespace APIKeyListResponse {
  export interface APIKey {
    id: string;

    createdAt: string;

    name: string;

    createdBy?: APIKey.UserID | APIKey.APIKeyID;
  }

  export namespace APIKey {
    export interface UserID {
      type: 'user';

      userId: string;
    }

    export interface APIKeyID {
      apiKeyId: string;

      type: 'apiKey';
    }
  }
}

export interface APIKeyCreateParams {
  name: string;
}

export interface APIKeyUpdateParams {
  name: string;
}

export interface APIKeyListParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;

  /**
   * The offset into queried items to return
   */
  offset?: number;
}

APIKeys.Permissions = Permissions;

export declare namespace APIKeys {
  export {
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyRetrieveResponse as APIKeyRetrieveResponse,
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyListParams as APIKeyListParams,
  };

  export {
    Permissions as Permissions,
    type PermissionCreateResponse as PermissionCreateResponse,
    type PermissionRetrieveResponse as PermissionRetrieveResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionRetrieveParams as PermissionRetrieveParams,
  };
}
