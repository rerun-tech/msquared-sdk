// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as UsageAPI from './usage';
import { Usage, UsageRetrieveParams, UsageRetrieveResponse } from './usage';

export class WebWorldInstances extends APIResource {
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);

  /**
   * Create a Web World Instance
   */
  create(
    projectId: string,
    body: WebWorldInstanceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.World> {
    return this._client.post(`/v1/worlds/${projectId}/web-world-instances/`, { body, ...options });
  }

  /**
   * Retrieve a Web World Instance
   */
  retrieve(projectId: string, worldId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.World> {
    return this._client.get(`/v1/worlds/${projectId}/web-world-instances/${worldId}`, options);
  }

  /**
   * Edit a Web World Instance
   */
  update(
    projectId: string,
    worldId: string,
    body: WebWorldInstanceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.World> {
    return this._client.post(`/v1/worlds/${projectId}/web-world-instances/${worldId}`, { body, ...options });
  }

  /**
   * List Web World Instances
   */
  list(
    projectId: string,
    query?: WebWorldInstanceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebWorldInstanceListResponse>;
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<WebWorldInstanceListResponse>;
  list(
    projectId: string,
    query: WebWorldInstanceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebWorldInstanceListResponse> {
    if (isRequestOptions(query)) {
      return this.list(projectId, {}, query);
    }
    return this._client.get(`/v1/worlds/${projectId}/web-world-instances/`, { query, ...options });
  }

  /**
   * Delete a Web World Instance
   */
  delete(projectId: string, worldId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/worlds/${projectId}/web-world-instances/${worldId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface WebWorldInstanceListResponse {
  canWrite: boolean;

  limit: number;

  offset: number;

  totalResults: number;

  worlds: Array<Shared.World>;
}

export interface WebWorldInstanceCreateParams {
  name: string;

  id?: string;

  authConfiguration?: WebWorldInstanceCreateParams.AuthConfiguration;

  avatarConfiguration?: WebWorldInstanceCreateParams.AvatarConfiguration;

  chatConfiguration?: WebWorldInstanceCreateParams.ChatConfiguration;

  description?: string;

  enableTweakPane?: boolean;

  environmentConfiguration?: WebWorldInstanceCreateParams.EnvironmentConfiguration;

  generalConfiguration?: WebWorldInstanceCreateParams.GeneralConfiguration;

  mmlDocumentsConfiguration?: WebWorldInstanceCreateParams.MMLDocumentsConfiguration;
}

export namespace WebWorldInstanceCreateParams {
  export interface AuthConfiguration {
    allowAnonymous: boolean;

    authProviders?: AuthConfiguration.AuthProviders;

    password?: string;
  }

  export namespace AuthConfiguration {
    export interface AuthProviders {
      discord?: AuthProviders.Discord;

      google?: AuthProviders.Google;

      webhook?: AuthProviders.Webhook;
    }

    export namespace AuthProviders {
      export interface Discord {
        allowedUsers?: Array<string>;
      }

      export interface Google {
        allowedOrganizations?: Array<string>;

        allowedUsers?: Array<string>;
      }

      export interface Webhook {
        webhookUrl: string;
      }
    }
  }

  export interface AvatarConfiguration {
    allowCustomAvatars?: boolean;

    availableAvatars?: Array<
      AvatarConfiguration.UnionMember0 | AvatarConfiguration.UnionMember1 | AvatarConfiguration.UnionMember2
    >;

    customAvatarWebhookUrl?: string;
  }

  export namespace AvatarConfiguration {
    export interface UnionMember0 {
      meshFileUrl: string;

      isDefaultAvatar?: boolean;

      mmlCharacterString?: null;

      mmlCharacterUrl?: null;

      name?: string;

      thumbnailUrl?: string;
    }

    export interface UnionMember1 {
      mmlCharacterString: string;

      isDefaultAvatar?: boolean;

      meshFileUrl?: null;

      mmlCharacterUrl?: null;

      name?: string;

      thumbnailUrl?: string;
    }

    export interface UnionMember2 {
      mmlCharacterUrl: string;

      isDefaultAvatar?: boolean;

      meshFileUrl?: null;

      mmlCharacterString?: null;

      name?: string;

      thumbnailUrl?: string;
    }
  }

  export interface ChatConfiguration {
    enabled: boolean;
  }

  export interface EnvironmentConfiguration {
    ambientLight?: EnvironmentConfiguration.AmbientLight;

    envMap?: EnvironmentConfiguration.EnvMap;

    groundPlane?: boolean;

    postProcessing?: EnvironmentConfiguration.PostProcessing;

    skybox?: EnvironmentConfiguration.Skybox;

    sun?: EnvironmentConfiguration.Sun;
  }

  export namespace EnvironmentConfiguration {
    export interface AmbientLight {
      intensity?: number;
    }

    export interface EnvMap {
      intensity?: number;
    }

    export interface PostProcessing {
      bloomIntensity?: number;
    }

    export interface Skybox {
      azimuthalAngle?: number;

      blurriness?: number;

      intensity?: number;

      polarAngle?: number;
    }

    export interface Sun {
      azimuthalAngle?: number;

      intensity?: number;

      polarAngle?: number;
    }
  }

  export interface GeneralConfiguration {
    maxUserConnections?: number;
  }

  export interface MMLDocumentsConfiguration {
    mmlDocuments: Record<string, MMLDocumentsConfiguration.MMLDocuments>;
  }

  export namespace MMLDocumentsConfiguration {
    export interface MMLDocuments {
      url: string;

      position?: MMLDocuments.Position;

      rotation?: MMLDocuments.Rotation;

      scale?: MMLDocuments.Scale;
    }

    export namespace MMLDocuments {
      export interface Position {
        x: number;

        y: number;

        z: number;
      }

      export interface Rotation {
        x: number;

        y: number;

        z: number;
      }

      export interface Scale {
        x: number;

        y: number;

        z: number;
      }
    }
  }
}

export interface WebWorldInstanceUpdateParams {
  authConfiguration?: WebWorldInstanceUpdateParams.AuthConfiguration;

  avatarConfiguration?: WebWorldInstanceUpdateParams.AvatarConfiguration;

  chatConfiguration?: WebWorldInstanceUpdateParams.ChatConfiguration;

  description?: string;

  enableTweakPane?: boolean;

  environmentConfiguration?: WebWorldInstanceUpdateParams.EnvironmentConfiguration;

  generalConfiguration?: WebWorldInstanceUpdateParams.GeneralConfiguration;

  mmlDocumentsConfiguration?: WebWorldInstanceUpdateParams.MMLDocumentsConfiguration;

  name?: string;
}

export namespace WebWorldInstanceUpdateParams {
  export interface AuthConfiguration {
    allowAnonymous: boolean;

    authProviders?: AuthConfiguration.AuthProviders;

    password?: string;
  }

  export namespace AuthConfiguration {
    export interface AuthProviders {
      discord?: AuthProviders.Discord;

      google?: AuthProviders.Google;

      webhook?: AuthProviders.Webhook;
    }

    export namespace AuthProviders {
      export interface Discord {
        allowedUsers?: Array<string>;
      }

      export interface Google {
        allowedOrganizations?: Array<string>;

        allowedUsers?: Array<string>;
      }

      export interface Webhook {
        webhookUrl: string;
      }
    }
  }

  export interface AvatarConfiguration {
    allowCustomAvatars?: boolean;

    availableAvatars?: Array<
      AvatarConfiguration.UnionMember0 | AvatarConfiguration.UnionMember1 | AvatarConfiguration.UnionMember2
    >;

    customAvatarWebhookUrl?: string;
  }

  export namespace AvatarConfiguration {
    export interface UnionMember0 {
      meshFileUrl: string;

      isDefaultAvatar?: boolean;

      mmlCharacterString?: null;

      mmlCharacterUrl?: null;

      name?: string;

      thumbnailUrl?: string;
    }

    export interface UnionMember1 {
      mmlCharacterString: string;

      isDefaultAvatar?: boolean;

      meshFileUrl?: null;

      mmlCharacterUrl?: null;

      name?: string;

      thumbnailUrl?: string;
    }

    export interface UnionMember2 {
      mmlCharacterUrl: string;

      isDefaultAvatar?: boolean;

      meshFileUrl?: null;

      mmlCharacterString?: null;

      name?: string;

      thumbnailUrl?: string;
    }
  }

  export interface ChatConfiguration {
    enabled: boolean;
  }

  export interface EnvironmentConfiguration {
    ambientLight?: EnvironmentConfiguration.AmbientLight;

    envMap?: EnvironmentConfiguration.EnvMap;

    groundPlane?: boolean;

    postProcessing?: EnvironmentConfiguration.PostProcessing;

    skybox?: EnvironmentConfiguration.Skybox;

    sun?: EnvironmentConfiguration.Sun;
  }

  export namespace EnvironmentConfiguration {
    export interface AmbientLight {
      intensity?: number;
    }

    export interface EnvMap {
      intensity?: number;
    }

    export interface PostProcessing {
      bloomIntensity?: number;
    }

    export interface Skybox {
      azimuthalAngle?: number;

      blurriness?: number;

      intensity?: number;

      polarAngle?: number;
    }

    export interface Sun {
      azimuthalAngle?: number;

      intensity?: number;

      polarAngle?: number;
    }
  }

  export interface GeneralConfiguration {
    maxUserConnections?: number;
  }

  export interface MMLDocumentsConfiguration {
    mmlDocuments: Record<string, MMLDocumentsConfiguration.MMLDocuments>;
  }

  export namespace MMLDocumentsConfiguration {
    export interface MMLDocuments {
      url: string;

      position?: MMLDocuments.Position;

      rotation?: MMLDocuments.Rotation;

      scale?: MMLDocuments.Scale;
    }

    export namespace MMLDocuments {
      export interface Position {
        x: number;

        y: number;

        z: number;
      }

      export interface Rotation {
        x: number;

        y: number;

        z: number;
      }

      export interface Scale {
        x: number;

        y: number;

        z: number;
      }
    }
  }
}

export interface WebWorldInstanceListParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;

  /**
   * The offset into queried items to return
   */
  offset?: number;

  /**
   * Search query
   */
  search?: string;
}

WebWorldInstances.Usage = Usage;

export declare namespace WebWorldInstances {
  export {
    type WebWorldInstanceListResponse as WebWorldInstanceListResponse,
    type WebWorldInstanceCreateParams as WebWorldInstanceCreateParams,
    type WebWorldInstanceUpdateParams as WebWorldInstanceUpdateParams,
    type WebWorldInstanceListParams as WebWorldInstanceListParams,
  };

  export {
    Usage as Usage,
    type UsageRetrieveResponse as UsageRetrieveResponse,
    type UsageRetrieveParams as UsageRetrieveParams,
  };
}
