// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as WorldsAPI from '../worlds';
import * as UsageAPI from './usage';
import { Usage, UsageRetrieveParams, UsageRetrieveResponse } from './usage';

export class Instances extends APIResource {
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);

  /**
   * Create a Web World Instance
   */
  create(
    projectId: string,
    body: InstanceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorldsAPI.World> {
    return this._client.post(`/v1/worlds/${projectId}/web-world-instances/`, { body, ...options });
  }

  /**
   * Retrieve a Web World Instance
   */
  retrieve(
    projectId: string,
    worldId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorldsAPI.World> {
    return this._client.get(`/v1/worlds/${projectId}/web-world-instances/${worldId}`, options);
  }

  /**
   * Edit a Web World Instance
   */
  update(
    projectId: string,
    worldId: string,
    body: InstanceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorldsAPI.World> {
    return this._client.post(`/v1/worlds/${projectId}/web-world-instances/${worldId}`, { body, ...options });
  }

  /**
   * List Web World Instances
   */
  list(
    projectId: string,
    query?: InstanceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceListResponse>;
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<InstanceListResponse>;
  list(
    projectId: string,
    query: InstanceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceListResponse> {
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

export interface InstanceListResponse {
  canWrite: boolean;

  limit: number;

  offset: number;

  totalResults: number;

  worlds: Array<WorldsAPI.World>;
}

export interface InstanceCreateParams {
  name: string;

  id?: string;

  authConfiguration?: InstanceCreateParams.AuthConfiguration;

  avatarConfiguration?: InstanceCreateParams.AvatarConfiguration;

  chatConfiguration?: InstanceCreateParams.ChatConfiguration;

  description?: string;

  enableTweakPane?: boolean;

  environmentConfiguration?: InstanceCreateParams.EnvironmentConfiguration;

  generalConfiguration?: InstanceCreateParams.GeneralConfiguration;

  mmlDocumentsConfiguration?: InstanceCreateParams.MMLDocumentsConfiguration;
}

export namespace InstanceCreateParams {
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

export interface InstanceUpdateParams {
  authConfiguration?: InstanceUpdateParams.AuthConfiguration;

  avatarConfiguration?: InstanceUpdateParams.AvatarConfiguration;

  chatConfiguration?: InstanceUpdateParams.ChatConfiguration;

  description?: string;

  enableTweakPane?: boolean;

  environmentConfiguration?: InstanceUpdateParams.EnvironmentConfiguration;

  generalConfiguration?: InstanceUpdateParams.GeneralConfiguration;

  mmlDocumentsConfiguration?: InstanceUpdateParams.MMLDocumentsConfiguration;

  name?: string;
}

export namespace InstanceUpdateParams {
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

export interface InstanceListParams {
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

Instances.Usage = Usage;

export declare namespace Instances {
  export {
    type InstanceListResponse as InstanceListResponse,
    type InstanceCreateParams as InstanceCreateParams,
    type InstanceUpdateParams as InstanceUpdateParams,
    type InstanceListParams as InstanceListParams,
  };

  export {
    Usage as Usage,
    type UsageRetrieveResponse as UsageRetrieveResponse,
    type UsageRetrieveParams as UsageRetrieveParams,
  };
}
