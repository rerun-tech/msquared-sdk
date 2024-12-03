// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class InviteOffers extends APIResource {
  /**
   * Accept an invite offer
   */
  create(
    organizationId: string,
    inviteId: string,
    body: InviteOfferCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.post(`/v1/identity/organizations/${organizationId}/invite-offers/${inviteId}`, {
      body,
      ...options,
    });
  }

  /**
   * Get an invite offer
   */
  retrieve(
    organizationId: string,
    inviteId: string,
    query: InviteOfferRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationInviteOffer> {
    return this._client.get(`/v1/identity/organizations/${organizationId}/invite-offers/${inviteId}`, {
      query,
      ...options,
    });
  }
}

export interface OrganizationInviteOffer {
  id: string;

  createdAt: string;

  createdBy: OrganizationInviteOffer.UnionMember0 | OrganizationInviteOffer.UnionMember1;

  email: string;

  organizationId: string;

  organizationName: string;

  role: 'admin' | 'member';
}

export namespace OrganizationInviteOffer {
  export interface UnionMember0 {
    type: 'user';

    userId: string;
  }

  export interface UnionMember1 {
    apiKeyId: string;

    type: 'apiKey';
  }
}

export type InviteOfferCreateResponse = unknown;

export interface InviteOfferCreateParams {
  token: string;
}

export interface InviteOfferRetrieveParams {
  /**
   * The token for the invite
   */
  token: string;
}

export declare namespace InviteOffers {
  export {
    type OrganizationInviteOffer as OrganizationInviteOffer,
    type InviteOfferCreateResponse as InviteOfferCreateResponse,
    type InviteOfferCreateParams as InviteOfferCreateParams,
    type InviteOfferRetrieveParams as InviteOfferRetrieveParams,
  };
}
