// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as InviteOffersAPI from './invite-offers';
import {
  InviteOfferCreateParams,
  InviteOfferCreateResponse,
  InviteOfferRetrieveParams,
  InviteOffers,
  OrganizationInviteOffer,
} from './invite-offers';

export class Invites extends APIResource {
  inviteOffers: InviteOffersAPI.InviteOffers = new InviteOffersAPI.InviteOffers(this._client);

  /**
   * Create a invite
   */
  create(
    organizationId: string,
    body: InviteCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InviteCreateResponse> {
    return this._client.post(`/v1/identity/organizations/${organizationId}/invites`, { body, ...options });
  }

  /**
   * List all invites within an organization
   */
  list(
    organizationId: string,
    query?: InviteListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InviteListResponse>;
  list(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<InviteListResponse>;
  list(
    organizationId: string,
    query: InviteListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InviteListResponse> {
    if (isRequestOptions(query)) {
      return this.list(organizationId, {}, query);
    }
    return this._client.get(`/v1/identity/organizations/${organizationId}/invites`, { query, ...options });
  }

  /**
   * Delete an invite
   */
  delete(organizationId: string, inviteId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/identity/organizations/${organizationId}/invites/${inviteId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface OrganizationInvite {
  id: string;

  createdAt: string;

  createdBy: OrganizationInvite.UnionMember0 | OrganizationInvite.UnionMember1;

  email: string;

  role: 'admin' | 'member';
}

export namespace OrganizationInvite {
  export interface UnionMember0 {
    type: 'user';

    userId: string;
  }

  export interface UnionMember1 {
    apiKeyId: string;

    type: 'apiKey';
  }
}

export interface InviteCreateResponse {
  invite: OrganizationInvite;

  inviteToken: string;
}

export interface InviteListResponse {
  limit: number;

  offset: number;

  organizationInvites: Array<OrganizationInvite>;

  totalResults: number;
}

export interface InviteCreateParams {
  email: string;

  role: 'admin' | 'member';
}

export interface InviteListParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;

  /**
   * The offset into queried items to return
   */
  offset?: number;
}

Invites.InviteOffers = InviteOffers;

export declare namespace Invites {
  export {
    type OrganizationInvite as OrganizationInvite,
    type InviteCreateResponse as InviteCreateResponse,
    type InviteListResponse as InviteListResponse,
    type InviteCreateParams as InviteCreateParams,
    type InviteListParams as InviteListParams,
  };

  export {
    InviteOffers as InviteOffers,
    type OrganizationInviteOffer as OrganizationInviteOffer,
    type InviteOfferCreateResponse as InviteOfferCreateResponse,
    type InviteOfferCreateParams as InviteOfferCreateParams,
    type InviteOfferRetrieveParams as InviteOfferRetrieveParams,
  };
}
